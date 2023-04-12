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

function printReport(pages) {
  console.log('============');
  console.log('REPORT');
  console.log('============');

  const sortedPages = sortPages(pages);

  for (const page of sortedPages) {
    console.log(`Found ${page[1]} links to the page: ${page[0]}`);
  }

  console.log('============');
  console.log('END REPORT');
  console.log('============');
}

module.exports = { sortPages, printReport };
