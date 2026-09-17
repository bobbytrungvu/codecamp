// Pages CMS edits content.json. Keep the layout in index.html.
function imageURL(path) {
  if (typeof path !== 'string' || !path.trim()) return null;
  // Relative paths also work at github.io/repository-name/.
  const url = new URL(path.replace(/^\/+/, ''), document.baseURI);
  return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
}

async function loadContent() {
  try {
    const response = await fetch('./content.json', { cache: 'no-cache' });
    if (!response.ok) throw new Error('Content could not be loaded');
    const content = await response.json();
    document.querySelectorAll('[data-text]').forEach(element => {
      const value = content[element.dataset.text];
      if (typeof value === 'string') element.textContent = value;
    });
    document.querySelectorAll('[data-image]').forEach(element => {
      const url = imageURL(content[element.dataset.image]);
      if (url) element.src = url;
    });
    let registrationURL;
    try {
      const url = new URL(content.registration_url);
      if (['https:', 'http:'].includes(url.protocol)) registrationURL = url.href;
    } catch { /* Leave registration inactive until a valid URL is supplied. */ }
    document.querySelectorAll('.register').forEach(link => {
      if (registrationURL) {
        link.href = registrationURL;
        link.removeAttribute('aria-disabled');
      }
    });
    const qrURL = imageURL(content.qr_image);
    if (qrURL) {
      const image = document.createElement('img');
      image.src = qrURL;
      image.alt = 'Scan to register your interest';
      const container = document.querySelector('.qr');
      image.addEventListener('load', () => {
        container.replaceChildren(image);
        container.removeAttribute('aria-label');
      }, { once: true });
    }
  } catch (error) {
    // The original content remains readable if the content request fails.
    console.error('CodeCamp content:', error);
  }
}
loadContent();
