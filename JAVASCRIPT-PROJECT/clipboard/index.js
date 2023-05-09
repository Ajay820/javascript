function copy(){
    const copy = document.getElementById("copy")
    copy.select()
    const text = copy.value
    navigator.clipboard.writeText(text)
    text.value=""

}

