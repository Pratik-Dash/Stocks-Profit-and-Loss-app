const initialPrice = document.querySelector("#initial");
const quantity = document.querySelector("#qty");
const currentPrice = document.querySelector("#current")
const button = document.querySelector(".button")
const output = document.querySelector(".output")

button.addEventListener("click", ()=>{

    if(initialPrice.value!= '' && quantity.value!='' && currentPrice.value != '')
    {
        

        var init = Number(initialPrice.value)
        
        var qty = Number(quantity.value)
        
        var current = Number(currentPrice.value)
       

        if(init>0 && qty>0 && current >0){
        checkProfitOrLoss(init,qty,current)
        }else{
            output.innerText = "Please provide valid details. The values must be greater than 0"
            output.style.color = "red"
            
        }
}
else{
   
    
        output.innerText = 'One or more input fields are empty. Please fill all the required details.'
        output.className = "out-loss"
    
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
        output.className = "out-loss"
    }
    else if(totalCurrentPrice > totalInitPrice){
        var profitAmt = totalCurrentPrice - totalInitPrice
        var profitPercent = (profitAmt/totalInitPrice) * 100
        output.innerText = `Hey you have a profit of ${profitAmt} and the profit percent is ${profitPercent.toFixed(2)}%`
        output.className = "out-profit"
    }
    else{
        output.innerText = "No pain no gain and no gain no pain"
        output.className = "output"
    }
}




