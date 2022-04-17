// allows you to get unlimited answers on Brainly

const brainlyBypass = setInterval(() => {
  const object = "flexible-funnel-cycle-data";
  if (localStorage.getItem(object)) {
    localStorage.removeItem(object);
    clearInterval(brainlyBypass);
  }
}, 1000);
