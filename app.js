// PlayHub Game Shop Application

// State Management
const appState = {
    currentView: 'catalog',
    selectedCategory: 'all',
    searchQuery: '',
    cart: [],
    user: null,
    selectedGame: null
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadUserSession();
    loadCart();
    setupEventListeners();
    renderGames();
    updateUI();
});

// Load user session from localStorage
function loadUserSession() {
    const savedUser = localStorage.getItem('playhub_user');
    if (savedUser) {
        appState.user = JSON.parse(savedUser);
    }
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('playhub_cart');
    if (savedCart) {
        appState.cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('playhub_cart', JSON.stringify(appState.cart));
    updateCartUI();
}

// Save user session
function saveUserSession() {
    if (appState.user) {
        localStorage.setItem('playhub_user', JSON.stringify(appState.user));
    } else {
        localStorage.removeItem('playhub_user');
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        appState.searchQuery = e.target.value.toLowerCase();
        renderGames();
    });

    // Category Filter
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            appState.selectedCategory = e.target.dataset.category;
            renderGames();
        });
    });

    // Auth Modal
    document.getElementById('authBtn').addEventListener('click', () => {
        showAuthModal();
    });

    document.getElementById('closeAuthModal').addEventListener('click', () => {
        hideAuthModal();
    });

    document.getElementById('authToggleBtn').addEventListener('click', () => {
        toggleAuthMode();
    });

    document.getElementById('authForm').addEventListener('submit', (e) => {
        e.preventDefault();
        handleAuth();
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        logout();
    });

    // Cart Modal
    document.getElementById('cartBtn').addEventListener('click', () => {
        showCartModal();
    });

    document.getElementById('closeCartModal').addEventListener('click', () => {
        hideCartModal();
    });

    document.getElementById('checkoutBtn').addEventListener('click', () => {
        handleCheckout();
    });

    // Back Button
    document.getElementById('backBtn').addEventListener('click', () => {
        showCatalog();
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Logo click
    document.querySelector('.nav-logo').addEventListener('click', () => {
        showCatalog();
    });
}

// Filter Games
function filterGames() {
    let filtered = gamesData;

    // Category filter
    if (appState.selectedCategory !== 'all') {
        filtered = filtered.filter(game => game.category === appState.selectedCategory);
    }

    // Search filter
    if (appState.searchQuery) {
        filtered = filtered.filter(game => 
            game.title.toLowerCase().includes(appState.searchQuery) ||
            game.category.toLowerCase().includes(appState.searchQuery)
        );
    }

    return filtered;
}

// Render Games Catalog
function renderGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    const filtered = filterGames();

    if (filtered.length === 0) {
        gamesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0; color: var(--text-secondary);">
                <h3>No games found</h3>
                <p>Try adjusting your search or category filter</p>
            </div>
        `;
        return;
    }

    gamesGrid.innerHTML = filtered.map(game => `
        <div class="game-card" data-testid="game-card-${game.id}" onclick="showGameDetail(${game.id})">
            <div class="game-card-image">
                <img src="${game.image}" alt="${game.title}" loading="lazy">
            </div>
            <div class="game-card-content">
                <div class="game-card-header">
                    <h3 class="game-card-title">${game.title}</h3>
                    <span class="game-card-price ${game.isFree ? 'free' : ''}" data-testid="game-price-${game.id}">
                        ${game.isFree ? 'FREE' : '₱' + game.price}
                    </span>
                </div>
                <div class="game-card-meta">
                    <span class="game-card-category">${game.category}</span>
                    <span class="game-card-rating">★ ${game.rating}</span>
                    <span style="color: var(--text-muted);">${game.downloads}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Show Game Detail
function showGameDetail(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    appState.selectedGame = game;
    appState.currentView = 'detail';

    const detailHTML = `
        <div class="product-image">
            <img src="${game.image}" alt="${game.title}">
        </div>
        <div class="product-info">
            <h1>${game.title}</h1>
            <div class="product-meta">
                <div class="product-meta-item">
                    <span class="product-meta-label">Category</span>
                    <span class="product-meta-value">${game.category}</span>
                </div>
                <div class="product-meta-item">
                    <span class="product-meta-label">Rating</span>
                    <span class="product-meta-value">★ ${game.rating}</span>
                </div>
                <div class="product-meta-item">
                    <span class="product-meta-label">Downloads</span>
                    <span class="product-meta-value" data-testid="game-downloads-${game.id}">${game.downloads}</span>
                </div>
            </div>
            <div class="product-price ${game.isFree ? 'free' : ''}" data-testid="product-detail-price">
                ${game.isFree ? 'FREE TO PLAY' : '₱' + game.price}
            </div>
            <div class="product-actions">
                ${game.isFree ? 
                    `<button class="btn-primary" onclick="handleInstall(${game.id})" data-testid="install-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 0.5rem;">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Install Now
                    </button>` :
                    `<button class="btn-primary" onclick="addToCart(${game.id})" data-testid="add-to-cart-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align: middle; margin-right: 0.5rem;">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        Add to Cart
                    </button>`
                }
            </div>
            <div class="product-description">
                <p>${game.description}</p>
            </div>
            <div class="product-section">
                <h3>System Requirements</h3>
                <div class="system-requirements">
                    <div class="requirement-item">
                        <span class="requirement-label">OS:</span>
                        <span class="requirement-value">${game.systemRequirements.os}</span>
                    </div>
                    <div class="requirement-item">
                        <span class="requirement-label">Processor:</span>
                        <span class="requirement-value">${game.systemRequirements.processor}</span>
                    </div>
                    <div class="requirement-item">
                        <span class="requirement-label">Memory:</span>
                        <span class="requirement-value">${game.systemRequirements.memory}</span>
                    </div>
                    <div class="requirement-item">
                        <span class="requirement-label">Graphics:</span>
                        <span class="requirement-value">${game.systemRequirements.graphics}</span>
                    </div>
                    <div class="requirement-item">
                        <span class="requirement-label">Storage:</span>
                        <span class="requirement-value">${game.systemRequirements.storage}</span>
                    </div>
                </div>
            </div>
            <div class="product-section">
                <h3>User Reviews</h3>
                <div class="reviews-section">
                    ${game.reviews.map(review => `
                        <div class="review-item">
                            <div class="review-header">
                                <span class="review-author">${review.author}</span>
                                <span class="review-rating">★ ${review.rating}</span>
                            </div>
                            <p class="review-text">${review.comment}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.getElementById('productDetail').innerHTML = detailHTML;
    document.getElementById('catalogSection').style.display = 'none';
    document.getElementById('heroSection').style.display = 'none';
    document.querySelector('.category-section').style.display = 'none';
    document.getElementById('productDetailSection').style.display = 'block';
}

// Show Catalog
function showCatalog() {
    appState.currentView = 'catalog';
    document.getElementById('productDetailSection').style.display = 'none';
    document.getElementById('heroSection').style.display = 'flex';
    document.querySelector('.category-section').style.display = 'block';
    document.getElementById('catalogSection').style.display = 'block';
}

// Add to Cart
function addToCart(gameId) {
    if (!appState.user) {
        alert('Please login to add items to cart');
        showAuthModal();
        return;
    }

    const game = gamesData.find(g => g.id === gameId);
    if (!game || game.isFree) return;

    const existingItem = appState.cart.find(item => item.id === gameId);
    if (existingItem) {
        alert('This game is already in your cart!');
        return;
    }

    appState.cart.push({
        id: game.id,
        title: game.title,
        price: game.price,
        image: game.image
    });

    saveCart();
    alert(`${game.title} added to cart!`);
}

// Handle Install (for free games)
function handleInstall(gameId) {
    if (!appState.user) {
        alert('Please login to install games');
        showAuthModal();
        return;
    }

    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    // Simulate download increment
    const downloadCount = parseFloat(game.downloads);
    const newCount = (downloadCount + 0.001).toFixed(1);
    game.downloads = newCount + 'M';

    alert(`Installing ${game.title}...\n\nThis is a simulation. In a real app, the game would begin downloading.`);
    
    // Update display
    const downloadElement = document.querySelector(`[data-testid="game-downloads-${game.id}"]`);
    if (downloadElement) {
        downloadElement.textContent = game.downloads;
    }
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    cartCount.textContent = appState.cart.length;
    
    if (appState.cart.length > 0) {
        cartCount.style.display = 'flex';
    } else {
        cartCount.style.display = 'none';
    }
}

// Show Cart Modal
function showCartModal() {
    if (!appState.user) {
        alert('Please login to view cart');
        showAuthModal();
        return;
    }

    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (appState.cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        cartTotal.textContent = '₱0';
    } else {
        const total = appState.cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = '₱' + total;

        cartItems.innerHTML = appState.cart.map((item, index) => `
            <div class="cart-item" data-testid="cart-item-${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">₱${item.price}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})" data-testid="remove-item-${item.id}">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        `).join('');
    }

    document.getElementById('cartModal').classList.add('active');
}

// Hide Cart Modal
function hideCartModal() {
    document.getElementById('cartModal').classList.remove('active');
}

// Remove from Cart
function removeFromCart(index) {
    appState.cart.splice(index, 1);
    saveCart();
    showCartModal(); // Refresh cart display
}

// Handle Checkout
function handleCheckout() {
    if (appState.cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const total = appState.cart.reduce((sum, item) => sum + item.price, 0);
    alert(`Checkout Successful!\n\nTotal: ₱${total}\n\nThis is a simulation. In a real app, you would proceed to payment.`);
    
    // Clear cart
    appState.cart = [];
    saveCart();
    hideCartModal();
}

// Auth Modal Functions
let isLoginMode = true;

function showAuthModal() {
    document.getElementById('authModal').classList.add('active');
    updateAuthModalUI();
}

function hideAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.getElementById('authForm').reset();
}

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    updateAuthModalUI();
}

function updateAuthModalUI() {
    const title = document.getElementById('authTitle');
    const submitBtn = document.querySelector('#authForm button[type="submit"]');
    const toggleText = document.getElementById('authToggleText');
    const toggleBtn = document.getElementById('authToggleBtn');

    if (isLoginMode) {
        title.textContent = 'Welcome Back';
        submitBtn.textContent = 'Login';
        toggleText.textContent = "Don't have an account?";
        toggleBtn.textContent = 'Sign Up';
    } else {
        title.textContent = 'Create Account';
        submitBtn.textContent = 'Sign Up';
        toggleText.textContent = 'Already have an account?';
        toggleBtn.textContent = 'Login';
    }
}

function handleAuth() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (isLoginMode) {
        // Simple login simulation
        const savedUsers = JSON.parse(localStorage.getItem('playhub_users') || '{}');
        
        if (savedUsers[username] && savedUsers[username] === password) {
            appState.user = { username, isLoggedIn: true };
            saveUserSession();
            updateUI();
            hideAuthModal();
            alert(`Welcome back, ${username}!`);
        } else {
            alert('Invalid username or password');
        }
    } else {
        // Simple signup simulation
        const savedUsers = JSON.parse(localStorage.getItem('playhub_users') || '{}');
        
        if (savedUsers[username]) {
            alert('Username already exists');
        } else {
            savedUsers[username] = password;
            localStorage.setItem('playhub_users', JSON.stringify(savedUsers));
            
            appState.user = { username, isLoggedIn: true };
            saveUserSession();
            updateUI();
            hideAuthModal();
            alert(`Account created! Welcome, ${username}!`);
        }
    }
}

function logout() {
    appState.user = null;
    appState.cart = [];
    saveUserSession();
    saveCart();
    updateUI();
    alert('Logged out successfully');
    showCatalog();
}

function updateUI() {
    const authBtn = document.getElementById('authBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (appState.user) {
        authBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        logoutBtn.textContent = appState.user.username;
    } else {
        authBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
    }

    updateCartUI();
}