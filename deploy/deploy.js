import ghpages from 'gh-pages';

ghpages.publish('../build', (err) => {
  console.log(err);
});
