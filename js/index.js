// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subTotal = product.querySelector('.subtotal span');

  let priceNumber = Number(price.innerText);
  let quantityNumber = Number(quantity.value);

  return (subTotal.innerText = (priceNumber * quantityNumber).toFixed(2));
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 - calcular subtotal
  const products = document.getElementsByClassName('product');
  let totalProducts = 0;

  for (let i = 0; i < products.length; i++) {
    totalProducts += +updateSubtotal(products[i]);
  }

  // ITERATION 3 - calcular total
  const total = document.querySelector('#total-value span');
  total.innerText = totalProducts;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget; //button clicado
  const btnParent = event.currentTarget.parentNode; //div do button
  const product = btnParent.parentNode; //row do produto inteiro
  const row = product.parentNode; //tabela inteira

  row.removeChild(product);

  //calcular o total novamente depois que um item foi apagado
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  const productName = document.querySelector('.create-product td input').value;
  console.log(productName); // input name

  const inputPrice = document.getElementById('inputPrice').value;
  console.log(inputPrice); // input price

  const tbody = document.getElementById('tbody');

  const tr = document.createElement('tr');
  tr.classList.add('product');

  const row = `
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${inputPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;

  tr.innerHTML = row;

  tbody.appendChild(tr);

  const removeBtn = tr.querySelector('.btn-remove');

  removeBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //pegando todos os buttons
  const removeBtn = document.getElementsByClassName('btn-remove');

  //iterando pelos buttons e adicionando um eventlistener em cada um
  //passando a callback removeProduct()
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

  //pegando o botão CREAT
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
