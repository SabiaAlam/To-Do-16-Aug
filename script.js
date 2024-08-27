document.getElementById('addTaskBtn').addEventListener('click', addTask);

    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = deleteTask;

        li.appendChild(deleteBtn);
        li.onclick = toggleComplete;

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function deleteTask(event) {
        event.stopPropagation(); // Prevent li click event from firing
        const li = event.target.parentElement; // reterive parent li that contain delete button
        li.remove();
    }

    function toggleComplete(event) {
        event.currentTarget.classList.toggle('completed');
    }
