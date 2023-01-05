const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");

ul.addEventListener("click", (event) => {
  // get the li parent of the element clicked
  const li = event.target.closest("li");

  // if the question clicked is not the
  // question which is already active
  if (li.classList[0] !== "active") {
    // remove active from every li
    removeActiveLi();
    // add the class active to the li clicked
    li.classList.add("active");
  } else {
    // remove active from every li
    removeActiveLi();
  }

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
 *
 */
function toggleUlActive() {
  let hasActive = false;
  lis.forEach((item) => {
    if (item.classList.contains("active")) {
      hasActive = true;
    }
  });
  hasActive ? ul.classList.add("ul-active") : ul.classList.remove("ul-active");
}
