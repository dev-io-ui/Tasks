const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/todo")
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
  })
}

function postTodo() {
  // Write your code here
  axios.post("https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/todo", {
    title: "Doctor appointmtent",
    status: "tue"
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}

function putTodo() {
  // Write your code here
  axios.put("https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/todo/id", {
    title: "Coding interview",
    status: "tue"
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/2e8b885543d044bc8c122f7c78a19268/todo/id")
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
}
