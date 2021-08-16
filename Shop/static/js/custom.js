/* Zoom all images that has class .xzoom */
if (document.readyState == "loading") {
  document.addEventListener("DOMContentloaded", ready);
} else {
  ready();
}
function ready() {
  $("img.xzoom")
    .wrap('<span style="display:inline-block"></span>')
    .css("display", "block")
    .parent()
    .zoom();

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  };

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // fade in observed elements that are in view
        entry.target.classList.add("appear");
      } else {
        // fade out observed elements that are not in view
        entry.target.classList.remove("appear");
      }
    });
  }
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const fadeElms = document.querySelectorAll(".reveal");
  fadeElms.forEach((el) => observer.observe(el));

// Start Sticky Navbar

  const nav = document.querySelector('#navigation');
  const navTop = nav.offsetTop;
  function stickyNavigation() {
    if (window.scrollY >= navTop) {
      // nav offsetHeight = height of nav
    nav.classList.add('Sticky')
    } else {
      nav.classList.remove('Sticky');
    }
  }
  window.addEventListener('scroll', stickyNavigation);
// End Sticky Navbar

// const faderImages = document.querySelectorAll(".reveal");
  // Mine Code
  // const options ={
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.25
  // }
  // const observer = new IntersectionObserver((entries, observer)=>{
  //         entries.forEach(entry =>{
  //           if(entry.isIntersecting){
  //             entry.target.classList.add('appear');
  //           }
  //           else{
  //             entry.target.classList.remove('appear')
  //           }
  //         })

  // },options)

  // faderImages.forEach(images =>{
  //   observer.observe(images);
  // });

  let sCart = document.querySelectorAll('.shoppingCart');

    if(localStorage.getItem("shoppingCart") == null){
      var shoppingCart ={};
    }
    else{
      shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
      document.getElementById('cartvalue').innerHTML= Object.keys(shoppingCart).length;
    }

  for(i = 0; i < sCart.length; i ++){
    sCart[i].addEventListener('click', function(productId){
      let idStr = this.id.toString();
      if(shoppingCart[idStr] != undefined){
        shoppingCart[idStr] = shoppingCart[idStr] + 1;
      }
      else{
        shoppingCart[idStr] = 1;
      }
      let shopping_Cart = JSON.stringify(shoppingCart);
      localStorage.setItem('shoppingCart', shopping_Cart);
      document.getElementById('cartvalue').innerHTML= Object.keys(shoppingCart).length;

    });

  }


}
