let inputElem = document.getElementById('inputField');
// console.log(inputElem);
let clickBtn = document.querySelector('.btn');
// console.log(clickBtn);first-todo
let firstTodo = document.getElementById('first-todo');




const addTodo = () =>{
    console.log(inputElem.value);
    // firstTodo.textContent = inputElem.value;
    let pElem = document.createElement("p");
    pElem .textContent = inputElem.value;
    // console.log(pElem);
    firstTodo.append(pElem);
    inputElem.value = "";
    
}


clickBtn.addEventListener("click", ()=>{
    addTodo();
})

firstTodo.addEventListener('click', (event)=>{
    console.log(event.target);
    let currentElem = event.target;
    currentElem.remove();
    
})
