const {crawlPage} = require ('./crawl.js');

function main() {
  if (process.argv.length !== 3) {
    console.log('Please provide a valid URL');
    process.exit(1);
  }
  const baseUrl = process.argv[2]
  crawlPage(baseUrl)
}
main();
