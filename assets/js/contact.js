const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('status');

if (product === 'hey') {
  console.log(product);
} else {
  console.log('Nahh');
}
