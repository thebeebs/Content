// Amiga Workbench Blog JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Show startup screen
    showStartupScreen();
    
    // Initialize the workbench after startup
    setTimeout(initWorkbench, 3000);
    
    // Add event listeners for window dragging
    setupWindowDragging();
    
    // Add event listeners for context menu
    setupContextMenu();
});

// Show startup screen with loading animation
function showStartupScreen() {
    const startupScreen = document.getElementById('startup-screen');
    const progressBar = document.getElementById('startup-progress-bar');
    const startupMessage = document.getElementById('startup-message');
    
    // Messages to display during startup
    const messages = [
        'Loading Workbench...',
        'Initializing file system...',
        'Loading blog data...',
        'Setting up windows...',
        'Starting Workbench...'
    ];
    
    // Animate progress bar
    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 100);
    
    // Change messages during startup
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        messageIndex = (messageIndex + 1) % messages.length;
        startupMessage.textContent = messages[messageIndex];
    }, 600);
    
    // Hide startup screen after animation
    setTimeout(() => {
        clearInterval(messageInterval);
        startupScreen.style.opacity = '0';
        setTimeout(() => {
            startupScreen.style.display = 'none';
        }, 500);
    }, 3000);
}

// Initialize the workbench
async function initWorkbench() {
    try {
        // Load blog data
        const allPosts = await loadBlogData();
        
        // Organize posts by year and category
        const postsByYear = organizePostsByYear(allPosts);
        const postsByCategory = organizePostsByCategory(allPosts);
        
        // Store data globally
        window.blogData = {
            allPosts,
            postsByYear,
            postsByCategory
        };
        
        // Create desktop icons
        createDesktopIcons(postsByYear, postsByCategory);
        
        // Show about window on startup (optional)
        // showAboutWindow();
    } catch (error) {
        console.error('Error initializing workbench:', error);
    }
}

// Load blog data from JSON files
async function loadBlogData() {
    try {
        const response = await fetch('all_posts.json');
        return await response.json();
    } catch (error) {
        console.error('Error loading blog data:', error);
        return [];
    }
}

// Organize posts by year
function organizePostsByYear(posts) {
    const byYear = {};
    
    posts.forEach(post => {
        const year = post.year || 'unknown';
        if (!byYear[year]) {
            byYear[year] = [];
        }
        byYear[year].push(post);
    });
    
    return byYear;
}

// Organize posts by category
function organizePostsByCategory(posts) {
    const byCategory = {};
    
    posts.forEach(post => {
        if (post.categories && Array.isArray(post.categories)) {
            post.categories.forEach(category => {
                if (!byCategory[category]) {
                    byCategory[category] = [];
                }
                byCategory[category].push(post);
            });
        }
    });
    
    return byCategory;
}

// Create desktop icons
function createDesktopIcons(postsByYear, postsByCategory) {
    const desktopIcons = document.getElementById('desktop-icons');
    
    // Clear existing icons
    desktopIcons.innerHTML = '';
    
    // Create RAM Disk icon
    const ramDiskIcon = createDesktopIcon('RAM Disk', 'disk');
    ramDiskIcon.addEventListener('dblclick', () => {
        openDirectoryWindow('RAM Disk', [
            { name: 'Years', type: 'folder', data: 'years' },
            { name: 'Categories', type: 'folder', data: 'categories' },
            { name: 'All Articles', type: 'folder', data: 'all' },
            { name: 'Recent', type: 'folder', data: 'recent' }
        ]);
    });
    desktopIcons.appendChild(ramDiskIcon);
    
    // Create Years icon
    const yearsIcon = createDesktopIcon('Years', 'folder');
    yearsIcon.addEventListener('dblclick', () => {
        openYearsDirectory(postsByYear);
    });
    desktopIcons.appendChild(yearsIcon);
    
    // Create Categories icon
    const categoriesIcon = createDesktopIcon('Categories', 'folder');
    categoriesIcon.addEventListener('dblclick', () => {
        openCategoriesDirectory(postsByCategory);
    });
    desktopIcons.appendChild(categoriesIcon);
    
    // Create Recent icon
    const recentIcon = createDesktopIcon('Recent', 'folder');
    recentIcon.addEventListener('dblclick', () => {
        openRecentArticles();
    });
    desktopIcons.appendChild(recentIcon);
    
    // Create About icon
    const aboutIcon = createDesktopIcon('About', 'document');
    aboutIcon.addEventListener('dblclick', showAboutWindow);
    desktopIcons.appendChild(aboutIcon);
}

// Create a desktop icon element
function createDesktopIcon(name, type) {
    const icon = document.createElement('div');
    icon.className = 'desktop-icon';
    icon.innerHTML = `
        <div class="icon ${type}"></div>
        <div class="icon-label">${name}</div>
    `;
    
    // Add click event to select icon
    icon.addEventListener('click', (e) => {
        // Deselect all icons
        document.querySelectorAll('.desktop-icon').forEach(i => {
            i.classList.remove('selected');
        });
        
        // Select this icon
        icon.classList.add('selected');
        
        e.stopPropagation();
    });
    
    return icon;
}

// Open directory window
function openDirectoryWindow(title, items, parentPath = null) {
    // Clone the directory window template
    const template = document.getElementById('directory-window-template');
    const window = template.cloneNode(true);
    window.id = 'directory-' + Date.now();
    window.classList.remove('hidden');
    
    // Set window title
    window.querySelector('.window-title').textContent = title;
    
    // Set directory path
    if (parentPath) {
        window.querySelector('.directory-path').textContent = 'Path: ' + parentPath + '/' + title;
    } else {
        window.querySelector('.directory-path').textContent = 'Path: ' + title;
    }
    
    // Populate directory items
    const directoryItems = window.querySelector('.directory-items');
    directoryItems.innerHTML = '';
    
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'directory-item';
        itemElement.innerHTML = `
            <div class="item-icon ${item.type}"></div>
            <div class="item-label">${item.name}</div>
        `;
        
        // Add double-click event
        itemElement.addEventListener('dblclick', () => {
            if (item.type === 'folder') {
                // Open subfolder
                if (item.data === 'years') {
                    openYearsDirectory(window.blogData.postsByYear);
                } else if (item.data === 'categories') {
                    openCategoriesDirectory(window.blogData.postsByCategory);
                } else if (item.data === 'all') {
                    openAllArticlesDirectory();
                } else if (item.data === 'recent') {
                    openRecentArticles();
                } else if (item.data === 'year') {
                    openYearDirectory(item.year);
                } else if (item.data === 'category') {
                    openCategoryDirectory(item.category);
                }
            } else if (item.type === 'document') {
                // Open document
                openDocument(item.filename, item.name);
            }
        });
        
        // Add click event to select item
        itemElement.addEventListener('click', (e) => {
            // Deselect all items
            directoryItems.querySelectorAll('.directory-item').forEach(i => {
                i.classList.remove('selected');
            });
            
            // Select this item
            itemElement.classList.add('selected');
            
            e.stopPropagation();
        });
        
        directoryItems.appendChild(itemElement);
    });
    
    // Update status bar
    window.querySelector('.directory-status').textContent = items.length + ' items';
    
    // Add parent directory button functionality
    const parentDirBtn = window.querySelector('#parent-dir-btn');
    if (parentPath) {
        parentDirBtn.addEventListener('click', () => {
            // Go to parent directory
            if (parentPath === 'Years') {
                openYearsDirectory(window.blogData.postsByYear);
            } else if (parentPath === 'Categories') {
                openCategoriesDirectory(window.blogData.postsByCategory);
            } else {
                openDirectoryWindow('RAM Disk', [
                    { name: 'Years', type: 'folder', data: 'years' },
                    { name: 'Categories', type: 'folder', data: 'categories' },
                    { name: 'All Articles', type: 'folder', data: 'all' },
                    { name: 'Recent', type: 'folder', data: 'recent' }
                ]);
            }
            
            // Close current window
            document.body.removeChild(window);
        });
    } else {
        parentDirBtn.disabled = true;
    }
    
    // Add close button functionality
    window.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(window);
    });
    
    // Make window active
    makeWindowActive(window);
    
    // Add window to the document
    document.body.appendChild(window);
    
    // Position window with slight offset if other windows exist
    const existingWindows = document.querySelectorAll('.window:not(.hidden)').length;
    window.style.top = (50 + existingWindows * 20) + 'px';
    window.style.left = (50 + existingWindows * 20) + 'px';
    
    return window;
}

// Open Years directory
function openYearsDirectory(postsByYear) {
    const years = Object.keys(postsByYear).sort().reverse();
    
    const items = years.map(year => {
        if (year !== 'unknown') {
            return {
                name: year + ' (' + postsByYear[year].length + ')',
                type: 'folder',
                data: 'year',
                year: year
            };
        }
    }).filter(Boolean);
    
    openDirectoryWindow('Years', items);
}

// Open Categories directory
function openCategoriesDirectory(postsByCategory) {
    const categories = Object.keys(postsByCategory).sort();
    
    const items = categories.map(category => {
        return {
            name: category + ' (' + postsByCategory[category].length + ')',
            type: 'folder',
            data: 'category',
            category: category
        };
    });
    
    openDirectoryWindow('Categories', items);
}

// Open Year directory
function openYearDirectory(year) {
    const posts = window.blogData.postsByYear[year] || [];
    
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });
    
    const items = sortedPosts.map(post => {
        return {
            name: formatTitle(post.title),
            type: 'document',
            filename: post.filename
        };
    });
    
    openDirectoryWindow(year, items, 'Years');
}

// Open Category directory
function openCategoryDirectory(category) {
    const posts = window.blogData.postsByCategory[category] || [];
    
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });
    
    const items = sortedPosts.map(post => {
        return {
            name: formatTitle(post.title),
            type: 'document',
            filename: post.filename
        };
    });
    
    openDirectoryWindow(category, items, 'Categories');
}

// Open All Articles directory
function openAllArticlesDirectory() {
    const posts = window.blogData.allPosts || [];
    
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });
    
    const items = sortedPosts.map(post => {
        return {
            name: formatTitle(post.title),
            type: 'document',
            filename: post.filename
        };
    });
    
    openDirectoryWindow('All Articles', items, 'RAM Disk');
}

// Open Recent Articles directory
function openRecentArticles() {
    const posts = window.blogData.allPosts || [];
    
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });
    
    // Take only the 10 most recent posts
    const recentPosts = sortedPosts.slice(0, 10);
    
    const items = recentPosts.map(post => {
        return {
            name: formatTitle(post.title),
            type: 'document',
            filename: post.filename
        };
    });
    
    openDirectoryWindow('Recent Articles', items, 'RAM Disk');
}

// Open document window
async function openDocument(filename, title) {
    try {
        // Fetch the markdown file
        const response = await fetch(filename);
        const markdown = await response.text();
        
        // Extract YAML frontmatter and content
        const yamlMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        
        if (yamlMatch) {
            const content = yamlMatch[2];
            
            // Clone the document window template
            const template = document.getElementById('document-window-template');
            const window = template.cloneNode(true);
            window.id = 'document-' + Date.now();
            window.classList.remove('hidden');
            
            // Set window title
            window.querySelector('.window-title').textContent = title || formatTitle(filename);
            
            // Convert markdown to HTML and set content
            window.querySelector('.document-content').innerHTML = marked.parse(content);
            
            // Add close button functionality
            window.querySelector('.close-btn').addEventListener('click', () => {
                document.body.removeChild(window);
            });
            
            // Make window active
            makeWindowActive(window);
            
            // Add window to the document
            document.body.appendChild(window);
            
            // Position window with slight offset if other windows exist
            const existingWindows = document.querySelectorAll('.window:not(.hidden)').length;
            window.style.top = (70 + existingWindows * 20) + 'px';
            window.style.left = (100 + existingWindows * 20) + 'px';
        }
    } catch (error) {
        console.error('Error opening document:', error);
    }
}

// Show About window
function showAboutWindow() {
    const aboutWindow = document.getElementById('about-window');
    aboutWindow.classList.remove('hidden');
    
    // Make window active
    makeWindowActive(aboutWindow);
    
    // Position window in center if not already positioned
    if (!aboutWindow.style.top) {
        const windowWidth = aboutWindow.offsetWidth;
        const windowHeight = aboutWindow.offsetHeight;
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        
        aboutWindow.style.top = Math.max(0, (screenHeight - windowHeight) / 2) + 'px';
        aboutWindow.style.left = Math.max(0, (screenWidth - windowWidth) / 2) + 'px';
    }
}

// Make a window active (bring to front)
function makeWindowActive(window) {
    // Set all windows as inactive
    document.querySelectorAll('.window').forEach(w => {
        w.classList.remove('active');
        w.classList.add('inactive');
    });
    
    // Set this window as active
    window.classList.remove('inactive');
    window.classList.add('active');
    
    // Bring to front
    window.style.zIndex = getHighestZIndex() + 1;
}

// Get highest z-index of windows
function getHighestZIndex() {
    let highest = 10;
    
    document.querySelectorAll('.window').forEach(w => {
        const zIndex = parseInt(window.getComputedStyle(w).zIndex, 10);
        if (zIndex > highest) {
            highest = zIndex;
        }
    });
    
    return highest;
}

// Setup window dragging
function setupWindowDragging() {
    document.addEventListener('mousedown', function(e) {
        const windowHeader = e.target.closest('.window-titlebar');
        if (windowHeader) {
            const window = windowHeader.closest('.window');
            
            // Make window active
            makeWindowActive(window);
            
            // Get initial mouse position
            const initialX = e.clientX;
            const initialY = e.clientY;
            
            // Get initial window position
            const initialWindowX = window.offsetLeft;
            const initialWindowY = window.offsetTop;
            
            // Function to handle mouse move
            function handleMouseMove(e) {
                // Calculate new position
                const newX = initialWindowX + (e.clientX - initialX);
                const newY = initialWindowY + (e.clientY - initialY);
                
                // Set new position
                window.style.left = newX + 'px';
                window.style.top = newY + 'px';
            }
            
            // Function to handle mouse up
            function handleMouseUp() {
                // Remove event listeners
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            }
            
            // Add event listeners
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            
            e.preventDefault();
        }
    });
}

// Setup context menu
function setupContextMenu() {
    const contextMenu = document.getElementById('context-menu');
    
    // Show context menu on right click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        
        // Position context menu
        contextMenu.style.left = e.clientX + 'px';
        contextMenu.style.top = e.clientY + 'px';
        
        // Show context menu
        contextMenu.classList.remove('hidden');
        
        // Store target element
        contextMenu.targetElement = e.target.closest('.desktop-icon') || e.target.closest('.directory-item');
    });
    
    // Hide context menu on click outside
    document.addEventListener('click', function() {
        contextMenu.classList.add('hidden');
    });
    
    // Context menu items
    document.getElementById('context-open').addEventListener('click', function() {
        if (contextMenu.targetElement) {
            // Simulate double click on target element
            const dblClickEvent = new MouseEvent('dblclick', {
                bubbles: true,
                cancelable: true,
                view: window
            });
            contextMenu.targetElement.dispatchEvent(dblClickEvent);
        }
    });
    
    document.getElementById('context-about').addEventListener('click', showAboutWindow);
}

// Helper function to format title
function formatTitle(title) {
    if (typeof title !== 'string') {
        return 'Untitled';
    }
    
    // Remove quotes if present
    return title.replace(/^['"]|['"]$/g, '');
}