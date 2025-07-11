const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');

function addTask() {
  const task = taskInput.value.trim();
  if (!task) {
    alert('Please enter a task.');
    return;
  }

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskText = document.createElement('div');
  taskText.classList.add('task-text');
  taskText.textContent = task;

  const delButton = document.createElement('button');
  delButton.classList.add('delete-button');
  delButton.textContent = 'Delete';
  delButton.onclick = () => taskDiv.remove();

  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskText);
  taskDiv.appendChild(delButton);

  taskList.appendChild(taskDiv);
  taskInput.value = '';
}