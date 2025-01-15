document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;

    fetch("https://script.google.com/macros/s/AKfycbx98Iwg71IofDJyLjzvHeX5R0oC8If-FMmIPm30mXrttPABDCpWaT3WHy3N-tXPDRC1/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, number, email, description }),
        mode: "no-cors" // Enables sending without waiting for a response
    })
    .then(() => {
        document.getElementById("responseMessage").innerText = "Thank you! Your message has been sent.";
        document.getElementById("registerForm").reset();
    })
    .catch((error) => {
        console.error("Error:", error);
        document.getElementById("responseMessage").innerText = "There was an error. Please try again.";
    });
});
