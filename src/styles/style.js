// document.addEventListener("DOMContentLoaded", function() {
//   const openModalBtn = document.getElementById("openModalBtn");
//   const closeModalBtn = document.getElementById("closeModalBtn");
//   const modal = document.getElementById("myModal");

//   openModalBtn.addEventListener("click", function() {
//     modal.style.display = "block";
//   });

//   closeModalBtn.addEventListener("click", function() {
//     modal.style.display = "none";
//   });

//   window.addEventListener("click", function(event) {
//     if (event.target === modal) {
//       modal.style.display = "none";
//     }
//   });
// });
function OpenModal(jour) {
    alert(jour)
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}
function CloseModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}