// src/data/scenes/index.js

const requireScene = require.context('.', false, /\.js$/);
const scenes = {};

requireScene.keys().forEach(filename => {
  if (filename === './index.js') return;
  const scene = requireScene(filename).default;
  scenes[scene.id] = scene;
});

export default scenes;