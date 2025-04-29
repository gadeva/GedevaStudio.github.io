const hamburger = document.querySelector(".ri-menu-3-line");

const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu  .classList.toggle("menu-active");
});

window.onscroll = () => {
  menu.classList.remove("menu-active");
}

const btnFilter = document.querySelectorAll(".produk-box ul li");
const imgitem = document.querySelectorAll(".produk-list img");

btnFilter.forEach((data) => {
 data.onclick = () => {
  btnFilter.forEach((data) => {
    data.className = "";
  });

  data.className = "active";

  // filter image
  const btnTeks = data.textContent;
  imgitem.forEach(img => {
    img.style.display = "none";
    if (img.getAttribute("data-filter") == btnTeks.toLowerCase() || btnTeks == "All Produk") {
      img.style.display = "block";
    }
  });
 };
})