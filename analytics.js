// --- CONFIG & DATA ---
const API_ANALYTICS_URL = "https://nftmatchbot20250730152328.azurewebsites.net/api/MarketsAnalis/Analytics";
const API_LAST_UPDATE_URL = "https://nftmatchbot20250730152328.azurewebsites.net/api/MarketsAnalis/LastUpdate";
const API_KEY = "bAsmvky00QjWJAdfetXmKxpJDYi/U9txbI5N0QqJn5JIpX4iBIV+nV/J7s1AQuNGwtHRUDGcbHAxw8YjBzvKF55VHQYn9amxeLUSM8279is=";
const CACHE_PREFIX = "analytics_cache_";

const colorDefinitions = [
    { "name": "Black", "hex": { "centerColor": "#363738" } },
    { "name": "Electric Purple", "hex": { "centerColor": "#ca70c6" } },
    { "name": "Lavender", "hex": { "centerColor": "#b789e4" } },
    { "name": "Cyberpunk", "hex": { "centerColor": "#858ff3" } },
    { "name": "Electric Indigo", "hex": { "centerColor": "#a980f3" } },
    { "name": "Neon Blue", "hex": { "centerColor": "#7596f9" } },
    { "name": "Navy Blue", "hex": { "centerColor": "#6c9edd" } },
    { "name": "Sapphire", "hex": { "centerColor": "#58a3c8" } },
    { "name": "Sky Blue", "hex": { "centerColor": "#58b4c8" } },
    { "name": "Azure Blue", "hex": { "centerColor": "#5db1cb" } },
    { "name": "Pacific Cyan", "hex": { "centerColor": "#5abea6" } },
    { "name": "Aquamarine", "hex": { "centerColor": "#60b195" } },
    { "name": "Pacific Green", "hex": { "centerColor": "#6fc793" } },
    { "name": "Emerald", "hex": { "centerColor": "#78c585" } },
    { "name": "Mint Green", "hex": { "centerColor": "#7ecb82" } },
    { "name": "Malachite", "hex": { "centerColor": "#95b457" } },
    { "name": "Shamrock Green", "hex": { "centerColor": "#8ab163" } },
    { "name": "Lemongrass", "hex": { "centerColor": "#aeb85a" } },
    { "name": "Light Olive", "hex": { "centerColor": "#c2af64" } },
    { "name": "Satin Gold", "hex": { "centerColor": "#bf9b47" } },
    { "name": "Pure Gold", "hex": { "centerColor": "#ccab41" } },
    { "name": "Amber", "hex": { "centerColor": "#dab345" } },
    { "name": "Caramel", "hex": { "centerColor": "#d09932" } },
    { "name": "Orange", "hex": { "centerColor": "#d19a3a" } },
    { "name": "Carrot Juice", "hex": { "centerColor": "#db9867" } },
    { "name": "Coral Red", "hex": { "centerColor": "#da896b" } },
    { "name": "Persimmon", "hex": { "centerColor": "#e7a75a" } },
    { "name": "Strawberry", "hex": { "centerColor": "#dd8e6f" } },
    { "name": "Raspberry", "hex": { "centerColor": "#e07b85" } },
    { "name": "Mystic Pearl", "hex": { "centerColor": "#d08b6d" } },
    { "name": "Fandango", "hex": { "centerColor": "#e28ab6" } },
    { "name": "Dark Lilac", "hex": { "centerColor": "#b17da5" } },
    { "name": "English Violet", "hex": { "centerColor": "#b186bb" } },
    { "name": "Moonstone", "hex": { "centerColor": "#7eb1b4" } },
    { "name": "Pine Green", "hex": { "centerColor": "#6ba97c" } },
    { "name": "Hunter Green", "hex": { "centerColor": "#8fae78" } },
    { "name": "Pistachio", "hex": { "centerColor": "#97b07c" } },
    { "name": "Khaki Green", "hex": { "centerColor": "#adb070" } },
    { "name": "Desert Sand", "hex": { "centerColor": "#b39f82" } },
    { "name": "Cappuccino", "hex": { "centerColor": "#b1907e" } },
    { "name": "Rosewood", "hex": { "centerColor": "#b77a77" } },
    { "name": "Ivory White", "hex": { "centerColor": "#bab6b1" } },
    { "name": "Platinum", "hex": { "centerColor": "#b2aea7" } },
    { "name": "Roman Silver", "hex": { "centerColor": "#a3a8b5" } },
    { "name": "Steel Grey", "hex": { "centerColor": "#97a2ac" } },
    { "name": "Silver Blue", "hex": { "centerColor": "#80a4b8" } },
    { "name": "Burgundy", "hex": { "centerColor": "#a35e66" } },
    { "name": "Indigo Dye", "hex": { "centerColor": "#537991" } },
    { "name": "Midnight Blue", "hex": { "centerColor": "#5c6985" } },
    { "name": "Onyx Black", "hex": { "centerColor": "#4d5254" } },
    { "name": "Battleship Grey", "hex": { "centerColor": "#8c8c85" } },
    { "name": "Purple", "hex": { "centerColor": "#ae6cae" } },
    { "name": "Grape", "hex": { "centerColor": "#9d74c1" } },
    { "name": "Cobalt Blue", "hex": { "centerColor": "#6088cf" } },
    { "name": "French Blue", "hex": { "centerColor": "#5c9bc4" } },
    { "name": "Turquoise", "hex": { "centerColor": "#5ec0b8" } },
    { "name": "Jade Green", "hex": { "centerColor": "#55c49c" } },
    { "name": "Copper", "hex": { "centerColor": "#d08656" } },
    { "name": "Chestnut", "hex": { "centerColor": "#be6f54" } },
    { "name": "Chocolate", "hex": { "centerColor": "#a46e58" } },
    { "name": "Marine Blue", "hex": { "centerColor": "#4e689c" } },
    { "name": "Tactical Pine", "hex": { "centerColor": "#44826b" } },
    { "name": "Gunship Green", "hex": { "centerColor": "#558a65" } },
    { "name": "Dark Green", "hex": { "centerColor": "#516341" } },
    { "name": "Seal Brown", "hex": { "centerColor": "#664d45" } },
    { "name": "Rifle Green", "hex": { "centerColor": "#64695c" } },
    { "name": "Ranger Green", "hex": { "centerColor": "#5f7849" } },
    { "name": "Camo Green", "hex": { "centerColor": "#75944d" } },
    { "name": "Feldgrau", "hex": { "centerColor": "#899288" } },
    { "name": "Gunmetal", "hex": { "centerColor": "#4c5d63" } },
    { "name": "Deep Cyan", "hex": { "centerColor": "#31b5aa" } },
    { "name": "Mexican Pink", "hex": { "centerColor": "#e36692" } },
    { "name": "Tomato", "hex": { "centerColor": "#e6793e" } },
    { "name": "Fire Engine", "hex": { "centerColor": "#f05f4f" } },
    { "name": "Celtic Blue", "hex": { "centerColor": "#45b8ed" } },
    { "name": "Old Gold", "hex": { "centerColor": "#b58d38" } },
    { "name": "Burnt Sienna", "hex": { "centerColor": "#d66f3c" } },
    { "name": "Carmine", "hex": { "centerColor": "#e0574a" } },
    { "name": "Mustard", "hex": { "centerColor": "#d4980d" } },
    { "name": "French Violet", "hex": { "centerColor": "#c260e6" } }
];

// Gradient order for sorting
const gradientOrder = [
    "Ivory White", "Platinum", "Roman Silver", "Steel Grey", "Battleship Grey", "Feldgrau", "Rifle Green",
    "Black", "Onyx Black", "Gunmetal", "Seal Brown", "Burgundy", "Rosewood", "Desert Sand", "Cappuccino",
    "Chocolate", "Chestnut", "Carmine", "Fire Engine", "Burnt Sienna", "Copper", "Tomato", "Mystic Pearl",
    "Strawberry", "Coral Red", "Carrot Juice", "Persimmon", "Orange", "Amber", "Caramel", "Mustard",
    "Old Gold", "Satin Gold", "Pure Gold", "Light Olive", "Khaki Green", "Pistachio", "Camo Green",
    "Lemongrass", "Shamrock Green", "Malachite", "Mint Green", "Emerald", "Hunter Green", "Pine Green",
    "Tactical Pine", "Dark Green", "Ranger Green", "Gunship Green", "Jade Green", "Pacific Green",
    "Turquoise", "Deep Cyan", "Aquamarine", "Pacific Cyan", "Azure Blue", "Sky Blue", "Celtic Blue",
    "Sapphire", "French Blue", "Moonstone", "Silver Blue", "Indigo Dye", "Midnight Blue", "Marine Blue",
    "Cobalt Blue", "Navy Blue", "Neon Blue", "Electric Indigo", "Cyberpunk", "Lavender", "French Violet",
    "Electric Purple", "English Violet", "Grape", "Purple", "Dark Lilac", "Fandango", "Mexican Pink", "Raspberry"
];

// --- STATE ---
let currentMinScore = 80;
let loadedMinScore = 80; // Last loaded from API
let analyticsData = [];
let filteredData = [];
let currentModalData = null;
let currentCollectionIndex = 0;
let currentSort = 'count-desc';

// --- UTILS ---
function getColorByName(name) {
    const def = colorDefinitions.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (def) return def.hex.centerColor;
    return "#4d5254";
}

function formatTime(dateStr) {
    if (!dateStr) return "...";
    const date = new Date(dateStr);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');

    return `${month}.${day} ${h}:${m}`;
}

// --- SESSION STORAGE CACHE ---
function getCacheKey(minScore) {
    return `${CACHE_PREFIX}${minScore}`;
}

function getCachedData(minScore) {
    try {
        const cached = sessionStorage.getItem(getCacheKey(minScore));
        if (cached) {
            const data = JSON.parse(cached);
            // Check if cache is less than 30 minutes old
            const cacheAge = Date.now() - data.timestamp;
            if (cacheAge < 30 * 60 * 1000) { // 30 minutes
                return data.results;
            }
        }
    } catch (e) {
        console.error('Cache read error:', e);
    }
    return null;
}

function setCachedData(minScore, results) {
    try {
        const cacheData = {
            timestamp: Date.now(),
            results: results
        };
        sessionStorage.setItem(getCacheKey(minScore), JSON.stringify(cacheData));
    } catch (e) {
        console.error('Cache write error:', e);
    }
}

// Fetch last update time from API
async function fetchLastUpdateTime() {
    try {
        const response = await fetch(API_LAST_UPDATE_URL, {
            method: 'GET',
            headers: {
                'Authorization': API_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.LastUpdate) {
            const formattedTime = formatTime(data.LastUpdate);
            const timeEl = document.getElementById('lastUpdateTime');
            if (timeEl) timeEl.textContent = formattedTime;
        }
    } catch (error) {
        console.error('Error fetching last update time:', error);
        const timeEl = document.getElementById('lastUpdateTime');
        if (timeEl) timeEl.textContent = '...';
    }
}

// --- SORTING ---
function sortData(data, sortType) {
    const sorted = [...data];

    switch (sortType) {
        case 'count-desc':
            sorted.sort((a, b) => b.TotalItemsCount - a.TotalItemsCount);
            break;
        case 'count-asc':
            sorted.sort((a, b) => a.TotalItemsCount - b.TotalItemsCount);
            break;
        case 'name-asc':
            sorted.sort((a, b) => a.BackgroundName.localeCompare(b.BackgroundName));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.BackgroundName.localeCompare(a.BackgroundName));
            break;
        case 'gradient':
            sorted.sort((a, b) => {
                const indexA = gradientOrder.indexOf(a.BackgroundName);
                const indexB = gradientOrder.indexOf(b.BackgroundName);
                // If not found in gradient order, put at end
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            });
            break;
    }

    return sorted;
}

// --- API ---
async function fetchAnalytics() {
    const grid = document.getElementById('analyticsGrid');
    if (!grid) return;

    // Check cache first
    const cached = getCachedData(currentMinScore);
    if (cached) {
        console.log('Using cached data for score:', currentMinScore);
        analyticsData = cached;
        loadedMinScore = currentMinScore;
        updateSearchButtonState();
        applyFiltersAndSort();
        return;
    }

    grid.innerHTML = '<div class="loading-state">Loading analytics...</div>';

    try {
        const payload = {
            "mode": "background",
            "minMonoScore": currentMinScore
        };

        const response = await fetch(API_ANALYTICS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': API_KEY
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        analyticsData = Array.isArray(data) ? data : [];

        // Cache the results
        setCachedData(currentMinScore, analyticsData);

        loadedMinScore = currentMinScore;
        updateSearchButtonState();
        applyFiltersAndSort();

    } catch (error) {
        console.error('Fetch error:', error);
        grid.innerHTML = '<div class="empty-state">Error loading analytics</div>';
    }
}

// --- SEARCH & FILTER ---
function applyFiltersAndSort() {
    const searchInput = document.getElementById('backgroundSearch');
    const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

    // Filter by search term (instant, no API call)
    let filtered = analyticsData;
    if (searchTerm) {
        filtered = analyticsData.filter(bg =>
            bg.BackgroundName.toLowerCase().includes(searchTerm)
        );
    }

    // Sort
    filtered = sortData(filtered, currentSort);

    filteredData = filtered;
    renderAnalytics(filteredData);
}

// Update search button state
function updateSearchButtonState() {
    const searchBtn = document.getElementById('searchBtn');
    if (!searchBtn) return;

    if (currentMinScore !== loadedMinScore) {
        searchBtn.classList.add('active');
    } else {
        searchBtn.classList.remove('active');
    }
}

// --- RENDER ---
function renderAnalytics(data) {
    const grid = document.getElementById('analyticsGrid');

    if (!grid) return;

    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = '<div class="empty-state">No backgrounds found</div>';
        return;
    }

    data.forEach(bg => {
        const card = createAnalyticsCard(bg);
        grid.appendChild(card);
    });
}

function createAnalyticsCard(bgData) {
    const card = document.createElement('div');
    card.className = 'analytics-card';

    const color = getColorByName(bgData.BackgroundName);
    const topCollection = bgData.TopCollections && bgData.TopCollections.length > 0
        ? bgData.TopCollections[0]
        : { CollectionName: 'N/A', ItemsCount: 0 };

    card.innerHTML = `
        <div class="color-bar" style="background: ${color};"></div>
        <div class="card-header">
            <div class="color-preview-large" style="background: ${color};"></div>
            <div class="card-title">
                <h3 class="background-name">${bgData.BackgroundName}</h3>
                <p class="top-collection">Top: ${topCollection.CollectionName} (${topCollection.ItemsCount})</p>
            </div>
            <div class="card-stats">
                <div class="stat-item">
                    <span class="stat-label">Total Unique Items</span>
                    <span class="stat-value">${bgData.TotalItemsCount}</span>
                </div>
            </div>
        </div>
    `;

    card.onclick = () => openDetailsModal(bgData);

    return card;
}

// --- MODAL ---
function openDetailsModal(bgData) {
    currentModalData = bgData;
    currentCollectionIndex = 0;

    const modal = document.getElementById('detailsModal');
    const overlay = document.getElementById('overlay');

    document.getElementById('modalBackgroundName').textContent = bgData.BackgroundName;

    const infoText = `${bgData.TotalItemsCount} unique NFTs with similarity from ${bgData.MinCoofPercent.toFixed(1)}% on ${bgData.BackgroundName} background`;
    const topCollText = bgData.TopCollections && bgData.TopCollections.length > 0
        ? `Most: ${bgData.TopCollections[0].CollectionName}`
        : 'N/A';

    document.getElementById('modalTotalItems').textContent = infoText;
    document.getElementById('modalTopCollection').textContent = topCollText;

    renderCollectionList();

    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function renderCollectionList() {
    if (!currentModalData || !currentModalData.TopCollections) return;

    const collections = currentModalData.TopCollections.slice(0, 5);
    const listContainer = document.getElementById('modalCollectionsList');

    if (!listContainer) return;

    listContainer.innerHTML = '';

    collections.forEach((collection, index) => {
        const collItem = document.createElement('div');
        collItem.className = 'collection-item' + (index === currentCollectionIndex ? ' active' : '');
        collItem.innerHTML = `
            <span class="collection-name">${collection.CollectionName}</span>
            <span class="collection-count">${collection.ItemsCount} items</span>
        `;
        collItem.onclick = () => {
            currentCollectionIndex = index;
            renderCollectionList();
            renderModels();
        };
        listContainer.appendChild(collItem);
    });

    renderModels();
}

function renderModels() {
    if (!currentModalData || !currentModalData.TopCollections) return;

    const collection = currentModalData.TopCollections[currentCollectionIndex];
    if (!collection || !collection.TopModels) return;

    const sortedModels = [...collection.TopModels].sort((a, b) => b.CoofPercent - a.CoofPercent);

    const modelsContainer = document.getElementById('modalItemsList');
    if (!modelsContainer) return;

    modelsContainer.innerHTML = '';

    sortedModels.forEach(model => {
        const modelCard = document.createElement('a');
        modelCard.className = 'item-card';
        modelCard.href = model.Link || '#';
        modelCard.target = '_blank';
        modelCard.onclick = (e) => {
            if (!model.Link) e.preventDefault();
        };

        modelCard.innerHTML = `
            <div class="item-image">
                <img src="${model.ImageLink || ''}" alt="${model.Name}" onerror="this.style.display='none'">
            </div>
            <div class="item-info">
                <p class="item-collection">${model.Name}</p>
                <p class="item-model">#${model.Number} • ${model.MarketName}</p>
            </div>
            <div class="item-price-info">
                <p class="item-price-large">${model.CoofPercent.toFixed(1)}%</p>
                <p class="item-price-small">${model.Price} TON</p>
            </div>
        `;
        modelsContainer.appendChild(modelCard);
    });
}

function closeModal() {
    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('detailsModal');
    const infoModal = document.getElementById('infoModal');

    overlay.classList.remove('active');
    modal.classList.remove('active');
    if (infoModal) infoModal.classList.remove('active');
    document.body.style.overflow = '';
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Slider Logic
    const rangeInput = document.getElementById('monoScoreRange');
    const scoreText = document.getElementById('monoScoreValue');

    if (rangeInput && scoreText) {
        const updateSlider = (val) => {
            scoreText.textContent = `${val}%`;
            rangeInput.style.setProperty('--value', val + '%');
        };

        rangeInput.addEventListener('input', (e) => {
            updateSlider(e.target.value);
            currentMinScore = parseInt(e.target.value);
            updateSearchButtonState();
        });

        updateSlider(rangeInput.value);
    }

    // Search by name - instant filter (no API call)
    const searchInput = document.getElementById('backgroundSearch');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            applyFiltersAndSort();
        });
    }

    // Search button - fetch new data from API
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            fetchAnalytics();
        });
    }

    // Sort
    const sortBtn = document.getElementById('sortBtn');
    const sortMenu = document.getElementById('sortMenu');
    const sortOptions = document.querySelectorAll('.sort-option');

    if (sortBtn && sortMenu) {
        sortBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sortMenu.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            sortMenu.classList.remove('active');
        });
    }

    sortOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            currentSort = option.dataset.sort;
            applyFiltersAndSort();
            sortMenu.classList.remove('active');

            sortOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Modal Close
    const overlay = document.getElementById('overlay');
    const closeDetails = document.getElementById('closeDetails');
    const closeInfo = document.getElementById('closeInfo');
    const btnShowInfo = document.getElementById('btnShowInfo');

    if (overlay) overlay.addEventListener('click', closeModal);
    if (closeDetails) closeDetails.addEventListener('click', closeModal);
    if (closeInfo) closeInfo.addEventListener('click', closeModal);

    if (btnShowInfo) {
        btnShowInfo.addEventListener('click', () => {
            const infoModal = document.getElementById('infoModal');
            if (infoModal) {
                overlay.classList.add('active');
                infoModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Fetch last update time
    fetchLastUpdateTime();

    // Initial Fetch
    fetchAnalytics();
});
