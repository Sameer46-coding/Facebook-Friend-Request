let con = document.getElementById("confirm");
let del = document.getElementById("del");
let all = document.getElementById("all");

con.addEventListener("click" , function(){
    all.innerHTML = ""
    alert("You Are Now Friends")
})

del.addEventListener("click" , function(){
    all.innerHTML = ""
    alert("Request Removed")
})
