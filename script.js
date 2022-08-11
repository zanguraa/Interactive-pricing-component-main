let slider = document.querySelector('.switch');
let priceMonth = document.querySelector('.month-output');
const pageViews = document.getElementById('page-views');
const price = document.getElementById('price-output');

let valueCount = 8;

const rangeBackground = document.getElementById("myRange").oninput = function() {
    const value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #A4F3EB 0%, #ECF0FB ' + value + '%, #fff ' + value + '%, white 100%)';

    
    valueCount = +this.value;
    console.log(typeof valueCount);
    if(this.value == 0) {
        pageViews.firstElementChild.innerHTML = '0';
        price.innerHTML = `0$`;
    }
    if(this.value == 8) {
        pageViews.firstElementChild.innerHTML = '10';
        price.innerHTML = `${this.value}$`;
    }
    if(this.value == 12) {
        pageViews.firstElementChild.innerHTML = '50';
        price.innerHTML = `${this.value}$`;
    }
    if(this.value == 24) {
        pageViews.firstElementChild.innerHTML = '100';
        price.innerHTML = `${this.value}$`;
    }
    if(this.value == 36) {
        pageViews.firstElementChild.innerHTML = '1000';
        price.innerHTML = `${this.value}$`;
    }

    
  };

  
  let sliderCounter = 0;
  slider.addEventListener('input', (event)=> {
    console.log(valueCount);
     let count = valueCount * 12;
     
    let result = count - (count * 0.25);
    console.log(result, count, valueCount);
    if(!event.target.checked) {
        priceMonth.innerHTML = "/month";
        price.innerHTML = `${valueCount}$`;
        sliderCounter = 1;
        
    } else if(event.target.checked) {
        priceMonth.innerHTML = "/year";
        price.innerHTML = `${result}$`;
        sliderCounter = 0;
        
    }
});






  