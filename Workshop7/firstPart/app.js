//CARGANDO JSON
const url = "./data.json";

function user(nombre, email, puntosAcumulados, clave) {
  this.nombre = nombre;
  this.email = email;
  this.puntosAcumulados = puntosAcumulados;
  this.clave = clave;
}

function ProductoFisico(
  nombre,
  puntosNecesarios,
  cantidadDisponible,
  precio,
  stock
) {
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.cantidadDisponible = cantidadDisponible;
  this.precio = precio;
  this.stock = stock;
}

function ProductoDigital(
  nombre,
  puntosNecesarios,
  URL,
  cantidadDisponible,
  stock
) {
  this.nombre = nombre;
  this.puntosNecesarios = puntosNecesarios;
  this.URL = URL;
  this.cantidadDisponible = cantidadDisponible;
  this.stock = stock;
}
0;

function CategoríadeProducto(nombre, descripción) {
  this.nombre = nombre;
  this.descripción = descripción;
}

function Ordendecanje(usuario, producto, fecha) {
  this.usuario = usuario;
  this.producto = producto;
  this.fecha = fecha;
}

function Administrador(nombre, email, clave) {
  this.nombre = nombre;
  this.email = email;
  this.clave = clave;
}

function cargarYMostrarData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se puede cargar la data maquinola");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Los usuarios son:", data.usuario);

          console.log("Los administradores son:", data.admin);

          resolve(data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    }, 2000);
  });
}

cargarYMostrarData().then(({ usuario, admin }) => {
  alert("Bienvenido a la tienda online mi bro");
  alert("vamos a iniciar sesion antes de entrar a la tienda");
  let init = true;
  while (init) {
    const typeNew = prompt(`
    "ingresa el tipo de uusario que eres
    1:usuario
    2:administrador`);
    switch(typeNew){
        case "1" :
        const userEmail = prompt("ingresa tu correo");
        const userClave = prompt("ingresa tu contraseña")
        const _userE = usuario.find((userU) => userU.email === userEmail)
        const _userC = usuario.find((userCl) => userCl.clave === userClave)

            if(_userE && _userC &&_userE === _userC){
              alert("Usuarion encontrado con exito")
                let optionUser = prompt(`
                Inngresa la opcion que deseas hacer
                1: ver mis puntos
                2: cancelar mis puntos`)

            switch(optionUser){
                case "1" :
                alert(`
                tus puntos son: ${user.puntosAcumulados}`)
                break;
                case "2" :
                alert(`
                tus puntos son: ${user.puntosAcumulados}`)
                break;
                default :
                alert("opcion no valida")
            }}else{
                alert("usuario no encontrado")
            }
       
        break

        case "2":
          const adminEmail = prompt("ingresa tu correo");
          const adminClave = prompt("ingresa tu contraseña")
          const _adminE = admin.find((adme) => adme.email === adminEmail)
          const _adminC = admin.find((admc) => admc.clave === adminClave)
  
              if(_adminE && _adminC &&_adminE === _adminC){
                alert("Usuarion encontrado con exito")
                  let optionUser = prompt(`
                  Inngresa la opcion que deseas hacer
                  1: ver mis puntos
                  2: cancelar mis puntos`)
  
              switch(optionUser){
                  case "1" :
                  alert(`
                  tus puntos son: ${user.puntosAcumulados}`)
                  break;
                  case "2" :
                  alert(`
                  tus puntos son: ${user.puntosAcumulados}`)
                  break;
                  default :
                  alert("opcion no valida")
              }}else{
                  alert("usuario no encontrado")
              }
         
          break
    }
  }
});


