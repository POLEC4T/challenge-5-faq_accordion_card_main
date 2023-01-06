/******************* responsive part *******************/

// if the page is for mobile, 
// then the first p is 3 lines 
// instead of two
if (window.innerWidth != 1100) {
  lis[0].classList.add("line3-li");
}

/******************* list animation part *******************/

const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");
const li3 = document.querySelector('.line3-li');

ul.addEventListener("click", (event) => {
  // get the li parent of the element clicked
  const li = event.target.closest("li");

  // if the question clicked is not the
  // question which is already active
  if (li && !li.classList.contains("active")) {
    // remove active from every li
    removeActiveLi();
    // add the class active to the li clicked
    li.classList.add("active");
  } else {
    // remove active from every li
    removeActiveLi();
  }

  // set ul active if one of the li is active
  toggleUlActive();
});

/**
 * remove active from every li
 */
function removeActiveLi() {
  lis.forEach((item) => {
    item.classList.remove("active");
  });
}

/**
 * If one of the children of ul
 * is active (one of the lis),
 * ul is set active so that I can
 * if the child is the li with 3 
 * lines (others have 2), the 
 * ul is gonna have a different 
 * class
 */
function toggleUlActive() {
  let hasActive = false;
  let is3line = false;
  lis.forEach((item) => {
    if (item.classList.contains("active")) {
      if (item.classList.contains("line3-li")) {
        is3line = true;
      }
      hasActive = true;
    }
  });
  if (is3line) {
    ul.classList.add("ul-active-3lines")
    return
  } else {
    ul.classList.remove("ul-active-3lines")
  }
  hasActive ? ul.classList.add("ul-active") : ul.classList.remove("ul-active");
}



/******************* Cube animation part *******************/

const cube = document.querySelector('#div-cube');
// const main = document.querySelector('main');

document.addEventListener('mousemove', (event) => {
  
  // main.style.transform = `translate(${event.pageX/300}px, ${event.pageY/300}px)`;
  cube.style.transform = `translate(${event.pageX/100}px, ${event.pageY/50}px)`;
});