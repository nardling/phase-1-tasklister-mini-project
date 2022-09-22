document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  taskForm?.addEventListener("submit", (e) => {
    const submittedForm = e.target;
    e.preventDefault();
    console.log("Form Submitted");
    console.log(submittedForm["new-task-description"].value);
    const taskList = document.getElementById("tasks")
    console.log(taskList)
    const newTask = document.createElement("li")
    newTask.textContent = submittedForm["new-task-description"].value
    newTask.addEventListener("click", (e)=>{
      const self:HTMLElement = e.target as HTMLElement;
      self.remove();
    })
    taskList.append(newTask);
  })
});
