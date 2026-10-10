<<<<<<< HEAD
document.getElementById("year").textContent = new Date().getFullYear();
=======
document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
>>>>>>> b8fb7407f117eb56f5e4338b32294fcda067d50c
