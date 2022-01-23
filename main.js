if (document.location.host === "www.youtube.com") {
  let currentlyPlayingAd = false
  function loop() {
    setTimeout(() => {
      let banners = Array.from(document.querySelectorAll(".ytp-ad-text-overlay .ytp-ad-overlay-close-container, .ytp-ad-image-overlay .ytp-ad-overlay-close-container"))
      let videoAdBanner = document.querySelector(".ytp-ad-player-overlay-instream-info")

      if (banners.length > 0) {
        Array.from(banners).forEach((e) => {e.click()})
      }

      if (videoAdBanner !== null) {
        if (!currentlyPlayingAd) {
          document.querySelector("video").muted = true
          currentlyPlayingAd = true
        }
        let skipAd = document.querySelector("button.ytp-ad-skip-button")
        if (skipAd) {
          skipAd.click()
        }
      } else {
        if (currentlyPlayingAd) {
          document.querySelector("video").muted = false
          currentlyPlayingAd = false
        }
      }

      loop()
    }, 500)
  }
  loop()
}
