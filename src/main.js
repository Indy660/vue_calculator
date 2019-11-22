Vue.component('calculator', {
    template: `
          <div class="panel">
            <input onblur="this.focus()" autofocus @keyup.13="calculate()" v-model="fieldInput" @keypress=justNumbers placeholder="0">
            <div class="buttons">
                <button class="buttonVer1" @click="fieldInput+='7'">7</button>
                <button class="buttonVer1" @click="fieldInput+='8'">8</button>
                <button class="buttonVer1" @click="fieldInput+='9'">9</button>
                <button class="buttonVer1" @click="fieldInput+='+'">+</button>
                <button class="buttonVer2" @click="clearInput()">C</button>
            </div>                         
            <div class="buttons">          
                <button class="buttonVer1" @click="fieldInput+='4'">4</button>
                <button class="buttonVer1" @click="fieldInput+='5'">5</button>
                <button class="buttonVer1" @click="fieldInput+='6'">6</button>
                <button class="buttonVer1" @click="fieldInput+='-'">-</button>
            </div>
            <div class="buttons">
                <button class="buttonVer1" @click="fieldInput+='1'">1</button>
                <button class="buttonVer1" @click="fieldInput+='2'">2</button>
                <button class="buttonVer1" @click="fieldInput+='3'">3</button>
                <button class="buttonVer1" @click="fieldInput+='*'">*</button>
                <button class="buttonVer2" @click="deleteLastIndex()">Del</button>
              </div>
              <div class="buttons">
                <button class="buttonVer1" @click="fieldInput+='0'">0</button>
                <button class="buttonVer1" @click="fieldInput+='.'">.</button>
                <button class="buttonVer1" @click="calculate()">=</button>
                <button class="buttonVer1" @click="fieldInput+='/'">/</button>
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