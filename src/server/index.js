/* eslint-disable no-console */

export default getTrends

function getTrends(trends) {
  fetch('http://crossorigin.me/http://hawttrends.appspot.com/api/terms/')
    .then(resp => resp.json())
    .then((json) => {
      trends.set(json[1].slice(1, 5));
    })
    .catch((err) => {
      console.log('parsing failed', err);
    });
}
