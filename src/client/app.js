/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */

import hg, { h } from 'mercury';
import getTrends from '../server/index';

function Trends() {
  return hg.state({});
}

Trends.render = function render(trends) {
  return h('div.trends',
            h('ul', trends.map(trend => `${trend}, `)));
};

function App() {
  var state = hg.state({
    trends: hg.array([]),
  });
  setTimeout(() => getTrends(state.trends));
  return state;
}

App.render = function render(state) {
  return h('div.app', [
    h('h1', 'Trendees'),
    h('h2', 'Limited Time Trending Tees'),
    Trends.render(state.trends),
  ]);
};

hg.app(document.body, App(), App.render);
