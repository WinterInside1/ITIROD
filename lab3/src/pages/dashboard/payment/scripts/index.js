const cardForm = document.getElementById('card-form');

cardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  window.location.href = `/dashboard/calendar?paymentStatus=success`;
});
