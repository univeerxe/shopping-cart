// selectioner l'element 
<input type="button" name="choix" value="-"  onclick='document.getElementById("quantite").value--;' />
  <input type="text" name="quantite1[]" id="quantite" value="0" size="8" disabled="disabled"/> 
  <input type="button" name="choix" value="+" onclick='document.getElementById("quantite").value++;' />

let element = document.querySelector(".plus")
element.addEventListener("click", function () { document.getElementById("quantite").value++; });

let element = document.querySelector(".plus")
element.addEventListener("click", function () { document.getElementById("quantite").value++; });

let element1 = document.querySelector(".moins")
element1.addEventListener("click", function () { document.getElementById("quantite").value--; });