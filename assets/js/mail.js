const firebaseConfig = {
    apiKey: "AIzaSyDPDtgkFy_INObqeoeLvxSxa27W6oDJGeU",
    authDomain: "my-app-9506f.firebaseapp.com",
    databaseURL: "https://my-app-9506f-default-rtdb.firebaseio.com",
    projectId: "my-app-9506f",
    storageBucket: "my-app-9506f.appspot.com",
    messagingSenderId: "961115744111",
    appId: "1:961115744111:web:549a8600aa9f481b7daa9a",
    measurementId: "G-VG3P6DQR5B"
  };

  firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit',submitForm)

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');

    saveMessage(name, email, message);
    document.getElementById("alert").style.display = 'block';
    setTimeout(()=>{
        document.getElementById("alert").style.display = 'none';
    },3000);

    document.getElementById('contactForm').reset();
}

const saveMessage = (name,email,message) => {
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name : name,
        email : email,
        message : message,
    });
};


const getElementVal = (id ) =>{
    return document.getElementById(id).value;
}