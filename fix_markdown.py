#!/usr/bin/env python3
import os
import re
import yaml
from datetime import datetime

def fix_yaml_frontmatter(content, filename):
    """Fix YAML frontmatter for consistency"""
    # Check if file has YAML frontmatter
    yaml_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if not yaml_match:
        # Create basic frontmatter if missing
        title = os.path.splitext(os.path.basename(filename))[0].replace('-', ' ').title()
        new_frontmatter = f"""---
title: '{title}'
authors:
- thebeebs
intro: ''
types:
- shorts
categories:
- web
published: 2016/01/01 12:00:00
updated: 2016/01/01 12:00:00
---

"""
        return new_frontmatter + content
    
    # Extract and parse YAML
    yaml_content = yaml_match.group(1)
    try:
        frontmatter = yaml.safe_load(yaml_content)
    except yaml.YAMLError:
        # If YAML is invalid, try to fix common issues
        # Replace tabs with spaces
        yaml_content = yaml_content.replace('\t', '    ')
        # Fix apostrophes and quotes in titles and intros
        yaml_content = re.sub(r"^(title|intro):\s+'(.*?)([^\\])'s(.*?)'", r"\1: '\2\3\'s\4'", yaml_content, flags=re.MULTILINE)
        yaml_content = re.sub(r"^(title|intro):\s+'(.*?)([^\\])'(.*?)'", r"\1: '\2\3\'\4'", yaml_content, flags=re.MULTILINE)
        # Add quotes around values with special characters
        yaml_content = re.sub(r'^(\w+):\s+([^\'\"]\S*[:#\[\]\{\}]+.*)', r'\1: \'\2\'', yaml_content, flags=re.MULTILINE)
        try:
            frontmatter = yaml.safe_load(yaml_content)
        except yaml.YAMLError:
            print(f"Could not fix YAML in {filename}, skipping")
            return content
    
    # Ensure required fields exist
    if 'title' not in frontmatter:
        frontmatter['title'] = os.path.splitext(os.path.basename(filename))[0].replace('-', ' ').title()
    
    # Ensure title is quoted if it contains special characters
    if isinstance(frontmatter['title'], str) and any(c in frontmatter['title'] for c in "':[]{}#"):
        if not (frontmatter['title'].startswith("'") and frontmatter['title'].endswith("'")):
            frontmatter['title'] = f"'{frontmatter['title']}'"
    
    if 'authors' not in frontmatter:
        frontmatter['authors'] = ['thebeebs']
    elif not isinstance(frontmatter['authors'], list):
        frontmatter['authors'] = [frontmatter['authors']]
    
    if 'intro' not in frontmatter:
        frontmatter['intro'] = ''
    elif isinstance(frontmatter['intro'], str) and "'" in frontmatter['intro']:
        # Fix apostrophes in intro
        if not (frontmatter['intro'].startswith("'") and frontmatter['intro'].endswith("'")):
            intro_fixed = frontmatter['intro'].replace("'", "\\'")
            frontmatter['intro'] = f"'{intro_fixed}'"
    
    if 'types' not in frontmatter:
        frontmatter['types'] = ['shorts']
    elif not isinstance(frontmatter['types'], list):
        frontmatter['types'] = [frontmatter['types']]
    
    if 'categories' not in frontmatter:
        frontmatter['categories'] = ['web']
    elif not isinstance(frontmatter['categories'], list):
        frontmatter['categories'] = [frontmatter['categories']]
    
    # Fix date formats
    date_fields = ['published', 'updated']
    for field in date_fields:
        if field in frontmatter:
            date_str = str(frontmatter[field])
            # Try to parse and fix date
            try:
                # Check for invalid month/day order
                parts = date_str.split(' ')[0].split('/')
                if len(parts) >= 3:
                    year, month, day = int(parts[0]), int(parts[1]), int(parts[2])
                    if month > 12:  # Month is invalid, swap with day
                        month, day = day, month
                    # Ensure two digits for month and day
                    frontmatter[field] = f"{year}/{month:02d}/{day:02d} 12:00:00"
            except (ValueError, IndexError):
                # If date can't be parsed, use default
                frontmatter[field] = "2016/01/01 12:00:00"
        else:
            # Add missing date field
            if field == 'published':
                frontmatter[field] = "2016/01/01 12:00:00"
            elif field == 'updated' and 'published' in frontmatter:
                frontmatter[field] = frontmatter['published']
    
    # Convert frontmatter back to YAML
    new_yaml = yaml.dump(frontmatter, default_flow_style=False, sort_keys=False)
    
    # Replace frontmatter in content
    new_content = f"---\n{new_yaml}---\n\n" + content[yaml_match.end():]
    
    # Ensure there's a blank line after frontmatter
    if not new_content.startswith("---\n") or not re.search(r'---\n\n', new_content):
        new_content = re.sub(r'---\n', '---\n\n', new_content, count=1)
    
    return new_content

def fix_markdown_formatting(content):
    """Fix markdown formatting for consistency"""
    # Fix headings without space after #
    content = re.sub(r'^(#+)([^\s])', r'\1 \2', content, flags=re.MULTILINE)
    
    # Fix code blocks without language specification
    content = re.sub(r'```\n', '```text\n', content)
    
    # Ensure there's a blank line after frontmatter
    if re.match(r'^---\n.*?\n---\n\S', content, re.DOTALL):
        content = re.sub(r'(---\n.*?\n---\n)(\S)', r'\1\n\2', content, flags=re.DOTALL)
    
    return content

def main():
    """Fix all markdown files in the current directory"""
    md_files = [f for f in os.listdir('.') if f.endswith('.md')]
    
    print(f"Found {len(md_files)} markdown files")
    
    files_fixed = 0
    
    for filename in md_files:
        with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
            try:
                content = f.read()
                new_content = fix_yaml_frontmatter(content, filename)
                new_content = fix_markdown_formatting(new_content)
                
                if new_content != content:
                    with open(filename, 'w', encoding='utf-8') as f_out:
                        f_out.write(new_content)
                    files_fixed += 1
                    print(f"Fixed: {filename}")
            except UnicodeDecodeError:
                print(f"Error reading {filename}: UnicodeDecodeError")
    
    print(f"\nSummary: Fixed {files_fixed} out of {len(md_files)} files")

if __name__ == "__main__":
    main()