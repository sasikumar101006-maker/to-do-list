function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}