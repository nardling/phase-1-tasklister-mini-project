const colors = ['green', 'yellow', 'red'];
document.addEventListener("DOMContentLoaded", () => {
    // your code here
    const taskForm = document.getElementById("create-task-form");
    taskForm === null || taskForm === void 0 ? void 0 : taskForm.addEventListener("submit", (e) => {
        const submittedForm = e.target;
        e.preventDefault();
        const taskList = document.getElementById("tasks");
        const newTask = document.createElement("li");
        newTask.style.color = 'green';
        newTask.setAttribute("data-state", "0");
        newTask.textContent = submittedForm["new-task-description"].value;
        newTask.addEventListener("mousedown", (e) => {
            const self = e.target;
            if (e.button == 0) {
                self.remove();
            }
            else if (e.button == 2) {
                e.preventDefault();
                const curState = parseInt(self.getAttribute("data-state"));
                const newState = (curState + 1) % 3;
                self.setAttribute("data-state", newState.toString());
                newTask.style.color = colors[newState];
                return false;
            }
        });
        newTask.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            return false;
        });
        taskList.append(newTask);
    });
});
