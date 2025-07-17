#!/bin/bash

# Replace with your S3 bucket name
S3_BUCKET="your-s3-bucket-name"

# Sync the site directory to S3
echo "Deploying to S3 bucket: $S3_BUCKET"
aws s3 sync site/ s3://$S3_BUCKET/ --acl public-read

# Sync the markdown files to S3 (needed for blog post content)
echo "Uploading markdown files to S3"
find . -name "*.md" -exec aws s3 cp {} s3://$S3_BUCKET/{} --acl public-read \;

echo "Deployment complete!"
echo "Your site should be available at: http://$S3_BUCKET.s3-website-YOUR-REGION.amazonaws.com"
echo "Don't forget to enable website hosting in the S3 bucket settings!"