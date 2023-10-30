function initListeners() {
    let navShowing = false;
    $(".m-nav").on("click",(e) => {
        if (navShowing) {
        $('.links').removeClass("m-links")
        $(".links").css("display","none")
        navShowing = false 
        } else {
        $('.links').addClass("m-links")
        $(".links").css("display","flex")
        navShowing = true;
        }
    })
}
 
$(document).ready(function () {
initListeners();
});