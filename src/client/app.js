/* eslint-disable new-cap */
/* eslint-disable no-use-before-define */

import hg, { h } from 'mercury';

function App() {
  return hg.state({
    value: hg.value(0),
    channels: {
      clicks: incrementCounter,
    },
  });
}

function incrementCounter(state) {
  state.value.set(state.value() + 1);
}

App.render = function render(state) {
  return h('div.app', [
    h('h1', 'Trendees'),
    h('h2', 'Limited Time Trending Tees'),
  ]);
};

hg.app(document.body, App(), App.render);

