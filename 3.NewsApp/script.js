const apiKey="1c978623038241dfa64916af71e823e1"
const api="https://newsapi.org/v2/everything?q=tesla&"
let query="tesla"
async function fetchData(query){
   
    const response=await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`);
    const jsonData=await response.json();    
    const data=jsonData.articles;
     bindData(data)
}
let cardsContainer=document.getElementById("cards-container")
let tempCard=document.getElementById("temp-box")
let searchQuery=document.getElementById("search-query")
let submit=document.getElementById("submit")
let homeLogo=document.getElementById("home-logo")

function bindData(data){
    cardsContainer.innerHTML = '';
    data.forEach((item)=>{

     let clone=tempCard.content.cloneNode(true);
     let cloneCard=clone.querySelector(".card")
    
        
        let image=cloneCard.querySelector("img");
        let title=cloneCard.querySelector("#title");
        let description=cloneCard.querySelector("#description");
        let readMore=cloneCard.querySelector("#button")

        const{title:author,urlToImage,url,description:desc}=item;
        if (urlToImage == null || urlToImage === "") {
           return;
        } else {
            image.src = urlToImage;
            title.innerHTML = author;
            description.innerHTML = desc;
            readMore.href=url;
        }      
        
        cardsContainer.appendChild(cloneCard)
    })
    
}

fetchData(query)

function handleClick(value){
     query=value;
    fetchData(query)
}
searchQuery.addEventListener("keypress",(e)=>{
if(e.key == "Enter"){
    e.preventDefault();
    query=searchQuery.value;
    fetchData(query)
}

})

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    query=searchQuery.value;
    fetchData(query)
})

homeLogo.addEventListener("click",()=>{
    fetchData("tesla")
})