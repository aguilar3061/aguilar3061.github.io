

Vue.component('componente-cita', {
    template: 
    `
      <form class="review-form" @submit.prevent="onSubmit">

        <p>
          <label for="nombre">Nombre:</label>
          <input id="nombre" v-model="nombre">
        </p>
        
        <p>
          <label for="correo">Correo de contacto:</label>      
          <input type="email" id="correo" v-model="correo" required></input>
        </p>

        <p>
            <label for="telefono">Telefono de contacto:</label>      
            <input type="number" id="telefono" v-model="telefono" required></input>
        </p>
        
        <p>
          <input type="submit" value="Submit">  
        </p>    
      
    </form>
    `
   
    ,
    data() {
      return {
        nombre: null,
        correo: null,
        telefono: null
      }
    },
    methods: {
      onSubmit() {
     
        let contacto = {
            nombre: this.nombre,
            correo: this.correo,
            telefono: this.telefono
        }
        
        this.$emit('componente-cita', contacto)
        this.nombre = null
        this.correo = null
        this.telefono = null
       
      }
    }
})
  




var app = new Vue({
    el: '#app',
    data: {
        marca:"Mclaren",
        modelo:"P1",
        descrip: "McLaren Automotive, abreviado como McLaren, es un fabricante británico de automóviles deportivos. Fue fundado en 1985 como desprendimiento de la escudería de automovilismo creada en 1963 por Bruce McLaren",
        opcionSelecionada: 1,
        opciones: [
            {
                id: 1,
                CONSUMO: "20,0L/100km",
                POTENCIA: "777CV",
                MALETERO: "127 L",
                PLAZAS: "2",
                PRECIO: "1.048.727",
                MALETERO: "127 L",
                COLOR: "AZUL",
                IMG: "MEDIA/mclaren-p1-azul_1.jpg",
            },  
            {
                id: 2,
                CONSUMO: "19L/100km",
                POTENCIA: "737 CV",
                MALETERO: "120 L",
                PLAZAS: "3",
                PRECIO: "2.048.727",
                COLOR: "NEGRO",
                IMG: 'MEDIA/mclaren-p1-2.jpg'
            }
        ],
        carrito: 0,
        citas:[]
    },
    methods: {
        actualizarProducto: function(index) {  
            this.opcionSelecionada = index;
        },
        pedirCita(citas) {
            this.citas.push(citas)
        }
    },  
    computed: {
        image(){
            return this.opciones[this.opcionSelecionada].IMG;
        },
        renovarOpciones(){
            return this.opciones[this.opcionSelecionada];
        },
    }

})



