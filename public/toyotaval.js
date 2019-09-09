/** This javascript file written by Timothy Mwandha validates the data entered into
 *  the Toyota mail order application and will compute the appropriate output information.
 * My approach is to (a) define variables for all html elements (b) validate the data entered 
 * or data selected from database, by using nested if statements, which upon returing true,
 * the validData method continues to (c) work out and display the cost, sales tax, shipping
 * and total. A web server posts the data into the mysql database.*/



/**  Declaration of the method  */
var validData = () => {


  /** Declaration and definition of variables that store the HTML5 elements
   * in the Toyota mail order form. */

  const custID = document.getElementById('custID');
  const nam = document.getElementById('nam');
  const city = document.getElementById('city');
  const ret = document.getElementById('ret');
  const part = document.getElementById('part');
  const desc = document.getElementById('desc');
  const pric = document.getElementById('pric');
  var price = parseFloat(pric.value);
  const quan = document.getElementById('quan');
  var qty = parseFloat(quan.value);
  const ovsiz = document.getElementById('ovsiz');
  const cos = document.getElementById('cos');
  var cost = parseFloat(cos.value);
  var sata = document.getElementById('sata');
  var satax = parseFloat(sata.value);
  var ship = document.getElementById('ship');
  var shipamt = parseFloat(ship.value);
  var tot = document.getElementById('tot');
  var toto = parseFloat(tot.value);
  

  
  /**   the conditional statements check IF the data validation rules have been broken,
   * and gives the user feedback to enter the correct data. Else the program continues 
   * to execution - to calculate the total. */

  //validating the data entered into the customer ID element

  if (custID.value.length == 0 || custID.value ==null) {
    alert("Customer ID cannot be blank or have spaces between.");
    custID.style.border = "2px solid red";
    console.log("custID is false");
    }
  else {
    console.log("custID is true");
    }


//validating the data entered into the name element 
  if (nam.value.length == 0 || nam.value ==null) {
    alert("Name is missing. This field cannot be left blank. Type your name now.");
    nam.style.border = "2px solid blue";
    nam.focus();
    console.log("name is false");
    
  }
  else {
    console.log("name is true");
    }

//validating the city selected in the city drop down, or entered by user.
  if (city.value == "default") {
    alert('Select your city from the list OR type in your city (3 characters in CAPITALS');
    city.style.border = "2px solid blue";
    city.focus();
    console.log("city is false");
   }
  else {
    console.log("city is true");
    
  }


//validating the data entered into the part number element
  if (part.value.length == 0) {
    alert("Part number is missing. In future, this will be selected from the database, upon entering the part description.");
    part.style.border = "2px solid blue";
    part.focus();
    console.log("part number is false");
    
  }
  else {
    console.log("part number is true");
    
  }

//validating the data entered into the description element
  if (desc.value.length == 0) {
    alert("Description is missing. This field cannot be left blank. Type description.");
    desc.style.border = "2px solid blue";
    desc.focus();
    console.log("description is false");
    
  }
  else {
    console.log("description is true");
    
  }

//validating that the data entered into the price element in a number > 0.

  if (pric < 0 || pric.value ==""){
    alert("Price MUST be a number greater that zero. In future, price will be selected from database, upon entering part description or part number.");
    pric.style.border = "2px solid blue";
    pric.focus();
    console.log("price is false");
    
    }
    else{
      console.log("price is true");
      
    }
    


//validating that the data entered into the quantity element in a number > 0.
 
    if (quan < 0 || quan.value ==""){
      alert("QUANTITY should be a NUMBER greater than > ZERO.");
      quan.style.border = "2px solid blue";
      quan.focus();
      console.log("quantity is false");
      
      }
      else{
        console.log("quantity is true");
        
      }
      
    


/** depending on the city of the customer, sale tax is calculated, as a percentage of cost,
 * provided that the retail customer checkbox is still checked.
 */

 /** Arithmetically, COST is the product of PRICE and QUANTITY, so we make simple statements*/

cost = price * qty;
cos.value = cost.toFixed(2);

/**calculating sales tax, as a percentage of cost, depending on city location selected. */

      if (city.value == 'KLA' && ret.checked==true){
        satax = cost * 0.1;
        sata.value = satax.toFixed(2);
      }
      
      else if( city.value == 'EBB' && ret.checked==true){
        satax = cost * 0.05;
        sata.value = satax.toFixed(2);
      }

      else if( city.value == 'MBR' && ret.checked==true){
        satax = cost * 0.05;
        sata.value = satax.toFixed(2);
      }
      else{
        sata.value = 0
      }


/** depending on the shipping courier checked, shipping is calculated, by multipling 
 * quantity of parts with shipping charge. For oversized orders, $5 is added. */

 
      let kuria = getElementsByName('courier');
/** we first check whether container over size checkbox is checked, by making the 
 * checked option an argument of the IF conditional statement. Else has no argument.*/

      if (ovsiz.checked) 
      {
              for(let i=0;i<kuria.length;i++){
                    if(kuria.item(i).checked){
       
                            if(kuria.item(i).value =='UPS'){
                                shipamt = (qty * 7.00) + 5.00;
                                ship.value = shipamt.toFixed(2);
                                  break;

       
                                  
                            }
                            else if(kuria.item(i).value =='USPA'){
                                shipamt = (qty * 9.25) + 5.00;
                                ship.value = shipamt.toFixed(2);
                                  break;

       
                            }
                            else if(kuria.item(i).value =='FEGR'){
                                shipamt = (qty *8.50) + 5.00;
                                ship.value = shipamt.toFixed(2);
                                  break;
                            }
                            else{
                                shipamt = (qty * 12.00) + 5.00;
                                ship.value = shipamt.toFixed(2);
                                  break;
                            }
       
       
                      
                     }
       
                    }
       
              
      } 
      else {
            for(let i=0;i<kuria.length;i++){
                if(kuria.item(i).checked){

                    if(kuria.item(i).value =='UPS'){
                      shipamt = (qty * 7.00);
                      ship.value = shipamt.toFixed(2);
                            break;
                    }
                    else if(kuria.item(i).value =='FEGR'){
                      shipamt = (qty * 9.25);
                      ship.value = shipamt.toFixed(2);
                            break;
                    }
                     else if(kuria.item(i).value =='USPA'){
                      shipamt = (qty *8.50);
                      ship.value = shipamt.toFixed(2);
                            break;
                    }
                    else{
                      shipamt = (qty * 12.00);
                      ship.value = shipamt.toFixed(2);
                            break;
                    }
                               
              }

              }
       
      }
     
   
  
/** Total invoice amount = COST + SALES TAX + SHIPPING */


    toto = cost + satax; //+ shipamt
    tot.value= toto.toFixed(2);

  
    

    //***function for closing the window*******
function closewindow() {
  alert("Toyota Mail Order Application is going to close now.");
  console.log("Application closed.");
  document.write('Inform Customer that thier mail order has been captured - tim.');

  }


}



