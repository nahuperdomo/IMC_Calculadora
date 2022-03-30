
// DECLARACION DE VARIABLES
let pesoKg = 0;
let pesoLb = 0;
let estaturaM = 0;
let estaturaP = 0;
let resultadoIMCKg = 0;
let resultadoIMCLb = 0;
let colPersonas= [
    
];  
//TOMAR VALORES DEL HTML


let kg =  document.getElementById('kg');
let lb =  document.getElementById('lb');
let m =  document.getElementById('cm');
let p =  document.getElementById('p');
let div_hidden = document.getElementById('hidden_loggin');
//ALERTA USUARIO FUE CREADO EXITOSAMENTE
let alert_confirm = document.getElementById('confirmado');
//ALERTA COMPLETE TODOS LOS CAMPOS 
let negado = document.getElementById('negado');
//DIV PARA LISTAR USUARIOS
let lista_usuarios = document.getElementById('lista_usuarios');
//DIV TITULO
let div_titulo = document.getElementsByClassName('titulo');


// CLASES 
class Persona{
    constructor(edad, nombre,fecha,imc){
        this.edad = edad;
        this.nombre = nombre;
        this.fecha = fecha;
        this.imc = imc;
    }
}

//FUNCIONES

//TOMA ELEMENTOS DEL INPUT Y LLAMA A LA FUNCION QUE CALCULA EN KG
function calcularKg(altura, pesoKg){
    altura = document.getElementById('cm').value;
    pesoKg = document.getElementById('kg').value;
    calcularIMCKg(altura , pesoKg);
    tablaIMCKg(resultadoIMCKg);
}

//TOMA ELEMENTOS DEL INPUT Y LLAMA A LA FUNCION QUE CALCULA EN LB
function calcularLb(altura, peso){
    altura = document.getElementById('p').value;
    peso = document.getElementById('lb').value;
    calcularIMCLb(altura, peso);
    tablaIMCKg(resultadoIMCLb);
}

//CALCULA EL IMC EN KG PASANDO ESTATURA Y PESO POR PARAMETRO
function calcularIMCKg(estatura, peso){
        resultadoIMCKg = Math.round((peso/(estatura * estatura)));
        let resultadoKg = document.getElementById('resultadoKg');
        if(resultadoKg > 0 && resultadoKg < 50){
            resultadoKg.innerHTML = '<h2>Su IMC es de: </h2>' + resultadoIMCKg;
            tablaIMCKg(resultadoIMCKg);
            return resultadoIMCKg;
        }
}

//CALCULA EL IMC EN LB PASANDO ESTATURA Y PESO POR PARAMETRO
function calcularIMCLb(estatura,peso){
        resultadoIMCLb =(peso/(estatura * estatura)*703);
        let resultadoLb = document.getElementById('resultadoLb');
        resultadoLb.innerHTML = '<h2>Su IMC es de: </h2>' + resultadoIMCLb;  
        tablaIMCLb(resultadoIMCLb);   
        return resultadoIMCLb;
}


//FUNCION QUE MUESTRA EL MENU DE REGISTRO
function abrir_menu(){
    div_hidden.style.display= 'block';
    document.getElementById('datosKg').style.display="flex";
    document.getElementById('ocultar_add').style.display="flex";
}
//FUNCION QUE OCULTA EL MENU DE REGISTRO
function ocultar(){
    hidden_loggin.style.display = 'none';
    alert_confirm.style.display = 'none';
    negado.style.display = 'none';
    lista_usuarios.style.display = 'none';
    document.getElementById('ocultar_add').style.display="none"; 
}
//CREA Y AGREGA LA CLASE USUARIO A EL ARRAY
function addUsr(){
    //CREACION DE USUARIO NUEVO
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var div = document.getElementById('datosKg');
    console.log('div');
    if(nombre.trim() === ""){
        alert_confirm.style.display = 'none';
        negado.style.display= 'flex'; 
        
        setTimeout(()=>{
        alert_confirm.style.display = 'none';
        negado.style.display= 'none';
        },4000)
        
    }else{
            let nombre = document.getElementById('nombre').value;
            console.log(select.value)
            let edad = document.getElementById('edad').value;
            let imc = resultadoIMCKg;
            let persona = new Persona(edad,nombre,imc);
            colPersonas.push(persona);
            localStorage.setItem("personas",JSON.stringify(persona));
            document.getElementById('nombre').value = "" //RESETEO EL PLACEHOLDER NOMBRE
            document.getElementById('edad').value = "" //RESETEO EL PLACEHOLDER EDAD
            alert_confirm.style.display= 'flex';
            negado.style.display = 'none';      
            console.log(persona); 
            setTimeout(()=>{
                alert_confirm.style.display = 'none';
                },4000)
    }   
    agregarUsuarioSelect();
}




//FUNCION QUE DEVUELVE EL ESTADO QUE SE ENCUENTRA, TOMANDO EL IMC EN KG COMO PARAMETRO 
function tablaIMCKg(x){
    
    console.log(x)
    let tablaKg = document.getElementById('resultadoTablaKg');
    if(isFinite(x)){
        if(x<18){   
            tablaKg.innerHTML = '<h2>Usted se encuentra en un peso inferior al "normal"<br> Te recomendamos la "DIETA AUMENTO MASA MUSCULAR" </h2>'
    }
        else if(x >= 18 && x <= 24){
    
            tablaKg.innerHTML = '<h2>Usted se encuentra en el peso "ideal"<br> Te recomendamos la "DIETA MANTENIMIENTO"</h2>';
    
        }
        else if( x >24 && x <= 30){
          
            tablaKg.innerHTML = '<h2>Usted se encuentra en un peso superior al "normal <br> Te recomendamos la "DIETA BAJAR PESO""</h2>';
        }
        else if(x>30){
            tablaKg.innerHTML = '<h2>Usted se encuentra en un peso considerado como obesidad</h2>';
        }
    
        else{
            tablaKg.innerHTML = '<h2>Ingrese datos validos</h2>';
        }
        

    }else{
        tablaKg.innerHTML = '<h2>Ingrese datos validos</h2>';
    }
}
//FUNCION QUE DEVUELVE EL ESTADO QUE SE ENCUENTRA, TOMANDO EL IMC EN LB COMO PARAMETRO 

function tablaIMCLb(x){
    
    let tablaLb = document.getElementById('resultadoTablaLb');
    if(x < 18){
      
        tablaLb.innerHTML = '<h2>Usted se encuentra en un peso inferior al "normal"</h2>'
                   '<br>Te recomendamos la "DIETA AUMENTO MASA MUSCULAR"';

    }
    else if(x >= 18 && x <= 24){
   
        tablaLb.innerHTML = '<h2>Usted se encuentra en el peso "ideal"</h2>';
    }
    else if( x >24 && x <= 30){
     
        tablaLb.innerHTML = '<h2>Usted se encuentra en un peso superior al "normal"</h2>';
    }
    else{
        
        tablaLb.innerHTML = '<h2>Usted se encuentra en un peso considerado como obesidad</h2>';
    }
}


//FUNCION CARGAR SELECT


//FUNCION QUE LISTA LOS USUARIOS
const recorreArray = (arr) => {

        arr = colPersonas;
        
        lista_usuarios.style.display= 'block';
        lista_usuarios.innerHTML= "";
        for(let i=0; i<=arr.length-1; i++){
            let li = document.createElement('li');
            let vari = JSON.stringify(arr[i].nombre);
            let sincomilla = JSON.parse(vari);
            li.append(sincomilla);

            lista_usuarios.appendChild(li);
        }
  }

//LISTAR USUARIOS EN UN SELECT
let select = document.getElementById('select');
//select.addEventListener('click', agregarUsuarioSelect);
function agregarUsuarioSelect(){
    select.innerHTML=""
    

    for (let persona in colPersonas){
        let opcion = document.createElement('option');
        
        opcion.text = colPersonas[persona].nombre
        select.add(opcion);
    }
}


//FUNCION QUE PONE LOS ESTILOS EN MODO OSCURO
function modoOscuro(){
    //ACCEDO A LOS ELEMENTOS DEL DOM PARA CAMBIARLE EL COLOR
    console.log('entra')
    

}

function modoNormal(){
    

}


            //BOTONES//
//TOMAR ELEMENTOS DEL DOM PARA BOTONES
//BOTON CALCULAR IMC KG
let btn_kg = document.getElementById('btn_kg');
btn_kg.addEventListener("click",calcularKg);

//BOTON CALCULAR IMC LB

//BOTON AGREGAR USUARIO
let btn_add = document.getElementById('add_usr');
btn_add.addEventListener("click",abrir_menu);

//BOTON CONFIRMAR AGREGAR USUARIO
let btn_addConfirm = document.getElementById('btn_add');
btn_addConfirm.addEventListener('click', addUsr);

//BOTON OCULTAR REGISTRAR USUARIO
let ocultar_add = document.getElementById('ocultar_add');
ocultar_add.addEventListener('click',ocultar);

//BOTON LISTAR USUARIOS
let btn_list = document.getElementById('btn_list');
btn_list.addEventListener('click', recorreArray);

let hombre = document.getElementsByClassName('hombre');


function funcionclick(){
    document.getElementById('hombre_msj').innerHTML = '<p>Eres HOMBRE, ahora llena los siguientes datos</p>';
    document.getElementById('mujer_msj').style.display= 'none';
    document.getElementById('hombre_msj').style.display= 'block';

}
    hombre[0].addEventListener('click', funcionclick)


    function funcionclick2(){
        document.getElementById('mujer_msj').style.display= 'block';
        document.getElementById('hombre_msj').style.display= 'none';

        document.getElementById('mujer_msj').innerHTML = '<p>Eres MUJER, ahora llena los siguientes datos</p>';
    }
    let mujer = document.getElementsByClassName('mujer');
        mujer[0].addEventListener('click', funcionclick2)   

//CARRITO COMPRA
document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Dieta bajar peso',
            precio: 20,
            imagen: 'dieta1.jpg'
        },
        {
            id: 2,
            nombre: 'Dieta mantenimiento',
            precio: 10,
            imagen: 'dieta2.jpg'
        },
        {
            id: 3,
            nombre: 'Dieta aumento masa',
            precio: 20,
            imagen: 'dieta3.jpg'
        },
    
    ];

    let carrito = [];
    const divisa = 'U$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /*
     Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito 
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        Swal.fire({
            position: 'top-end',
            icon: 'warning',
            title: 'Tu carrito fue vaciado',
            showConfirmButton: false,
            timer: 1500
          })
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});


let slider_darkmode = document.getElementById('slider')
slider_darkmode.addEventListener('onclick',sliderDarkMode);



function sliderDarkMode(){
    let main = document.getElementById('main');
    
    
    if(main.classList.contains('main')){
        
        main.className = 'main_darkmode'
    }else{
        main.className = 'main'
    }
}

document.getElementById('boton-comprar').addEventListener('click', ()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu compra fue procesada',
        showConfirmButton: false,
        timer: 1500
      })
})

const url =' https://randomuser.me/api/';

let avatar = document.getElementById('avatar');
let fullname = document.getElementById('fullname');
let username = document.getElementById('username');
let email = document.getElementById('email');
let city = document.getElementById('city');
let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
  fetch(url)
    .then(parseJSON)
    .then(nuevoPerfil)
});

function parseJSON (res){
  return res.json();
}

function nuevoPerfil (profile){
  avatar.src = profile.results[0].picture.medium;
  fullname.innerHTML = profile.results[0].name.first +" "+profile.results[0].name.last; 
  username.innerHTML = profile.results[0].login.username; 
  email.innerHTML = profile.results[0].email;
}
