
function insert(num){

    document.form.textview.value = document.form.textview.value + num

  }
  
  function equals(){
    
      let ans = document.form.textview.value

      document.form.textview.value = eval(ans)
  }
  
  function clean(){
    document.form.textview.value =""
  }
  
  function back(){

    let ans3 = document.form.textview.value
    document.form.textview.value=ans3.substring(0,ans3.length-1)
  }