const {sortPages} = require('./report');
const { test, expect } = require('@jest/globals');


describe('sortPages', () => {
    it('should correctly sort links by occurrences and alphabetically', () => {
        const input = {
            "https://example.com": 5,
            "https://test.com": 3,
            "https://sample.com": 5,
            "https://demo.com": 2
        };
        const expectedOutput = [
            ["https://example.com", 5],
            ["https://sample.com", 5],
            ["https://test.com", 3],
            ["https://demo.com", 2]
        ];
        expect(sortPages(input)).toEqual(expectedOutput);
    });

    it('should handle empty input object', () => {
        const input = {};
        const expectedOutput = [];
        expect(sortPages(input)).toEqual(expectedOutput);
    });

    it('should handle input object with single key-value pair', () => {
        const input = {
            "https://single.com": 1
        };
        const expectedOutput = [
            ["https://single.com", 1]
        ];
        expect(sortPages(input)).toEqual(expectedOutput);
    });

    // Add more test cases as needed
});
