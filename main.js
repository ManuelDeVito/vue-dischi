// Rifate l'esercizio dei dischi nella versione base, come l'abbiamo visto stamattina, cioè fare una chiamata ajax per recuperare una decina di dischi musicali e utilizzando vue, stampare a schermo una card per ogni album.
// L'API da chiamare è: https://flynn.boolean.careers/exercises/api/array/music
// Se volete esercitarvi ulteriormente, oltre a curare l'aspetto grafico, ci sono un paio di bonus (facoltativi) per voi:
// BONUS 1: Creare una select con tutti i generi dei dischi. In base al genere che viene selezionato nella select, vengono visualizzati i cd corrispondenti.
// N.B.: per fare questo punto non è necessario modificare l'array dei dati
// BONUS 2: Ordinare i dischi per anno di uscita.

var app = new Vue ({

    el: '#root',

    data: {

        dischi: []


    },

    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((risposta)=> {

            this.dischi = risposta.data.response;

            console.log(this.dischi);

        });
    }

});