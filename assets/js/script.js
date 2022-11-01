const modal = document.getElementsByClassName("modal")[0];
const button = document.getElementById("button-modal");
const buttonsModal = document.getElementsByClassName("modal-button");
const modalText = document.getElementById("modal-text");

const modalTextLayout = `Are you sure want to continue?`;
modalText.innerHTML = modalTextLayout;

for (var i = 0; i < buttonsModal.length; i++) {
  buttonsModal[i].setAttribute("id", `button-${i}`);

  buttonsModal[i].onclick = handleShowText;
}

button.onclick = function () {
  modal.style.display = "block";
};

function handleShowText(e) {
  modal.style.display = "none";

  const buttonText = e.target.innerText;
  const message = `<p>You just clicked '${buttonText}'</p>`;

  const result = document.getElementById("message-result");

  result.innerHTML = message;
}
