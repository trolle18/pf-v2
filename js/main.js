// ---------- MOBILE MENU --------- //
    // When clicked, hide/show dropdown content 
    function burger() {
        document.getElementById("navDropdown").classList.toggle("show");
    }

    // Close dropdown if clicked outside 
    window.onclick = function(event) {
        if (!event.target.matches('.fa')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
        }
    }


// ---------- READ MORE BUTTON ---------- //  
    // $(document).ready(function(){
    //     $(".moreBtn").click(function(){
    //     $(this).prev().toggle();
    //     $(this).siblings('.ellipsis').toggle();
    //     if($(this).text()=='Read more'){
    //         $(this).text('Read less');
    //     }
    //     else{
    //         $(this).text('Read more');
    //     }
    //     });
    // });




// ---------- MODAL BOX ---------- //
function onClick(element) {
    document.getElementById("modal-img").src = element.src;
    document.getElementById("modal01").style.display = "block";
}



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

    let observer = new IntersectionObserver(handler, {
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

    const cardD = document.querySelector("card-d");
    cardD.classList.add("fade-in"); 
    observer.observe(cardD);
