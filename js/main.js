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
    $(document).ready(function(){
        $(".moreBtn").click(function(){
        $(this).prev().toggle();
        $(this).siblings('.ellipsis').toggle();
        if($(this).text()=='Read more'){
            $(this).text('Read less');
        }
        else{
            $(this).text('Read more');
        }
        });
    });

  