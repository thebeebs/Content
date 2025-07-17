#!/bin/bash

# Replace with your S3 bucket name
S3_BUCKET="your-s3-bucket-name"
AWS_REGION="us-east-1" # Change to your preferred region

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "AWS CLI is not installed. Please install it first."
    exit 1
fi

# Create S3 bucket if it doesn't exist
echo "Creating S3 bucket if it doesn't exist..."
aws s3api create-bucket --bucket $S3_BUCKET --region $AWS_REGION --create-bucket-configuration LocationConstraint=$AWS_REGION || true

# Enable website hosting
echo "Enabling website hosting..."
aws s3 website s3://$S3_BUCKET/ --index-document index.html --error-document index.html

# Set bucket policy for public access
echo "Setting bucket policy for public access..."
cat > /tmp/bucket-policy.json << EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$S3_BUCKET/*"
        }
    ]
}
EOF

aws s3api put-bucket-policy --bucket $S3_BUCKET --policy file:///tmp/bucket-policy.json

# Run the fix_markdown.py script to standardize markdown files
echo "Standardizing markdown files..."
python3 fix_markdown.py

# Run the extract_metadata.py script to generate JSON files
echo "Extracting metadata from markdown files..."
python3 extract_metadata.py

# Sync the site directory to S3
echo "Deploying to S3 bucket: $S3_BUCKET"
aws s3 sync site/ s3://$S3_BUCKET/ --acl public-read

# Sync the markdown files to S3 (needed for blog post content)
echo "Uploading markdown files to S3"
find . -name "*.md" -exec aws s3 cp {} s3://$S3_BUCKET/{} --acl public-read \;

echo "Deployment complete!"
echo "Your site should be available at: http://$S3_BUCKET.s3-website-$AWS_REGION.amazonaws.com"