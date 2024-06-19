const adHolders = document.querySelectorAll('div[class*="AdHolder"]');

console.log('Found ${adHolders.length} individual ads');

adHolders.forEach((div) => {
    div.remove();
});

const sponsoredGallery = document.querySelectorAll('div[class*="s-widget-spacing-large"]');

console.log('Found ${sponsoredGallery.length} sponsored galleries');

sponsoredGallery.forEach((div) => {
    div.remove();
});

const iFrames = document.querySelectorAll('iframe');

iFrames.forEach((iFrame) => {
    iFrame.remove();
});

const videos = document.querySelectorAll('div[class*="s-flex-geom"]');

videos.forEach((video) => {
    video.remove();
});
