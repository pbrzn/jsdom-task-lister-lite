document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const submitText = document.getElementById('new-task-description');
  const tasks = document.getElementById('tasks');

  const dropdown = document.createElement('select');
  dropdown.innerHTML = '<option value="high">High</option>\n<option value="medium">Medium</option>\n<option value="low">Low</option>';
  form.appendChild(dropdown);

  document.addEventListener("submit", function(event) {
    event.preventDefault();

    //add new list item upon submit
    const li = document.createElement('li');
    li.innerHTML = submitText.value;

    //change li text color based on priority dropdown value
    if (dropdown.value == "high") {
      changeTextColor(li, '#FA0506')
    } else if (dropdown.value == "medium") {
      changeTextColor(li, '#FAF801')
    } else if (dropdown.value == "low") {
      changeTextColor(li, '#55FD0D')
    }
    tasks.appendChild(li);
    form.reset();


    function changeTextColor(item, color) {
      item.style.color = color
    };

    //delete action
    const del = document.createElement('button');
    del.innerHTML = 'X';
    li.appendChild(del);
    del.addEventListener('click', function(event) {
      li.remove();
    });

    //edit action
    const edit = document.createElement('button');
    edit.innerHTML = "Edit This Entry";
    li.appendChild(edit);
    edit.addEventListener('click', function(event) {
      const input = document.createElement('input');
      const submit = document.createElement('button')
      submit.innerHTML = "Submit Edit"
      li.appendChild(input);
      li.appendChild(submit);
      submit.addEventListener('click', function(event) {
        li.innerHTML = input.value;
        li.appendChild(del);
        li.appendChild(edit);
      });
    });

  });
});
