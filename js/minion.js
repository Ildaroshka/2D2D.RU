const pupil = document.getElementById('pupil');

document.addEventListener('mousemove', (e) => {
  const rect = pupil.getBoundingClientRect();

  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  const angle = Math.atan2(e.clientY - cy, e.clientX - cx);

  const moveX = Math.cos(angle) * 6;
  const moveY = Math.sin(angle) * 6;

  pupil.setAttribute("cx", 120 + moveX);
  pupil.setAttribute("cy", 110 + moveY);
});




