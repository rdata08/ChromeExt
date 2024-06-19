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
