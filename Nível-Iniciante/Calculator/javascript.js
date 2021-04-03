new Vue({
    el: "#app",
    data: {
        produto_anterior: null,
        op: null,
        produto_atual: '0',
        log: [{msg:'Histórico: '}],
    
    },
    methods: {

        adicionarValor: function(valor){
            if (this.produto_atual == '0' || this.produto_atual == 'ERR'){
                this.produto_atual = valor.toString();
                return
            }
            if (String(this.produto_atual).length <= 8){
                this.produto_atual = this.produto_atual + valor.toString();
                return
            }
        },

        limpar: function(){
            this.produto_atual = this.produto_atual.slice(0, -1);
        },

        limparTudo: function(){
            this.produto_anterior = '0';
            this.op = null;
            this.produto_atual = '0';
            this.log = [{msg:'Histórico: '}];
        },

        operacao: function(opr){
            if(this.produto_atual == 'ERR') {
                this.produto_atual = 'ERR'
                this.produto_atual = '0';
                this.op = null;
                this.produto_anterior = '0';
                this.log = [{msg:'Histórico: '}];
                return
            }
            if (opr == '%' && this.produto_anterior == '0') {
                this.produto_atual = '0';
                this.log = [{msg:'Histórico: '}];
                return
            } else if (opr == '%' && this.produto_anterior != '0'){
                this.produto_atual = (parseFloat(this.produto_atual) * parseFloat(this.produto_anterior))/100;
            } else {
            
                if (this.op != null){
                    this.executar();
                }
                if (this.log.indexOf(msg='=')){
                    this.log = [{msg:'Histórico: '}];
                }
                this.log.push({ msg: this.produto_atual+' ' });
                this.log.push({ msg: opr+' ' });
                this.op = opr;
                this.produto_anterior = this.produto_atual;
                this.produto_atual = '0';
            }
        },

        executar: function(){

            if (this.produto_atual.toString().length <= 0 || this.produto_atual == 'ERR'){
                this.produto_atual = 'ERR'
                this.produto_atual = '0';
                this.op = null;
                this.produto_anterior = '0';
                this.log = [{msg:'Histórico: '}];
                return
            } 
            if (this.op == null) {
                this.op = '+';
                this.produto_anterior = '0';
            }
            this.log.push({ msg: this.produto_atual });
            this.log.push({ msg: '= ' });
            if (this.op == '+'){
                this.produto_atual = parseFloat(this.produto_anterior, 10) + parseFloat(this.produto_atual, 10);
            } else if (this.op == '-') {
                this.produto_atual = parseFloat(this.produto_anterior, 10) - parseFloat(this.produto_atual, 10);
            } else if (this.op == '*') {
                this.produto_atual = parseFloat(this.produto_anterior, 10) * parseFloat(this.produto_atual, 10);
            } else if (this.op == '/') {
                this.produto_atual = parseFloat(this.produto_anterior, 10) / parseFloat(this.produto_atual, 10);
            } else {
                this.produto_atual = 'ERR'
            }
            if (this.produto_atual.toString().length >= 9){
                this.produto_atual = 'ERR' 
                this.log = [{msg:'Histórico: '}];
            } else {
            this.produto_atual.toString();
            this.produto_anterior = '0';
            this.log.push({ msg: this.produto_atual });
            }
        },

        virgula: function(){
            if (this.produto_atual.indexOf(".") !== -1) {
              return  
            } 
            this.produto_atual = parseFloat(this.produto_atual, 10) + '.';
        },

        inverterSinal: function(){
            this.produto_atual = parseFloat(this.produto_atual, 10) * (-1);
        }

    }
})