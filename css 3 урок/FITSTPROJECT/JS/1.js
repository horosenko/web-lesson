// Выберем кнопку и форму
const $btn4 = document.querySelector('btn4');
const $informathion = document.querySelector('informathion');

// При клике на кнопку
$button.addEventListener('click', e => {
  // Прокрутим страницу к форме 
  $form.scrollIntoView({ 
    block: 'nearest', // к ближайшей границе экрана
    behavior: 'smooth', // и плавно 
  });
});