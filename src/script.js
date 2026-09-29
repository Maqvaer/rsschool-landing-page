
//-------------switch theme-----------------
const button = document.querySelector('.switch-theme');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

button.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    document.getElementById('light-theme').classList.remove('action-theme');
  } else {
    localStorage.setItem('theme', 'light');
    document.getElementById('light-theme').classList.add('action-theme');
  }
});



//-------------------burger-menu---------------------

document.getElementById('burger-button').addEventListener("click", function(){
  document.getElementById('nav').classList.toggle('active-burger-links');
  document.getElementById('burger-button').classList.toggle('burger-button-active');
  document.body.classList.toggle('no-scroll-body');
  if(document.getElementById('nav').classList.contains('active-burger-links')){
  document.addEventListener('keydown', function(event) {
  if (event.code === 'Escape') {
    document.getElementById('nav').classList.remove('active-burger-links');
    document.getElementById('burger-button').classList.remove('burger-button-active');
    document.querySelector('body').classList.remove('no-scroll-body');
  }
});
}
});
//-------------------------------------------------------------



