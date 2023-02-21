// Get 4 digit pin
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        console.log('pin not 3 digit foound', pin);
        return getPin();
    }
}

// generate pin
function generatePin(){
    const random = Math.round(Math.random()*10000)
    return random;
}

// Add even listener Generate Button handler
document.getElementById('generate-btn').addEventListener('click', ()=> {
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = getPin();
})

// calculator button handler
document.getElementById('calculator').addEventListener('click', (event)=>{
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

// Submit button handler 
document.getElementById('verify-pin').addEventListener('click', ()=>{
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    // Get Massage
    const valiedPin = document.getElementById('correct-massage');
    const invaliedPin = document.getElementById('incorrect-massage');
    // Get Live
    const remainLive = document.getElementById('remain-live');
    const remainLiveString = remainLive.innerText;
    const remainLiveNum = parseInt(remainLiveString);

    // Get Section
    const pinGenerateArea = document.getElementById('pin-generate-area');
    const warningSection = document.getElementById('warning-massage');

    if(currentPin === typedNumber){
        valiedPin.style.display = 'block';
        invaliedPin.style.display = "none";
    }
    else{
        invaliedPin.style.display = "block";
        valiedPin.style.display = 'none';
        const newNumber = remainLiveNum - 1;
        console.log(newNumber)
        remainLive.innerText = newNumber;

        if(remainLive === 0){
            const remainLive = document.getElementById('remain-live');
            console.log(newNumber)
            remainLive.innerText = newNumber;
            pinGenerateArea.style.display = 'none';
            warningSection.style.display = 'block';
        }
    }
     
})