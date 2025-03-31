(function () {
  console.log("It is working!");
  const overworld = new Overworld({
    element: document.querySelector(".game-container"),
  });
  overworld.init();
})();
