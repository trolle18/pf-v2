// ---------- INTERSECTION OBSERVER ---------- //
function handler(entries) {
    for (const entry of entries) {
    console.log(entries);
        if (entry.isIntersecting) {
            entry.target.classList.add("transition");
            observer.unobserve(entry.target)
        // } else {
        //     entry.target.classList.remove("transition");
        }
    }
}

const observer = new IntersectionObserver(handler, {
    threshold: 0.3,
});

const cardA = document.getElementById("card-a");
cardA.classList.add("fade-in"); 
observer.observe(cardA);

const cardB = document.getElementById("card-b");
cardB.classList.add("fade-in"); 
observer.observe(cardB);

const cardC = document.getElementById("card-c");
cardC.classList.add("fade-in"); 
observer.observe(cardC);

const cardD = document.getElementById("card-d");
cardD.classList.add("fade-in"); 
observer.observe(cardD);


// ---------- MODAL BOX ---------- //
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}