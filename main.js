const button = document.querySelector('button');
const popup = document.querySelector('.share-popup')

button.addEventListener('click',()=>{
  popup.classList.toggle('active')
})