/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */

import hg, { h } from 'mercury';

function getTrends(state) {
  fetch('http://crossorigin.me/http://hawttrends.appspot.com/api/terms/')
    .then(resp => resp.json())
    .then((json) => {
      state.trends.set(json[1]);
    })
    .catch((err) => {
      console.log('parsing failed', err);
    });
}

function Trends() {
  return hg.state({});
}

Trends.render = function render(trends) {
  console.log(trends);
  return h('div.trends',
            h('ul', trends.map(trend => `${trend}, `)));
};

function App() {
  return hg.state({
    trends: hg.value([]),
    channels: { getTrends },
  });
}

App.render = function render(state) {
  return h('div.app', [
    h('h1', 'Trendees'),
    h('h2', 'Limited Time Trending Tees'),
	  h('input.button', {
      type: 'button',
      value: 'Click me!',
      'ev-click': hg.send(state.channels.getTrends)
    }),
    Trends.render(state.trends),
  ]);
};

hg.app(document.body, App(), App.render);

