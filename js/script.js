toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

let form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;
    let nameInput = document.getElementById('inputName');


    if (!checkTextInputLength(nameInput.value)) {
        nameInput.nextElementSibling.classList.remove('d-none');
        isValid = false;
    }
    else {
        nameInput.nextElementSibling.classList.add('d-none');
    }

    console.log(this.value);




    let surnameInput = document.getElementById('inputSurname');

    if (!checkTextInputLength(inputSurname.value)) {
        inputSurname.nextElementSibling.classList.remove('d-none');
        isValid = false;
    }
    else {
        inputSurname.nextElementSibling.classList.add('d-none');
    }

    let ageInput = document.getElementById('inputAge');

    if (!checkAge(ageInput.value)) {
        ageInput.nextElementSibling.classList.remove('d-none');
        ageInput.nextElementSibling.innerText = 'Age must be greater or equal 18!';
        isValid = false;
    }
    else {
        ageInput.nextElementSibling.classList.add('d-none')
    }

    let groupNoInput = document.getElementById('inputGroupNo');

    if (!checkTextInputLength(groupNoInput.value)) {
        groupNoInput.nextElementSibling.classList.remove('d-none');
        isValid = false;
    }
    else {
        groupNoInput.nextElementSibling.classList.add('d-none');
    }

    
    if(isValid){
        toastr["success"]("Submit was successfuly");
    }
   

})


function checkTextInputLength(value) {
    if (value.length < 5) return false;
    else return true;
}


function checkAge(value) {
    if (value < 18) return false;
    else return true;
}