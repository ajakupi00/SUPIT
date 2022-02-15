var modalbox = document.getElementsByClassName("modal")[0];
var modal_setting = modalbox.style.display;
var forma = document.getElementsByTagName("form")[0];

function pokaziModal() {
    modal_setting = "block";
    modalbox.style.display = modal_setting;
}

function Odustani() {
    modal_setting = "none";
    modalbox.style.display = modal_setting;
}

