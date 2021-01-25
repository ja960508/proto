const select = document.querySelector('.js-select-lecturer');
const selectInput = document.querySelector('.js-select-input');
const selectDropdownInput = document.querySelector('.js-select-input-dropdown');

const student = document.querySelector('.js-student-check');
const nonStudent = document.querySelector('.js-non-student-check');
const gmailInput = document.querySelector('.js-gmail'),
    studentNumInput = document.querySelector('.js-student-num'),
    studNumSection = document.querySelector('.js-std-num-section');

let prevState = 0;

student.addEventListener('click', selectMode);
nonStudent.addEventListener('click', selectMode);

function selectMode(event) {
    if (event.target.dataset.mode === 'student') {
        if (studentNumInput.disabled) {
            studentNumInput.disabled = false;
        }
        if (studNumSection.classList.contains('d-none')) {
            studNumSection.classList.remove('d-none')
        }
    }
    else {
        studentNumInput.value = null;
        studentNumInput.disabled = true;
        
        if (!studNumSection.classList.contains('d-none')) {
            studNumSection.classList.add('d-none')
        }
    }
}

function handleChangeSelect(event) {
    const value = select.options[select.selectedIndex].value;

    if (prevState === select.selectedIndex) {
        prevState = 0;
        select.selectedIndex = 0;
        return;
    }

    if (value === 'self-input') {
        if (selectInput.disabled) {
            selectInput.disabled = false;
        }
        selectInput.classList.remove('d-none');
        selectDropdownInput.classList.remove('d-none');
        select.classList.add('d-none');
        selectInput.focus();
    } else if (value === 'GPS-search') {
        console.log('GPS func');
    }

    prevState = select.selectedIndex;
}

function showSelectBox() {
    selectInput.classList.add('d-none');
    selectDropdownInput.classList.add('d-none');
    select.classList.remove('d-none');

    selectInput.readonly = true;
    selectInput.value = null;
    select.selectedIndex = 0;
}

function test(event) {
    console.log(event);
    console.log(event.target.checked);
}

function fetchUserGmail() {
    gmailInput.value = "sample@gmail.com";
    gmailInput.readOnly = true; // need to make gmail fetch function
}

function init() {
    fetchUserGmail();
    select.addEventListener('click', handleChangeSelect);
    selectDropdownInput.addEventListener('click', showSelectBox);
}


init();