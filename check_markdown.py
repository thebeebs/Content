#!/usr/bin/env python3
import os
import re
import sys
import yaml
from datetime import datetime

def check_yaml_frontmatter(content, filename):
    """Check YAML frontmatter for consistency"""
    issues = []
    
    # Check if file has YAML frontmatter
    yaml_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    if not yaml_match:
        issues.append(f"Missing or malformed YAML frontmatter")
        return issues
    
    # Extract and parse YAML
    yaml_content = yaml_match.group(1)
    try:
        frontmatter = yaml.safe_load(yaml_content)
    except yaml.YAMLError:
        issues.append(f"Invalid YAML syntax in frontmatter")
        return issues
    
    # Check required fields
    required_fields = ['title', 'authors', 'intro', 'types', 'categories', 'published']
    for field in required_fields:
        if field not in frontmatter:
            issues.append(f"Missing required field: {field}")
    
    # Check date format
    date_fields = ['published', 'updated']
    for field in date_fields:
        if field in frontmatter:
            date_str = str(frontmatter[field])
            # Check if date is in YYYY/MM/DD format
            if not re.match(r'^\d{4}/\d{2}/\d{2}', date_str):
                issues.append(f"Invalid date format in {field}: {date_str}")
            
            # Check if date is valid
            try:
                parts = date_str.split(' ')[0].split('/')
                if len(parts) >= 3:
                    year, month, day = int(parts[0]), int(parts[1]), int(parts[2])
                    if month > 12 or day > 31:
                        issues.append(f"Invalid date in {field}: {date_str}")
            except (ValueError, IndexError):
                issues.append(f"Invalid date in {field}: {date_str}")
    
    # Check array fields
    array_fields = ['authors', 'types', 'categories']
    for field in array_fields:
        if field in frontmatter and not isinstance(frontmatter[field], list):
            issues.append(f"Field {field} should be an array")
    
    return issues

def check_markdown_formatting(content, filename):
    """Check markdown formatting for consistency"""
    issues = []
    
    # Check for proper heading format (# with space)
    headings = re.findall(r'^(#+)(\s*)(.*)$', content, re.MULTILINE)
    for h in headings:
        if h[1] != ' ':
            issues.append(f"Heading without space after #: {h[0]}{h[1]}{h[2]}")
    
    # Check for code blocks
    code_blocks = re.findall(r'```(\w*)\n', content)
    if len(code_blocks) > 0:
        for lang in code_blocks:
            if not lang:
                issues.append(f"Code block without language specification")
    
    # Check for consistent spacing after frontmatter
    if re.match(r'^---\n.*?\n---\n\S', content, re.DOTALL):
        issues.append(f"Missing blank line after frontmatter")
    
    return issues

def main():
    """Check all markdown files in the current directory"""
    md_files = [f for f in os.listdir('.') if f.endswith('.md')]
    
    print(f"Found {len(md_files)} markdown files")
    
    files_with_issues = 0
    all_issues = {}
    
    for filename in md_files:
        with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
            try:
                content = f.read()
                yaml_issues = check_yaml_frontmatter(content, filename)
                md_issues = check_markdown_formatting(content, filename)
                
                if yaml_issues or md_issues:
                    files_with_issues += 1
                    all_issues[filename] = yaml_issues + md_issues
            except UnicodeDecodeError:
                print(f"Error reading {filename}: UnicodeDecodeError")
    
    print(f"\n{files_with_issues} files have issues:")
    for filename, issues in all_issues.items():
        if issues:
            print(f"\n{filename}:")
            for issue in issues:
                print(f"  - {issue}")
    
    print(f"\nSummary: {files_with_issues} out of {len(md_files)} files have issues")

if __name__ == "__main__":
    main()