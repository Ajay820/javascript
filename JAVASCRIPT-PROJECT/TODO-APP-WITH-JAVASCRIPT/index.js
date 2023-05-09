function add(){
    let input = document.getElementById("input").value

    let list = document.getElementById("list")

    let div = document.createElement('div')

    div.setAttribute("class","flex")

    let div2 = document.createElement('div')
    
    let div3 = document.createElement("div")

    let edit = document.createElement("button")

    edit.innerText="Edit"
    edit.setAttribute("id","edit")

    let del = document.createElement("button")
    del.innerText="Delete"
    del.setAttribute("id","delete")

    const todo = document.createElement('input')

    todo.type="text"

    if(input.length > 0){
        todo.value=input
    }
    else{
        alert("add something")
    }
    todo.setAttribute('readonly','readonly')
    todo.setAttribute("class","todo")

    div2.appendChild(edit)
    div2.appendChild(del)
    div3.appendChild(todo)
   

    div.appendChild(div3)
    div.appendChild(div2)

    list.appendChild(div)

    document.getElementById("input").value =""



    edit.addEventListener("click",(e)=>{
        if(edit.innerText.toLowerCase()=="edit"){
            edit.innerText="save"
            todo.removeAttribute("readonly")
            todo.focus()            
        }
        else{
            edit.innerText="Edit"
            todo.setAttribute('readonly','readonly')
        }
    })

    // del.addEventListener("click",(e)=>{

    // })

    // on deleting the parent should be parent should be deleted

    del.addEventListener("click",(e)=>{
        const parent = document.getElementById("list")
        parent.removeChild(div)
    })


}
