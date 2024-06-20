// Given a selector, and ad type, removes ads from search pages.
// Logs number of ads removed and ad type in console.
function removeAd (selector, adType) {
    const removedElements = document.querySelectorAll(selector);
    
    removedElements.forEach((elem) => {
        elem.remove();
    });

    console.log(`Found ${removedElements.length} ads of type ${adType}`);
}

const allProducts = document.querySelectorAll('div[data-index]');

// Ensures all products are authentic.
allProducts.forEach((product) => {
    if (product.getAttribute('data-component-type') == '' ){
        product.remove();
    }
});

// const adCarousels = document.querySelectorAll('div[class*="s-widget-spacing-large]');

// adCarousels.forEach((ad) => {
//     if (ad.getAttribute('data-uuid')) {
//         ad.remove();
//     }
// });


removeAd('div[class*="AdHolder"]', 'individual ads');  //individual ads
removeAd('div[class*="s-widget-spacing-large"][data-uuid]', 'carousel');  //ad carousels
removeAd('iframe', 'sidebar');  //sidebar ads
removeAd('div[class*="s-flex-geom"]', 'video');  //video ads
removeAd('div[class*="copilot-secure-display"]', 'behavioral')  //behavioral ads
