
const toggle_nav = document.getElementById('toggle_nav');

function toggle_btn() {
    if(toggle_nav.style.right == "-20rem"){
        toggle_nav.style.right = "0";
    }
    else {
        toggle_nav.style.right = "-20rem";
    }
}

// SMOOTH SCROLL IE/EDGE/SAFARI

$('a').on('click', function(event){
    if((this).hash !== "");
    event.preventDefault();
    let hash = this.hash;

    $('html,body').animate({
        scrollTop : $(hash).offset().top
    },500, function(){
        window.location.hash = hash;
    });
});