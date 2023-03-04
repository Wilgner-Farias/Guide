document.querySelector('#promo-button').addEventListener('click', () => {
  document.querySelector('.promo-container').style.opacity = 0;
  setInterval(() => {
    document.querySelector('.promo-container').style.display = 'none';
  },700);
});