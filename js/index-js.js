const ul = document.querySelector('ul');


ul.addEventListener("click", (event) => {
    
    const listAnswers = document.querySelectorAll('p');
    const listQuestion = document.querySelectorAll('h2');

    // remove .text-hidden of every p 
    for (const p of listAnswers) {
        p.classList.add("hidden-text");
    }
    // remove .bold-question of every h2 
    for (const h2 of listQuestion) {
        h2.classList.remove("bold-question");
    }


    // edit the element clicked
    const target = event.target;


    let li = getli(target);
    if (li.nodeName === "LI") {
        let question = li.children[0];
        question = question.children[0];
        question.classList.add("bold-question");

        let answer = li.children[1]; 
        answer.classList.remove("hidden-text");
    }

});


/**
 * 
 * @param {Node} node 
 */
function getli(node) {
    let parent = node;
    // while the node is not an li node
    while (parent.nodeName != "LI")  {
        parent = parent.parentElement;
    }

    return parent;
}