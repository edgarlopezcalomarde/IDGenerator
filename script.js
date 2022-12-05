

const idBox = document.querySelector(".uniqueid")
const idLength = document.querySelector(".lengthid")

const btnCopy = document.querySelector(".btnCopy")
const btnRefresh = document.querySelector(".btnRefresh")

const copyAlert = document.querySelector(".alert")

const btnCloseAlert = document.querySelector(".btnCloseAlert")

let  previousKey;

//Generar ID Random UWu
const generateID = () => (Date.now() / Math.random() * 10).toString(30).split(".").join("") + Math.random().toString(30).slice(2)


const cerrarAlert = () =>{
    copyAlert.classList.remove("show")
    copyAlert.classList.add("hide")

}

const mostrarAlert = () =>{
    copyAlert.classList.remove("oculto")
    copyAlert.classList.remove("hide")
    copyAlert.classList.add("show")
}

idBox.innerHTML =  generateID()

window.addEventListener("keyup", (e)=>{

    if (previousKey === "Control") {
        if(e.key.toLowerCase() === "c"){
            navigator.clipboard.writeText(idBox.textContent)
            mostrarAlert() 

            setTimeout(()=> cerrarAlert(), 3000)
        }
    }

    if(e.key.toLowerCase() === "g"){
        idBox.innerHTML =  generateID()
    }

    previousKey = e.key

})


btnCopy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(idBox.textContent)
    mostrarAlert()    
})

btnRefresh.addEventListener("click", ()=>{
    idBox.innerHTML =  generateID()
})






