let increamentEl = document.querySelector('[data-quantity-increament]');
let decreamentEl = document.querySelector('[data-quantity-decreament]');
let quantity = document.querySelector('[data-quantity]');

if (quantity && increamentEl && decreamentEl) {
  increamentEl.addEventListener('click', ()=> {
    quantity.value++;
  })
  
  decreamentEl.addEventListener('click', ()=> {
    if (quantity.value == 1) return;
    quantity.value--;
  })
}
