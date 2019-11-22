Vue.component('calculator', {
    template: `
        <div class="panel">
            <input onblur="this.focus()" autofocus @keyup.13.187="calculate()" v-model="fieldInput" @keypress=justNumbers placeholder="0">            
            <div class="buttons">
                <div class="pinpad">
                    <button @click="item != '=' ? fieldInput+=item : calculate()" v-for="item in ['7','8','9','+','4','5','6','-','1','2','3','*','0','.','=','/']">{{ item }}</button>
                </div>
                <div class="actions">
                    <button @click="clearInput()">C</button>
                    <button @click="deleteLastIndex()">Del</button>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            fieldInput: "",   //то, что ввели в инпут
            operator: "",      //какую операцию выбрали
            // haveOperator: false
        }
    },
    methods: { 
        // "калькуирование" чисел в инпуте
        calculate() {
            let indexSymbol = (this.fieldInput.indexOf("+") > 0) ? this.fieldInput.indexOf("+") : (this.fieldInput.indexOf("-") > 0) ? this.fieldInput.indexOf("-") :
                (this.fieldInput.indexOf("*") > 0) ? this.fieldInput.indexOf("*") : (this.fieldInput.indexOf("/") > 0) ? this.fieldInput.indexOf("/") : false;
            if (indexSymbol !== false) {
                this.operator = this.fieldInput[indexSymbol];
                if (this.operator === "+") {
                    this.fieldInput = String(Number(this.fieldInput.substr(0, indexSymbol)) + Number(this.fieldInput.substr(indexSymbol + 1)));
                    this.operator = ""
                } else if (this.operator === "-") {
                    this.fieldInput = String(Number(this.fieldInput.substr(0, indexSymbol)) - Number(this.fieldInput.substr(indexSymbol + 1)));
                    this.operator = ""
                } else if (this.operator === "*") {
                    this.fieldInput = String(Number(this.fieldInput.substr(0, indexSymbol)) * Number(this.fieldInput.substr(indexSymbol + 1)));
                    this.operator = ""
                } else if (this.operator === "/") {
                    this.fieldInput = String(Number(this.fieldInput.substr(0, indexSymbol)) / Number(this.fieldInput.substr(indexSymbol + 1)));
                    this.operator = ""
                } else {
                    this.fieldInput = "Введите число"
                }
            }
        },
        //очистить инпут
        clearInput() {
            this.fieldInput = ""
        },
        //удаление последнего элемента в инпуте
        deleteLastIndex() {
            this.fieldInput = this.fieldInput.slice(0, -1);
        },
        //проверка на то,что в инпут можно вбить только числа и знаки + - * / .
        justNumbers: function (e) {
            if ((/[^0-9-+*/./]/.test(e.key)))
                e.preventDefault();
            // проверка на двойные знаки
            let symbols = ["+", "-", "*", "/"];
            if ((symbols.includes(this.fieldInput[this.fieldInput.length-1])) && (symbols.includes(e.key))) {
                // console.log("Повторяющийся символ", this.fieldInput[this.fieldInput.length-1], e.key)
                e.preventDefault();
            }
            let newInput = this.fieldInput.substr(1 ).split("")
            let arrayWithOperators = newInput.filter(function(obj) { return symbols.indexOf(obj) >= 0; })

            // ОСТАНОВИЛСЯ ЗДЕСЬ

            if (arrayWithOperators)  {}
            // else {
            //     console.log("Неповторяющийся символ", this.fieldInput[this.fieldInput.length-1], e.key)
            // }
        },
    }
});

new Vue({
    el: "#calulatorId",
    data() {
        return {
            msg: "Hello World!"
        }
    }
});