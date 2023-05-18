//
const taskArray = [];
function task() {
  const task = document.getElementById("value").value;
  const container = document.getElementById("task-container");
  const bigContainer = document.getElementById("container-task");
  const checkBox = document.getElementById("check-box");
  const div = document.createElement("div");
  div.classList.add("task-box");
  div.setAttribute("alt", "");
  const box = document.createElement("input");
  box.type = "checkbox";
  const para = document.createElement("p");
  const alertMsg = document.getElementById("alert-msg");
  const button = document.createElement("button");
  document.getElementById("value").value = "";
  taskArray.push(task);
  console.log(taskArray);
  if (task.length > 0) {
    taskArray.map((x) => {
      bigContainer.appendChild(div);
      div.appendChild(box);
      div.classList = "task-container";
      box.classList = "input-1";
      div.appendChild(para);
      para.style.width = "300px";
      para.style.overflow = "auto"
      div.appendChild(button);
      button.classList.add("del");
      button.innerHTML = "DELETE";
      button.style.cursor = "pointer";
      button.style.padding = "3px 10px";
      button.style.borderRadius = "5px";
      button.style.border = "none";
      button.style.backgroundColor = "white";
      para.innerHTML = task;
      alertMsg.innerHTML = "your task is added";
      alertMsg.style.color = "rgba(55, 255, 0, 0.837)";
      alertMsg.classList.remove("d-none");
      button.addEventListener("click", (x) => {
        div.classList.add("dd-none");
      });
      setTimeout(() => {
        alertMsg.classList.add("d-none");
      }, 2000);
    });
  } else {
    alertMsg.innerHTML = "plzz fill the field!!";
    alertMsg.style.color = "red";
    alertMsg.classList.remove("d-none");
    setTimeout(() => {
      alertMsg.classList.add("d-none");
    }, 2000);
  }
}
