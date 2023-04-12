const { crawlPage } = require('./crawl.js');
const { printReport } = require('./report.js');


async function main() {
  if (process.argv.length !== 3) {
    console.log('Please provide a valid URL');
    process.exit(1);
  }
  const baseUrl = process.argv[2];
  const pages = await crawlPage(baseUrl, baseUrl, {});

  printReport(pages)

}
main();
