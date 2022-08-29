const app = Vue.createApp({
    // template: `
    //     <h1>Hola mundo</h1>
    //     <p>Desde app.js</p>
    // `
    //{{ }} ->Evalua expresión

    data() {
        return{
            quote : 'Soy Batman',
            author: 'Bruce Waine'
        }
    },
    methods: {
        changeQuote( mouseEvent ) {
            console.log('changeQuote', mouseEvent);
            this.author = 'fernando herrera';
            this.capitalize();
        },
        capitalize(){
            this.quote = this.quote.toUpperCase();
        }
    },
});

app.mount("#myApp");