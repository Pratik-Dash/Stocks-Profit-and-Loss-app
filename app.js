const initialPrice = document.querySelector("#initial");
const quantity = document.querySelector("#qty");
const currentPrice = document.querySelector("#current")
const button = document.querySelector(".button")
const output = document.querySelector(".output")

button.addEventListener("click", ()=>{

    if(initialPrice.value!= '' && quantity.value!='' && currentPrice.value != '')
    {
        

        var init = Number(initialPrice.value)
        initialPrice.style.border = "1px solid green"
        var qty = Number(quantity.value)
        quantity.style.border = "1px solid green"
        var current = Number(currentPrice.value)
        currentPrice.style.border = "1px solid green"

        if(init>0 && qty>0 && current >0){
        checkProfitOrLoss(init,qty,current)
        }else{
            output.innerText = "please provide valid details"
            output.style.color = "red"
        }
}
else{
   
        if(initialPrice.value === ''){
            initialPrice.style.border = "1px solid red"
        }
        if(quantity.value === ''){
            quantity.style.border = "1px solid red"
        }
        if(currentPrice.value === ''){
           currentPrice.style.border = "1px solid red"
        }
        output.innerText = 'One or more input fields are empty. Please fill all the required details.'
    
}
})

function checkProfitOrLoss(init,qty,current){
   
    var totalInitPrice = init * qty;
    
    var totalCurrentPrice = current * qty;
    
    if(totalInitPrice>totalCurrentPrice)
    {
        var lossAmt = totalInitPrice - totalCurrentPrice
        var lossPercent = (lossAmt/totalInitPrice) * 100
        output.innerText = `Hey you have a loss of ${lossAmt} and the loss percent is ${lossPercent.toFixed(2)}%`
    }
    else if(totalCurrentPrice > totalInitPrice){
        var profitAmt = totalCurrentPrice - totalInitPrice
        var profitPercent = (profitAmt/totalInitPrice) * 100
        output.innerText = `Hey you have a profit of ${profitAmt} and the profit percent is ${profitPercent.toFixed(2)}%`
    }
    else{
        output.innerText = "No pain no gain and no gain no pain"
    }
}




