/* eslint-disable no-console */

import config from './config';

function getTrends(trends) {
  fetch('http://crossorigin.me/http://hawttrends.appspot.com/api/terms/')
    .then(resp => resp.json())
    .then((json) => {
      let trendsData = [];
      json[1].slice(1, 5).map(name => getTrendImage(trends, trendsData, name));
    })
    .catch((err) => {
      console.log('Fetching 5 Trends Failed', err);
    });
}

function getTrendImage(trends, trendsData, trend) {
  fetch(`https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${trend}&count=3&offset=0&mkt=en-us`,
    {headers: {'Ocp-Apim-Subscription-Key': config.bingImageSearch.key}})
  .then(resp => resp.json())
  .then((json) => {
    let randImgPicker = Math.floor(Math.random() * 3);
    let src = json.value[randImgPicker].contentUrl;
    trendsData.push({name: trend, imageSrc: src});
    trends.set(trendsData);
  })
  .catch((err) => {
    console.log('Fetching Trend Image Failed', err)
  });
}

const trendsAPI = {
  getTrends,
  getTrendImage
};

export default trendsAPI;

