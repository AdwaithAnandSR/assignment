let name = document.getElementById("name");

let username = localStorage.getItem("username");

if (username?.trim() === "") window.location.href = "auth.html";
else name.innerText = username;

const goHome = () => (window.location.href = "index.html");
