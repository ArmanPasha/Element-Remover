const prop = {
    "id": "remover",
    "title": "Remove element",
    "contexts": ["all"]
}

chrome.contextMenus.create(prop)

chrome.contextMenus.onClicked.addListener(itemClicked)

function itemClicked(info) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            msg: "removeEl"
        })
    })
}