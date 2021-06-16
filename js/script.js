$(function () {

  $('.example__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ] 
  });

  $(".slider-box__img").twentytwenty({
    no_overlay: true,
  });

  $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       },
    ]
  });

  $('.menu-btn').on('click', function(){
    $('.menu-btn').toggleClass('_active')
    $('.mobile-show').toggleClass('_active')
  })

})

const btnForm = document.querySelectorAll('.btn-form');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.getElementById('overlay');
const btnClose = document.querySelector('.btn-close');

for (let i = 0; i < btnForm.length; i++) {
  btnForm[i].addEventListener('click', function () {
    modalWindow.classList.add('active');
  });
}

function closeModal() {
  modalWindow.classList.remove('active');
};

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

const geolocationBtn = document.getElementById('geolocation-btn__inner');
const map = document.querySelectorAll('.map');

const changeClass = el => {
  for (let btn of document.querySelectorAll('.geolocation-btn')) {
    btn.classList.remove('active')
  }
  el.classList.add('active')
}
geolocationBtn.addEventListener('click', e => {
  const currBtn = e.target.dataset.location;
  changeClass(e.target);

  for (let i = 0; i < map.length; i++) {
    map[i].classList.remove('active');
    if (map[i].dataset.map === currBtn) {
      map[i].classList.add('active')
    }
  }
})

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+38 (099) 999 99 99');
im.mask(selector);

let validateForms = function (selector, rules, messages) {
  new JustValidate(selector, {
    rules,
    messages,
    submitHandler (form, values, ajax) {
      closeModal();
      ajax({
        url: 'mail.php',
        method: 'POST',
        data: values,
        async: true,
        callback() {
          form.reset();
        }
      });  
    },
  });
}
validateForms('.modal-window', {
  tel: { required: true },
  name: { required: true }
}, {
  tel: {
      required: 'Укажите Ваш телефон',
  },
  name: {
      required: 'Укажите Ваше имя'
  }
})