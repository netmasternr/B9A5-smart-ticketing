
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

        // create new Element
         



        // Seats checking
        if (sitCount >= 4) {
            alert('All seats are filled!');
            
            sitCount = 0;          
            countDownElement.innerText = 8; 
        }

        // Sit count up
        sitCount += 1;
        document.getElementById('sit-count').innerText = sitCount;

        // Total price calculation
        let total = 550;
        let calculate = total * sitCount;

        const totalPrice = document.getElementById('total-price');
        totalPrice.innerText = calculate;

        // Grant total calculation
        const grantTotal = document.getElementById('grant-total');
        grantTotal.innerText = calculate;
    });
}

// Coupon area
const btn = document.getElementById('coupon-btn');

btn.addEventListener('click', function() {

    const inputValue = document.getElementById('input').value;
    const couponCodeA = 'NEW15';
    const couponCodeB = 'Couple 20';

    if (sitCount >= 4) {       
        let grantTotal = parseInt(document.getElementById('grant-total').innerText);

        if (inputValue === couponCodeA) {          
            grantTotal *= 0.85; 

        } else if (inputValue === couponCodeB) {            
            grantTotal *= 0.8; 
        }
        
        else {
            alert('Invalid coupon code');
            return;
        }

        // new grant total price
        const grantTotalElement = document.getElementById('grant-total');
        grantTotalElement.innerText = grantTotal;

    } else {
        alert('Please buy at least 4 tickets');
    }
});
