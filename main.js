var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right = "0";
        }

        function hideMenu(){
            navLinks.style.right = "-200px";
        }

document.addEventListener("DOMContentLoader", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
});