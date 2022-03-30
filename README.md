# Scratch Notes

Make quick notes in a browser tab, save in `localStorage`. Light & dark mode based on `prefers-color-scheme`, with theme switcher toggle.

Can be used from a local folder in Chrome latest (as of today). On a Mac the URL is like `file:///Users/[username]/path/to/this/folder/index.html`. But there may be security warnings or issues depending on browser or settings, more [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage#exceptions). 

Can also be used with [serve](https://www.npmjs.com/package/serve) or [http-server](https://www.npmjs.com/package/http-server) or similar local server utility. Run `npx serve` or `npx http-server` from the folder. Or learn more about a [local server setup](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server).

## Disclaimer

Wiping or deleting cache, cookies, or other "local storage" **will** delete the contents of the saved notes. Browser crashes or other browser errors may also delete the notes. This is called _Scratch Notes_ cause reasons.

## License

Uses [normalize.css](https://github.com/necolas/normalize.css) as a reset, which is Copyright © Nicolas Gallagher and Jonathan Neal and has the MIT license, with details [here](https://github.com/necolas/normalize.css/blob/master/LICENSE.md).

All other code, [have at it](./LICENSE.md).

## Changelog

2022-03-29  

  - Fix toggle bug
  - Add font stacks
