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
     * If in Telegram, use initData as authentication
     * Otherwise, use default API key
     */
    getApiKey() {
        if (this.isInTelegram && this.initData) {
            // Use Telegram initData as authentication
            return this.initData;
        } else {
            // Use default API key
            return "bAsmvky00QjWJAdfetXmKxpJDYi/U9txbI5N0QqJn5JIpX4iBIV+nV/J7s1AQuNGwtHRUDGcbHAxw8YjBzvKF55VHQYn9amxeLUSM8279is=";
        }
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
