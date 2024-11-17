// Menü Verisi
const menu = [
  {
    id: 1,
    title: "Sushi Platter",
    category: "Sushi",
    price: 15.99,
    img: "https://via.placeholder.com/150",
    desc: "Fresh and delicious sushi served with soy sauce.",
  },
  {
    id: 2,
    title: "Ramen Bowl",
    category: "Ramen",
    price: 12.99,
    img: "https://via.placeholder.com/150",
    desc: "Hot and savory ramen bowl with fresh ingredients.",
  },
  {
    id: 3,
    title: "Dim Sum",
    category: "Dim Sum",
    price: 9.99,
    img: "https://via.placeholder.com/150",
    desc: "Steamed dim sum with a variety of fillings.",
  },
  {
    id: 4,
    title: "Tempura",
    category: "Tempura",
    price: 11.99,
    img: "https://via.placeholder.com/150",
    desc: "Crispy fried vegetables and shrimp.",
  },
  {
    id: 5,
    title: "Green Tea Ice Cream",
    category: "Dessert",
    price: 4.99,
    img: "https://via.placeholder.com/150",
    desc: "Refreshing green tea flavored ice cream.",
  },
];

// DOM Elementlerini Seç
const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelector(".btn-container");

// Sayfa Yüklendiğinde Menü ve Butonları Yükle
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayFilterButtons();
});

// Menü Öğelerini Dinamik Olarak Göster
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `
      <article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>
    `;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Filtreleme Butonlarını Dinamik Olarak Göster
function displayFilterButtons() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>
                ${category}
              </button>`;
    })
    .join("");

  filterBtns.innerHTML = categoryBtns;

  const filterButtons = filterBtns.querySelectorAll(".filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory =
        category === "All"
          ? menu
          : menu.filter((menuItem) => menuItem.category === category);
      displayMenuItems(menuCategory);
    });
  });
}
