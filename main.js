const form = document.getElementById('newItem');
const list = document.getElementById("list")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.elements['name']
    const telephone = event.target.elements['telephone']
    const email =  event.target.elements['email']

    createElement(name?.value, telephone?.value, email?.value)
    name.value = ""
    telephone.value = ""
    email.value = ""
})

function createElement(name, telephone, email) {
    const newUl = document.createElement('ul')
    newUl.classList.add('listing')
    const newName = document.createElement('li')
    newName.classList.add('item','back')
    newName.innerHTML += name 
    newUl.appendChild(newName)
    newUl.classList.add('listing')
    const newTel = document.createElement('li')
    newTel.classList.add('item','back')  
    newTel.innerHTML += telephone
    newUl.appendChild(newTel)
    newUl.classList.add('listing')
    const newEmail = document.createElement('li')
    newEmail.classList.add('item', 'back')  
    newEmail.innerHTML += email   
    newUl.appendChild(newEmail)
    list.appendChild(newUl)
}