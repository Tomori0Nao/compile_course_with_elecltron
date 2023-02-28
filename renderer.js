// const information = document.getElementById('info');
// console.log("hello")
// information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
const readFile = document.getElementById('readFile');
readFile.innerText = 'hahaha'
window.electronAPI.onOpenFile((_event, value) => {
    // const oldValue = Number(counter.innerText)
    // const newValue = oldValue + value
    // console.log("hhh")
    // &emsp; tab键
    var text = ''
    for (let index = 0; index < value.length; index++) {
        const element = value[index];
        // element.replace("   ","&emsp;")
        // if("    " in element)
        //     {element += "2222"}
        text += element + '\n'
    }
    // var text = "   222"
    readFile.innerText = text
    console.log(text)
})