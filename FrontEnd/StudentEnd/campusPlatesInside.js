const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})
let hiddenEle = document.querySelectorAll(".hidden");
hiddenEle.forEach((el)=>{
    observer.observe(el);
})
let ele = document.getElementsByClassName("colBlock");
let rem = document.getElementsByClassName("colBlock");
let dbox1 = document.getElementsByClassName("circl1")[0];
let dbox2 = document.getElementsByClassName("circl2")[0];
let dbox3 = document.getElementsByClassName("circl3")[0];
let dbox4 = document.getElementsByClassName("circl4")[0];
for (let bfastnt of ele) {
    bfastnt.addEventListener("click", function () {
        bfastnt.classList.toggle("active");
        for (let remov of rem) {
            if (bfastnt != remov)
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
ele[2].addEventListener("click", function () {
    let counts = setInterval(updated);
    let upto1 = 1;
    function updated() {
        let count1 = document.getElementsByClassName("cntr")[0];
        count1.innerHTML = ++upto1;
        if (upto1 === 1000) {
            clearInterval(counts);
        }
    }
}, 2000)
let bfast = document.getElementsByClassName("cntr1")[0];
dbox1.addEventListener("click", function () {
    if (bfast.innerHTML === "Breakfast Fees") {
        bfast.innerHTML = "1000";
    }
    else {
        bfast.innerHTML = "Breakfast Fees";

    }
})
let lunch = document.getElementsByClassName("cntr2")[0];
dbox2.addEventListener("click", function () {
    if (lunch.innerHTML === "Lunch Fees") {
        lunch.innerHTML = "1000";
    }
    else {
        lunch.innerHTML = "Lunch Fees";

    }
})
let esnacks = document.getElementsByClassName("cntr3")[0];
dbox3.addEventListener("click", function () {
    if (esnacks.innerHTML === "Snacks Fees") {
        esnacks.innerHTML = "1000";
    }
    else {
        esnacks.innerHTML = "Snacks Fees";

    }
})
let dinner = document.getElementsByClassName("cntr4")[0];
dbox4.addEventListener("click", function () {
    if (dinner.innerHTML === "Dinner Fees") {
        dinner.innerHTML = "1000";
    }
    else {
        dinner.innerHTML = "Dinner Fees";

    }
})
document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
