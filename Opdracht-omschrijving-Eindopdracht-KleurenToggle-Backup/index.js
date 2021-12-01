let menuKnop = false;
let burgerMenuKnop = document.querySelector(".burger-menu-btn");
    
burgerMenuKnop.addEventListener("click",function (e) {
// Burger-menu    
    let getMenuList = document.querySelector(".burger-menu-list");
    let getMenuListUl = document.querySelector(".burger-menu-list ul");

      // Burger menu open en dicht
    if (menuKnop === false) {
        getMenuListUl.style.visibility ="visible";
        getMenuList.style.width= "200px";
        menuKnop = true;
    }
    else if (menuKnop === true) { 
        getMenuListUl.style.visibility ="hidden";
        getMenuList.style.width= "100px";
  
        menuKnop = false;
    }
    
    // Kleurenlijst selectie - Body Element veranderen..

    // Kleur Blue
    let kleurBlue = document.querySelector("#blue-link")
    kleurBlue.addEventListener("click",function () {
        let bleuAchtergrond = document.querySelector("body")
        bleuAchtergrond.classList.add("blue")
        bleuAchtergrond.classList.remove("red","yellow","orangered")
        getMenuListUl.style.visibility ="hidden";
        getMenuList.style.width= "100px";
    })
    // Kleur Red
    let kleurRed = document.querySelector("#red-link")
    kleurRed.addEventListener("click",function () {
        let redAchtergrond = document.querySelector("body")
        redAchtergrond.classList.add("red")
        redAchtergrond.classList.remove("blue","yellow","orangered","pink")  
        getMenuListUl.style.visibility ="hidden";
        getMenuList.style.width= "100px";
    })

    // Kleur Yellow
    let kleurYellow = document.querySelector("#yellow-link")
    kleurYellow.addEventListener("click",function () {
        let yellowAchtergrond = document.querySelector("body")
        yellowAchtergrond.classList.add("yellow")
        yellowAchtergrond.classList.remove("red","blue","orangered","pink")
        getMenuListUl.style.visibility ="hidden";
        getMenuList.style.width= "100px";            
    })

    // Kleur Orangered
    let kleurOrangered = document.querySelector("#orangered-link")
    kleurOrangered.addEventListener("click",function () {
        let orangeredAchtergrond = document.querySelector("body")
        orangeredAchtergrond.classList.add("orangered")
        orangeredAchtergrond.classList.remove("red","blue","yellow","pink")  
        getMenuListUl.style.visibility ="hidden";
        getMenuList.style.width= "100px";
    })

    // Kleur Pink
    let kleurPink = document.querySelector("#pink-link")
    kleurPink.addEventListener("click",function () {
        let kleurPinkAchtergrond = document.querySelector("body")
        kleurPinkAchtergrond.classList.add("pink")
        kleurPinkAchtergrond.classList.remove("red","blue","yellow","orangered")  
        getMenuListUl.style.visibility ="hidden";
        getMenuList.style.width= "100px";
    })
});