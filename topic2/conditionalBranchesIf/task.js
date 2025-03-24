"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
//Чи буде показано alert?
//if ("0") {
//    alert( 'Привіт' );
//  }
//так як 0 завжди стає true - я замінив 0 на true бо іначе не компілилося
if (true) { //так
    console.log('Привіт');
}
//Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’
//Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”
// Create an interface for input and output through the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Яка “офіційна” назва JavaScript?', (officialJavaScriptName) => {
    if (officialJavaScriptName == 'ECMAScript') {
        console.log('Правильно!');
    }
    else {
        console.log('Не знаєте? “ECMAScript”!');
    }
    ;
    // Close the interface
    rl.close();
});
