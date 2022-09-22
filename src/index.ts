const colors: string[] = ['green', 'yellow', 'red']

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById("create-task-form");
  taskForm?.addEventListener("submit", (e) => {
    const submittedForm = e.target;
    e.preventDefault();
    const taskList: HTMLElement = document.getElementById("tasks")
    const newTask: HTMLElement = document.createElement("li")
    newTask.style.color = 'green'
    newTask.setAttribute("data-state", "0");
    newTask.textContent = submittedForm["new-task-description"].value
    newTask.addEventListener("mousedown", (e)=>{
      const self:HTMLElement = e.target as HTMLElement;
      if (e.button == 0)
      {
        self.remove();
      } else if (e.button == 2)
      {
        e.preventDefault()
        const curState: number = parseInt(self.getAttribute("data-state"))
        const newState: number = (curState + 1) % 3
        self.setAttribute("data-state", newState.toString());
        newTask.style.color = colors[newState]
        return false;
      }
    })
    newTask.addEventListener("contextmenu", (e) => { 
      e.preventDefault()
      return false })
    taskList.append(newTask);
  })
});
