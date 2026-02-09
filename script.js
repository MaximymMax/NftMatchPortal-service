// --- CONFIG & DATA ---
const API_URL = "https://nftmatchbot20250730152328.azurewebsites.net/api/MarketsAnalis/BestDeals";
const API_LAST_UPDATE_URL = "https://nftmatchbot20250730152328.azurewebsites.net/api/MarketsAnalis/LastUpdate";
const API_KEY = "bAsmvky00QjWJAdfetXmKxpJDYi/U9txbI5N0QqJn5JIpX4iBIV+nV/J7s1AQuNGwtHRUDGcbHAxw8YjBzvKF55VHQYn9amxeLUSM8279is=";

const GIFT_NAME_TO_ID = {
    "Santa Hat": "5983471780763796287",
    "Signet Ring": "5936085638515261992",
    "Precious Peach": "5933671725160989227",
    "Plush Pepe": "5936013938331222567",
    "Spiced Wine": "5913442287462908725",
    "Jelly Bunny": "5915502858152706668",
    "Durov's Cap": "5915521180483191380",
    "Perfume Bottle": "5913517067138499193",
    "Eternal Rose": "5882125812596999035",
    "Berry Box": "5882252952218894938",
    "Vintage Cigar": "5857140566201991735",
    "Magic Potion": "5846226946928673709",
    "Kissed Frog": "5845776576658015084",
    "Hex Pot": "5825801628657124140",
    "Evil Eye": "5825480571261813595",
    "Sharp Tongue": "5841689550203650524",
    "Trapped Heart": "5841391256135008713",
    "Skull Flower": "5839038009193792264",
    "Scared Cat": "5837059369300132790",
    "Spy Agaric": "5821261908354794038",
    "Homemade Cake": "5783075783622787539",
    "Genie Lamp": "5933531623327795414",
    "Lunar Snake": "6028426950047957932",
    "Party Sparkler": "6003643167683903930",
    "Jester Hat": "5933590374185435592",
    "Witch Hat": "5821384757304362229",
    "Hanging Star": "5915733223018594841",
    "Love Candle": "5915550639663874519",
    "Cookie Heart": "6001538689543439169",
    "Desk Calendar": "5782988952268964995",
    "Jingle Bells": "6001473264306619020",
    "Snow Mittens": "5980789805615678057",
    "Voodoo Doll": "5836780359634649414",
    "Mad Pumpkin": "5841632504448025405",
    "Hypno Lollipop": "5825895989088617224",
    "B-Day Candle": "5782984811920491178",
    "Bunny Muffin": "5935936766358847989",
    "Astral Shard": "5933629604416717361",
    "Flying Broom": "5837063436634161765",
    "Crystal Ball": "5841336413697606412",
    "Eternal Candle": "5821205665758053411",
    "Swiss Watch": "5936043693864651359",
    "Ginger Cookie": "5983484377902875708",
    "Mini Oscar": "5879737836550226478",
    "Lol Pop": "5170594532177215681",
    "Ion Gem": "5843762284240831056",
    "Star Notepad": "5936017773737018241",
    "Loot Bag": "5868659926187901653",
    "Love Potion": "5868348541058942091",
    "Toy Bear": "5868220813026526561",
    "Diamond Ring": "5868503709637411929",
    "Sakura Flower": "5167939598143193218",
    "Sleigh Bell": "5981026247860290310",
    "Top Hat": "5897593557492957738",
    "Record Player": "5856973938650776169",
    "Winter Wreath": "5983259145522906006",
    "Snow Globe": "5981132629905245483",
    "Electric Skull": "5846192273657692751",
    "Tama Gadget": "6023752243218481939",
    "Candy Cane": "6003373314888696650",
    "Neko Helmet": "5933793770951673155",
    "Jack-in-the-Box": "6005659564635063386",
    "Easter Egg": "5773668482394620318",
    "Bonded Ring": "5870661333703197240",
    "Pet Snake": "6023917088358269866",
    "Snake Box": "6023679164349940429",
    "Xmas Stocking": "6003767644426076664",
    "Big Year": "6028283532500009446",
    "Holiday Drink": "6003735372041814769",
    "Gem Signet": "5859442703032386168",
    "Light Sword": "5897581235231785485",
    "Restless Jar": "5870784783948186838",
    "Nail Bracelet": "5870720080265871962",
    "Heroic Helmet": "5895328365971244193",
    "Bow Tie": "5895544372761461960",
    "Heart Locket": "5868455043362980631",
    "Lush Bouquet": "5871002671934079382",
    "Whip Cupcake": "5933543975653737112",
    "Joyful Bundle": "5870862540036113469",
    "Cupid Charm": "5868561433997870501",
    "Valentine Box": "5868595669182186720",
    "Snoop Dogg": "6014591077976114307",
    "Swag Bag": "6012607142387778152",
    "Snoop Cigar": "6012435906336654262",
    "Low Rider": "6014675319464657779",
    "Westside Sign": "6014697240977737490",
    "Stellar Rocket": "6042113507581755979",
    "Jolly Chimp": "6005880141270483700",
    "Moon Pendant": "5998981470310368313",
    "Ionic Dryer": "5933937398953018107",
    "Input Key": "5870972044522291836",
    "Mighty Arm": "5895518353849582541",
    "Artisan Brick": "6005797617768858105",
    "Clover Pin": "5960747083030856414",
    "Sky Stilettos": "5870947077877400011",
    "Fresh Socks": "5895603153683874485",
    "Happy Brownie": "6006064678835323371",
    "Ice Cream": "5900177027566142759",
    "Spring Basket": "5773725897517433693",
    "Instant Ramen": "6005564615793050414",
    "Faith Amulet": "6003456431095808759",
    "Mousse Cake": "5935877878062253519",
    "Bling Binky": "5902339509239940491",
    "Money Pot": "5963238670868677492",
    "Pretty Posy": "5933737850477478635",
    "Khabib's Papakha": "5839094187366024301",
    "UFC Strike": "5882260270843168924",
    "Victory Medal": "5830340739074097859"
};

const colorDefinitions = [
    { "name": "Black", "hex": { "centerColor": "#363738", "edgeColor": "#0e0f0f", "patternColor": "#6c6868", "textColor": "#8c8f91" } },
    { "name": "Electric Purple", "hex": { "centerColor": "#ca70c6", "edgeColor": "#9662d4", "patternColor": "#620fb4", "textColor": "#ebceff" } },
    { "name": "Lavender", "hex": { "centerColor": "#b789e4", "edgeColor": "#8a5abc", "patternColor": "#5b10ab", "textColor": "#e8d1ff" } },
    { "name": "Cyberpunk", "hex": { "centerColor": "#858ff3", "edgeColor": "#865fd3", "patternColor": "#4318a6", "textColor": "#e0d9ff" } },
    { "name": "Electric Indigo", "hex": { "centerColor": "#a980f3", "edgeColor": "#5b62d8", "patternColor": "#3722ab", "textColor": "#d8d8ff" } },
    { "name": "Neon Blue", "hex": { "centerColor": "#7596f9", "edgeColor": "#6862e4", "patternColor": "#2828bc", "textColor": "#cfddff" } },
    { "name": "Navy Blue", "hex": { "centerColor": "#6c9edd", "edgeColor": "#5c6ec9", "patternColor": "#1239a2", "textColor": "#d3e1ff" } },
    { "name": "Sapphire", "hex": { "centerColor": "#58a3c8", "edgeColor": "#5379c2", "patternColor": "#0d45b6", "textColor": "#c1deff" } },
    { "name": "Sky Blue", "hex": { "centerColor": "#58b4c8", "edgeColor": "#538bc2", "patternColor": "#07609b", "textColor": "#cde8fd" } },
    { "name": "Azure Blue", "hex": { "centerColor": "#5db1cb", "edgeColor": "#448bab", "patternColor": "#025074", "textColor": "#b5ecff" } },
    { "name": "Pacific Cyan", "hex": { "centerColor": "#5abea6", "edgeColor": "#3d95ba", "patternColor": "#02648d", "textColor": "#b6efff" } },
    { "name": "Aquamarine", "hex": { "centerColor": "#60b195", "edgeColor": "#46abb4", "patternColor": "#035f67", "textColor": "#c7fdfe" } },
    { "name": "Pacific Green", "hex": { "centerColor": "#6fc793", "edgeColor": "#3b9c84", "patternColor": "#006149", "textColor": "#c6fff0" } },
    { "name": "Emerald", "hex": { "centerColor": "#78c585", "edgeColor": "#42a171", "patternColor": "#006532", "textColor": "#b9f9d9" } },
    { "name": "Mint Green", "hex": { "centerColor": "#7ecb82", "edgeColor": "#459e5a", "patternColor": "#026b22", "textColor": "#bdffcc" } },
    { "name": "Malachite", "hex": { "centerColor": "#95b457", "edgeColor": "#3d9755", "patternColor": "#046b06", "textColor": "#c2efbe" } },
    { "name": "Shamrock Green", "hex": { "centerColor": "#8ab163", "edgeColor": "#559345", "patternColor": "#126b00", "textColor": "#d5fbc8" } },
    { "name": "Lemongrass", "hex": { "centerColor": "#aeb85a", "edgeColor": "#559345", "patternColor": "#466a07", "textColor": "#d8f2c2" } },
    { "name": "Light Olive", "hex": { "centerColor": "#c2af64", "edgeColor": "#887e45", "patternColor": "#594c04", "textColor": "#f5ebbc" } },
    { "name": "Satin Gold", "hex": { "centerColor": "#bf9b47", "edgeColor": "#8d7739", "patternColor": "#5d3b00", "textColor": "#fee4a9" } },
    { "name": "Pure Gold", "hex": { "centerColor": "#ccab41", "edgeColor": "#987b32", "patternColor": "#703c00", "textColor": "#ffe5ab" } },
    { "name": "Amber", "hex": { "centerColor": "#dab345", "edgeColor": "#b1802a", "patternColor": "#7a3100", "textColor": "#ffedc7" } },
    { "name": "Caramel", "hex": { "centerColor": "#d09932", "edgeColor": "#b77431", "patternColor": "#7d3600", "textColor": "#ffd9b3" } },
    { "name": "Orange", "hex": { "centerColor": "#d19a3a", "edgeColor": "#c06f47", "patternColor": "#9d3907", "textColor": "#ffe1c3" } },
    { "name": "Carrot Juice", "hex": { "centerColor": "#db9867", "edgeColor": "#c76f4f", "patternColor": "#8e2100", "textColor": "#ffd7ca" } },
    { "name": "Coral Red", "hex": { "centerColor": "#da896b", "edgeColor": "#c4654f", "patternColor": "#891200", "textColor": "#ffd9d2" } },
    { "name": "Persimmon", "hex": { "centerColor": "#e7a75a", "edgeColor": "#c5675f", "patternColor": "#ad0e00", "textColor": "#ffe4d7" } },
    { "name": "Strawberry", "hex": { "centerColor": "#dd8e6f", "edgeColor": "#b75a60", "patternColor": "#a90c0c", "textColor": "#ffd3d3" } },
    { "name": "Raspberry", "hex": { "centerColor": "#e07b85", "edgeColor": "#b65980", "patternColor": "#890638", "textColor": "#ffd6e6" } },
    { "name": "Mystic Pearl", "hex": { "centerColor": "#d08b6d", "edgeColor": "#b05770", "patternColor": "#9b0526", "textColor": "#fedde0" } },
    { "name": "Fandango", "hex": { "centerColor": "#e28ab6", "edgeColor": "#a4588b", "patternColor": "#8e054e", "textColor": "#ffc7eb" } },
    { "name": "Dark Lilac", "hex": { "centerColor": "#b17da5", "edgeColor": "#8c577a", "patternColor": "#652852", "textColor": "#f0c4e2" } },
    { "name": "English Violet", "hex": { "centerColor": "#b186bb", "edgeColor": "#875a91", "patternColor": "#54225f", "textColor": "#e6c7ed" } },
    { "name": "Moonstone", "hex": { "centerColor": "#7eb1b4", "edgeColor": "#588390", "patternColor": "#164552", "textColor": "#daf5fd" } },
    { "name": "Pine Green", "hex": { "centerColor": "#6ba97c", "edgeColor": "#3e7970", "patternColor": "#0b4833", "textColor": "#d8f5e5" } },
    { "name": "Hunter Green", "hex": { "centerColor": "#8fae78", "edgeColor": "#4b825b", "patternColor": "#1c491f", "textColor": "#d8f5de" } },
    { "name": "Pistachio", "hex": { "centerColor": "#97b07c", "edgeColor": "#5c814c", "patternColor": "#28471b", "textColor": "#d9f2c9" } },
    { "name": "Khaki Green", "hex": { "centerColor": "#adb070", "edgeColor": "#6b7d54", "patternColor": "#39501b", "textColor": "#d3e6bb" } },
    { "name": "Desert Sand", "hex": { "centerColor": "#b39f82", "edgeColor": "#7e735b", "patternColor": "#504429", "textColor": "#f2e5cd" } },
    { "name": "Cappuccino", "hex": { "centerColor": "#b1907e", "edgeColor": "#7c6356", "patternColor": "#4a3226", "textColor": "#ebd4c8" } },
    { "name": "Rosewood", "hex": { "centerColor": "#b77a77", "edgeColor": "#814c52", "patternColor": "#551c22", "textColor": "#edcacd" } },
    { "name": "Ivory White", "hex": { "centerColor": "#bab6b1", "edgeColor": "#a19d97", "patternColor": "#665f52", "textColor": "#f5f4f2" } },
    { "name": "Platinum", "hex": { "centerColor": "#b2aea7", "edgeColor": "#88847e", "patternColor": "#3d382d", "textColor": "#e9e7e2" } },
    { "name": "Roman Silver", "hex": { "centerColor": "#a3a8b5", "edgeColor": "#7c808a", "patternColor": "#3f4550", "textColor": "#dadfe2" } },
    { "name": "Steel Grey", "hex": { "centerColor": "#97a2ac", "edgeColor": "#63727c", "patternColor": "#334552", "textColor": "#dfe4e8" } },
    { "name": "Silver Blue", "hex": { "centerColor": "#80a4b8", "edgeColor": "#607c91", "patternColor": "#15374b", "textColor": "#c9e4f4" } },
    { "name": "Burgundy", "hex": { "centerColor": "#a35e66", "edgeColor": "#6d414a", "patternColor": "#340307", "textColor": "#e7bcc0" } },
    { "name": "Indigo Dye", "hex": { "centerColor": "#537991", "edgeColor": "#416479", "patternColor": "#031b29", "textColor": "#c2dcee" } },
    { "name": "Midnight Blue", "hex": { "centerColor": "#5c6985", "edgeColor": "#354057", "patternColor": "#030a18", "textColor": "#bfcce0" } },
    { "name": "Onyx Black", "hex": { "centerColor": "#4d5254", "edgeColor": "#313638", "patternColor": "#000000", "textColor": "#a9abad" } },
    { "name": "Battleship Grey", "hex": { "centerColor": "#8c8c85", "edgeColor": "#6c6c66", "patternColor": "#2b2a20", "textColor": "#cfcec4" } },
    { "name": "Purple", "hex": { "centerColor": "#ae6cae", "edgeColor": "#844784", "patternColor": "#470c47", "textColor": "#f3cbf3" } },
    { "name": "Grape", "hex": { "centerColor": "#9d74c1", "edgeColor": "#794da0", "patternColor": "#3e0a6b", "textColor": "#e0bdfe" } },
    { "name": "Cobalt Blue", "hex": { "centerColor": "#6088cf", "edgeColor": "#5162b8", "patternColor": "#13247c", "textColor": "#c2d3f5" } },
    { "name": "French Blue", "hex": { "centerColor": "#5c9bc4", "edgeColor": "#37739a", "patternColor": "#073b5c", "textColor": "#c1e3f9" } },
    { "name": "Turquoise", "hex": { "centerColor": "#5ec0b8", "edgeColor": "#3d928e", "patternColor": "#11534c", "textColor": "#bdf8f2" } },
    { "name": "Jade Green", "hex": { "centerColor": "#55c49c", "edgeColor": "#3b9977", "patternColor": "#044931", "textColor": "#befee7" } },
    { "name": "Copper", "hex": { "centerColor": "#d08656", "edgeColor": "#9d6531", "patternColor": "#602901", "textColor": "#f4d8be" } },
    { "name": "Chestnut", "hex": { "centerColor": "#be6f54", "edgeColor": "#994838", "patternColor": "#601508", "textColor": "#fec6b9" } },
    { "name": "Chocolate", "hex": { "centerColor": "#a46e58", "edgeColor": "#74443b", "patternColor": "#3e0a02", "textColor": "#e4b6ac" } },
    { "name": "Marine Blue", "hex": { "centerColor": "#4e689c", "edgeColor": "#3b4b7a", "patternColor": "#010821", "textColor": "#bbcbf2" } },
    { "name": "Tactical Pine", "hex": { "centerColor": "#44826b", "edgeColor": "#2f6369", "patternColor": "#002624", "textColor": "#b7e6d3" } },
    { "name": "Gunship Green", "hex": { "centerColor": "#558a65", "edgeColor": "#3d6657", "patternColor": "#07261d", "textColor": "#b5e0d4" } },
    { "name": "Dark Green", "hex": { "centerColor": "#516341", "edgeColor": "#2b452f", "patternColor": "#000501", "textColor": "#bfd1a9" } },
    { "name": "Seal Brown", "hex": { "centerColor": "#664d45", "edgeColor": "#47362e", "patternColor": "#0a0605", "textColor": "#d4bcb5" } },
    { "name": "Rifle Green", "hex": { "centerColor": "#64695c", "edgeColor": "#4b5241", "patternColor": "#0f120b", "textColor": "#c3c7bd" } },
    { "name": "Ranger Green", "hex": { "centerColor": "#5f7849", "edgeColor": "#3c4f3b", "patternColor": "#102209", "textColor": "#b7c4b5" } },
    { "name": "Camo Green", "hex": { "centerColor": "#75944d", "edgeColor": "#547341", "patternColor": "#163701", "textColor": "#cfe8b9" } },
    { "name": "Feldgrau", "hex": { "centerColor": "#899288", "edgeColor": "#5e6b63", "patternColor": "#1c261f", "textColor": "#dee9e1" } },
    { "name": "Gunmetal", "hex": { "centerColor": "#4c5d63", "edgeColor": "#2f3b42", "patternColor": "#04080a", "textColor": "#b6c5cc" } },
    { "name": "Deep Cyan", "hex": { "centerColor": "#31b5aa", "edgeColor": "#189599", "patternColor": "#004f4f", "textColor": "#d1fffd" } },
    { "name": "Mexican Pink", "hex": { "centerColor": "#e36692", "edgeColor": "#c9497c", "patternColor": "#750230", "textColor": "#ffd6e6" } },
    { "name": "Tomato", "hex": { "centerColor": "#e6793e", "edgeColor": "#d44e3f", "patternColor": "#800b00", "textColor": "#ffccbd" } },
    { "name": "Fire Engine", "hex": { "centerColor": "#f05f4f", "edgeColor": "#c43949", "patternColor": "#690009", "textColor": "#ffb7a6" } },
    { "name": "Celtic Blue", "hex": { "centerColor": "#45b8ed", "edgeColor": "#3886d9", "patternColor": "#003e85", "textColor": "#c2e7ff" } },
    { "name": "Old Gold", "hex": { "centerColor": "#b58d38", "edgeColor": "#946925", "patternColor": "#4f3302", "textColor": "#ffdd8c" } },
    { "name": "Burnt Sienna", "hex": { "centerColor": "#d66f3c", "edgeColor": "#b54b2d", "patternColor": "#6b0902", "textColor": "#ffccb0" } },
    { "name": "Carmine", "hex": { "centerColor": "#e0574a", "edgeColor": "#a8383b", "patternColor": "#4f0100", "textColor": "#ffb7ad" } },
    { "name": "Mustard", "hex": { "centerColor": "#d4980d", "edgeColor": "#c47712", "patternColor": "#7a2500", "textColor": "#ffde9c" } },
    { "name": "French Violet", "hex": { "centerColor": "#c260e6", "edgeColor": "#914ed9", "patternColor": "#4a018a", "textColor": "#ebc7ff" } }
];

// Gradient order for color display
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

// Sort colorDefinitions by gradient order
const sortedColorDefinitions = [...colorDefinitions].sort((a, b) => {
    const indexA = gradientOrder.indexOf(a.name);
    const indexB = gradientOrder.indexOf(b.name);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
});

// --- STATE MANAGEMENT ---
let filterState = {
    page: 1,
    limit: 100,
    minPrice: null,
    maxPrice: null,
    sortBy: 'monochrome',
    sortOrder: 'desc',
    selectedColors: [],
    selectedCollections: [],
    onlyUnique: false,
    ignoreMonochrome: false,
    ignoreMarkup: false
};

// --- UNIVERSAL CACHING UTILITY ---
const CacheManager = {
    // Default cache duration: 15 minutes
    DEFAULT_DURATION: 15 * 60 * 1000,

    /**
     * Get cached data
     * @param {string} key - Cache key
     * @param {number} maxAge - Maximum age in milliseconds (optional)
     * @returns {any|null} - Cached data or null if not found/expired
     */
    get(key, maxAge = this.DEFAULT_DURATION) {
        try {
            const cached = sessionStorage.getItem(key);
            if (cached) {
                const data = JSON.parse(cached);
                const age = Date.now() - data.timestamp;
                if (age < maxAge) {
                    return data.value;
                }
                // Remove expired cache
                sessionStorage.removeItem(key);
            }
        } catch (e) {
            console.error('Cache read error:', e);
        }
        return null;
    },

    /**
     * Set cached data
     * @param {string} key - Cache key
     * @param {any} value - Data to cache
     */
    set(key, value) {
        try {
            const cacheData = {
                timestamp: Date.now(),
                value: value
            };
            sessionStorage.setItem(key, JSON.stringify(cacheData));
        } catch (e) {
            console.error('Cache write error:', e);
            // If quota exceeded, clear old cache entries
            if (e.name === 'QuotaExceededError') {
                this.clearOldEntries();
                // Try again
                try {
                    sessionStorage.setItem(key, JSON.stringify({
                        timestamp: Date.now(),
                        value: value
                    }));
                } catch (e2) {
                    console.error('Cache write failed after cleanup:', e2);
                }
            }
        }
    },

    /**
     * Clear all cache entries older than specified age
     * @param {number} maxAge - Maximum age in milliseconds
     */
    clearOldEntries(maxAge = this.DEFAULT_DURATION) {
        try {
            const now = Date.now();
            const keysToRemove = [];

            for (let i = 0; i < sessionStorage.length; i++) {
                const key = sessionStorage.key(i);
                if (key) {
                    try {
                        const item = JSON.parse(sessionStorage.getItem(key));
                        if (item && item.timestamp && (now - item.timestamp) > maxAge) {
                            keysToRemove.push(key);
                        }
                    } catch (e) {
                        // Invalid JSON, remove it
                        keysToRemove.push(key);
                    }
                }
            }

            keysToRemove.forEach(key => sessionStorage.removeItem(key));
            console.log(`Cleared ${keysToRemove.length} old cache entries`);
        } catch (e) {
            console.error('Error clearing old cache entries:', e);
        }
    },

    /**
     * Remove specific cache entry
     * @param {string} key - Cache key
     */
    remove(key) {
        try {
            sessionStorage.removeItem(key);
        } catch (e) {
            console.error('Cache remove error:', e);
        }
    }
};

// --- UTILS ---
function getColorByName(name) {
    const def = colorDefinitions.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (def) return def.hex;
    return { "centerColor": "#4d5254", "edgeColor": "#313638", "patternColor": "#000000", "textColor": "#a9abad" };
}

function updateSearchButtonState(isDirty) {
    const btn = document.getElementById('btnSearch');
    if (!btn) return;

    if (isDirty) {
        btn.classList.add('highlight');
    } else {
        btn.classList.remove('highlight');
    }
}

// Format date: "24.01 15:42"
function formatTime(dateStr) {
    if (!dateStr) return "...";
    const date = new Date(dateStr);

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');

    // Формат: "24.01 15:42"
    return `${month}.${day} ${h}:${m}`;
}

// Fetch last update time from API
async function fetchLastUpdateTime() {
    try {
        // Check cache first using CacheManager
        const CACHE_KEY = 'last_update_time';
        const cachedTime = CacheManager.get(CACHE_KEY);

        if (cachedTime) {
            document.getElementById('lastUpdateTime').textContent = cachedTime;
            return;
        }

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
        // API returns object: {"LastUpdate":"2026-02-05T11:50:51.5833333"}
        if (data && data.LastUpdate) {
            const formattedTime = formatTime(data.LastUpdate);
            document.getElementById('lastUpdateTime').textContent = formattedTime;

            // Cache the result using CacheManager
            CacheManager.set(CACHE_KEY, formattedTime);
        }
    } catch (error) {
        console.error('Error fetching last update time:', error);
        document.getElementById('lastUpdateTime').textContent = '...';
    }
}

function createNFTCard(apiItem) {
    const colors = getColorByName(apiItem.BackgroundName);
    const percentage = Math.round(apiItem.Coof * 100) + "%";
    const price = apiItem.ItemPrice + " TON";
    const multiplierVal = (1 + (apiItem.MarkupPercent / 100)).toFixed(2);
    const multiplier = "x" + multiplierVal;

    const card = document.createElement('div');
    card.className = 'nft-card';

    // Check if unique
    const isUnique = apiItem.Count === 1;
    if (isUnique) {
        card.classList.add('unique');
    }

    // Count badge text
    const countText = isUnique ? 'UNIQUE' : `${apiItem.Count} pcs`;

    card.style.setProperty('--card-color', colors.centerColor);
    card.style.setProperty('--card-light', colors.edgeColor);
    card.style.setProperty('--card-edge', colors.edgeColor);

    card.onclick = () => {
        openItemDetails(apiItem);
    };
    card.style.cursor = "pointer";

    card.innerHTML = `
        <div class="card-count-badge">${countText}</div>
        <div class="card-inner">
            <div class="card-background"></div>
            <div class="card-image-wrapper">
                <img src="${apiItem.ModelPhoto}" alt="${apiItem.ModelName}" class="card-image" loading="lazy" decoding="async">
            </div>
            <div class="card-percentage">${percentage}</div>
            <div class="card-footer">
                <div class="card-price">${price}</div>
                <div class="card-multiplier">${multiplier}</div>
            </div>
        </div>
    `;

    return card;
}

// --- RENDER LOGIC ---
function renderDeals(responseData) {
    const grid = document.getElementById('nftGrid');
    const paginationControls = document.getElementById('paginationControls');
    const pageIndicator = document.getElementById('pageIndicator');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (!grid) return;
    grid.innerHTML = '';

    const deals = responseData.Items || [];
    const totalPages = responseData.TotalPages || 1;
    const currentPage = responseData.CurrentPage || 1;

    if (deals && deals.length > 0) {
        // Filter out items with Count === 0
        const validDeals = deals.filter(item => item.Count > 0);

        // Use DocumentFragment for batch insertion to improve performance
        const fragment = document.createDocumentFragment();

        // Update "Last Updated" based on the most recent deal in this batch
        let maxTime = 0;
        validDeals.forEach(item => {
            const t = new Date(item.UpdatedAt).getTime();
            if (t > maxTime) maxTime = t;
            const card = createNFTCard(item);
            fragment.appendChild(card);
        });

        grid.appendChild(fragment);

        if (maxTime > 0) {
            const timeFromDeals = formatTime(new Date(maxTime));
            const currentText = document.getElementById('lastUpdateTime').textContent;
            if (currentText === 'Loading...' || currentText === '...') {
                document.getElementById('lastUpdateTime').textContent = timeFromDeals;
            }
        }

        // Show pagination only if more than 1 page
        if (totalPages > 1) {
            paginationControls.style.display = 'flex';
            pageIndicator.textContent = `${currentPage} / ${totalPages}`;
            prevBtn.disabled = currentPage <= 1;
            nextBtn.disabled = currentPage >= totalPages;
        } else {
            paginationControls.style.display = 'none';
        }

    } else {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 20px; font-size: 18px; opacity: 0.7;">No deals match your filters</div>';
        if (filterState.page > 1) {
            paginationControls.style.display = 'flex';
            prevBtn.disabled = false;
            nextBtn.disabled = true;
        } else {
            paginationControls.style.display = 'none';
        }
    }

    // Update Filter Button Texts
    const bgBtn = document.getElementById('btnBackgrounds');
    if (bgBtn) {
        bgBtn.textContent = filterState.selectedColors.length === 0
            ? 'Backgrounds: All'
            : `Backgrounds: ${filterState.selectedColors.length}`;
    }

    const colBtn = document.getElementById('btnCollections');
    if (colBtn) {
        colBtn.textContent = filterState.selectedCollections.length === 0
            ? 'Collections: All'
            : `Collections: ${filterState.selectedCollections.length}`;
    }
}

// --- CACHING ---
const CACHE_PREFIX_DEALS = "deals_cache_";

function getDealsCacheKey(payload) {
    return CACHE_PREFIX_DEALS + JSON.stringify(payload);
}

function getCachedDeals(payload) {
    const cacheKey = getDealsCacheKey(payload);
    return CacheManager.get(cacheKey);
}

function setCachedDeals(payload, response) {
    const cacheKey = getDealsCacheKey(payload);
    CacheManager.set(cacheKey, response);
}

// --- API ---
async function fetchDeals() {
    const grid = document.getElementById('nftGrid');
    if (!grid) return;

    grid.style.opacity = '0.5';

    try {
        const rangeInput = document.getElementById('percentageRange');
        const markupInput = document.getElementById('markupInput');

        const minCoof = filterState.ignoreMonochrome ? null : (rangeInput ? (parseFloat(rangeInput.value) / 100) : 0.8);
        let maxMarkup = filterState.ignoreMarkup ? null : (markupInput && markupInput.value ? parseFloat(markupInput.value) : 30);

        const requestMaxPrice = filterState.maxPrice !== null ? filterState.maxPrice : 100000;

        // Map frontend sortBy values to API parameter names
        let apiSortBy = filterState.sortBy;
        if (filterState.sortBy === 'monochrome') {
            apiSortBy = 'coof';
        }

        const payload = {
            "MinCoof": minCoof,
            "MinPrice": filterState.minPrice,
            "MaxPrice": requestMaxPrice,
            "MaxMarkupPercent": maxMarkup,
            "Limit": filterState.limit,
            "Page": filterState.page,
            "SortBy": apiSortBy,
            "SortOrder": filterState.sortOrder,
            "BackgroundNames": filterState.selectedColors.length > 0 ? filterState.selectedColors : null,
            "CollectionNames": filterState.selectedCollections.length > 0 ? filterState.selectedCollections : null
        };

        // Add OnlySingle only if true
        if (filterState.onlyUnique) {
            payload.OnlySingle = true;
        }

        // Check cache first
        const cached = getCachedDeals(payload);
        if (cached) {
            console.log('Using cached deals data');
            renderDeals(cached);
            updateSearchButtonState(false);
            grid.style.opacity = '1';
            if (filterState.page > 1) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        const response = await fetch(API_URL, {
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

        // Cache the response
        setCachedDeals(payload, data);

        renderDeals(data);
        updateSearchButtonState(false);

        if (filterState.page > 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    } catch (error) {
        console.error('Fetch error:', error);
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 20px; color: #ff6b6b;">Error loading deals</div>';
    } finally {
        grid.style.opacity = '1';
    }
}

// --- UI HELPERS FOR LISTS ---

function renderList(containerId, items, selectedItems, type) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    // items is array of objects { name: "...", ... }
    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'color-option'; // Reusing class for style
        div.dataset.name = item.name;

        if (selectedItems.includes(item.name)) {
            div.classList.add('selected');
        }

        // Preview (Color circle or Image)
        if (type === 'color') {
            const preview = document.createElement('div');
            preview.className = 'color-preview';
            preview.style.backgroundColor = item.hex.centerColor;
            div.appendChild(preview);
        } else if (type === 'collection') {
            const img = document.createElement('img');
            img.className = 'collection-preview';
            img.src = `https://cdn.changes.tg/gifts/originals/${item.id}/Original.png`;
            img.alt = item.name;
            div.appendChild(img);
        }

        const nameSpan = document.createElement('span');
        nameSpan.className = 'color-name';
        nameSpan.textContent = item.name;
        div.appendChild(nameSpan);

        div.onclick = () => {
            div.classList.toggle('selected');
            updateSelectAllButtonState(type);
        };

        container.appendChild(div);
    });

    updateSelectAllButtonState(type);
}

function updateSelectAllButtonState(type) {
    // Check visually selected items in DOM (respecting search filter if implemented properly, but here simpler)
    // To keep it simple: check if ALL rendered options are selected
    const containerId = type === 'color' ? 'colorsList' : 'collectionsList';
    const btnId = type === 'color' ? 'btnSelectAllColors' : 'btnSelectAllCollections';

    const container = document.getElementById(containerId);
    const btn = document.getElementById(btnId);

    if (!container || !btn) return;

    const allOptions = container.querySelectorAll('.color-option:not(.hidden)');
    if (allOptions.length === 0) return;

    const selectedOptions = container.querySelectorAll('.color-option.selected:not(.hidden)');

    if (selectedOptions.length === allOptions.length) {
        btn.textContent = "Unselect All";
        btn.style.background = "rgba(255, 255, 255, 0.25)";
    } else {
        btn.textContent = "Select All";
        btn.style.background = "rgba(255, 255, 255, 0.1)";
    }
}

function handleSelectAll(type) {
    const containerId = type === 'color' ? 'colorsList' : 'collectionsList';
    const btnId = type === 'color' ? 'btnSelectAllColors' : 'btnSelectAllCollections';

    const container = document.getElementById(containerId);
    const btn = document.getElementById(btnId);

    if (!container || !btn) return;

    const isUnselect = btn.textContent.includes("Unselect");
    const allOptions = container.querySelectorAll('.color-option:not(.hidden)');

    allOptions.forEach(opt => {
        if (isUnselect) opt.classList.remove('selected');
        else opt.classList.add('selected');
    });

    updateSelectAllButtonState(type);
}

// --- MODAL & UI LOGIC ---

function openItemDetails(item) {
    const modal = document.getElementById('itemModal');
    const overlay = document.getElementById('overlay');

    const imgUrl = item.PhotoUrl || item.ModelPhoto;
    document.getElementById('detailImg').src = imgUrl;
    document.getElementById('detailNumber').textContent = `#${item.Number}`;
    document.getElementById('dCollectionTitle').textContent = item.CollectionName;

    document.getElementById('dModel').textContent = item.ModelName;
    document.getElementById('dBackground').textContent = item.BackgroundName;
    document.getElementById('dMarket').textContent = item.BestMarket;
    document.getElementById('dFloor').textContent = item.ModelFloor + " TON";

    const coofPercent = Math.round(item.Coof * 100) + "%";
    document.getElementById('dCoof').textContent = coofPercent;

    const priceEl = document.getElementById('dPrice');
    priceEl.innerHTML = `
        ${item.ItemPrice} TON 
        <span class="markup-green">(+${item.MarkupPercent}%)</span>
    `;

    const btn = document.getElementById('btnGoToMarket');
    btn.onclick = () => {
        window.open(item.Url, '_blank');
    };

    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function initModals() {
    const overlay = document.getElementById('overlay');
    const settingsModal = document.getElementById('settingsModal');
    const colorsModal = document.getElementById('colorsModal');
    const collectionsModal = document.getElementById('collectionsModal');
    const itemModal = document.getElementById('itemModal');
    const infoModal = document.getElementById('infoModal');

    const btnFilterSettings = document.getElementById('btnFilterSettings');
    const btnBackgrounds = document.getElementById('btnBackgrounds');
    const btnCollections = document.getElementById('btnCollections');
    const btnShowInfo = document.getElementById('btnShowInfo');

    // Close buttons
    const closeSettings = document.getElementById('closeSettings');
    const closeColors = document.getElementById('closeColors');
    const closeCollections = document.getElementById('closeCollections');
    const closeItem = document.getElementById('closeItem');
    const closeInfo = document.getElementById('closeInfo');

    // Apply buttons
    const applySettingsBtn = document.getElementById('applySettings');
    const applyColorsBtn = document.getElementById('applyColors');
    const applyCollectionsBtn = document.getElementById('applyCollections');

    // Select All
    const btnSelectAllColors = document.getElementById('btnSelectAllColors');
    const btnSelectAllCollections = document.getElementById('btnSelectAllCollections');

    // Search inputs
    const colorSearchInput = document.getElementById('colorSearchInput');
    const collectionSearchInput = document.getElementById('collectionSearchInput');

    // Pagination
    const prevPageBtn = document.getElementById('prevPage');
    const nextPageBtn = document.getElementById('nextPage');

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (filterState.page > 1) {
                filterState.page--;
                fetchDeals();
            }
        });
    }
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            filterState.page++;
            fetchDeals();
        });
    }

    function openModal(modal) {
        overlay.classList.add('active');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('active');
        settingsModal.classList.remove('active');
        colorsModal.classList.remove('active');
        collectionsModal.classList.remove('active');
        itemModal.classList.remove('active');
        infoModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // --- Events ---

    // Info
    btnShowInfo.addEventListener('click', () => openModal(infoModal));

    // Settings
    btnFilterSettings.addEventListener('click', () => {
        document.getElementById('filterMinPrice').value = filterState.minPrice || '';
        document.getElementById('filterMaxPrice').value = filterState.maxPrice || '';
        document.querySelector(`input[name="sortBy"][value="${filterState.sortBy}"]`).checked = true;
        document.querySelector(`input[name="sortOrder"][value="${filterState.sortOrder}"]`).checked = true;
        document.getElementById('filterOnlyUnique').checked = filterState.onlyUnique;

        // Update disabled state of sort options based on filter state
        updateSortOptionsState();

        openModal(settingsModal);
    });

    applySettingsBtn.addEventListener('click', () => {
        const minP = parseFloat(document.getElementById('filterMinPrice').value);
        const maxP = parseFloat(document.getElementById('filterMaxPrice').value);
        filterState.minPrice = isNaN(minP) ? null : minP;
        filterState.maxPrice = isNaN(maxP) ? null : maxP;

        // Get selected sort option, but validate it's not disabled
        const selectedSortBy = document.querySelector('input[name="sortBy"]:checked');
        if (selectedSortBy && !selectedSortBy.disabled) {
            filterState.sortBy = selectedSortBy.value;
        }

        filterState.sortOrder = document.querySelector('input[name="sortOrder"]:checked').value;
        filterState.onlyUnique = document.getElementById('filterOnlyUnique').checked;
        filterState.page = 1;

        // Sync inline checkboxes (inverted logic)
        const ignoreMonoInline = document.getElementById('ignoreMonochromeInline');
        const ignoreMarkupInline = document.getElementById('ignoreMarkupInline');
        const progressCard = document.querySelector('.progress-card');
        const limitCard = document.querySelector('.limit-card');

        if (ignoreMonoInline) {
            ignoreMonoInline.checked = !filterState.ignoreMonochrome; // Inverted
            if (progressCard) progressCard.classList.toggle('inactive', filterState.ignoreMonochrome);
        }
        if (ignoreMarkupInline) {
            ignoreMarkupInline.checked = !filterState.ignoreMarkup; // Inverted
            if (limitCard) limitCard.classList.toggle('inactive', filterState.ignoreMarkup);
        }

        closeModal();
        updateSearchButtonState(true);
    });

    // Colors
    btnBackgrounds.addEventListener('click', () => {
        if (colorSearchInput) colorSearchInput.value = '';
        renderList('colorsList', sortedColorDefinitions, filterState.selectedColors, 'color');
        openModal(colorsModal);
    });

    if (colorSearchInput) {
        colorSearchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('#colorsList .color-option').forEach(el => {
                if (el.dataset.name.toLowerCase().includes(term)) el.classList.remove('hidden');
                else el.classList.add('hidden');
            });
            updateSelectAllButtonState('color');
        });
    }

    btnSelectAllColors.addEventListener('click', () => handleSelectAll('color'));

    applyColorsBtn.addEventListener('click', () => {
        // Collect ALL selected from DOM (even hidden ones if we assume selection persists)
        // Since we re-render on open, we just read from DOM
        const selectedEls = document.querySelectorAll('#colorsList .color-option.selected');
        filterState.selectedColors = Array.from(selectedEls).map(el => el.dataset.name);
        filterState.page = 1;
        closeModal();
        updateSearchButtonState(true);
    });

    // Collections
    btnCollections.addEventListener('click', () => {
        if (collectionSearchInput) collectionSearchInput.value = '';
        // Prepare data array from map
        const collectionItems = Object.entries(GIFT_NAME_TO_ID).map(([name, id]) => ({ name, id }));
        renderList('collectionsList', collectionItems, filterState.selectedCollections, 'collection');
        openModal(collectionsModal);
    });

    if (collectionSearchInput) {
        collectionSearchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('#collectionsList .color-option').forEach(el => {
                if (el.dataset.name.toLowerCase().includes(term)) el.classList.remove('hidden');
                else el.classList.add('hidden');
            });
            updateSelectAllButtonState('collection');
        });
    }

    btnSelectAllCollections.addEventListener('click', () => handleSelectAll('collection'));

    applyCollectionsBtn.addEventListener('click', () => {
        const selectedEls = document.querySelectorAll('#collectionsList .color-option.selected');
        filterState.selectedCollections = Array.from(selectedEls).map(el => el.dataset.name);
        filterState.page = 1;
        closeModal();
        updateSearchButtonState(true);
    });

    // General Close
    overlay.addEventListener('click', closeModal);
    closeSettings.addEventListener('click', closeModal);
    closeColors.addEventListener('click', closeModal);
    closeCollections.addEventListener('click', closeModal);
    closeItem.addEventListener('click', closeModal);
    closeInfo.addEventListener('click', closeModal);
}

// Function to update sort options state based on filters
function updateSortOptionsState() {
    const monochromeRadio = document.querySelector('input[name="sortBy"][value="monochrome"]');
    const markupRadio = document.querySelector('input[name="sortBy"][value="markup"]');
    const monochromeLabel = monochromeRadio ? monochromeRadio.parentElement.querySelector('.radio-label') : null;
    const markupLabel = markupRadio ? markupRadio.parentElement.querySelector('.radio-label') : null;

    // Disable monochrome sort if ignoreMonochrome is true
    if (monochromeRadio && monochromeLabel) {
        monochromeRadio.disabled = filterState.ignoreMonochrome;
        if (filterState.ignoreMonochrome) {
            monochromeLabel.style.opacity = '0.3';
            monochromeLabel.style.cursor = 'not-allowed';
            // If currently selected, switch to price
            if (filterState.sortBy === 'monochrome') {
                filterState.sortBy = 'price';
                document.querySelector('input[name="sortBy"][value="price"]').checked = true;
            }
        } else {
            monochromeLabel.style.opacity = '';
            monochromeLabel.style.cursor = '';
        }
    }

    // Disable markup sort if ignoreMarkup is true
    if (markupRadio && markupLabel) {
        markupRadio.disabled = filterState.ignoreMarkup;
        if (filterState.ignoreMarkup) {
            markupLabel.style.opacity = '0.3';
            markupLabel.style.cursor = 'not-allowed';
            // If currently selected, switch to price
            if (filterState.sortBy === 'markup') {
                filterState.sortBy = 'price';
                document.querySelector('input[name="sortBy"][value="price"]').checked = true;
            }
        } else {
            markupLabel.style.opacity = '';
            markupLabel.style.cursor = '';
        }
    }
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Slider Logic
    const rangeInput = document.getElementById('percentageRange');
    const percentageText = document.getElementById('percentageValue');

    if (rangeInput && percentageText) {
        const updateSlider = (val) => {
            percentageText.textContent = `${val}%`;
            rangeInput.style.background = `linear-gradient(90deg, #fff ${(val / 100) * 100}%, rgba(255,255,255,0.1) ${(val / 100) * 100}%)`;
        };
        rangeInput.addEventListener('input', (e) => {
            updateSlider(e.target.value);
            updateSearchButtonState(true);
        });
        updateSlider(rangeInput.value);
    }

    // Input Markup 
    const markupInput = document.getElementById('markupInput');
    if (markupInput) {
        markupInput.addEventListener('input', () => {
            updateSearchButtonState(true);
        });
    }

    // Inline checkboxes sync (inverted logic: checked = active, unchecked = ignore)
    const ignoreMonoInline = document.getElementById('ignoreMonochromeInline');
    const ignoreMarkupInline = document.getElementById('ignoreMarkupInline');
    const progressCard = document.querySelector('.progress-card');
    const limitCard = document.querySelector('.limit-card');

    if (ignoreMonoInline) {
        ignoreMonoInline.addEventListener('change', (e) => {
            filterState.ignoreMonochrome = !e.target.checked; // Inverted
            if (progressCard) {
                progressCard.classList.toggle('inactive', !e.target.checked);
            }
            // If monochrome is disabled and currently sorting by it, switch to price
            if (filterState.ignoreMonochrome && filterState.sortBy === 'monochrome') {
                filterState.sortBy = 'price';
            }
            updateSearchButtonState(true);
        });
    }

    if (ignoreMarkupInline) {
        ignoreMarkupInline.addEventListener('change', (e) => {
            filterState.ignoreMarkup = !e.target.checked; // Inverted
            if (limitCard) {
                limitCard.classList.toggle('inactive', !e.target.checked);
            }
            // If markup is disabled and currently sorting by it, switch to price
            if (filterState.ignoreMarkup && filterState.sortBy === 'markup') {
                filterState.sortBy = 'price';
            }
            updateSearchButtonState(true);
        });
    }

    // 2. Search Button Logic
    const btnSearch = document.getElementById('btnSearch');
    if (btnSearch) {
        btnSearch.addEventListener('click', () => {
            filterState.page = 1;
            fetchDeals();
        });
    }

    initModals();

    // Initialize liquid glass effect
    if (window.LiquidGlassEffect) {
        const glassEffect = new LiquidGlassEffect();
        glassEffect.init();
    }

    // Clean up old cache entries on page load
    CacheManager.clearOldEntries();

    // Fetch last update time from API
    fetchLastUpdateTime();

    // Fetch deals
    fetchDeals();
});