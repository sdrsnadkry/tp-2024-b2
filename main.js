const h1 = document.getElementById("heading");

// // console.log(h1)

const h1ByTag = document.getElementsByTagName("h1")

const h1ByClass = document.getElementsByClassName("heading-class")

// // console.log(h1ByClass)

const elementByQuery = document.querySelector("#click-button");

elementByQuery.onclick = function buttonClick() {
  // setTimeout(function () {
  //   const subodh = document.querySelector("#heading");
  //   subodh.innerText = "Subodh" + Math.random();
  //   subodh.style.color = "green";
  //   subodh.style.fontSize = "100px";
  // }, 2000);

  setInterval(function () {
    const subodh = document.querySelector("#heading");
    subodh.innerText = "Subodh" + Math.random();
    subodh.style.color = "green";
    subodh.style.fontSize = "100px";
  }, 2000);
};

console.log(elementByQuery);

// console.log("hello world")

// alert("hello world")

// console.log(window)
