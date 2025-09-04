  const trigger = document.getElementById('chickenTrigger');
  const chicken = document.getElementById('chicken');

  trigger.addEventListener('click', () => {
    chicken.classList.toggle('active');
    trigger.classList.toggle('active');

      // If the chicken just became active, schedule it to hide after 2s
  if (chicken.classList.contains('active')) {
    setTimeout(() => {
      chicken.classList.remove('active');
      trigger.classList.remove('active');
    }, 2000);
  }
  });