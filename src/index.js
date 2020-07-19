let scene;
let loader;
let transitionEnd = "hidden";
let isLoading = true;
window.addEventListener("load", (event) => {
  loader = document.getElementsByClassName("loader")[0];
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
  // return;
  // return (container.className = "scene1");
  if (!isLoading) {
    loader.className = "loader hidden";
    return showData();
  }
  if (scene === "scene1") {
    scene = "scene2";
  } else {
    scene = "scene1";
  }
  loader.className = `loader playing ${scene}`;
}
setTimeout(() => {
  isLoading = false;
}, 6000);
function showData() {
  const container = document.getElementsByClassName("container")[0];
  console.log("show data");
  console.log({ container });
  container.className = "container showdata";
}
