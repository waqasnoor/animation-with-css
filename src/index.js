window.addEventListener("load", (event) => {
  const body = document.getElementsByTagName("body")[0];
  const ball = document.getElementsByClassName("ball")[0];
  ball.addEventListener("animationend", () => {
    body.className = "";
  });
  body.classList.add("playing");
});
