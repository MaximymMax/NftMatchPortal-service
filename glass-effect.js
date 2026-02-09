/**
 * Static Glass Effect
 * Creates a beautiful static glass effect with light refraction
 */

class LiquidGlassEffect {
    /**
     * Initialize glass effect on all filter buttons
     */
    init() {
        const filterButtons = document.querySelectorAll('.filter-btn.filter-text');

        filterButtons.forEach(button => {
            this.addGlassEffect(button);
        });
    }

    /**
     * Add static glass effect to a single button
     */
    addGlassEffect(button) {
        // Create glass layers
        const glassContainer = document.createElement('div');
        glassContainer.className = 'glass-container';

        // Main glass layer with gradient
        const glassLayer = document.createElement('div');
        glassLayer.className = 'glass-layer';

        // Light refraction layer
        const refraction = document.createElement('div');
        refraction.className = 'glass-refraction';

        // Top reflection
        const reflection = document.createElement('div');
        reflection.className = 'glass-reflection';

        glassContainer.appendChild(glassLayer);
        glassContainer.appendChild(refraction);
        glassContainer.appendChild(reflection);

        button.appendChild(glassContainer);
    }
}

// Export for use in main script
window.LiquidGlassEffect = LiquidGlassEffect;
