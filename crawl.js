const url = require('url');


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
  
module.exports = {
  normalizeUrl,
};
