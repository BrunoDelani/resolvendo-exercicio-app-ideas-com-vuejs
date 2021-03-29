new Vue({
    el: '#app',
    data: {
        valorbinario: "0",
        valordecimal: "0",
    },
    methods:{
        calculo: function(valor){
            valorfinal = 0;
            j = valor.length;
            exp = 0;
            while (j > 0) {
                valorfinal = valorfinal + (valor[j-1]*Math.pow(2, exp))
                j--;
                exp ++;
            }   
            return valorfinal
        },

        converter: function(valor){
            return this.valordecimal = this.calculo(valor)
        },
        
    }
  });

  function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode === 48 || ASCIICode === 49 || ASCIICode <= 31 || ASCIICode === 127){
        return true;
    }else{
        alert("Insira somente números binários.");
        return false;
    }          

}