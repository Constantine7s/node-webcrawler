function main() {
  if (process.argv.length !== 3) {
    console.log('Please provide a valid URL');
    process.exit(1);
  }

  const baseUrl = process.argv[2]
  console.log(`I'm crawling all over ${baseUrl}`);
}
main();
