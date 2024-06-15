const website = 'https://www.amazon.com';

chrome.tabs.query({ url: website }, async (tabs) => {
    if (tabs.length > 0) {
        const tab = tabs[0];
        await chrome.scripting.insertCSS({
            target: { tabID: tab.id },
            files: ['clean.css']
        });
    }
})

