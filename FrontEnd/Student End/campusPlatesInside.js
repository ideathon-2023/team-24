let ele = document.getElementsByClassName("colBlock");
let rem = document.getElementsByClassName("colBlock");
for (let element of ele) {
    element.addEventListener("click", function () {
        element.classList.toggle("active");
        for (let remov of rem) {
            if (element != remov)
                remov.classList.remove("active");
        }
    })
}
let notify = document.getElementsByClassName("notification")[0];
notify.addEventListener("click", function () {
    window.location.href = "campusPlatesNotification.html";
})
let about = document.getElementsByClassName("about")[0];
about.addEventListener("click", function () {
    window.location.href = "campusPlatesAbout.html";
})
let contact = document.getElementsByClassName("contact")[0];
contact.addEventListener("click", function () {
    window.location.href = "CampusPlatesContact.html";
})
let home = document.getElementsByClassName("home")[0];
home.addEventListener("click", function () {
    window.location.href = "/HomePage/index.html";
})
ele[2].addEventListener("click",function(){
    let counts = setInterval(updated);
            let upto1 = 1;
            let upto2 = 1;
            let upto3 = 1;
            let upto4 = 1;
            function updated() {
                let count1 = document.getElementsByClassName("cntr")[0];
                count1.innerHTML = ++upto1;
                if (upto1 === 1000) {
                    clearInterval(counts);
                }
                let count2 = document.getElementsByClassName("cntr")[1];
                count2.innerHTML = ++upto2;
                if (upto2 === 1000) {
                    clearInterval(counts);
                }
                let count3 = document.getElementsByClassName("cntr")[2];
                count3.innerHTML = ++upto3;
                if (upto3 === 1000) {
                    clearInterval(counts);
                }
                let count4 = document.getElementsByClassName("cntr")[3];
                count4.innerHTML = ++upto4;
                if (upto4 === 1000) {
                    clearInterval(counts);
                }
            }
})
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
