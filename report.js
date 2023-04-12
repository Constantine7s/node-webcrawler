function sortPages(obj) {
    const entries = Object.entries(obj);

    const sortByValueAndKey = (a, b) => {
        if (a[1] === b[1]) {
            for (let i = 0; i < Math.min(a[0].length, b[0].length); i++) {
                if (a[0].charAt(i) < b[0].charAt(i)) {
                    return -1;
                } else if (a[0].charAt(i) > b[0].charAt(i)) {
                    return 1;
                }
            }
            return a[0].length - b[0].length;
        } else {
            return b[1] - a[1];
        }
    };

    const sortedEntries = entries.sort(sortByValueAndKey);

    return sortedEntries;
}

module.exports = {sortPages}