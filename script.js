document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");

  // Products Data
  const products = [
    {
      name: "Faux Rabbit Brown Throw",
      image: "https://m.media-amazon.com/images/I/81sIOTbC+CL._AC_SL1500_.jpg",
      link: "https://amzn.to/4gH9Emm",
    },
    {
      name: "Live Indoor Ficus Plant",
      image: "https://m.media-amazon.com/images/I/81cndSurZzL._AC_SL1500_.jpg",
      link: "https://amzn.to/406KXZy",
    },
    {
      name: "Live Indoor Snake Plant",
      image:
        "https://m.media-amazon.com/images/I/71G0T-TYEPL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      link: "https://amzn.to/4j5c13P",
    },
    {
      name: "Black Ceramic Mugs",
      image: "https://m.media-amazon.com/images/I/81FflJj4CyL._AC_SL1500_.jpg",
      link: "https://amzn.to/3W5vvvo",
    },
  ];

  // Generate Product Cards
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <a href="${product.link}" target="_blank" class="btn">Shop Now</a>
      `;
    productGrid.appendChild(productCard);
  });
});
