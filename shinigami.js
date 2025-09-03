// ==UserScript==
// @name        Shinigami Scipts
// @namespace   Violentmonkey Scripts
// @match       https://*.shinigami.asia/*
// @grant       none
// @run-at      document-idle
// @version     1.4
// @author      Andrian Point
// @description Sets 'showAds' to 0 on initial load and when the URL changes.
// ==/UserScript==

(function() {
    'use strict';
    let lastUrl = window.location.href;

    // Function to set the session storage
    function setAdsSession() {
        try {
            sessionStorage.setItem('showAds', '0');
            console.log("Violentmonkey: 'showAds' has been set to 0 in sessionStorage.");
        } catch (e) {
            console.error("Violentmonkey: Failed to set 'showAds' in sessionStorage.", e);
        }
    }

    // Set the value on initial page load
    setAdsSession();

    // Check for URL changes every 200ms
    setInterval(() => {
        const currentUrl = window.location.href;
        if (currentUrl !== lastUrl) {
            console.clear();
            console.log('Previous:', lastUrl);
            console.log('New:', currentUrl);
            lastUrl = currentUrl;
            setAdsSession();
        }
    }, 3000);
})();
