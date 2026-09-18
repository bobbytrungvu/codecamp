# CodeCamp website

## Publish and connect the editor

1. Upload the contents of this folder to the root of your GitHub repository. Include the hidden `.pages.yml` and `.nojekyll` files as well as the `media` folder.
2. In GitHub, open Settings > Pages. Choose Deploy from a branch, select your publishing branch and select /(root). Save.
3. Open https://app.pagescms.org/ and sign in with GitHub. Install its GitHub App for this repository and select the same branch used by GitHub Pages.
4. Open **CodeCamp page**. The editor reads the included `.pages.yml` configuration.
5. Invite teammates by email using Pages CMS collaborator management. They can edit through Pages CMS without a GitHub account.

The site has no build step. Its homepage is `index.html`.

## For teammates

Open **CodeCamp page**, edit the labelled fields and save. Wait for GitHub Pages to finish publishing, then refresh the public website.

- Registration URL: paste the complete https:// address. This updates both buttons and automatically generates the registration QR code. Empty or invalid URLs leave registration inactive and hide the QR code.
- Registration button text: updates both buttons while keeping their different sizes.
- Text: use plain text. The layout and formatting are managed separately.
- Images: select or upload an image through the image field.
- Registration QR code: generated in the browser from the Registration URL. No image upload or external QR service is needed.

Changes saved to the publishing branch go live after deployment. Coordinate edits to this single page to avoid overwriting each other's changes.

## Files

- `content.json`: editable text, image paths and registration URL.
- `.pages.yml`: Pages CMS field configuration, written in JSON-compatible YAML.
- `index.html`: layout, styling and fallback content.
- `content.js`: loads the saved content into the page. Uses plain JavaScript and the bundled QR generator.
- `media/`: images managed through the editor.
- `vendor/qrcode.js`: qrcode-generator 1.4.4 by Kazuhiko Arase, distributed under the MIT license included in the file. Source: https://github.com/kazuhikoarase/qrcode-generator

View through a web server or GitHub Pages. Double-clicking the HTML as a local file does not allow the browser to load the content file. JavaScript must be enabled to show CMS updates. If loading fails, the original fallback copy remains visible.

Setup documentation: https://pagescms.org/docs/quick-start/
