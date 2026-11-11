// Menu category filters
const filterButtons = document.querySelectorAll(".filter");
const menuCards = document.querySelectorAll(".menu-grid .food-card");
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    menuCards.forEach(card => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

// Track menu item button clicks. This is an interaction event, not a purchase.
document.querySelectorAll(".track-item").forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.dataset.item;
    if (typeof gtag === "function") {
      gtag("event", "select_item", {
        item_list_name: "The Urban Plate Menu",
        items: [{ item_name: itemName }]
      });
    }
    alert("You selected " + itemName + ". This is a menu demonstration.");
  });
});

// Demonstration contact form: no information is sent or stored.
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    if (typeof gtag === "function") gtag("event", "demo_form_submit", { form_name: "contact" });
    document.getElementById("form-message").textContent =
      "Thank you! This is a demo form, so your message has not been sent.";
    contactForm.reset();
  });
}

// Demonstration newsletter form: no subscription is created.
const newsletterForm = document.getElementById("newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!newsletterForm.reportValidity()) return;
    if (typeof gtag === "function") gtag("event", "demo_form_submit", { form_name: "newsletter" });
    document.getElementById("newsletter-message").textContent =
      "Thank you! This is a demo subscription; no email has been stored.";
    newsletterForm.reset();
  });
}
