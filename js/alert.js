
console.log('Danger coming');

//alert('Everything all right?')

// no : 1
const maComing = () => {
    alert('Open the door');
}

// no : 2
const askPicnic = () => {
  const response = confirm('Hey you wanna join with us');
  console.log(response);
  if(response ===  true){
      console.log('Send money for picnic by bkash');
  }
  else{
      console.log('Good Luck for next time');
  }
}


// no : 3

const askName = () => {
    const name = prompt ("what's your name");
    if(name){
        console.log(name);
    }
}