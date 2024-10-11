document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const textArea = document.querySelector('.form__textarea');

    if (name === '' || lastName === '' || phoneNumber === '' || email === '') {
        alert('Proszę wypełnić wszystkie pola');
        return;
    }

    if (!/^\d+$/.test(phoneNumber)) {
        alert('W polu Numer telefonu wprowadź tylko cyfry');
        return;
    }

    if (/[^a-zA-Z0-9@._-]/.test(email)) {
        alert('Nieprawidłowe znaki w wiadomości e-mail');
        return;
    }

    alert('Formularz przesłany pomyślnie!');

    // Очищення всіх полів форми після успішної відправки
    document.getElementById('name').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('email').value = '';
    textArea.value = '';
});
const phoneNumberInput = document.getElementById('phoneNumber');

phoneNumberInput.addEventListener('input', function(event) {
    const phoneNumber = event.target.value;
    event.target.value = phoneNumber.replace(/\D/g, '');
});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("form__text").value;
        const email = document.getElementById("email").value;

        emailjs.send("service_stepgos", "template_jqllcmf", {
            from_name: firstName,
            last_name: lastName,
            email,
        }, "UNgLuwnHZF3XWSRTF")
            .then(function(response) {
                alert("Form submitted successfully!");
                document.getElementById("contactForm").reset();
            })
            .catch(function(error) {
                console.error("Error submitting form:", error);
                alert("Error submitting form. Please try again later.");
            });
    });
});



const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('menu__list--active')
})


