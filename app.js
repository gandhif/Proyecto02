document.getElementById("formulario").addEventListener("submit",save);

function save(e){
  titulo = document.getElementById('titulo').value;
  descripcion = document.getElementById('descripcion').value;
  precio = document.getElementById('precio').value;

  let libro ={
      titulo1:titulo,
      descripcion1:descripcion,
      precio1:precio  
    //titulo,descripcion,precio
  }
  
  if(localStorage.getItem("Libros")===null){
    let libros =[];
    libros.push(libro);
    localStorage.setItem("Libros",JSON.stringify(libros));
  }
  else{
    libros = JSON.parse(localStorage.getItem("Libros"));
    libros.push(libro);
    localStorage.setItem("Libros",JSON.stringify(libros))
  }
  leer();
}

function leer(){
  let libros = JSON.parse(localStorage.getItem("Libros"));
  document.getElementById("tbody").innerHTML="";
  for(let i=0;i<libros.length;i++){
    let titulo = libros[i].titulo1;
    let descripcion = libros[i].descripcion1;
    let precio = libros[i].precio1;

    document.getElementById("tbody").innerHTML+=
    `<tr>
      <td>${titulo}</td>
      <td>${descripcion}</td>
      <td>${precio}</td>
      <td><button onclick="eliminar()" class="btn btn-danger">Eliminar</button></td>
      <td><button onclick ="editar('${titulo}')" class="btn btn-success">Editar</button></td>
    </tr>`
  }
}
function editar(titulo){
  let libros = JSON.parse(localStorage.getItem("Libros"));
  for(let i=0;i<libros.length;i++){
    if(libros[i].titulo1 === titulo){
      document.getElementById("body").innerHTML =`<div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h2>Editar Libro</h2>
          </div>
          <div class="card-body">
            <form id = "formulario">
              <div class="mb-3">
                <input type="text" id="newtitulo" class="form-control"  placeholder="${libros[i].titulo1}">
              </div>
              <div class="mb-3">
                <textarea id="newdescripcion" class="form-control" placeholder="${libros[i].descripcion1}"></textarea>
              </div>
              <div class="mb-3">
                <input type="number" name="" id="newprecio" class="form-control" placeholder="${libros[i].precio1}">
              </div>
              <button  class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
              <button  class="btn btn-primary" onclick="cancelar('${titulo}')">Cancelar</button>
            </form>
          </div>
        </div>
      </div>
      </div>`

    }
  }
}

function actualizar(i){
  let libros = JSON.parse(localStorage.getItem("Libros"));
  libros[i].titulo1 = document.getElementById("newtitulo").value;
  libros[i].descripcion1 = document.getElementById("newdescripcion").value;
  libros[i].precio1 = document.getElementById("newprecio").value;
  localStorage.setItem("Libros",JSON.stringify(libros));
}
leer();
/*var formulariohtml = document.getElementById("formulario");
 formulariohtml.addEventListener("submit",()=>{
  
  titulo = document.getElementById('titulo').value;
  descripcion = document.getElementById("descripcion").value;
  precio = document.getElementById("precio").value;
 
let libro = {
 titulo,
 descripcion,
 precio
}
if(localStorage.getItem("Libros")===null){
 let libros =[];
 libros.push(libro);
 localStorage.setItem("Libros",JSON.stringify(libros));
}
else{
 let libros = JSON.parse(localStorage.getItem("Libros"));
 libros.push(libro);
 localStorage.setItem("Libros",JSON.stringify(libros));
}
document.getElementById("formulario").reset();
console.log("Libro guardado");
}); */

/* function crear(e){
   titulo = document.getElementById('titulo').value;
   descripcion = document.getElementById("descripcion").value;
   precio = document.getElementById("precio").value;
  
let libro = {
  titulo,
  descripcion,
  precio
}
if(localStorage.getItem("Libros")===null){
  let libros =[];
  libros.push(libro);
  localStorage.setItem("Libros",JSON.stringify(libros));
}
else{
  let libros = JSON.parse(localStorage.getItem("Libros"));
  libros.push(libro);
  localStorage.setItem("Libros",JSON.stringify(libros));
}
document.getElementById("formulario").reset();
console.log("Libro guardado");


} */
