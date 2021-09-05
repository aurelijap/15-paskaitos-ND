function changeHeader(target, name) {
  var tabs = document.getElementsByClassName('tab');
  var buttons = document.getElementsByTagName('button');
  var foto = document.getElementById('foto');
  foto.style.display = 'none';
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = 'none';
    buttons[i].classList.remove('active');
  }
  var tab = document.getElementById(name);
  tab.style.display = 'block';
  target.currentTarget.classList.add('active');
}
