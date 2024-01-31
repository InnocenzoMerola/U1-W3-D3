const aggiungiAllaLista = document.getElementById("singleInput");

const button = document.getElementById("btn");
button.onclick = function () {
  if (singleInput.value !== "") {
    console.log(aggiungiAllaLista.value);
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.onclick = function (e) {
      e.target.remove();
    };

    li.innerText = aggiungiAllaLista.value;
    console.log(li);
    console.log(list);
    list.appendChild(li);
    singleInput.value = "";
  }
};
