// Personal Blog JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the blog
    initBlog();
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    
    navToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });
    
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Initialize the blog
async function initBlog() {
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
        
        // Display featured posts
        displayFeaturedPosts(allPosts);
        
        // Display categories
        displayCategories(postsByCategory);
        
        // Display recent posts
        displayRecentPosts(allPosts);
        
        // Display all content
        displayAllContent(allPosts);
        
        // Display footer categories
        displayFooterCategories(postsByCategory);
        
        // Display footer archives
        displayFooterArchives(postsByYear);
        
        // Set up event listeners for post clicks
        setupPostClickHandlers();
        
        // Set up event listeners for category clicks
        setupCategoryClickHandlers();
        
        // Check for URL parameters to show specific post
        checkUrlForPost();
    } catch (error) {
        console.error('Error initializing blog:', error);
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

// Display featured posts
function displayFeaturedPosts(posts) {
    const featuredPostsContainer = document.getElementById('featured-posts');
    if (!featuredPostsContainer) return;
    
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });
    
    // Take the 3 most recent posts
    const featuredPosts = sortedPosts.slice(0, 3);
    
    // Clear container
    featuredPostsContainer.innerHTML = '';
    
    // Add featured posts
    featuredPosts.forEach(post => {
        const postCard = createPostCard(post);
        featuredPostsContainer.appendChild(postCard);
    });
}

// Display categories
function displayCategories(postsByCategory) {
    const categoryList = document.getElementById('category-list');
    if (!categoryList) return;
    
    // Clear container
    categoryList.innerHTML = '';
    
    // Add "All" category
    const allItem = document.createElement('li');
    allItem.className = 'category-item active';
    allItem.innerHTML = '<a href="#" data-category="all">All</a>';
    categoryList.appendChild(allItem);
    
    // Add categories
    Object.keys(postsByCategory).sort().forEach(category => {
        const count = postsByCategory[category].length;
        const categoryItem = document.createElement('li');
        categoryItem.className = 'category-item';
        categoryItem.innerHTML = `<a href="#" data-category="${category}">${category} (${count})</a>`;
        categoryList.appendChild(categoryItem);
    });
}

// Display recent posts
function displayRecentPosts(posts) {
    const postGrid = document.getElementById('post-grid');
    if (!postGrid) return;
    
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });
    
    // Take the 6 most recent posts (excluding the 3 featured ones)
    const recentPosts = sortedPosts.slice(3, 9);
    
    // Clear container
    postGrid.innerHTML = '';
    
    // Add recent posts
    recentPosts.forEach(post => {
        const postCard = createPostCard(post);
        postGrid.appendChild(postCard);
    });
}

// Display all content
function displayAllContent(posts) {
    const allContentContainer = document.getElementById('all-content');
    if (!allContentContainer) return;
    
    // Sort posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });
    
    // Clear container
    allContentContainer.innerHTML = '';
    
    // Add all posts
    sortedPosts.forEach(post => {
        const postCard = createPostCard(post);
        allContentContainer.appendChild(postCard);
    });
}

// Display posts by category
function displayPostsByCategory(category) {
    const postGrid = document.getElementById('post-grid');
    if (!postGrid) return;
    
    let posts;
    
    if (category === 'all') {
        // Sort all posts by date (newest first)
        posts = [...window.blogData.allPosts].sort((a, b) => {
            return new Date(b.published) - new Date(a.published);
        }).slice(3, 9); // Exclude featured posts
    } else {
        // Get posts for the selected category
        posts = window.blogData.postsByCategory[category] || [];
        
        // Sort by date (newest first)
        posts = [...posts].sort((a, b) => {
            return new Date(b.published) - new Date(a.published);
        });
    }
    
    // Clear container
    postGrid.innerHTML = '';
    
    // Add posts
    posts.forEach(post => {
        const postCard = createPostCard(post);
        postGrid.appendChild(postCard);
    });
    
    // Update active category
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        const itemCategory = item.querySelector('a').getAttribute('data-category');
        if (itemCategory === category) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Display footer categories
function displayFooterCategories(postsByCategory) {
    const footerCategories = document.getElementById('footer-categories');
    if (!footerCategories) return;
    
    // Clear container
    footerCategories.innerHTML = '';
    
    // Add categories (limit to 6)
    Object.keys(postsByCategory).sort().slice(0, 6).forEach(category => {
        const categoryItem = document.createElement('li');
        categoryItem.innerHTML = `<a href="#" data-category="${category}">${category}</a>`;
        footerCategories.appendChild(categoryItem);
    });
}

// Display footer archives
function displayFooterArchives(postsByYear) {
    const footerArchives = document.getElementById('footer-archives');
    if (!footerArchives) return;
    
    // Clear container
    footerArchives.innerHTML = '';
    
    // Add years
    Object.keys(postsByYear).sort().reverse().forEach(year => {
        if (year !== 'unknown') {
            const count = postsByYear[year].length;
            const yearItem = document.createElement('li');
            yearItem.innerHTML = `<a href="#" data-year="${year}">${year} (${count})</a>`;
            footerArchives.appendChild(yearItem);
        }
    });
}

// Create a post card element
function createPostCard(post) {
    const postCard = document.createElement('div');
    postCard.className = 'post-card';
    postCard.setAttribute('data-filename', post.filename);
    
    // Get first category
    const category = post.categories && post.categories.length > 0 ? post.categories[0] : 'Uncategorized';
    
    // Format date
    const date = formatDate(post.published);
    
    // Check if post is archived
    const isArchived = post.status === 'archived';
    
    // Create random image based on category (for demo purposes)
    let imageKeyword = 'tech';
    if (category.toLowerCase().includes('guitar') || category.toLowerCase().includes('music')) {
        imageKeyword = 'guitar';
    } else if (category.toLowerCase().includes('skate') || category.toLowerCase().includes('skateboard')) {
        imageKeyword = 'skatestyle';
    } else if (category.toLowerCase().includes('web') || category.toLowerCase().includes('dev')) {
        imageKeyword = 'coding';
    } else if (category.toLowerCase().includes('speak') || category.toLowerCase().includes('conference')) {
        imageKeyword = 'conference';
    }
    
    // Create HTML
    let cardHTML = `
        <div class="post-card-image" style="background-image: url('https://source.unsplash.com/featured/?${imageKeyword}&sig=${Math.random()}')">
            ${isArchived ? '<span class="post-card-archived">Archived</span>' : ''}
        </div>
        <div class="post-card-content">
            <span class="post-card-category">${category}</span>
            <h3 class="post-card-title">${formatTitle(post.title)}</h3>
            <p class="post-card-excerpt">${truncateText(post.intro, 100)}</p>
            <div class="post-card-meta">
                <span class="post-card-date">${date}</span>
                <div class="post-card-author">
                    <div class="post-card-author-avatar"></div>
                    <span>${post.authors[0]}</span>
                </div>
            </div>
        </div>
    `;
    
    postCard.innerHTML = cardHTML;
    return postCard;
}

// Set up event listeners for post clicks
function setupPostClickHandlers() {
    document.addEventListener('click', function(e) {
        const postCard = e.target.closest('.post-card');
        if (postCard) {
            const filename = postCard.getAttribute('data-filename');
            if (filename) {
                openPost(filename);
            }
        }
    });
}

// Set up event listeners for category clicks
function setupCategoryClickHandlers() {
    document.addEventListener('click', function(e) {
        const categoryLink = e.target.closest('[data-category]');
        if (categoryLink) {
            e.preventDefault();
            const category = categoryLink.getAttribute('data-category');
            displayPostsByCategory(category);
            
            // Make sure the Articles tab is active
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            
            const articlesTabButton = document.querySelector('.tab-button[data-tab="articles"]');
            if (articlesTabButton) {
                articlesTabButton.classList.add('active');
                document.getElementById('articles-tab').classList.add('active');
            }
            
            // Scroll to post grid
            document.getElementById('post-grid').scrollIntoView({ behavior: 'smooth' });
        }
        
        const yearLink = e.target.closest('[data-year]');
        if (yearLink) {
            e.preventDefault();
            const year = yearLink.getAttribute('data-year');
            displayPostsByYear(year);
            
            // Make sure the Articles tab is active
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            
            const articlesTabButton = document.querySelector('.tab-button[data-tab="articles"]');
            if (articlesTabButton) {
                articlesTabButton.classList.add('active');
                document.getElementById('articles-tab').classList.add('active');
            }
            
            // Scroll to post grid
            document.getElementById('post-grid').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Display posts by year
function displayPostsByYear(year) {
    const postGrid = document.getElementById('post-grid');
    if (!postGrid) return;
    
    const posts = window.blogData.postsByYear[year] || [];
    
    // Sort by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.published) - new Date(a.published);
    });
    
    // Clear container
    postGrid.innerHTML = '';
    
    // Add posts
    sortedPosts.forEach(post => {
        const postCard = createPostCard(post);
        postGrid.appendChild(postCard);
    });
}

// Parse publish date from string
function parsePublishDate(dateStr) {
    if (!dateStr) return null;
    
    try {
        const parts = dateStr.split(' ')[0].split('/');
        if (parts.length >= 3) {
            const year = parseInt(parts[0]);
            const month = parseInt(parts[1]) - 1; // JavaScript months are 0-indexed
            const day = parseInt(parts[2]);
            
            return new Date(year, month, day);
        }
        return null;
    } catch (error) {
        return null;
    }
}

// Check if post is outdated (older than 2 years)
function isPostOutdated(publishDate) {
    if (!publishDate) return false;
    
    const currentDate = new Date();
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(currentDate.getFullYear() - 2);
    
    return publishDate < twoYearsAgo;
}

// Format date for archive banner
function formatArchiveDate(publishDate) {
    if (!publishDate) return 'some time ago';
    
    const currentDate = new Date();
    const yearDiff = currentDate.getFullYear() - publishDate.getFullYear();
    
    if (yearDiff === 0) {
        return 'earlier this year';
    } else if (yearDiff === 1) {
        return 'last year';
    } else {
        return `${yearDiff} years ago`;
    }
}

// Open a post
async function openPost(filename) {
    try {
        // Fetch the markdown file
        const response = await fetch(filename);
        const markdown = await response.text();
        
        // Extract YAML frontmatter and content
        const yamlMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        
        if (yamlMatch) {
            const yamlContent = yamlMatch[1];
            const content = yamlMatch[2];
            
            // Parse YAML to get metadata
            let metadata = {};
            try {
                // Simple YAML parsing for key-value pairs
                yamlContent.split('\n').forEach(line => {
                    // Match simple key-value pairs
                    const kvMatch = line.match(/^(\w+):\s*(.+)$/);
                    if (kvMatch) {
                        const key = kvMatch[1];
                        let value = kvMatch[2].trim().replace(/^['"]|['"]$/g, '');
                        
                        // Handle arrays (simple implementation)
                        if (value.startsWith('[') && value.endsWith(']')) {
                            value = value.slice(1, -1).split(',').map(item => item.trim());
                        } else if (value.startsWith('-')) {
                            // Handle list format
                            value = [value.substring(1).trim()];
                        }
                        
                        metadata[key] = value;
                    } else if (line.trim().startsWith('-')) {
                        // Handle list items for the last key
                        const lastKey = Object.keys(metadata).pop();
                        if (lastKey && Array.isArray(metadata[lastKey])) {
                            metadata[lastKey].push(line.trim().substring(1).trim());
                        }
                    }
                });
            } catch (e) {
                console.warn('Error parsing YAML metadata:', e);
            }
            
            // Clone the single post template
            const template = document.getElementById('single-post-template');
            const singlePost = template.cloneNode(true);
            singlePost.id = 'current-post';
            singlePost.style.display = 'block';
            
            // Set post title
            singlePost.querySelector('#post-title').textContent = formatTitle(metadata.title);
            
            // Set post author
            singlePost.querySelector('#post-author').textContent = Array.isArray(metadata.authors) ? metadata.authors[0] : metadata.authors;
            
            // Set post date
            singlePost.querySelector('#post-date').textContent = formatDate(metadata.published);
            
            // Set post categories
            const categoriesContainer = singlePost.querySelector('#post-categories');
            categoriesContainer.innerHTML = '';
            
            if (metadata.categories && metadata.categories.length) {
                const categories = Array.isArray(metadata.categories) ? metadata.categories : [metadata.categories];
                categories.forEach(category => {
                    const categorySpan = document.createElement('span');
                    categorySpan.className = 'post-category';
                    categorySpan.textContent = category;
                    categoriesContainer.appendChild(categorySpan);
                });
            }
            
            // Check if post is archived or outdated
            const isArchived = metadata.status === 'archived';
            const publishDate = parsePublishDate(metadata.published);
            const isOutdated = publishDate && isPostOutdated(publishDate);
            
            // Add archive banner if needed
            if (isArchived || isOutdated) {
                const archiveBanner = document.createElement('div');
                archiveBanner.className = 'archive-banner';
                archiveBanner.innerHTML = `
                    <i class="fas fa-archive"></i>
                    <strong>Archived Content:</strong> This article was written ${formatArchiveDate(publishDate)} and is maintained for historical purposes only. 
                    The information may be outdated and should not be relied upon as current advice or best practice.
                    ${isArchived ? '<span class="archive-tag">Archived</span>' : ''}
                `;
                
                // Insert banner at the top of the content
                const contentElement = singlePost.querySelector('#post-content');
                contentElement.insertBefore(archiveBanner, contentElement.firstChild);
            }
            
            // Determine image based on category
            let imageKeyword = 'tech';
            if (metadata.categories && Array.isArray(metadata.categories)) {
                const categories = metadata.categories.map(c => c.toLowerCase());
                if (categories.some(c => c.includes('guitar') || c.includes('music'))) {
                    imageKeyword = 'guitar';
                } else if (categories.some(c => c.includes('skate') || c.includes('skateboard'))) {
                    imageKeyword = 'skatestyle';
                } else if (categories.some(c => c.includes('web') || c.includes('dev'))) {
                    imageKeyword = 'coding';
                } else if (categories.some(c => c.includes('speak') || c.includes('conference'))) {
                    imageKeyword = 'conference';
                }
            }
            
            // Set featured image
            singlePost.querySelector('#post-featured-image').style.backgroundImage = `url('https://source.unsplash.com/featured/?${imageKeyword}&sig=${Math.random()}')`;
            
            // Configure marked for better HTML output
            marked.setOptions({
                breaks: true,
                gfm: true,
                headerIds: true,
                smartLists: true
            });
            
            // Set post content
            singlePost.querySelector('#post-content').innerHTML = marked.parse(content);
            
            // Hide main content sections
            document.querySelector('.hero').style.display = 'none';
            document.querySelector('.about-section').style.display = 'none';
            document.querySelector('.section').style.display = 'none';
            document.querySelector('.interests-section').style.display = 'none';
            document.querySelector('.speaking-section').style.display = 'none';
            
            // Add single post to the page
            document.body.insertBefore(singlePost, document.querySelector('.site-footer'));
            
            // Add back button
            const backButton = document.createElement('div');
            backButton.className = 'back-button';
            backButton.innerHTML = '<a href="index.html" class="btn btn-primary"><i class="fas fa-arrow-left"></i> Back to Blog</a>';
            backButton.style.marginBottom = '20px';
            singlePost.insertBefore(backButton, singlePost.firstChild);
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Update URL
            history.pushState({}, '', `?post=${encodeURIComponent(filename)}`);
        }
    } catch (error) {
        console.error('Error opening post:', error);
    }
}

// Check URL for post parameter
function checkUrlForPost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postFilename = urlParams.get('post');
    
    if (postFilename) {
        openPost(postFilename);
    }
}

// Helper function to format title
function formatTitle(title) {
    if (typeof title !== 'string') {
        return 'Untitled';
    }
    
    // Remove quotes if present
    return title.replace(/^['"]|['"]$/g, '');
}

// Helper function to format date
function formatDate(dateStr) {
    if (!dateStr) return '';
    
    try {
        const parts = dateStr.split(' ')[0].split('/');
        if (parts.length >= 3) {
            const year = parts[0];
            const month = parseInt(parts[1]);
            const day = parseInt(parts[2]);
            
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
            
            return `${day} ${months[month-1]}, ${year}`;
        }
        return dateStr;
    } catch (error) {
        return dateStr;
    }
}

// Helper function to truncate text
function truncateText(text, maxLength) {
    if (typeof text !== 'string') {
        return '';
    }
    
    if (text.length <= maxLength) {
        return text;
    }
    
    return text.substring(0, maxLength) + '...';
}