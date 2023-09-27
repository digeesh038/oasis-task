document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const pendingList = document.getElementById("pending");
    const completedList = document.getElementById("complete");
    function addTask() 
    {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete">Complete</button>
                <button class="delete">Delete</button>
            </div>
        `;
        listItem.querySelector(".complete").addEventListener("click", completeTask);
        listItem.querySelector(".delete").addEventListener("click", deleteTask);
        pendingList.appendChild(listItem);
        taskInput.value = "";
    }
    function completeTask() 
    {
        const listItem = this.closest("li");
        listItem.classList.add("completed");
        completedList.appendChild(listItem);
        this.remove();
    }
    function deleteTask() 
    {
        this.closest("li").remove();
    }
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keydown", function (event) 
    {
        if (event.key === "Enter") 
        {
            addTask();
        }
    });
});
