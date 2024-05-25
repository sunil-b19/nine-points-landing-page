// navigation
const hamburger = document.querySelector(".hamburger")
const primaryNav = document.querySelector(".primary-navigation")

hamburger.addEventListener('click', () => {
  primaryNav.classList.toggle("open")
  hamburger.classList.toggle("close")
})



// stories slider 

document.addEventListener('DOMContentLoaded', function () {
  const content = document.querySelector('.content-cards');
  const contentImg = document.querySelector('.slider-img');
  const cardWidth = content.querySelector('.stories-content-card').offsetWidth;

  function moveContent(direction) {
    const movedCard =
      direction === 'right'
        ? content.children[0]
        : content.children[content.children.length - 1];
    const movedIndex = direction === 'right' ? 1 : -1;

    content.style.transition = 'transform 0.5s ease';
    content.style.transform = `translateX(-${movedIndex * cardWidth}px)`;

    setTimeout(() => {
      content.appendChild(
        direction === 'right' ? movedCard : movedCard.cloneNode(true)
      );
      content.style.transition = 'none';
      content.style.transform = 'translateX(0)';
    }, 500);
  }

  function moveContentImg(direction) {
    const movedCard =
      direction === 'right'
        ? contentImg.children[0]
        : contentImg.children[contentImg.children.length - 1];
    const movedIndex = direction === 'right' ? 1 : -1;

    contentImg.style.transition = 'transform 0.5s ease';
    contentImg.style.transform = `translateX(-${movedIndex * cardWidth}px)`;

    setTimeout(() => {
      contentImg.appendChild(
        direction === 'right' ? movedCard : movedCard.cloneNode(true)
      );
      contentImg.style.transition = 'none';
      contentImg.style.transform = 'translateX(0)';
    }, 500);
  }

  document.querySelector('.right-arrow').addEventListener('click', () => {
    moveContent('right');
    moveContentImg('right');
  });

  document.querySelector('.left-arrow').addEventListener('click', () => {
    moveContent('left');
    moveContentImg('left');
  });
});


// khulfi-section slider

document.addEventListener('DOMContentLoaded', function () {
  const contentImg = document.querySelector('.khulfi-slider-img');
  const cards = document.querySelectorAll('.khulfi-slider-card');
  const cardWidth = cards[0].offsetWidth;
  let currentIndex = 0;

  function moveContentImg(direction) {
    if (direction === 'right') {
      currentIndex = (currentIndex + 1) % cards.length;
    } else {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }
    contentImg.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  document.querySelector('.khulfi-slider-right-arrow').addEventListener('click', () => {
    moveContentImg('right');
  });

  document.querySelector('.khulfi-slider-left-arrow').addEventListener('click', () => {
    moveContentImg('left');
  });
});



// past events slider 

document.addEventListener('DOMContentLoaded', function () {
  const contentImg = document.querySelector('.past-img');
  const cards = document.querySelectorAll('.past-img-card');
  const cardWidth = cards[0].offsetWidth;
  let currentIndex = 0;

  function moveContentImg(direction) {
    if (direction === 'right') {
      currentIndex = (currentIndex + 1) % cards.length;
    } else {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }
    contentImg.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  document.querySelector('.past-event-slider-right-arrow').addEventListener('click', () => {
    moveContentImg('right');
  });

  document.querySelector('.past-event-slider-left-arrow').addEventListener('click', () => {
    moveContentImg('left');
  });
});