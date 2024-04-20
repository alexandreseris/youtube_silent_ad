if (document.location.host === "www.youtube.com") {
    let addPlaying = false
    let rootElem = document.querySelector("ytd-app")
    /**
     * 
     * @param {MutationRecord[]} mutations 
     * @param {MutationObserver} observer 
     */
    function muteAd(mutations, observer) {
        let adBanner = document.querySelector(".ytp-ad-text")
        let videoPlayer = document.querySelector("video[src^=blob]")

        if (videoPlayer !== null && adBanner !== null && !addPlaying) {
            videoPlayer.muted = true
            addPlaying = true
        } else if (videoPlayer !== null && adBanner === null && addPlaying) {
            videoPlayer.muted = false
            addPlaying = false
        }
    }
    // check https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    let observer = new MutationObserver(muteAd)
    observer.observe(rootElem, { childList: true, subtree: true })
}
