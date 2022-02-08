var sviPodnaslovi = $(".podnaslov").map(function() {
    return this.innerText;
}).get();

var html = '<ul>' + 
    '<li class="navPodnaslov">' + `<a href="#naseVrijednosti">` + sviPodnaslovi[0] + '</a>' + '</li>' +
    '<li class="navPodnaslov">' + `<a href="#povijest">` + sviPodnaslovi[1] + '</a>' + '</li>' +
    '<li class="navPodnaslov">' + `<a href="#AlgebraGrupa">` + sviPodnaslovi[2] + '</a>' + '</li>' +
    '<li class="navPodnaslov">' + `<a href="#doNas">` + sviPodnaslovi[3] + '</a>' + '</li>'
    + '</ul>';

console.log(sviPodnaslovi[0]);

$('#empty').html(html);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});