#!/bin/bash

# Print colorful messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Setting up Modern Blog ===${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}Node.js not found. Installing Node.js...${NC}"
    brew install node
fi

# Check if live-server is installed
if ! command -v live-server &> /dev/null; then
    echo -e "${YELLOW}live-server not found. Installing live-server...${NC}"
    npm install -g live-server
fi

# Create necessary directories
echo -e "${GREEN}Creating necessary directories...${NC}"
mkdir -p site/css site/js

# Fix markdown files
echo -e "${GREEN}Standardizing markdown files...${NC}"
python3 fix_markdown.py

# Extract metadata
echo -e "${GREEN}Extracting metadata from markdown files...${NC}"
python3 extract_metadata.py

# Create symbolic links for markdown files
echo -e "${GREEN}Creating symbolic links for markdown files...${NC}"
python3 create_symlinks.py

# Start the live-server
echo -e "${GREEN}Starting live-server on http://localhost:8080${NC}"
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
cd site
live-server --port=8080