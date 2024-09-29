
const submit = document.querySelector('#submit');

submit.addEventListener('click',e => {
    const f_name = document.getElementById('F-Name').value;
    const l_name = document.getElementById('L-Name').value;
    const email = document.getElementById('Email').value;
    const phone = document.getElementById('Phone').value;
    const address = document.getElementById('Address').value;
    const password = document.getElementById('password').value;
    const term = document.getElementById('check');
    
    e.preventDefault;
    if(f_name === ''){
        alert("Nama harus di-isi");
        return false;
    }
    if(l_name === ''){
        alert("Nama harus di-isi");
        return false;
    }
    if(email === ''){
        alert("email harus di-isi");
        return false;
    }
    if(phone === ''){
        alert("phone number harus di-isi");
        return false;
    }
    if(address === ''){
        alert("address harus di-isi");
        return false;
    }
    if(password === ''){
        alert("password harus di-isi");
        return false;
    }
    if(!term.checked){
        alert("term and condition harus check");
        return false;
    }
    if(email.split("@").length > 2 || email.split("@").length == 1){
        alert("Email wajib memiliki satu @");
        return false
    }
    else if(!email.split("@")[1].includes(".")){
        alert("Email wajib memiliki . setelah @");
        return false
    }
    if(isNaN(phone)===true){
        alert("Phone harus angka");
        return false;
    }
    if(phone.length <10){
        alert("please input a valid phone number");
        return false;
    }
    alert("Register Successfully");
    location.reload(true);
})