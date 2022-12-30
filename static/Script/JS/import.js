// home-content Dom
const home_btn = document.getElementById('home')
home_btn.onclick = Home;





$(function () {
    $("#headerbar").load("./importFiles/navbar.html");
    $("#footerbar").load("./importFiles/footerbar.html");
});





function Home(params) {
    $(function () {
        $("#maincontent").load("./importFiles/homecontent.html");
    });
}