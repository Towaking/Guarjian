window.onscroll = function () {
    let top = screenTop + 140;
    if(window.scrollY <= top){
        document.querySelector("#navigation-bar").classList.remove("sticky");
    }else{
        document.querySelector("#navigation-bar").classList.add("sticky");
    }
    
}



let hamburger = document.querySelector('#hamburger');
let home = document.querySelector('#navigation')



hamburger.onclick = function(){
    if(home.className === "nav"){
        home.className += " change";
    }else{
        home.className = "nav";
    }
}


