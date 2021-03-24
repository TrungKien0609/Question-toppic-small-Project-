const btns = document.querySelectorAll('#btn');
btns.forEach(function(btn){
    btn.addEventListener("click",function(temp){
        if(temp.currentTarget.parentElement.parentElement.classList.contains("show_text"))
        temp.currentTarget.parentElement.parentElement.classList.remove("show_text");
        else
        temp.currentTarget.parentElement.parentElement.classList.add("show_text");
    })
});
