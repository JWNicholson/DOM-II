// Your code goes here
//1
const changeH1 = document.querySelector(".logo-heading");
    changeH1.addEventListener("dblclick", () => {
    changeH1.textContent = "Cupcake ipsum dolor sit.";
})

//2
const changeHero = document.querySelector(".intro img");
    changeHero.addEventListener("click", () =>  {
        changeHero.src = "https://images.unsplash.com/photo-1463559830741-e117d53be7c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80";
    })

//3
window.addEventListener("resize", () => {
    changeHero.src = "https://images.unsplash.com/photo-1570569977390-d31e2d556bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
})

//4
const noContent = document.querySelector(".text-content");
//console.log(noContent);
noContent.addEventListener("mouseenter", () => {
    noContent.style.display = "none";
})

//5
noContent.addEventListener("mouseleave", () => {
    noContent.style.display = "inline-block";
})

//6
document.addEventListener("keydown",  (e) => {
    if (e.key === "f") {
      document.body.style = "color:green; border:1d2px dotted darkorange ";
    }
  })

 //7
  document.addEventListener("keyup", (e) => {
      if(e.key === "j"){
          document.body.style = "color:purple; font-weight:bolder; border:none";
      }
  })

  //8
  const contentH2 = document.querySelector(".container.home h2");
    //console.log(contentH2);
    contentH2.addEventListener("mouseover", () => {
        contentH2.textContent="What's in your wallet?";
    })

//9
    contentH2.addEventListener("mouseout", () => {
        contentH2.textContent = "I asked you a question";
        contentH2.style.transform = "scale(2)";
        contentH2.style.color = "darkorange";
    })

//10
const destBtn = document.querySelector(".btn");
//console.log(destBtn);
    destBtn.addEventListener("wheel", () => {
        destBtn.style.transform = "scale(0.5)";
    })


/////////Stop Propagation

const contentPick = document.querySelector(".content-pick");
//console.log(contentPick);
contentPick.addEventListener("wheel", () => {
    contentPick.style.backgroundColor = "blue";  
})

const destDiv = document.querySelector(".destination");
//console.log(destDiv);
destDiv.addEventListener("wheel", () => {
    destDiv.style.backgroundColor = "red";
   event.stopPropagation();
})



//////// Prevent link from working
const blockLinks = document.querySelector(".nav-link");
//console.log(blockLinks);
    blockLinks.addEventListener("click", (event) => {
        event.preventDefault();
    })




  
  

    

