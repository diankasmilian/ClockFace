(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-item-open]"),
      closeMenuBtn: document.querySelector("[data-item-close]"),
      menu: document.querySelector("[data-item]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden-item");
    }
  })();

  (() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-service-open]"),
      closeMenuBtn: document.querySelector("[data-service-close]"),
      menu: document.querySelector("[data-service]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden-item");
    }
  })();

  (() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-bying-open]"),
      closeMenuBtn: document.querySelector("[data-bying-close]"),
      menu: document.querySelector("[data-bying]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden-item");
    }
  })();

  (() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-shipping-open]"),
      closeMenuBtn: document.querySelector("[data-shipping-close]"),
      menu: document.querySelector("[data-shipping]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-hidden-item");
    }
  })();