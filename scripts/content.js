// Given a selector, and ad type, removes ads from search pages.
// Logs number of ads removed and ad type in console.
function removeAd (selector, adType) {
    const removedElements = document.querySelectorAll(selector);
    
    removedElements.forEach((elem) => {
        elem.remove();
    });

    console.log(`Found ${removedElements.length} ads of type ${adType}`);
}

// Removes all ads from search query.
function removeAds() {
    const allProducts = document.querySelectorAll('div[data-index]');

    // Ensures all products are authentic.
    allProducts.forEach((product) => {
        if (product.getAttribute('data-component-type') == '' ){
            product.remove();
        }
    });
    
    removeAd('div[class*="AdHolder"]', 'individual ads');  //individual ads
    removeAd('div[class*="s-widget-spacing-large"][data-uuid]', 'carousel');  //ad carousels
    removeAd('iframe', 'sidebar');  //sidebar ads
    removeAd('div[class*="s-flex-geom"]', 'video');  //video ads
    removeAd('div[class*="copilot-secure-display"]', 'behavioral')  //behavioral ads
}

// Initial call to remove ads
removeAds();

// Observes DOM changes to remove ads when user goes to the next page or applies filters.
const mutationObserver = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            removeAds(); 
            break;
        }
    }
});

mutationObserver.observe(document.body, {childList: true, subtree: true});