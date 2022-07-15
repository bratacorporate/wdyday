// const path = document.querySelector('.opening svg path');
// console.log(path.getTotalLength());

// click get started
const started = document.querySelector('.opening button');
const opening = document.querySelector('.opening');
const music = document.getElementById('music');
const showEnvelop = document.querySelector('.jumbotron .row .col:first-child i');
const notif = document.querySelector('.jumbotron .stat-msg');
started.addEventListener('click', function(){
   opening.style.transform = 'translateX(100%)';
   music.play();
   showEnvelop.classList.toggle('show-envelop')
   notif.classList.toggle('show-envelop')
})

// message klik
const closeEnvelop = document.querySelector('.jumbotron .row .col i:first-child');
const openEnvelop = document.querySelector('.jumbotron .row .col:first-child i:nth-child(2)');
const statMsg = document.querySelector('.jumbotron .row .col .stat-msg');
const oMsg = document.querySelector('.jumbotron .row .col:last-child');
const msgAnimate = document.querySelector('.jumbotron .row .col:last-child .message');
const closeBtn = document.querySelector('.btn button:last-child');
const welcome = document.querySelectorAll('.story ul li');
const showArrow = document.querySelector('.show-arrow');
const jumbotron = document.querySelector('.jumbotron');
const story = document.querySelector('.story');
closeEnvelop.addEventListener('click', function(){
   oMsg.classList.toggle('slideUp');
   msgAnimate.classList.toggle('slideUp');
   statMsg.innerHTML = 'Message Has Been Read';
   statMsg.style.color = 'green';
   closeEnvelop.style.display = 'none';
   openEnvelop.classList.toggle('show-envelop');
})
closeBtn.addEventListener('click', function(){
   msgAnimate.classList.toggle('slideUp');
   oMsg.classList.toggle('slideUp');
   showArrow.classList.add('showArrow')
})
showArrow.addEventListener('click', function(){
   jumbotron.classList.add('close-sc');
   story.classList.add('open-sc');
})


// clue message
const hidden = document.querySelectorAll('.message p');
const clueMsg = document.querySelectorAll('.message p .clue');
const clueBtn = document.querySelector('.btn button:first-child');
for(let i = 0; i < hidden.length; i++){
   clueBtn.addEventListener('click', function(){
      hidden[i].classList.toggle('show-clue');
      clueMsg[i].classList.toggle('show-clue')
   })
   closeEnvelop.addEventListener('click', function(){
      hidden[i].classList.toggle('typing');
   })
}


// click head
const condHead = document.querySelectorAll('.condition-head');
const karir = document.querySelectorAll('.career-content');
const sehat = document.querySelectorAll('.health-content');
const cinta = document.querySelectorAll('.love-content');
condHead[0].addEventListener('click', function(){
   for (let e = 0; e < karir.length; e++) {
      karir[e].classList.add('show-content');           
      sehat[e].classList.remove('show-content');           
      cinta[e].classList.remove('show-content');           
   }
})
condHead[1].addEventListener('click', function(){
   for (let e = 0; e < karir.length; e++) {
      karir[e].classList.remove('show-content');           
      sehat[e].classList.add('show-content');           
      cinta[e].classList.remove('show-content');         
   }
})
condHead[2].addEventListener('click', function(){
   for (let e = 0; e < karir.length; e++) {
      karir[e].classList.remove('show-content');           
      sehat[e].classList.remove('show-content');           
      cinta[e].classList.add('show-content');         
   }
})

// show conditions
function games(career, health, love) {
   // BLOCK CAREER
   if (career === "A"){
      karir[0].classList.toggle('choice');
   } else if (career === "B") {
      karir[1].classList.toggle('choice');
   }  else {
      karir[2].classList.toggle('choice');
   }
   // end BLOCK CAREER

   // BLOCK HEALTH
   if (health === "A"){
      sehat[0].classList.toggle('choice');
   } else if (health === "B") {
      sehat[1].classList.toggle('choice');
   }  else {
      sehat[2].classList.toggle('choice');
   }
   // end BLOCK HEALTH
   
   // BLOCK LOVE
   if (love === "A"){
      cinta[0].classList.toggle('choice');
   } else if (love === "B") {
      cinta[1].classList.toggle('choice');
   } else {
      cinta[2].classList.toggle('choice');
   }
   // end BLOCK LOVE

}


// condition and play games
const cond = document.querySelector('.condition');
const bPlay = document.querySelector('button.play');
let ask1
let ask2
let ask3
bPlay.addEventListener('click', function(){
   ask1 = prompt("Jika harus memilih, ingin seperti apa kamu 5/10 tahun ke depan ? \nA. Menjadi CEO \nB. Presiden \nC. Traveller \n\n*) Pilih A, B, atau C dan ketik dengan huruf kapital !");
   ask2 = prompt("Ruangan mana yang jadi tempat favoritmu di rumah ? \nA. Kamar Tidur \nB. Dapur \nC. Ruang Tamu \n\n*) Pilih A, B, atau C dan ketik dengan huruf kapital !");
   ask3 = prompt("Kamu ingin orang seperti apa untuk menjadi pasangan ? \nA. Pintar \nB. Good Looking  \nC. Kaya \n\n*) Pilih A, B, atau C dan ketik dengan huruf kapital !");
   cond.classList.add('cond-back');
   bPlay.style.display = 'none';
   games(ask1,ask2,ask3);
})

