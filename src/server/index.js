/* eslint-disable no-console */

const trendsAPI = {
  getTrends: getTrends,
  getTrendImage: getTrendImage
};

export default trendsAPI;

function getTrends(trends) {
  fetch('http://crossorigin.me/http://hawttrends.appspot.com/api/terms/')
    .then(resp => resp.json())
    .then((json) => {
      let trendsData = [];
      json[1].slice(1, 5).map(name => getTrendImage(trends, trendsData, name));
    })
    .catch((err) => {
      console.log('parsing failed', err);
    });
}

function getTrendImage(trends, trendsData, trend) {
  fetch(`https://api.cognitive.microsoft.com/bing/v5.0/images/search?q=${trend}&count=3&offset=0&mkt=en-us`,
        {headers: {'Ocp-Apim-Subscription-Key': process.env.BING_SEARCH_API_KEY}})
  .then(resp => resp.json())
  .then((json) => {
    let randImgPicker = Math.floor(Math.random() * 3);
    let src = json.value[randImgPicker].contentUrl;
    trendsData.push({name: trend, imageSrc: src});
    trends.set(trendsData);
  })
  .catch((err) => {
    console.log('parsing failed', err)
  });
}
