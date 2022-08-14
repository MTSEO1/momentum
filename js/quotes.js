const quotes = [
  {
    quote: "Success isn't permanent, and failure isn't fatal.。",
    author: '-Mike Ditka-',
  },
  {
    quote:
      'Always bear in mind that your own resolution to succeed is more important than any one thing.',
    author: '-Abraham Lincoln-',
  },
  {
    quote: 'Frugality without creativity is deprivation.',
    author: '-Amy Dacyczyn-',
  },
  {
    quote: 'Great minds have purposes, others have wishes.',
    author: '-Washington Irving-',
  },
  {
    quote: 'Every time we say, "Let there be!" in any form, something happens.',
    author: '-Stella Terrill Mann-',
  },
  {
    quote: 'There is no security on this earth, there is only opportunity.',
    author: '-General Douglas MacArthur-',
  },
  {
    quote: 'You always pass failure on the way to success.',
    author: '-Mickey Rooney-',
  },
  {
    quote: 'Strive for excellence, not perfection.',
    author: '-H. Jackson Brown Jr.-',
  },
  {
    quote:
      'All you need in this life is ignorance and confidence; then success is sure.',
    author: '-Mark Twain-',
  },
  {
    quote: 'There is no "i" in team but there is in win.',
    author: '-Michael Jordan-',
  },
  {
    quote: 'A goal without a plan is just a wish.',
    author: '-Antoine de Saint-Exupery-',
  },
  {
    quote: 'A mind troubled by doubt cannot focus on the course to victory.',
    author: '-Arthur Golden-',
  },
];
const quote = document.querySelector('#quote div:first-child');
const author = document.querySelector('#quote div:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
