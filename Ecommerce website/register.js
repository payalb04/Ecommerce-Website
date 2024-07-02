//function to handel form submission
function handleSubmit(event){
    event.preventDefault();

    //retrive form data
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmpassword = formData.get("confirmpassword");

    //validate password and confirm password
    if (password !== confirmpassword){
        alert("Password do not match");
        return;
    }

    //perform regestration logic
    console.log("Registration Successful!");
    console.log("Username:" , username);
    console.log("Email:" , email);
    console.log("Password:" , password);

    window.location.href = "home.html";

}

//add event listener
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit" , handleSubmit);