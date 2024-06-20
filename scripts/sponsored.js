// Given a selector, and ad type, removes ads from search pages.
// Logs number of ads removed and ad type in console.
function removeAd (selector, adType) {
    const removedElements = document.querySelectorAll(selector);
    
    removedElements.forEach((elem) => {
        elem.remove();
    });

    console.log(`Found ${removedElements.length} ads of type ${adType}`);
}

removeAd('div[class*="AdHolder"]', 'individual ads');  //individual ads
removeAd('div[class*="s-widget-spacing-large', 'carousel');  //ad carousels
removeAd('iframe', 'sidebar');  //sidebar ads
removeAd('div[class*="s-flex-geom', 'video');  //video ads
removeAd('div[class*="copilot-secure-display"]', 'behavioral')  //behavioral ads

// Keep next page bar
// const nextPageBar = document.getElementById('a-section a-spacing-none s-result-item s-flex-full-width s-widget s-widget-spacing-large');

// document.