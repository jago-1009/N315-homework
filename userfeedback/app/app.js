


function initListeners() {
    $("#home").on("click",(e) => {
    $("#modal").toggle();
    })

    
     $(".close").on("click",(e) => {
        $("#modal").toggle();
    })
}

 
$(document).ready(function () {
initListeners();
});