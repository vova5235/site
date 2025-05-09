const products = [
  {
    name: "Admis blue tee",
    price: 173.9,
    currency: "Руб",
    image: "img/t shirts/Admis blue tee.png",
    type: "best",
    category: "tshirts",
    availability: "outOfStock",
    size: ["M", "L"],
  },
  {
    name: "Admis pink tee",
    price: 173.9,
    currency: "Руб",
    image: "img/t shirts/Admis pink tee.png",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["S", "M", "XL"],
  },
  {
    name: "asrar alghaz tee black",
    price: 178.9,
    currency: "Руб",
    image: "img/t shirts/asrar alghaz tee black.png",
    type: "sale",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "S"],
  },
  {
    name: "asrar alghaz tee white",
    price: 178.9,
    currency: "Руб",
    image: "img/t shirts/asrar alghaz tee white.png",
    type: "sale",
    category: "tshirts",
    availability: "outOfStock",
    size: ["M", "L"],
  },
  {
    name: "Vintage 23 beygurl tee",
    price: 192.9,
    currency: "Руб",
    image: "img/t shirts/vintage 23 beygurl tee.png",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "S", "M"],
  },
  {
    name: "vintage 23 beyboi tee",
    price: 192.9,
    currency: "Руб",
    image: "img/t shirts/vintage 23 beyboi tee.png",
    type: "best",
    category: "tshirts",
    availability: "outOfStock",
    size: ["L", "XL"],
  },
  {
    name: "dream astronaut club tee yellow",
    price: 178.9,
    currency: "Руб",
    image: "img/t shirts/dream astronaut club tee yellow.png",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["M"],
  },
  {
    name: "asrar",
    price: 178.9,
    currency: "Руб",
    image: "img/t shirts/asrar.png",
    type: "sale",
    category: "tshirts",
    availability: "outOfStock",
    size: ["S", "L"],
  },
  {
    name: "dream astronaut club tee pink",
    price: 178.9,
    currency: "Руб",
    image: "img/t shirts/dream astronaut club tee pink.png",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "M"],
  },
  {
    name: "Bey Jorts",
    price: 178.9,
    currency: "Руб",
    image: "img/t shirts/Bey Jorts.png",
    type: "new",
    category: "shorts",
    availability: "inStock",
    size: ["M", "L"],
  },
  {
    name: "Evidence Hoodie Brown",
    price: 1133,
    currency: "Руб",
    image: "img/t shirts/hoodie-brown.png",
    type: "sale",
    category: "hoodies",
    availability: "outOfStock",
    size: ["S", "M", "L"],
  },
  {
    name: "Evidence Hoodie Gray",
    price: 1133,
    currency: "Руб",
    image: "img/t shirts/hoodie-gray.png",
    type: "best",
    category: "hoodies",
    availability: "inStock",
    size: ["L", "XL"],
  },
  {
    name: "Evidence Hoodie Pink",
    price: 1133,
    currency: "Руб",
    image: "img/t shirts/hoodie-pink.png",
    type: "new",
    category: "hoodies",
    availability: "inStock",
    size: ["M", "L"],
  },
  {
    name: "Evidence Hoodie Purple",
    price: 1133,
    currency: "Руб",
    image: "img/t shirts/hoodie-purple.png",
    type: "sale",
    category: "hoodies",
    availability: "inStock",
    size: ["S", "M"],
  },
  {
    name: "Evidence Hoodie Cyan",
    price: 1133,
    currency: "Руб",
    image: "img/t shirts/hoodie-cyan.png",
    type: "new",
    category: "hoodies",
    availability: "outOfStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "Evidence Pants Brown",
    price: 1100,
    currency: "Руб",
    image: "img/t shirts/pants-brown.png",
    type: "best",
    category: "pants",
    availability: "inStock",
    size: ["S", "M"],
  },
  {
    name: "Evidence Pants Gray",
    price: 1100,
    currency: "Руб",
    image: "img/t shirts/pants-gray.png",
    type: "sale",
    category: "pants",
    availability: "outOfStock",
    size: ["M"],
  },
  {
    name: "Evidence Pants Pink",
    price: 1100,
    currency: "Руб",
    image: "img/t shirts/pants-pink.png",
    type: "new",
    category: "pants",
    availability: "inStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "Evidence Pants Purple",
    price: 1100,
    currency: "Руб",
    image: "img/t shirts/pants-purple.png",
    type: "sale",
    category: "pants",
    availability: "outOfStock",
    size: ["S", "L"],
  },
  {
    name: "Evidence Pants Cyan",
    price: 1100,
    currency: "Руб",
    image: "img/t shirts/pants-cyan.png",
    type: "best",
    category: "pants",
    availability: "inStock",
    size: ["XS", "M"],
  },
  {
    name: "FBEYI Hoodie Black",
    price: 1123,
    currency: "Руб",
    image: "img/t shirts/hoodie-fbi-black.png",
    type: "new",
    category: "hoodies",
    availability: "outOfStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "FBEYI Hoodie Dark Blue",
    price: 1123,
    currency: "Руб",
    image: "img/t shirts/hoodie-fbi-dblue.png",
    type: "sale",
    category: "hoodies",
    availability: "inStock",
    size: ["XS", "S", "M"],
  },
];

if (document.body.id === "index-page") {
  // Function to render products
  function renderProducts(products) {
    const productContainer = document.querySelector(".row");
    productContainer.innerHTML = "";

    // Limit the number of products to 4
    const limitedProducts = products.slice(0, 4);

    limitedProducts.forEach((product) => {
      const productHTML = `
            <a style="text-decoration: none; color: inherit" href="./Shop.html">
                <div class="col card-home" data-type="${product.type}">
        <div class="card no-border">
          <span class="badge bg-secondary position-absolute top-0 start-0 m-2">${
            product.type === "new"
              ? "New"
              : product.type === "sale"
              ? "Sale"
              : "Best"
          }</span>
          <img src="${product.image}" class="card-img-top img-bg" alt="${
        product.name
      }" />
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price} DT</p>
          </div>
        </div>
      </div>
            </a>

  
    `;
      productContainer.innerHTML += productHTML;
    });
  }

  // Filter products by type
  function filterProducts(type) {
    const filteredProducts = type
      ? products.filter((product) => product.type === type)
      : products;
    renderProducts(filteredProducts);
  }

  // Event listeners for filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const type = e.target.dataset.type;
      filterProducts(type);
    });
  });

  // Render all products initially
  renderProducts(products);

  document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.querySelector(".newsletter form");

    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (email) {
        alert(`Благодарим вас за подписку  ${email}!`);
        emailInput.value = "";
      } else {
        alert("Пожалуйста, введите действительный адрес электронной почты.");
      }
    });
  });
}

if (document.body.id === "about-page") {
  //ABOUT US INSTA PICS SELECTION //
  document.querySelectorAll(".overlay").forEach((overlay, index) => {
    overlay.addEventListener("click", () => {
      const urls = [
   
      ];
      window.open(urls[index], "_blank");
    });
  });
}
if (document.body.id === "contact-page") {
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = contactForm.querySelector("#name");
      const emailInput = contactForm.querySelector("#email");
      const phoneInput = contactForm.querySelector("#phone");
      const messageInput = contactForm.querySelector("#message");

      const name = nameInput.value;
      const email = emailInput.value;
      const phone = phoneInput.value;
      const message = messageInput.value;

      if (name && email && phone && message) {
        alert(
          `Благодарим вас за то, что обратились к нам, ${name}! Мы ответим на ваше сообщение в ближайшее время.`
        );
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        messageInput.value = "";
      } else {
        alert("Пожалуйста, заполните все поля.");
      }
      window.location.href = "./index.html";
    });
  });
}
