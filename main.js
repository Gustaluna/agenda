const form = document.getElementById('newItem');
const list = document.getElementById("list")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.elements['name']
    const telephone = event.target.elements['telephone']
    const email =  event.target.elements['email']

    const formularioValido = validaFormulario(name?.value, telephone?.value, email?.value)

    if (formularioValido == false){
        alert("Insira seus dados completos")
    }else{
        createElement(name?.value, telephone?.value, email?.value)
        name.value = ""
        telephone.value = ""
        email.value = ""
    }
   
})

function createLi(text,elementUl){
    
    const newName = document.createElement('p')
    newName.classList.add('item','back')
    newName.innerHTML += text 
    elementUl.appendChild(newName)
}

function createElement(name, telephone, email) {
    const newLi = document.createElement('li')
    newLi.classList.add('listing')
    
    createLi(name, newLi)

    createLi(telephone, newLi)

    createLi(email, newLi)

    
    list.appendChild(newLi)
}

function validaFormulario(name, telephone, email) {
    if(name == "" || String(telephone).length <= 10 || email == "" || !email.includes("@") ){
        return false
    } else{
        return true
    }
}