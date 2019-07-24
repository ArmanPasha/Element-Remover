var clickedEl = null

function clickHandler(event) {
    //right click
    if (event.button == 2) {
        clickedEl = event.target;
    }
}

document.addEventListener("mousedown", (event) => {
    clickHandler(event)
})

//The normal click listener does not work for iframes
iframes = document.getElementsByTagName("iframe")
for (i = 0; i < iframes.length; i++) {
    iframes[i].addEventListener('mouseover', (event) => {
        clickedEl = event.target
    })
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.msg == "removeEl") {
        if (clickedEl) {
            clickedEl.remove()
            clickedEl = null
        }
    }
});