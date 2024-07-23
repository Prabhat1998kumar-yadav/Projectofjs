let imageData=[
    "https://plus.unsplash.com/premium_photo-1664464229692-44046bfd6b7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsfGVufDB8fDB8fHww"
]

let carBox=document.getElementById("carousel-box");

imageData.forEach((item)=>{
    let imageEle=document.createElement("img");
    imageEle.src=item;
    carBox.appendChild(imageEle)   
}) 



let image=document.querySelectorAll("img");
let dotCircle=document.querySelectorAll("li");


let leftButton=document.getElementById("left-button");
let rightButton=document.getElementById("right-button");
let count=0;
leftButton.addEventListener("click",()=>{
    count--;  
    if(count < 0){
        count=4;        
    }   
    dotCircle.forEach((item)=>{
        if(item.id == count){
           
            item.classList.add("activeClass")
        }
        if(item.id != count){
            item.classList.remove("activeClass")
        }
    })
    let translateValue=count*700+"px"
    image.forEach((image)=>{
        
        image.style.transform="translateX( -"+ translateValue+" )"
        image.style.transition="transform 1s linear"
    })
})

rightButton.addEventListener("click",()=>{
    count++;   
    if(count > 4){
        count=0;
    } 
    dotCircle.forEach((item)=>{
       
        if(item.id == count){
       
            item.classList.add("activeClass")
        }
        if(item.id != count){
            item.classList.remove("activeClass")
        }
        
    })

   let translateValue=count*700+"px"
    image.forEach((image) => {
        
        image.style.transform="translateX(-" + translateValue + ")";
        image.style.transition="transform 1s linear"
    });
 
    
})