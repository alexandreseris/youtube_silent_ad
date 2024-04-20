if (document.location.host === "www.youtube.com") {
    let addPlaying = false
    let rootElem = document.querySelector("ytd-app")
    /**
     * 
     * @param {MutationRecord[]} mutations 
     * @param {MutationObserver} observer 
     */
    function muteAd(mutations, observer) {
        let adBannerOnPage = document.querySelector(".ytp-ad-text") !== null
        let videoPlayer = document.querySelector("video[src^=blob]")
        let skipAdButon = document.querySelector(".ytp-skip-ad-button")

        if (skipAdButon !== null) {
            skipAdButon.click()
        }
        if (videoPlayer == null) {
            return
        }
        if (adBannerOnPage && !addPlaying) {
            videoPlayer.muted = true
            addPlaying = true
        } else if (!adBannerOnPage && addPlaying) {
            videoPlayer.muted = false
            addPlaying = false
        }
    }
    // check https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
    let observer = new MutationObserver(muteAd)
    observer.observe(rootElem, { childList: true, subtree: true })
}
