var app = new Vue({
    el: "#app",
    data: {
        //definimos las variables que vamos a utilizar
        prLava: 720000,
        prTv: 430000,
        opcion: 1,
        total: 0,
        cant: null,
        nomProd: "",
        prProd: 0,
        arrayCompras: [],
    },
    methods: {
        pagar() {
            if (this.opcion == "1") {
                this.total = this.cant * this.prTv;
                this.nomProd = "Televisor";
                this.prProd = this.prTv;
            } else {
                this.total = this.cant * this.prLava;
                this.nomProd = "Lavadora";
                this.prProd = this.prLava;
            }
            this.agregarDetalle();
        },
        agregarDetalle() {
            this.arrayCompras.push({ nombre: this.nomProd, cant: this.cant, precio: this.prProd, total: this.total });
        },
    },
});