const container = document.getElementById("container");

const aggiungiAllaLista = document.getElementById("singleInput");

const button = document.getElementById("btn");
button.onclick = function () {
  if (singleInput.value !== "") {
    console.log(aggiungiAllaLista.value);
    const list = document.getElementById("list");
    const li = document.createElement("li");

    li.innerText = aggiungiAllaLista.value;
    console.log(li);
    console.log(list);
    list.appendChild(li);
    li.style = "cursor: pointer";
    singleInput.value = "";

    const btnDel = document.createElement("button");
    btnDel.classList.add("trashBtn");
    btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>`;
    li.appendChild(btnDel);
    btnDel.addEventListener("click", deleteLi);
  }

  container.appendChild(list);

  function deleteLi(e) {
    const shoppingCart = e.currentTarget.parentElement;
    list.removeChild(shoppingCart);
  }
};
