// document.getElementsByClassName('.reply-btn').click();

function myfunction(id){
    var x = document.getElementById(id);
    if(x.className.indexOf('ds-none') == -1){
        x.className += ' ds-none'
    }else{
       x.className = x.className.replace(' ds-none','');
    }
}


function likeFunction(x){
    x.innerHTML = "&#10003; Liked";
    x.style.fontWeight = "bold";
}
