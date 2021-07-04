import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'regenerator-runtime/runtime';
import 'core-js/core';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);
    if (!id) return; // guard clause on load
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe:
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

['hashchange', 'load'].forEach(event =>
  window.addEventListener(event, showRecipe)
);
