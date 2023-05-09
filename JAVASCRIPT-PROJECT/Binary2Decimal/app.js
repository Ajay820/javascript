document.addEventListener("input",input)

function input(){
    let ans =document.getElementById("binary").value

    let val1 = ans.split("")

    let val2 =val1.reverse()

    return val2

}

let convert =document.getElementById("btn")

convert.addEventListener("click",val)

function val(e){
e.preventDefault()

    values =[]
    let ans2 = input() 

    ans2.forEach((val,index)=>{
        if(val == 1){
            arr = Math.pow(2,index)
            values.push(arr)
        }

        if(values.length == 0){
            document.getElementById("ans").innerText=0
        }
        else{
            let answer = values.reduce((acc,cur)=>acc+cur)

            document.getElementById("ans").innerText=answer
        }
    })
}
