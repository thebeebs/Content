#!/usr/bin/env python3
import os
import re
import yaml
import json
from datetime import datetime
from collections import defaultdict

def extract_metadata(content, filename):
    """Extract metadata from markdown file"""
    # Check if file has YAML frontmatter
    yaml_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if not yaml_match:
        return None
    
    # Extract and parse YAML
    yaml_content = yaml_match.group(1)
    try:
        frontmatter = yaml.safe_load(yaml_content)
    except yaml.YAMLError:
        print(f"Error parsing YAML in {filename}")
        return None
    
    # Extract year from published date
    year = None
    if 'published' in frontmatter:
        date_str = str(frontmatter['published'])
        match = re.match(r'(\d{4})/', date_str)
        if match:
            year = match.group(1)
    
    # Create metadata object
    metadata = {
        'filename': filename,
        'title': frontmatter.get('title', filename),
        'authors': frontmatter.get('authors', ['unknown']),
        'intro': frontmatter.get('intro', ''),
        'types': frontmatter.get('types', []),
        'categories': frontmatter.get('categories', []),
        'published': frontmatter.get('published', ''),
        'updated': frontmatter.get('updated', ''),
        'status': frontmatter.get('status', 'active'),
        'year': year or 'unknown'
    }
    
    return metadata

def main():
    """Extract metadata from all markdown files and organize by year"""
    md_files = [f for f in os.listdir('.') if f.endswith('.md')]
    
    print(f"Found {len(md_files)} markdown files")
    
    all_metadata = []
    by_year = defaultdict(list)
    by_category = defaultdict(list)
    
    for filename in md_files:
        with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
            try:
                content = f.read()
                metadata = extract_metadata(content, filename)
                if metadata:
                    all_metadata.append(metadata)
                    by_year[metadata['year']].append(metadata)
                    for category in metadata['categories']:
                        by_category[category].append(metadata)
            except UnicodeDecodeError:
                print(f"Error reading {filename}: UnicodeDecodeError")
    
    # Create output directory
    os.makedirs('site', exist_ok=True)
    
    # Write all metadata to JSON file
    with open('site/all_posts.json', 'w', encoding='utf-8') as f:
        json.dump(all_metadata, f, indent=2)
    
    # Write metadata by year
    with open('site/posts_by_year.json', 'w', encoding='utf-8') as f:
        json.dump(by_year, f, indent=2)
    
    # Write metadata by category
    with open('site/posts_by_category.json', 'w', encoding='utf-8') as f:
        json.dump(by_category, f, indent=2)
    
    print(f"Extracted metadata from {len(all_metadata)} files")
    print(f"Found posts from {len(by_year)} different years")
    print(f"Found posts in {len(by_category)} different categories")

if __name__ == "__main__":
    main()