#!/usr/bin/env python3
import os
import glob

def main():
    # Get all markdown files in the root directory
    md_files = glob.glob('*.md')

    # Create necessary directories
    os.makedirs('site', exist_ok=True)

    # Create symbolic links in the site directory
    for md_file in md_files:
        source = os.path.abspath(md_file)
        target = os.path.join('site', md_file)
        
        # Create the symbolic link
        try:
            if os.path.exists(target):
                os.remove(target)
            os.symlink(source, target)
            print(f"Created symlink for {md_file}")
        except Exception as e:
            print(f"Error creating symlink for {md_file}: {e}")

if __name__ == "__main__":
    main()