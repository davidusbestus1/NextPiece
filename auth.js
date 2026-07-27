function signup() {

    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const instrument = document.getElementById("instrument").value;


    if (name === "" || password === "" || confirmPassword === "") {

        alert("Please fill in all fields.");
        return;

    }


    if (password !== confirmPassword) {

        alert("Passwords do not match.");
        return;

    }



    const user = {

        name: name,
        password: password,
        instrument: instrument,
        favorites: [],
        history: []

    };



    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );



    alert("Account created successfully!");



    window.location.href = "login.html";

}








function login() {


    const name = document.getElementById("name").value.trim();

    const password = document.getElementById("password").value;



    const savedUser = localStorage.getItem("user");



    if (!savedUser) {

        alert("No account found. Please sign up first.");

        return;

    }



    const user = JSON.parse(savedUser);




    if (name === user.name && password === user.password) {


        alert("Welcome back, " + user.name + "!");


        window.location.href = "discover.html";


    } 
    
    else {


        alert("Incorrect username or password.");


    }


}