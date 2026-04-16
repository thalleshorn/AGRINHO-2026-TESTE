// =====================================================
// ARQUIVO: script.js
// =====================================================

const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");
const overlay=document.querySelector(".overlay");

if(toggle){
toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
overlay.classList.toggle("active");
toggle.classList.toggle("active");
});}

// FECHAR AO CLICAR FORA
if(overlay){
overlay.addEventListener("click",()=>{
nav.classList.remove("active");
overlay.classList.remove("active");
toggle.classList.remove("active");
});}

// DADOS
const timelineData=[
{title:"1930",text:"Expansão cafeeira"},
{title:"1950",text:"Crescimento econômico"},
{title:"1975",text:"Geada Negra"}
];

const galleryData=[
"https://images.unsplash.com/photo-1509042239860-f550ce710b93",
"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
"https://images.unsplash.com/photo-1447933601403-0c6688de566e"
];

// TIMELINE
const timeline=document.getElementById("timeline");
if(timeline){timelineData.forEach(item=>{
const div=document.createElement("div");
div.innerHTML=`<h3>${item.title}</h3><p>${item.text}</p>`;
timeline.appendChild(div);
});}

// CARROSSEL
let index=0;
const container=document.getElementById("carousel-container");

function renderCarousel(){
if(container){container.innerHTML=`<img src="${galleryData[index]}" alt="Café">`;}}

if(document.getElementById("prev")){
document.getElementById("prev").onclick=()=>{
index=(index-1+galleryData.length)%galleryData.length;
renderCarousel();
};}

if(document.getElementById("next")){
document.getElementById("next").onclick=()=>{
index=(index+1)%galleryData.length;
renderCarousel();
};}

renderCarousel();
