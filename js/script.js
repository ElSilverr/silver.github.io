    const btn = document.getElementById('toggle-darkmode');
    const body = document.body;
    const icon = btn.querySelector('i');
    // Por defecto modo oscuro
    if(localStorage.getItem('darkmode') === null || localStorage.getItem('darkmode') === 'true') {
      body.classList.add('darkmode');
      icon.classList.remove('bi-moon');
      icon.classList.add('bi-sun');
      btn.classList.remove('btn-outline-light');
      btn.classList.add('btn-outline-dark');
      icon.style.color = '#bdbdbd';
    } else {
      body.classList.remove('darkmode');
      icon.classList.remove('bi-sun');
      icon.classList.add('bi-moon');
      btn.classList.remove('btn-outline-dark');
      btn.classList.add('btn-outline-light');
      icon.style.color = '';
    }
    btn.addEventListener('click', () => {
      body.classList.toggle('darkmode');
      const dark = body.classList.contains('darkmode');
      localStorage.setItem('darkmode', dark);
      if(dark) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
        btn.classList.remove('btn-outline-light');
        btn.classList.add('btn-outline-dark');
        icon.style.color = '#bdbdbd';
      } else {
        icon.classList.remove('bi-sun');
        icon.classList.add('bi-moon');
        btn.classList.remove('btn-outline-dark');
        btn.classList.add('btn-outline-light');
        icon.style.color = '';
      }
    });