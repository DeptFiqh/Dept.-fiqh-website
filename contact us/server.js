// (function() {
//     emailjs.init("psGNrKk4tF1U5agGs"); // Replace with your EmailJS user ID
// })();

// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const description = document.getElementById("description").value;

//     emailjs.send("service_uo4o6eh", "template_xtntlez", {
//         name: name,
//         email: email,
//         description: description,
//         subject: "From Website"
//     }).then(
//         function(response) {
//             alert("Your message has been sent!");
//             saveToGoogleSheets(name, email, description);
//         },
//         function(error) {
//             alert("There was an error sending your message.");
//         }
//     );
// });

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;

    fetch("https://script.google.com/macros/s/AKfycbwGhDsVqPtOoV7gr2p0TCfmGtr-izgvBh2-4vx7v-vCyG11uXJHZRut6_uyPHlWX6KOVA/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, description }),
        mode: "no-cors" // Enables sending without waiting for a response
    })
    .then(() => {
        document.getElementById("responseMessage").innerText = "Thank you! Your message has been sent.";
        document.getElementById("contactForm").reset();
    })
    .catch((error) => {
        console.error("Error:", error);
        document.getElementById("responseMessage").innerText = "There was an error. Please try again.";
    });
});
