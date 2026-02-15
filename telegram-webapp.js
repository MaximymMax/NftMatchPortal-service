// Telegram WebApp Integration
// This file handles Telegram Mini App functionality

const TelegramApp = {
    isInTelegram: false,
    initData: null,
    user: null,

    /**
     * Initialize Telegram WebApp
     */
    init() {
        // Check if running inside Telegram
        if (window.Telegram && window.Telegram.WebApp) {
            this.isInTelegram = true;
            const tg = window.Telegram.WebApp;

            // Expand to fullscreen
            tg.expand();

            // Enable closing confirmation
            tg.enableClosingConfirmation();

            // Set header color to match app theme
            tg.setHeaderColor('#000000');
            tg.setBackgroundColor('#000000');

            // Get init data for authentication
            this.initData = tg.initData;
            this.user = tg.initDataUnsafe?.user;

            // Ready signal
            tg.ready();

            console.log('Telegram WebApp initialized');
            console.log('User:', this.user);
            console.log('Platform:', tg.platform);
            console.log('Version:', tg.version);

            // Detect if mobile
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            // Request fullscreen on mobile
            if (isMobile) {
                this.requestFullscreen();
            }

            return true;
        } else {
            console.log('Not running in Telegram WebApp');
            return false;
        }
    },

    /**
     * Request fullscreen mode on mobile devices
     */
    requestFullscreen() {
        try {
            const tg = window.Telegram.WebApp;
            if (tg && tg.requestFullscreen) {
                tg.requestFullscreen();
            }
        } catch (e) {
            console.log('Fullscreen not available:', e);
        }
    },

    /**
     * Get API key based on context
     * Priority: 
     * 1. Custom key from sessionStorage
     * 2. Telegram initData
     * 3. Empty string (will trigger error)
     */
    getApiKey() {
        // Check sessionStorage for custom API key
        const customKey = sessionStorage.getItem('custom_api_key');
        if (customKey) {
            console.log('Using custom API key from sessionStorage');
            return customKey;
        }

        // Enable manual override from console (legacy support)
        if (window.TelegramAuthToken) {
            console.log('Using API key from window.TelegramAuthToken');
            return window.TelegramAuthToken;
        }

        if (this.isInTelegram && this.initData) {
            // Use Telegram initData as authentication
            return this.initData;
        } else {
            console.warn("No API Key available.");
            return "";
        }
    },

    /**
     * Set custom API key (can be called from console)
     * @param {string} key - API key to use for authorization
     */
    setCustomApiKey(key) {
        if (!key || typeof key !== 'string') {
            console.error('Invalid API key. Please provide a valid string.');
            return false;
        }

        sessionStorage.setItem('custom_api_key', key);
        console.log('✅ Custom API key saved to sessionStorage');
        console.log('The key will be used for all API requests');
        console.log('Key will persist until you close the browser tab');
        return true;
    },

    /**
     * Clear custom API key
     */
    clearCustomApiKey() {
        sessionStorage.removeItem('custom_api_key');
        console.log('✅ Custom API key cleared from sessionStorage');
        console.log('Now using default authentication method');
        return true;
    },

    /**
     * Get current API key info (for debugging)
     */
    getApiKeyInfo() {
        const customKey = sessionStorage.getItem('custom_api_key');
        const hasWindowToken = !!window.TelegramAuthToken;
        const hasTelegramAuth = this.isInTelegram && !!this.initData;

        console.log('=== API Key Info ===');
        console.log('Custom key (sessionStorage):', customKey ? '✅ Set' : '❌ Not set');
        console.log('Window token:', hasWindowToken ? '✅ Set' : '❌ Not set');
        console.log('Telegram auth:', hasTelegramAuth ? '✅ Available' : '❌ Not available');
        console.log('Currently using:', this.getApiKey() ? 'API key available' : 'No key');
        console.log('==================');
    },

    /**
     * Get authorization header value
     */
    getAuthHeader() {
        return this.getApiKey();
    },

    /**
     * Show main button (optional feature)
     */
    showMainButton(text, onClick) {
        if (this.isInTelegram) {
            const tg = window.Telegram.WebApp;
            tg.MainButton.setText(text);
            tg.MainButton.show();
            tg.MainButton.onClick(onClick);
        }
    },

    /**
     * Hide main button
     */
    hideMainButton() {
        if (this.isInTelegram) {
            const tg = window.Telegram.WebApp;
            tg.MainButton.hide();
        }
    },

    /**
     * Show popup alert
     */
    showAlert(message) {
        if (this.isInTelegram) {
            window.Telegram.WebApp.showAlert(message);
        } else {
            alert(message);
        }
    },

    /**
     * Show confirm dialog
     */
    showConfirm(message, callback) {
        if (this.isInTelegram) {
            window.Telegram.WebApp.showConfirm(message, callback);
        } else {
            const result = confirm(message);
            callback(result);
        }
    },

    /**
     * Open link in external browser
     */
    openLink(url) {
        if (this.isInTelegram) {
            window.Telegram.WebApp.openLink(url);
        } else {
            window.open(url, '_blank');
        }
    },

    /**
     * Open Telegram link
     */
    openTelegramLink(url) {
        if (this.isInTelegram) {
            window.Telegram.WebApp.openTelegramLink(url);
        } else {
            window.open(url, '_blank');
        }
    },

    /**
     * Close the WebApp
     */
    close() {
        if (this.isInTelegram) {
            window.Telegram.WebApp.close();
        } else {
            window.close();
        }
    },

    /**
     * Send data to bot
     */
    sendData(data) {
        if (this.isInTelegram) {
            window.Telegram.WebApp.sendData(JSON.stringify(data));
        }
    },

    /**
     * Get theme parameters
     */
    getThemeParams() {
        if (this.isInTelegram) {
            return window.Telegram.WebApp.themeParams;
        }
        return null;
    },

    /**
     * Check if viewport is expanded
     */
    isExpanded() {
        if (this.isInTelegram) {
            return window.Telegram.WebApp.isExpanded;
        }
        return false;
    },

    /**
     * Get viewport height
     */
    getViewportHeight() {
        if (this.isInTelegram) {
            return window.Telegram.WebApp.viewportHeight;
        }
        return window.innerHeight;
    },

    /**
     * Add viewport changed handler
     */
    onViewportChanged(callback) {
        if (this.isInTelegram) {
            window.Telegram.WebApp.onEvent('viewportChanged', callback);
        }
    },

    /**
     * Haptic feedback
     */
    hapticFeedback(type = 'light') {
        if (this.isInTelegram && window.Telegram.WebApp.HapticFeedback) {
            const haptic = window.Telegram.WebApp.HapticFeedback;
            switch (type) {
                case 'light':
                    haptic.impactOccurred('light');
                    break;
                case 'medium':
                    haptic.impactOccurred('medium');
                    break;
                case 'heavy':
                    haptic.impactOccurred('heavy');
                    break;
                case 'success':
                    haptic.notificationOccurred('success');
                    break;
                case 'warning':
                    haptic.notificationOccurred('warning');
                    break;
                case 'error':
                    haptic.notificationOccurred('error');
                    break;
            }
        }
    }
};

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        TelegramApp.init();
    });
} else {
    TelegramApp.init();
}

// --- GLOBAL HELPERS FOR CONSOLE ACCESS ---
// These functions can be called directly from browser console

/**
 * Set custom API key for authorization
 * Usage: setApiKey("your-api-key-here")
 * @param {string} key - API key to use
 */
window.setApiKey = function (key) {
    return TelegramApp.setCustomApiKey(key);
};

/**
 * Clear custom API key
 * Usage: clearApiKey()
 */
window.clearApiKey = function () {
    return TelegramApp.clearCustomApiKey();
};

/**
 * Get info about current API key
 * Usage: getApiKeyInfo()
 */
window.getApiKeyInfo = function () {
    return TelegramApp.getApiKeyInfo();
};

// Log instructions on page load
console.log('%c🔑 API Key Management', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
console.log('%cYou can set a custom API key using the console:', 'color: #2196F3; font-size: 12px;');
console.log('%csetApiKey("your-key-here")', 'background: #000; color: #0f0; padding: 4px 8px; border-radius: 3px; font-family: monospace;');
console.log('%cClear API key:', 'color: #2196F3; font-size: 12px;');
console.log('%cclearApiKey()', 'background: #000; color: #0f0; padding: 4px 8px; border-radius: 3px; font-family: monospace;');
console.log('%cCheck current key status:', 'color: #2196F3; font-size: 12px;');
console.log('%cgetApiKeyInfo()', 'background: #000; color: #0f0; padding: 4px 8px; border-radius: 3px; font-family: monospace;');
