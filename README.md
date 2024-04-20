# youtube_silent_ad

*Mute video ads and skip them when possible. close text and image banner on Youtube*

[Addon link](https://addons.mozilla.org/fr/firefox/addon/youtube-silent-ad/)

## Test (using web-ext)

```sh
web-ext run --arg="--new-tab=https://www.youtube.com"
# will start a browser with an empty profile on the youtube home page
```

## Build (using web-ext)

```sh
web-ext build --overwrite-dest
# zip is under the web-ext-artifacts folder
```

Check [firefox doc](https://extensionworkshop.com/documentation/publish/package-your-extension/) if needed
