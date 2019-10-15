var tItems = [];

var quantities = document.getElementsByClassName('cart-quantity-input')[0]

// $localStorage.data=tItems


if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded', ready)
}
   else{
    ready()

}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('remove-item')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++){ 
        var button = removeCartItemButtons[i]
        button.addEventListener('click',removeCartItem)
        removeFromCartClicked()
    } 
        
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){ 
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
}
    var addToCartButtons = document.getElementsByClassName('addcart')
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    // var removeItemFromCart = document.getElementsByClassName()
    // pickFromCart()
    // $localStorage.data=tItems
}


function removeCartItem(event){
    var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
            // removeFromCartClicked()
            var buttonClicked = event.target
            var shopItem = buttonClicked.parentElement.parentElement.parentElement
            // console.log(shopItem)
            // var itemContent = shopItem.getElementsByClassName('content')[0]
            var title = shopItem.getElementsByClassName('item-name')[0].innerText;
            var price = shopItem.getElementsByClassName('item-price')[0].innerText
            // var imgsrc = shopItem.getElementsByClassName('image-1')[0].src
            // var one = "Grilled Rice";
            // console.log(title)
            hope = title.split("i")
            console.log(title, price)   
            var indexx = tItems.indexOf(title)
            console.log(indexx)
            tItems.splice(indexx,2)
            console.log()
            updateCartTotal()
}

function quantityChanged(event){
    var input = event.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    // var tItems = [];
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    // console.log(shopItem)
    var itemContent = shopItem.getElementsByClassName('content')[0]
    var title = itemContent.getElementsByClassName('title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imgsrc = shopItem.getElementsByClassName('image-1')[0].src
    console.log(title, price, imgsrc)
    console.log(tItems)
    var check = tItems.indexOf(title)
    console.log(check)
    if (check === -1){
        tItems.push(title, price)
        console.log(tItems)
        addItemToCart(title, price)
        updateCartTotal()
        countQuantity()
    }
    // pickFromCart()

}   

// function removeFromCartClicked(event){
//     var button = event.target
//     var shopItem = button.parentElement.parentElement.parentElement
//     var itemContent = shopItem.getElementsByClassName('content')[0]
//     var title = itemContent.getElementsByClassName('title')[0].innerText
//     var price = shopItem.getElementsByClassName('price')[0].innerText
//     var imgsrc = shopItem.getElementsByClassName('image-1')[0].src
//     console.log(title, price, imgsrc)
// }


function addItemToCart(title, price){
var cartRow = document.createElement('div')
var cartItemContainer = document.getElementsByClassName('store-items')[0]
// var cartItems = document.getElementsByClassName('store-items')[0]
var cartItemNames = cartItemContainer.getElementsByClassName('item-name')
 for (var i=0; i < cartItemNames.length; i++){
     if (cartItemNames[i].innerText == title)
     {
         alert ("This item is already added to the cart ")
         return;
     }
 }
 
var cartRowContents = `
<div class="row">
<div class="item-image" >
<img src="{{ url_for('static',filename='img/cart.png')}}">
</div>
                  <div class="item-name" style="width: 40%; font-size: 20px; padding-top: 15px;">${title}</div>
                  <input class="cart-quantity-input" type="number" value="1" style="height:9%; width: 7%; vertical-align: middle;">
                  <div class="right-control" style="width: 20%; text-align: right;">
                  <div class="remove-item">
                    <i class="fa fa-minus-circle fa-2x"></i>
                  </div>
                  <div class="item-price">
<small class="text-muted price">${price}</small> 
                    </div>
                    
                  </div>`
// var storeItems = document.
cartRow.innerHTML = cartRowContents
cartItemContainer.append(cartRow)
cartRow.getElementsByClassName('remove-item')[0].addEventListener('click',removeCartItem)
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

// function addItemToCart(title){           
// var cartRow = document.createElement('div')
// cartRow.innerText = title
// var cartItems = document.getElementsByClassName('store-items')[0]
// cartItems.append(cartRow)
// console.log(cartItems)                  
}

function sendArray(){
    var formHolder = document.getElementsByClassName('trick-form')[0]
    var theForm = document.createElement('div')
    // var formArray = array.innerHTML
    var formContent= `
    <label for = "food">Food</label>
    <input type="text" class="form-control" id="food" name="food" value="${tItems}">
    </div>
    `
    theForm.innerHTML = formContent
    formHolder.append(theForm)
}

function pressButton(){
    localStorage.setItem("cho", JSON.stringify(tItems));
}

function finalPush(){
    var cartItems = document.getElementsByClassName('store-items')[0]
    var cartItem = cartItems.getElementsByClassName('row')
    for (var i=0; i<cartItem.length; i++){
        var title = cartItems.getElementsByClassName('item-name')[0]
        var quantity = cartItems.getElementsByClassName('cart-quantity-input')[0].innerText
        var price = cartItems.getElementsByClassName('item-price')[0]
        var totalArray = []
        var cho={
            "title" : title,
            "quantity" : quantity,
            "price" : price
        }
        totalArray.push(cho) 
       console.log(cho)
       console.log(totalArray)
       console.log(title)
    }
var total = document.getElementsByClassName=("total-price").innerText
}

function findTheTotal() {
    var cartItemContainer = document.getElementsByClassName('store-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('row')
    // var total = 0;
    var totalArray =[]
    for (var i = 0; i < cartRows.length; i++){ 
        var cartRow = cartRows[i]
        var titleElement = cartRow.getElementsByClassName('item-name')[0]
        var priceElement = cartRow.getElementsByClassName('item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price =parseFloat( priceElement.innerText.replace('Ghc',''))
        var quantity = quantityElement.value
        var myObject = {
            name : titleElement,
            priced : priceElement,
            quantity : quantity
        };
        console.log(myObject)
        totalArray.push(myObject)

        

    }
    // total = Math.round(total * 100)/100
    // document.getElementsByClassName('total-price')[0].innerText = 'Ghc'+total
}


// I built this function to get the quantity element.
function countQuantity(){
    var cartItemContainer = document.getElementsByClassName('store-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('row')
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var quantity = quantityElement.value
        console.log(quantity)

    }
    // var quantityElement = cartRows.getElementsByClassName('cart-quantity-input')[0]
    // var quantity = quantityElement.value
    // console.log(quantity)



}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('store-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('row')
    var total = 0;
    for (var i = 0; i < cartRows.length; i++){ 
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price =parseFloat( priceElement.innerText.replace('Ghc',''))
        var quantity = quantityElement.value
        total = total + (price*quantity)

    }
    total = Math.round(total * 100)/100
    document.getElementsByClassName('total-price')[0].innerText = 'Ghc'+total
}