let ans = document.getElementById("button")

function color(){
    let val = "0123456789ABCDEF"
    let cons = "#"
    for(let i=0 ;i<6;i++){
        cons = cons + val[Math.floor(Math.random() * 16)]
        console.log(cons)
    }

    return cons
}


ans.addEventListener("click",random)

function random(){
    document.body.style.backgroundColor=color()
}