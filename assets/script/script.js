
const root = 'http:jsonplaceholder.typicode.com';
const send = document.querySelector('#btn'); 



const getData =()=>{
    console
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users?page=2", true);

    xhr.onload = function(){

    
        let userData = JSON.parse(xhr.responseText);
        let arr = [...userData.data];
        console.log(window.Object(userData));
        fit_the_data(arr);
        
        console.log(arr);
        console.log(xhr.responseText);
    let data = document.createTextNode(xhr.responseText);

    };

    xhr.send();
}


function prepare_the_field(){
    console.log('preparing the field');
   let body = document.querySelector('body');
   body.removeChild(document.querySelector('div'));
   body.className = 'container';
   let item = document.createElement('div');
   item.style.display = "flex";
   item.style.flexDirection = "row";
   item.style.minHeight = '320px';
   item.style.minWidth = '100%';
   item.style.justifyContent="space-between";
   item.style.border = '2px solid orange';
  // item.style.
   item.innerHTML = `<div class="image"></div>   
   <div class="content"><ul class="data"> <li> Whats up </li>  <li> Whats up </li>  <li> Whats up </li></ul> </div>`;
   body.appendChild(item);
}

function fit_the_data(userData){
    let image  = document.querySelector('.image'),
        list = document.querySelector('.content ul');
userData.forEach(element => {
    let userImage = new Image();
    userImage.src = element.avatar;
    image.appendChild(userImage);
    image.setAttribute('background-image', `url('${userImage}')`);
});

}





send.addEventListener('click',getData);

const sendData =()=>{

}

   