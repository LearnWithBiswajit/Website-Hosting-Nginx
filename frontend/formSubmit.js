"use strict";
document.getElementById("submit").addEventListener("click", (e) => {
    // e.preventDefault();
    let userName = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    const body = {
        firstName:userName.value,
        email:email.value,
        subject:subject.value,
        message:message.value
    }

    submitForm(`${BASE_API_URL}/api/feedback`,body);
    userName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
})


const submitForm = async (url, data) => {
    const res = await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    Swal.fire({
  title: 'Success!',
  text: 'Your feedback is very precious to me. Thanks for your feedback',
  icon: 'success',
});

    const resp = await res.json();
}
