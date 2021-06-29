(function () {
  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.menu-btn').classList.toggle('btn-active');
    document.querySelector('.menu').classList.toggle('menu-active');
  });
}());







if (document.documentElement.clientWidth > 1024) {
  var myFullpage = new fullpage('#fullpage', {
  navigation:true,
  navigationPosition: 'left',
  slidesNavigation: true,
  navigationTooltips: ['Главная', 'Наши блюда', 'Почему мы?','Контакты'],
  slidesNavigation: true, });
  }

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  });
  window.onload = function () {
    if (window.innerWidth >= 567) {
      document.getElementById('video-bg').innerHTML = '<video poster="" autoplay="true" loop muted data-autoplay><source src="img/video.mp4" type="video/mp4"></video>';
    } else {
      document.getElementById('video-bg').setAttribute("style", "background-image:url(img/imgonline-com-ua-Mirror-3ItoJ2nCxrF-min.webp);");
    }
  };