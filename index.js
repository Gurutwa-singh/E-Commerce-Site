

let total = 0

let totaldiv = document.createElement('h2')
totaldiv.id = "total"
totaldiv.innerText = "Total: ₹0"
document.getElementById('cart-view').appendChild(totaldiv)
function Products(img, str1, str2, str3, str4) {



    let card = document.createElement('div')
    card.classList.add('card')

    let image = document.createElement("img")
    image.classList.add('text')

    let name = document.createElement("name")
    name.classList.add('text')

    let description = document.createElement("description")
    description.classList.add('text')

    let price = document.createElement("price")
    price.classList.add('text')

    let size = document.createElement("size")
    size.classList.add('text')

    let button = document.createElement("button")
    button.classList.add('button')
    button.classList.add('select')

    image.setAttribute("src", img)
    name.innerText = str1
    description.innerText = str2
    price.innerText = str3
    size.innerText = str4
    button.innerText = "ADD TO CART"

    card.appendChild(image)
    card.appendChild(document.createElement('br'))


    card.appendChild(name)
    card.appendChild(document.createElement('br'))


    card.appendChild(description)
    card.appendChild(document.createElement('br'))

    card.appendChild(price)
    card.appendChild(document.createElement('br'))

    card.appendChild(size)
    card.appendChild(document.createElement('br'))

    card.appendChild(button)


    document.getElementById('Products').appendChild(card)


    button.addEventListener("click", (e) => {
        let priceText = parseInt(price.innerText.replace("$", ""))
        total = total + priceText
        document.getElementById("total").innerText = "Total: ₹" + total
        let container = document.getElementById('cart-view')
        let card1 = e.target.parentElement
        let newItem = card1.cloneNode(true)
        newItem.querySelector('button').remove()

        // disable button
        e.target.disabled = true
        e.target.innerText = "ADDED"


        let remove = document.createElement('button')
        remove.classList.add("remove-btn")
        remove.innerText = "Remove"
        remove.addEventListener("click", (e) => {
            // 🔴 Update total
            total -= priceText
            document.getElementById("total").innerText = "Total: ₹" + total
            e.preventDefault()
            newItem.remove()
            e.target.style.display = "none"
        })
        container.appendChild(newItem)
        container.appendChild(remove)
        e.target.disabled = true
        e.target.innerText = "ADDED"
    })
}


Products("images/1.jpg", "Chunky Sneakers", "Unisex Shoes", "$20", "5,6,8,9")
Products("images/2.jpg", "Sports Shoes", "Unisex Shoes", "$15", "5,6,8,9,10,11")
Products("images/3.jpg", "Casual Shoes", "Men Shoes Red", "$22", "6,8,10")
Products("images/4.jpg", "Chunky Sneakers", "Unisex Shoes", "$30", "5,6,9,10,12")
Products("images/5.jpg", "Chunky Sneakers", "Unisex Shoes", "$30", "5,6,9,10,12")
Products("images/6.jpg", "Chunky Sneakers", "Unisex Shoes", "$30", "5,6,9,10,12")

let cart = document.getElementById('cart')
cart.addEventListener("click", (e) => {
    e.preventDefault()

    console.log(e.target)
    let sign = document.getElementsByClassName('Sign-Up')[0]
    sign.style.display = "flex"

    sign.scrollIntoView({
        behavior: "smooth"
    })
})

let button1 = document.getElementById('signup-button')

button1.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e.target)
    let email = document.getElementById('email').value
    let name = document.getElementById('name').value
    let pass = document.getElementById('pass').value

    function validator(str) {
        for (i = 0; i < str.length; i++) {
            let c = str.charCodeAt(i)
            if (!(c >= 65 && c <= 90) && // A-Z
                !(c >= 97 && c <= 122) && // a-z
                !(c >= 48 && c <= 57) // 0-9
            ) {
                return true
            }
        }
        return false
    }

    if (!validator(name) || !validator(email) || !validator(pass)) {
        alert("Please add some special characters in each field")
    }
    else {
        alert("Passed")
        let unlock = document.getElementById('cart-view')
        unlock.style.display = "flex"
        unlock.scrollIntoView({
            behavior: "smooth"
        })
    }
}
)
let home = document.getElementById('home')

home.addEventListener("click", (e) => {
    e.preventDefault()

    let house = document.getElementById("Home")

    house.scrollIntoView({
        behavior: "smooth"
    })
})

let pro = document.getElementById('pro')

pro.addEventListener("click", (e) => {
    e.preventDefault()
    let material = document.getElementById('Products')

    material.scrollIntoView({
        behavior: "smooth"
    })
})