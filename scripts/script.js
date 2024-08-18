// Sample product data with categories
const products = [
    { id: 1, name: "T-shirt", price: "$20", image: "./images/product1.jpg", category: "men" },
    { id: 2, name: "Jeans", price: "$80", image: "./images/product2.jfif", category: "men" },
    { id: 3, name: "Shirt", price: "$50", image: "./images/product3.jfif", category: "men" },
    { id: 4, name: "Trimmer", price: "$20", image: "./images/product4.jfif", category: "men" },
    { id: 5, name: "Watch", price: "$20", image: "./images/product5.jfif", category: "men" },
    { id: 6, name: "Bangles", price: "$40", image: "./images/product6.jfif", category: "women" },
    { id: 7, name: "Saree", price: "$25", image: "./images/product7.jfif", category: "women" },
    { id: 8, name: "Skirt", price: "$10", image: "./images/product8.jfif", category: "women" },
    { id: 9, name: "Sneakers", price: "$42", image: "./images/product9.jfif", category: "women" },
    { id: 10, name: "Jacket", price: "$60", image: "./images/product10.jfif", category: "women" },
    { id: 11, name: "Toy", price: "$80", image: "./images/product11.jfif", category: "kids" },
    { id: 12, name: "Cycles", price: "$100", image: "./images/product12.jfif", category: "kids" },
    { id: 13, name: "Jacket", price: "$30", image: "./images/product13.jfif", category: "kids" },
    { id: 14, name: "Fridges", price: "$280", image: "./images/product14.jfif", category: "home" },
    { id: 15, name: "Chair", price: "$18", image: "./images/product15.jfif", category: "home" },
    { id: 16, name: "Flower Pots", price: "$8", image: "./images/product16.jfif", category: "home" }
];

let selectedCategory = "all";

// Function to render products based on filters
function renderProducts(filteredProducts = products) {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = ''; // Clear previous products

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <p class="product-name">${product.name}</p>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Function to toggle mobile menu
function toggleMenu() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbar = document.querySelector('.navbar ul');

    toggleButton.addEventListener('click', () => {
        toggleButton.classList.toggle('active');
        navbar.classList.toggle('active');
    });
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('input', () => {
        filterProducts();
    });
}

// Function to handle category filtering
function handleCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedCategory = button.getAttribute('data-category');
            filterProducts();
        });
    });
}

// Function to filter products based on search and category
function filterProducts() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    renderProducts(filteredProducts);
}

// Initialize website
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    toggleMenu();
    handleSearch(); // Initialize search functionality
    handleCategoryFilter(); // Initialize category filter functionality
});
