document.addEventListener("DOMContentLoaded", function () 
{
    const signupForm = document.getElementById("signupForm");
    const signupButton = document.getElementById("signupButton");
    const usersDatabase = [
    {
        username: 'digeesh',
        password: '123'
    }];
    signupButton.addEventListener("click", function () 
    {
        const usernameInput = document.getElementById("signupUsername").value;
        const passwordInput = document.getElementById("signupPassword").value;
        if (usersDatabase.some(user => user.username === usernameInput)) 
        {
            alert("Username already taken");
            return;
        }
        usersDatabase.push({
            username: usernameInput,
            password: passwordInput
        });
        alert("Register Successfull");
        signupForm.reset();
    });
});