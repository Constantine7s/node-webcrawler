const { nortmalizeUrl } = require('./crawl.js');
const { test, expect } = require('@jest/globals');

test('normalizeUrl', () => {
    const input = "https://google.com/";
    const actual = nortmalizeUrl(input);
    const expected = "google.com";
    expect(actual).toEqual(expected);
})