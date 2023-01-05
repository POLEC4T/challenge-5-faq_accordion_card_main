const ul = document.querySelector('.list_FAQ');
const lis = document.querySelectorAll('li');

ul.addEventListener("click", (event) => {

    // get the li parent of the element clicked
    const li = event.target.closest("li");
    console.log(li.classList);
    // if the question clicked is the 
    // question which is already active
    if (li.classList[0] === "active") {
        // remove active from every li
        removeActiveLi();
        return
    } else {
        // remove active from every li
        removeActiveLi();
        // add the class active to the li clicked
        li.classList.add("active");
    }
    
    
    
    
});

/**
 * remove active from every li
 */
function removeActiveLi() {
	lis.forEach((item) => {
		item.classList.remove('active')
	})
}