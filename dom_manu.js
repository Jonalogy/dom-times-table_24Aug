console.log('Javascript Loaded');

document.getElementById('generate').addEventListener('click',tableEngine);

function tableEngine(){
  // clearPage();
  var n = Number(document.getElementById('foo').value);
  console.log('Input value = ' + n);
  table(n);
}

function table(value){

  //-----Method-----
  /*This method appends the <table>'s body into the html document first, then appends
    its <td> and <tr> after each of their creation.*/

  var a = document.createElement('table');
  // a.setAttribute('id',"table");
  document.body.appendChild(a);

  //-----Nested For Loops----
  /*The following will be a nested for loop. The encasing For-loops will simulate
  each row, and the nested For-loop will generate the cells in the loop. As for
  the content, thankfully we can multiply both For-Loop-Variable-Iterators to get
  the cell content.*/

  var b, c;
  for(i=1; i<=value; i++){
    b = document.createElement('tr');
    b.style.border ="2px solid golderrod";
    for(j=1; j<=value; j++){
      c = document.createElement('td');
      c.textContent=i*j;
      c.style.border= "2px solid goldenrod";
      c.style.borderCollapse = "collapse";
      c.style.width = '50px';
      c.style.textAlign = "center";
      a.appendChild(c); //Appends directly to parent Table
      // c.setAttribute('id','td'+j)
    }
    a.appendChild(b);//Appends directly to parent Table
  }
}

// function clearPage(){
//   var parent =
// }
