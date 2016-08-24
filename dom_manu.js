console.log('Javascript Loaded');

document.getElementById('generate').addEventListener('click',tableEngine);

function tableEngine(){
  var n = Number(document.getElementById('foo').value);
  console.log('Input value = ' + n);
  table(n);
}

function table(value){

  //-----Method-----
  /*This method appends all td, tr and table directly to the body itself. For the
  next practice, try to create table in the parallel space then pend the completed
  table into the HTML document.*/

  var a = document.createElement('table');
  a.setAttribute('id',"table");
  var b, c;

  //-----Nested For Loops----
  /*The following will be a nested for loop. The encasing For-loops will simulate
  each row, and the nested For-loop will generate the cells in the loop. As for
  the content, thankfully we can multiply both For-Loop-Variable-Iterators to get
  the cell content.*/

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
      document.body.appendChild(c);
      // c.setAttribute('id','td'+j)
    }
    document.body.appendChild(b);
  }
}
