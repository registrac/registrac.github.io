const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('status');

console.log(product);
