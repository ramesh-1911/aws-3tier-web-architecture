// Wait for the DOM to load before attaching the click event
document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
    const responseBox = document.getElementById("response");

    loginButton.addEventListener("click", function () {
        const backendURL = "http://internal-InternalALB-1979364349.ap-south-1.elb.amazonaws.com/login";

        fetch(backendURL, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.username && data.email) {
                responseBox.innerText = `User: ${data.username} - Email: ${data.email}`;
            } else {
                responseBox.innerText = "No user data found!";
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            responseBox.innerText = "Failed to load data!";
        });
    });
});
