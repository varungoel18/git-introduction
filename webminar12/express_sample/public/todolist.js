$(function(){
    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')

    addtodoBtn.click(function (){
        // console.log("button was clicked")
        let newtodo = newtodoBox.val()
        $.post(
            '/todos/',
            {task:newtodo},
            function (data) {
                todoList.empty();
                for (todo of data) {
                    todoList.append("<li>"+todo.task+"</li>")
                }
            }
        )
    })
})
