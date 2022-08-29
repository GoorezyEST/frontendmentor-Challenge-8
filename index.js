//Items
const itemOne = document.querySelector(".container__faq--acordeon__item-1");
const itemTwo = document.querySelector(".container__faq--acordeon__item-2");
const itemThree = document.querySelector(".container__faq--acordeon__item-3");
const itemFour = document.querySelector(".container__faq--acordeon__item-4");
const itemFive = document.querySelector(".container__faq--acordeon__item-5");
//Items questions
const questOne = document.querySelector(
  ".container__faq--acordeon__item-1__text-title-1"
);
const questTwo = document.querySelector(
  ".container__faq--acordeon__item-2__text-title-2"
);
const questThree = document.querySelector(
  ".container__faq--acordeon__item-3__text-title-3"
);
const questFour = document.querySelector(
  ".container__faq--acordeon__item-4__text-title-4"
);
const questFive = document.querySelector(
  ".container__faq--acordeon__item-5__text-title-5"
);
//Items buttons
const btnOne = document.querySelector(
  ".container__faq--acordeon__item-1__text-btn-1"
);
const btnTwo = document.querySelector(
  ".container__faq--acordeon__item-2__text-btn-2"
);
const btnThree = document.querySelector(
  ".container__faq--acordeon__item-3__text-btn-3"
);
const btnFour = document.querySelector(
  ".container__faq--acordeon__item-4__text-btn-4"
);
const btnFive = document.querySelector(
  ".container__faq--acordeon__item-5__text-btn-5"
);
//Items answers
const ansOne = document.querySelector(
  ".container__faq--acordeon__item-1__desc-1"
);
const ansTwo = document.querySelector(
  ".container__faq--acordeon__item-2__desc-2"
);
const ansThree = document.querySelector(
  ".container__faq--acordeon__item-3__desc-3"
);
const ansFour = document.querySelector(
  ".container__faq--acordeon__item-4__desc-4"
);
const ansFive = document.querySelector(
  ".container__faq--acordeon__item-5__desc-5"
);

//Functions

itemOne.addEventListener("click", function () {
  if (!ansTwo.classList.contains("hidden")) {
    return;
  } else if (!ansThree.classList.contains("hidden")) {
    return;
  } else if (!ansFour.classList.contains("hidden")) {
    return;
  } else if (!ansFive.classList.contains("hidden")) {
    return;
  } else {
    if (ansOne.classList.contains("hidden")) {
      questOne.classList.add("active-text");
      btnOne.classList.add("active-btn");
      ansOne.classList.remove("hidden");
    } else {
      questOne.classList.remove("active-text");
      btnOne.classList.remove("active-btn");
      ansOne.classList.add("hidden");
    }
  }
});

itemTwo.addEventListener("click", function () {
  if (!ansOne.classList.contains("hidden")) {
    return;
  } else if (!ansThree.classList.contains("hidden")) {
    return;
  } else if (!ansFour.classList.contains("hidden")) {
    return;
  } else if (!ansFive.classList.contains("hidden")) {
    return;
  } else {
    if (ansTwo.classList.contains("hidden")) {
      questTwo.classList.add("active-text");
      btnTwo.classList.add("active-btn");
      ansTwo.classList.remove("hidden");
    } else {
      questTwo.classList.remove("active-text");
      btnTwo.classList.remove("active-btn");
      ansTwo.classList.add("hidden");
    }
  }
});

itemThree.addEventListener("click", function () {
  if (!ansOne.classList.contains("hidden")) {
    return;
  } else if (!ansTwo.classList.contains("hidden")) {
    return;
  } else if (!ansFour.classList.contains("hidden")) {
    return;
  } else if (!ansFive.classList.contains("hidden")) {
    return;
  } else {
    if (ansThree.classList.contains("hidden")) {
      questThree.classList.add("active-text");
      btnThree.classList.add("active-btn");
      ansThree.classList.remove("hidden");
    } else {
      questThree.classList.remove("active-text");
      btnThree.classList.remove("active-btn");
      ansThree.classList.add("hidden");
    }
  }
});

itemFour.addEventListener("click", function () {
  if (!ansOne.classList.contains("hidden")) {
    return;
  } else if (!ansTwo.classList.contains("hidden")) {
    return;
  } else if (!ansThree.classList.contains("hidden")) {
    return;
  } else if (!ansFive.classList.contains("hidden")) {
    return;
  } else {
    if (ansFour.classList.contains("hidden")) {
      questFour.classList.add("active-text");
      btnFour.classList.add("active-btn");
      ansFour.classList.remove("hidden");
    } else {
      questFour.classList.remove("active-text");
      btnFour.classList.remove("active-btn");
      ansFour.classList.add("hidden");
    }
  }
});

itemFive.addEventListener("click", function () {
  if (!ansOne.classList.contains("hidden")) {
    return;
  } else if (!ansTwo.classList.contains("hidden")) {
    return;
  } else if (!ansThree.classList.contains("hidden")) {
    return;
  } else if (!ansFour.classList.contains("hidden")) {
    return;
  } else {
    if (ansFive.classList.contains("hidden")) {
      questFive.classList.add("active-text");
      btnFive.classList.add("active-btn");
      ansFive.classList.remove("hidden");
    } else {
      questFive.classList.remove("active-text");
      btnFive.classList.remove("active-btn");
      ansFive.classList.add("hidden");
    }
  }
});
