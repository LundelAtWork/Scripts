// ==UserScript==
// @name         #PDX Rack Install - Switchbuilder Click Position?
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Click Position? for all builds listed on the switch builder page.  Works on both PDT and PDX.
// @author       Lundel
// @match        https://switchbuilder.corp.amazon.com/*
// @match        https://switchbuilder.pdt.aws-border.com/*
// @downloadURL  https://amazon.awsapps.com/workdocs-beta/index.html#/document/118e87c08538b3e65ece11547b004221732f1048ade81f8d30ae558272c26ee3
// @updateURL    https://amazon.awsapps.com/workdocs-beta/index.html#/document/118e87c08538b3e65ece11547b004221732f1048ade81f8d30ae558272c26ee3
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @supportURL   mailto://lundel@amazon.com
// @grant        none
// ==/UserScript==

// This is a hack to make SB_RackPosition work a little better.  May eventually refactor SB_RackPosition altogether, we'll see.

// Download link
// https://drive.corp.amazon.com/view/smalfred%40/GM_Scripts/Owner/SB_RackPosition.user.js

// 5/11/2023
// Changed from a manual implementation to automatic button clicking using async timer and function calls, every 1000 ms, button is clicked.  If this
// needs to be changed, you can set the value below
// Delay timer in ms to wait between each button click.
// 1000 ms = 1 second, 5000 ms = 5 seconds.
// Change it to a higher value if it is laggy for you.
const DEF_DELAY = 1000;

// ***********************************************



// Sleep function, used to delay looping through each Position? button by x number of ms.  If no delay is passed, it will use the default delay (1000ms or 1 second)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms || DEF_DELAY));
}

//IIAFE (immediately invoked async function expression)
(async()=>{
    // Get all buttons
    var buttons = document.querySelectorAll('span > button')

    // Loop through all buttons and click them
    for (var i =0; i< buttons.length; i++){
        buttons[i].click();

        // Auto calls sleep(), if no delay is passed, it will use the default delay (1000ms or 1 second) before continuing.
        await sleep();

        // Log the button that was clicked
        console.log("Clicked a button"+buttons[i].innerHTML)//Do some more stuff
    }
})()