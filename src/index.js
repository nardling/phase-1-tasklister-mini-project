document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const taskForm = document.getElementById("create-task-form");
    taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener("submit", (e) => {
        const submittedForm = e.target;
        e.preventDefault();
        console.log("Form Submitted");
        console.log(submittedForm["new-task-description"].value);
        const taskList = document.getElementById("tasks");
        console.log(taskList);
        const newTask = document.createElement("li");
        newTask.textContent = submittedForm["new-task-description"].value;
        newTask.addEventListener("click", (e) => {
            const self = e.target;
            self.remove();
        });
        taskList.append(newTask);
    });
});
