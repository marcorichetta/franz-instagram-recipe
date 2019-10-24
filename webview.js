'use strict';

import path from 'path';

module.exports = (Franz) => {
    const getMessages = function getMessages() {
        let count = 0;

        count = parseInt(document.querySelector("#react-root > section > nav.gW4DF > div > div > header > div > div.mXkkY.KDuQp > a > div > div > div").textContent, 10);
        
        // Just incase we don't end up with a number, set it back to zero (parseInt can return NaN)
        // From https://github.com/meetfranz/recipe-gmail/blob/52638a9841a330663461371509c0d871e22bfa35/webview.js#L13
        count = parseInt(count, 10);
        if (isNaN(count)) {
            count = 0;
        }

        Franz.setBadge(count);
    };

    Franz.injectCSS(path.join(__dirname, 'service.css'));
    
    // Check for new messages every second and update Franz badge
    Franz.loop(getMessages);
};