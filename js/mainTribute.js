function lightMode() {
  document.documentElement.style.setProperty('--main-header-text-color', 'white');
  document.documentElement.style.setProperty('--main-dark-bg-color', 'black');
  document.documentElement.style.setProperty('--main-navbar-bg', '#a0d4eb');
  document.documentElement.style.setProperty('--main-navbar-bg-opacity', 'rgba(158, 212, 234, 0.92)');
  document.documentElement.style.setProperty('--main-navbar-hover-bg', '#aad6be');
  document.documentElement.style.setProperty('--main-notice-shadow', '#fff434');
};

function darkMode() {
  document.documentElement.style.setProperty('--main-header-text-color', 'black');
  document.documentElement.style.setProperty('--main-dark-bg-color', '#969696');
  document.documentElement.style.setProperty('--main-navbar-bg', '#b2afaf');
  document.documentElement.style.setProperty('--main-navbar-bg-opacity', 'rgba(32,42,47, 0.92)');
  document.documentElement.style.setProperty('--main-navbar-hover-bg', '#334039');
  document.documentElement.style.setProperty('--main-notice-shadow', '#522c78');
};   