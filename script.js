// index.html
let button = document.getElementById("button");
let message = document.getElementById("message");
let username = document.getElementById("username");
let password = document.getElementById("password");
let male = document.getElementById("male");
let female = document.getElementById("female");
let other = document.getElementById("other");

let existName = localStorage.getItem("username");



const validateData = () => {
    message.style.color = "#a6f553";
    message.innerText = "please wait...";
    if (username?.value?.trim() == "" || password?.value?.trim() === "") {
        message.style.color = "#ed3c3c";
        return (message.innerText = "username and password are mandatory!");
    }

    if (!male.checked && !female.checked && !other.checked) {
        message.style.color = "#ed3c3c";
        return (message.innerText = "please select your gender");
    }

    window.location.href = "status.html";
    localStorage.setItem("username", username.value?.trim());
};

button.addEventListener("click", () => {
    button.style.opacity = 0.3;
    setTimeout(() => {
        button.style.opacity = 1;
    }, 150);
    validateData();
});

male.addEventListener("change", () => {
    if (male.checked) female.checked = other.checked = false;
});
female.addEventListener("change", () => {
    if (female.checked) male.checked = other.checked = false;
});
other.addEventListener("change", () => {
    if (other.checked) female.checked = male.checked = false;
});
