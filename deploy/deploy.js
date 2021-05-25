const ghpages = require('gh-pages');

ghpages.publish('build', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Site deployed');
  }
});
