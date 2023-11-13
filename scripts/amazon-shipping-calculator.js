const shippingCost = 5;
    const shippingThreshold = 30;
    let userInput = 0;
    function showShippingCost(){
      userInput = parseInt(document.querySelector('.js-input').value);
      showCost()
    }

    function showCost(){
      const showCostElement = document.querySelector('.js-showcost');
      
      if(userInput<=shippingThreshold){
        
        showCostElement.innerHTML = `${userInput+shippingCost}, Shipping included`;
        }
      else{
        showCostElement.innerHTML = `${userInput}, Shipping FREE`
      }
    }
    function subscribe(){
      const buttonElement = document.querySelector('.js-subscribe-button');
      if(buttonElement.innerHTML === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
        console.log("added class");
      }
      else{
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed')
      }
    }