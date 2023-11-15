const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;
    if(name.length !== 0){
        todoList.push(name);
        console.log(todoList);
        inputElement.value = '';
        displayTodoList();
    }
    
}

function displayTodoList(){
    
    
        let todoListHTML = '';
        for(let i =0;i<todoList.length;i++){
            let todo = todoList[i];
            const html = `
            <p>
                ${todo} 
                <button onclick = "
                todoList.splice(${i},1);
                displayTodoList();
                ">Delete</button>
            </p>`;
            todoListHTML+=html;
        }
        document.querySelector('.js-adding-para').innerHTML = todoListHTML;
}
