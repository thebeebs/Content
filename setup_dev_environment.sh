#!/bin/bash

# Run the fix_markdown.py script to standardize markdown files
echo "Standardizing markdown files..."
python3 fix_markdown.py

# Run the extract_metadata.py script to generate JSON files
echo "Extracting metadata from markdown files..."
python3 extract_metadata.py

# Create symbolic links for markdown files in the site directory
echo "Creating symbolic links for markdown files..."
cd site
for md_file in ../*.md; do
  ln -sf "$md_file" "$(basename "$md_file")" 2>/dev/null
done
cd ..

# Start the live-server
echo "Starting live-server on http://localhost:8080"
echo "Press Ctrl+C to stop the server"
cd site
live-server --port=8080