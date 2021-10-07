const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('status');

switch (product) {
  case 'formsent':
    document.getElementById('msg').innerHTML = "<p class='msg-success'>Your inquiry has been successfully recorded. We will be contacting you shortly.</p>";
    window.setTimeout(function(){
      window.location.href = "https://registrac.page/contact";
    }, 10000);
    break;
  case 'error':
    document.getElementById('msg').innerHTML = "<p class='msg-error'>Ooops. There was an error and we could not process your request. Please try again later.</p>";
    window.setTimeout(function(){
      window.location.href = "https://registrac.page/contact";
    }, 10000);
    break;
  default:
}
