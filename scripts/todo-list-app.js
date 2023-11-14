const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    let todoListHTML = '';

    for(let i =0;i<todoList.length;i++){
        let todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML+=html;
    }
    document.querySelector('.js-adding-para').innerHTML = todoListHTML;
}
