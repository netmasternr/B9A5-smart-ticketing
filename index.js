
const allCards = document.getElementsByClassName('cards');

let sitCount = 0;

for (const card of allCards) {
    card.addEventListener('click', function() {

      // color
      card.style.backgroundColor = 'green';

        // One button click only
        card.removeEventListener('click', arguments.callee);

        // Seat count down
        const countDownElement = document.getElementById('count-down');
        let countDownValue = parseInt(countDownElement.innerText);   
        countDownValue -= 1;
        countDownElement.innerText = countDownValue;

        

        //seats checking
        if (sitCount >= 4) {
            alert('All seats are filled!');
            
            sitCount = 0;          
            countDownElement.innerText = 8; 
        }

        // Sit count up
        sitCount += 1 ;
        document.getElementById('sit-count').innerText = sitCount;

        // Total price calculation
        let total = 550;
        let calculate = total * sitCount;
        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = calculate;

        // Grant total calculation
        const grantTotal = document.getElementById('grant-total');
        grantTotal.innerText = totalPrice.innerText;
      //   console.log(grantTotal.innerText);



    });
}


