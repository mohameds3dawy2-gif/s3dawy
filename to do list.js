        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');
        const taskList = document.getElementById('taskList');
        function addTask() {
            const taskText = taskInput.value.trim();
            
            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }
            const li = document.createElement('li');
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'deleteBtn';
            taskSpan.addEventListener('click', function() {
            this.parentElement.classList.toggle('completed');
            });
            deleteBtn.addEventListener('click', function() {
            this.parentElement.remove();
            });
            li.appendChild(taskSpan);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            taskInput.value = '';
            taskInput.focus();
        }
        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });