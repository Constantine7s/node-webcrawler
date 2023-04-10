const { normalizeUrl, getUrlsFromHtml } = require('./crawl.js');
const { test, expect } = require('@jest/globals');


describe('normalizeUrl function', () => {
  test('should remove trailing slashes from the URL', () => {
    const inputUrl = 'https://example.com/path/';
    const expectedUrl = 'https://example.com/path';
    expect(normalizeUrl(inputUrl)).toEqual(expectedUrl);
  });

  test('should convert the URL to lowercase', () => {
    const inputUrl = 'HTTPS://EXAMPLE.COM/PATH';
    const expectedUrl = 'https://example.com/path';
    expect(normalizeUrl(inputUrl)).toEqual(expectedUrl);
  });

  test('should add "https://" to the URL if no protocol is specified', () => {
    const inputUrl = 'example.com';
    const expectedUrl = 'https://example.com';
    expect(normalizeUrl(inputUrl)).toEqual(expectedUrl);
  });

  test('should handle URLs with query parameters', () => {
    const inputUrl = 'https://example.com/path?query=parameter';
    const expectedUrl = 'https://example.com/path?query=parameter';
    expect(normalizeUrl(inputUrl)).toEqual(expectedUrl);
  });

  test('should handle URLs with hash fragments', () => {
    const inputUrl = 'https://example.com/path#fragment';
    const expectedUrl = 'https://example.com/path#fragment';
    expect(normalizeUrl(inputUrl)).toEqual(expectedUrl);
  });
});

describe('getUrlsFromHtml function', () => {
    test('should return an empty array if no URLs are found', () => {
        const html = '<html><body><h1>Hello, world!</h1></body></html>';
        expect(getUrlsFromHtml(html)).toEqual([]);
      });
});