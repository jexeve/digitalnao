function emailValidation(email){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function showAlert(title, text, icon){
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
}