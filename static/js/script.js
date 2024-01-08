let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}


var swiper = new Swiper(".team-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});


// For popUp Window
const nextButton = document.getElementById('btn1');
const nextButton2 = document.getElementById('btn2');
const popup = document.getElementById('popup');
const closeModal = document.querySelector('.close');
// const infoForm = document.getElementById('info-form');

nextButton.addEventListener('click', () => {
  popup.style.display = 'block';
});

nextButton2.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  popup.style.display = 'none';
  resetForm();
});

window.addEventListener('click', (event) => {
  if (event.target === popup) {
    popup.style.display = 'none';
    resetForm();
  }
});

// infoForm.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Get form values
//   const name = document.getElementById('name').value;
//   const age = document.getElementById('age').value;
//   const gender = document.querySelector('input[name="gender"]:checked').value;
//   const phone = document.getElementById('phone').value;
//   const email = document.getElementById('email').value;
//   const location = document.getElementById('location').value;
//   const imageFile = document.getElementById('image').files[0];

//   // Handle form data as needed (e.g., send to server or process locally)
//   console.log('Name:', name);
//   console.log('Age:', age);
//   console.log('Gender:', gender);
//   console.log('Phone:', phone);
//   console.log('Email:', email);
//   console.log('Location:', location);
//   console.log('Image File:', imageFile.name);

//   // Clear the form
//   infoForm.reset();

//   // Close the popup
//   popup.style.display = 'none';


// });

function resetForm() {
  // Reset the form to clear all input fields
  infoForm.close();
}


// 2nd popup
// if(isFormComplete(infoForm)){
  //   const opButton = document.getElementById('submit-button');
  //   const popup1 = document.getElementById('popup1');
  //   const closeModal1 = document.querySelector('.close1');
  //   const exitButton = document.querySelector('.submit-button1');

  //   opButton.addEventListener('click', () => {
  //   popup1.style.display = 'block';
  //   });

  //   closeModal1.addEventListener('click', () => {
  //   popup1.style.display = 'none';
  //   });

  //   exitButton.addEventListener('click', () => {
  //   popup1.style.display = 'none';
  //  });
// }
// else{
//     console.log('Please fill in all fields in the first popup before proceeding to the second popup.');
// }
