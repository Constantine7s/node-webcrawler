const url = require('url');
const { JSDOM } = require('jsdom');

async function crawlPage(pageUrl) {
  console.log(`I'm crawling over ${pageUrl}`);

  try {
    const resp = await fetch(pageUrl);

    if (resp.status >= 400) {
      console.log(
        `Error when trying to fetch ${pageUrl} with status ${resp.status}`
      );
      return;
    }

    const contentType = resp.headers.get('content-type');
    if (!contentType.includes('text/html')) {
      console.log(
        `Wrong content-type: ${contentType}`
      );
      return;
    }

    console.log(await resp.text());
  } catch (err) {
    console.log(`Error when trying to fetch ${pageUrl}: ${err.message}`);
  }
}

function normalizeUrl(urlString) {
  let parsedUrl = url.parse(urlString);

  if (!parsedUrl.protocol) {
    parsedUrl = url.parse(`https://${urlString}`);
  }

  parsedUrl.pathname = parsedUrl.pathname.replace(/\/+$/, '');

  parsedUrl.protocol = parsedUrl.protocol.toLowerCase();
  parsedUrl.hostname = parsedUrl.hostname.toLowerCase();
  parsedUrl.pathname = parsedUrl.pathname.toLowerCase();

  return url.format(parsedUrl);
}

function getUrlsFromHtml(htmlBody, baseUrl) {
  const dom = new JSDOM(htmlBody);
  const urls = [];
  const linkElements = dom.window.document.querySelectorAll('a');

  for (const linkElement of linkElements) {
    if (linkElement.href.slice(0, 1) === '/') {
      try {
        const urlObj = new URL(`${baseUrl}${linkElement.href}`);
        urls.push(urlObj.href);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      try {
        const urlObj = new URL(linkElement.href);

        urls.push(urlObj.href);
      } catch (err) {
        console.log(err.message);
      }
    }
  }
  return urls;
}

module.exports = {
  normalizeUrl,
  getUrlsFromHtml,
  crawlPage,
};
