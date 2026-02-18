document.getElementById("add-money-btn").addEventListener("click", function(){
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select a Bank"){
        alert("Please select a Bank");
        return;
    }
    const accno = getValueFromInput("add-money-number");
    if(accno.length !=11){
        alert("Invalid Account Number");
        return;
    }

    const amount = getValueFromInput("add-money-amount");

    const newBalance = getBalance() + Number(amount);
    

    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

        const history = document.getElementById("history-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML =`
        <div class="transaction-card p-5 bg-base-100">
        Add Money Success from
        ${bankAccount}, acc-no ${accno} at ${new Date()}

        </div>
        
        `;

        history.append(newHistory);


    }else{
        alert("Invalid Pin");
        return;
    }



})