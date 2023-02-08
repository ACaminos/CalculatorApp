import React, { useRef, useState } from 'react'

enum Operadores{
    sumar, resta, multiplicar, dividir
}

export const useCalculadora = () => {
    const [ numero, setNumero ] = useState('0')
    const [ numeroAnterior, setNumeroAnterior ] = useState('0')

    const ultimaOperacion = useRef<Operadores>() //useRef : espacio en memoria el cual no necesito que rendereice de nuevo la app
                                                 //useRef<Operadores>() ... Quiere decir va a tener como referencia a operadores, solo va a aceptar los tipos de datos que estan declarados.

    const limpiar = () =>{
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto:string) =>{
        //No aceptar doble punto
        if(numero.includes('.') && numeroTexto === '.') return;

        if(numero.startsWith('0') || numero.startsWith('-0')){
        //Primer punto decimal
        if(numeroTexto === '.'){
            setNumero(numero + numeroTexto);
        }
        //Evaluar si es otro cero, y hay un punto
        else if(numeroTexto === '0' && numero.includes('.')){
            setNumero(numero + numeroTexto)
        }
        //Evaluar si es diferente de cero y no tiene un punto.
        else if(numeroTexto !== '0' && !numero.includes('.')){
            setNumero(numeroTexto);
        }
        //Evitar el 0000.0
        else if(numeroTexto === '0' && !numero.includes('.')){
            setNumero(numero);
        }
        }
        else{
            setNumero(numero + numeroTexto)
        }
    }

    const positivoNegativo = () =>{
        if(numero.includes('-')){
            setNumero(numero.replace('-',''))
        }
            else{
                setNumero('-' + numero);
            }
        }

    const btnDel = () =>{
        let negativo = '';
        let numeroTemp = numero;
        if( numero.includes('-')){
            negativo = '-';
            numeroTemp = numero.substring(1);
        }
        if(numeroTemp.length>1){
            setNumero(negativo + numeroTemp.slice(0,-1) );
        }
        else{
            setNumero('0');
        }
    }

    const cambiarNumPorAnterior = () => {
        if(numero.endsWith('.')){ //Si el numero termina con un punto, lo que hace es borrarlo
            setNumeroAnterior (numero.slice(0,-1));
        }else{ //caso contrario no pasa nada
            setNumeroAnterior(numero);
        }
        setNumero('0'); // una vez que se dio uno de los dos casos, el numero pasa arriba y el de abajo vuelve a cero.
    }

    const btnDividir = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.resta;
    }

    const btnSumar = () =>{
        cambiarNumPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior)

        switch(ultimaOperacion.current){
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;

            case Operadores.resta:
                setNumero(`${num2 - num1}`);
                break;

            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;

            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;

            default:
                break;
        }
        setNumeroAnterior('0');

    }

    return{
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDel,
        btnDividir,
        armarNumero,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular
    }
}
