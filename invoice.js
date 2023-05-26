let selectoption;
let productname;
let price;
let quantity;
let amount;

function productchange() {
    selectoption=document.getElementById('optn');
    productname=selectoption.options[selectoption.selectedIndex].text
    price= selectoption.value;
    document.getElementById('prc').value = price
}
function qtychange() {
    quantity=document.getElementById('qty').value
    console.log(quantity)
    amount= price * quantity
    document.getElementById('amt').value= amount
}
function addproduct() {



    var ad=document.getElementById('tbody')
    // console.log(tbody,"bodu")
    tbody.setAttribute("style", "height:20vh; width:100%; border:10px solid red;")
    var e=document.createElement('div')
    console.log(e)
    e.className="abc"
    var ad=document.body.appendChild(e)
    console.log(ad)
    ad.setAttribute("style","height:5vh;width:68% ;margin-left:16%;margin-top:-35%;border-bottom:2px solid; ")
    ad.innerHTML+=`<li><b>${productname}</b></li>
    <li  style="margin-left:35%;">${price}</li> 
    <li style="margin-left:13%;">${quantity}</li>
    <li style="margin-left:23%;">${amount}</li>`

    var tablerow= document.getElementById('table-row');
    var     sumval=0;
    for(var i=1;i < tablerow.rows.length; i++)
    {
        sumval =sumval + parseFloat(tablerow.rows[i].cells[3].innerHTML);
        console.log(sumval,"sum")
    }
    document.getElementById('total').value=sumval
    var discount=document.getElementById('dsc').value;

    var finaldsc  =(sumval/ 100)* discount
    var amt=sumval-finaldsc
    var gsttax =document.getElementById('tax').value
    netamnt=amt+amt+gsttax/100
    document.getElementById('netamount').value =Math.round(netamnt)
    
    // console.log("ee")
    // var tmarkup="<tr><td>" + productname + "</td><td>" + price +"</td><td>" + quantity +"</td><td>" +amount +"</td></tr>";
    // console.log(tmarkup)
    // var productbill=document.getElementById('tbody');
    
    // productbill.innerHtml= tmarkup;
    // console.log(productbill,"bill")
    // 
}