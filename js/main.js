function lightMode() {
    document.documentElement.style.setProperty('--main-header-text-color', 'white');
    document.documentElement.style.setProperty('--main-dark-bg-color', 'black');
    document.documentElement.style.setProperty('--main-navbar-bg', '#a0d4eb');
    document.documentElement.style.setProperty('--main-navbar-hover-bg', '#aad6be');
    document.documentElement.style.setProperty('--main-notice-shadow', '#fff434');
    document.documentElement.style.setProperty('--main-default-blue', '#007bff');
  };

  function darkMode() {
    document.documentElement.style.setProperty('--main-header-text-color', 'black');
    document.documentElement.style.setProperty('--main-dark-bg-color', '#522c78');
    document.documentElement.style.setProperty('--main-navbar-bg', '#522c78');
    document.documentElement.style.setProperty('--main-navbar-hover-bg', '#334039');
    document.documentElement.style.setProperty('--main-notice-shadow', '#522c78');
    document.documentElement.style.setProperty('--main-default-blue', '#2eab1a');
  };