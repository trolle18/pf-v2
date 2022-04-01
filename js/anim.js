// ---------- Intersection Observer  ---------- //
  function handler(entries) {
    for (const entry of entries) {
      console.log(entries);
        if (entry.isIntersecting) {
            entry.target.classList.add("transition");
        } else {
            entry.target.classList.remove("transition");
        }
    }
  }

  const observer = new IntersectionObserver(handler, {
    threshold: 0.2,
  });

  const cardA = document.getElementById("card-a");
  cardA.classList.add("fade-in"); 
  observer.observe(cardA);

  const cardB = document.getElementById("card-b");
  cardB.classList.add("fade-in"); 
  observer.observe(cardB);

  // const cardC = document.getElementById("card-c");
  // cardC.classList.add("fade-in"); 
  // observer.observe(cardC);

  // const cardD = document.getElementById("card-d");
  // cardD.classList.add("fade-in"); 
  // observer.observe(cardD);

  // const cardE = document.getElementById("card-e");
  // cardE.classList.add("fade-in"); 
  // observer.observe(cardE);

  // const cardF = document.getElementById("card-f");
  // cardF.classList.add("fade-in"); 
  // observer.observe(cardF);
