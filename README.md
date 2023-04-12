# Node Webcrawler

This is a simple Node.js webcrawler script that takes in a URL and generates a report with all the links to that page on the website sorted by the number of occurrences.

## Installation

1. Clone or download the repository to your computer.
2. Open a terminal or command prompt and navigate to the root directory of the project.
3. Run npm install to install the required dependencies.


## Usage

To use the webcrawler, run the following command in your terminal:

```sh
npm start <url>
```

Replace <url> with the URL of the website you want to crawl. For example:
```sh
npm start https://example.com
```
The script will start crawling the website and generate a report with all the links to that page on the website sorted by the number of occurrences. The report will be displayed in the console.

## Example Output
```sh
============
REPORT
============
Found 6 links to the page: https://example.com
Found 5 links to the page: https://example.com/login
Found 3 links to the page: https://example.com/blog
Found 3 links to the page: https://example.com/contact
Found 2 links to the page: https://example.com/privacy-policy
============
END REPORT
============
```
