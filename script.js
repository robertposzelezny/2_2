(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");
  const list = document.getElementById("list");
  const add = document.getElementById("add");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        let html = "<ul>";
        array.forEach((element) => {
          html += `<li>${element.id}. ${element.title} <br> ${element.body}</li>`;
        });
        html += "</ul>";
        setTimeout(() => {
          answer.innerHTML += html;
        }, 2000);
      });
  });

  list.addEventListener("change", () => {
    let id = list.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((element) => {
        let html = `<ul><li>${element.id}. ${element.title} <br> ${element.body}</li></ul>`;
        answer.innerHTML = html;
      });
  });

  add.addEventListener("click", () => {
    answer.innerHTML = "Processing...";
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: "test",
        body: "test testowy 123",
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setTimeout(() => {
          answer.innerHTML = `Dodano nowy post o ID = ${res.id}`;
        }, 2000);
      });
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
