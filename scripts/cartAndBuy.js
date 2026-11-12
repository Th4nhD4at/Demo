//must be included insde body, not head
cart=[]
baseObject={name:"",
    price:0,
    count:0,
}



function addToCart(name){ //Give a name "string" into this place
    for (let i=0;i<cart.length;i++){
        if(cart[i].name==name){
            cart[i].count+=1;
            return;
        }
    }

    let j = 0;
    while(j<itemList.length){
        if(itemList[j].name==name){
            break;
        }
        j++
    }
    if (j>=itemList.length){
        return;
    }
    let newItem = baseObject;
    newItem.name=itemList[j].name;
    newItem.price=itemList[j].price;
    newItem.count=1;
    cart.push(newItem);
}

function toggleCart(){
    if(document.getElementById("cart").style.display=="none"){
        showCart();
    }else{
        hideCart();
    }
}
function showCart(){
    document.getElementById("cart").style.display="block";
}
function hideCart(){
    document.getElementById("cart").style.display="none";
}

function submitCart(){
    alert(JSON.stringify(cart));
}

