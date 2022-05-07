 

 async function data(){
     let res = await fetch('https://grocery-masai.herokuapp.com/items');
     let data = await res.json();

     appendData(data.data) 
 }

 let trending = document.getElementById("trending");

 function appendData(data){

    console.log(data);
     data.forEach(el => {
       
     let div = document.createElement("div");
     div.setAttribute("class","p_div")

     let div2 = document.createElement("div");
     div2.setAttribute("class","price_add")

     let img = document.createElement("img");
     img.src = el.image;
     img.setAttribute("class","products")

     let deli = document.createElement("p");
     deli.innerHTML = "<p style='color: #880033;'> DELIVERY IN 90 MINUTES</p>"

     let title = document.createElement("p");
     title.innerHTML = "Product Name: "+el.name;

     let cont = document.createElement("p");
     cont.innerHTML = "1PC";

     let price = document.createElement("p");
     price.innerHTML = "<b>Price: </b> ₹"+el.price;

     let button = document.createElement("button");
     button.setAttribute("class","p_button")
     button.innerHTML ="Add To Cart"
     button.onclick = function(){

        
        var title = el.name;
        var img = el.image;
        var price = el.price;
    
        var current = new storeData(img,title,price);
    
        cart_data.push(current);
    
        localStorage.setItem("cart_data",JSON.stringify(cart_data));
     }
     div2.append(price,button)
     div.append(img,deli,title,cont,div2);
     trending.append(div);
    });

     
 }
 function open_cart(){
     window.open("cart.html")
 }
  function home(){
      window.open("index.html","_self")
  }

 let cart_data =[];


function storeData(brand,name,price,image){
    this.brand=brand,
    this.name = name,
    this.price = price,
    this.image = image
}
 data();