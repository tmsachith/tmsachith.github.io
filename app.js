(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click", function (e) {
        e.preventDefault();

        // Submit the form using AJAX
        var form = document.querySelector(".contact-form");
        var formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Display alert based on the response
            if (data.status === "success") {
                // Success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Email sent successfully!',
                }).then(() => {
                    // Reload the page
                    window.location.reload();
                });
            } else {
                // Error alert
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Error sending email. Please try again.',
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            // Unexpected error alert
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'An unexpected error occurred. Please try again.',
            });
        });
    });
});
