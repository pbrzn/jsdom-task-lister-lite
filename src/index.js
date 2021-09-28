document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const submitText = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')

  document.addEventListener("submit", function(event) {
    event.preventDefault();

    //add new list item upon submit
    const li = document.createElement('li');
    li.innerHTML = submitText.value;
    tasks.appendChild(li);
    form.reset();

    //edit action
    // const edit = document.createElement('button');
    // edit.innerHTML = "Edit This Entry";
    // li.appendChild(edit);
    // edit.addEventListener('click', function(event) {
    //   const input = document.createElement('input');
    //   const submit = document.createElement('button')
    //   submit.innerHTML = "Submit Edit"
    //   li.appendChild(input);
    //   li.appendChild(submit);
    //   button.addEventListener('click', function(event) {
    //     li.innerHTML = input.value;
    //   });
    // });

    //delete action
    const del = document.createElement('button');
    del.innerHTML = 'X';
    li.appendChild(del);
    del.addEventListener('click', function(event) {
      li.remove();
    });


  });
});
