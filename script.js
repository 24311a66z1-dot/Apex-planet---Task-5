document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(
".project-card,.skill-card,.stat-card,.glass-card"
);

cards.forEach((card,index)=>{

card.style.opacity="0";
card.style.transform="translateY(30px)";
card.style.transition="all .8s ease";

setTimeout(()=>{
card.style.opacity="1";
card.style.transform="translateY(0)";
},index*100);

});

});