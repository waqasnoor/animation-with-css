let scene;
let body;
let transitionEnd = "hidden";
window.addEventListener("load", (event) => {
  body = document.getElementsByTagName("body")[0];
  const ball = document.getElementsByClassName("ball")[0];
  ball.addEventListener("animationend", () => {
    toggleScene();
  });
  const loading = document.getElementsByClassName("loading")[0];
  loading.addEventListener("transitionend", () => {
    // console.log("transitionend");
    if (transitionEnd === "hidden") {
      transitionEnd = "display";
      toggleScene();
    } else {
      transitionEnd = "hidden";
    }
  });
  toggleScene();
});

function toggleScene() {
  if (scene === "scene1") {
    scene = "scene2";
  } else {
    scene = "scene1";
  }
  body.className = scene;
}
