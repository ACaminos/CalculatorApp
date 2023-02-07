import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
    const [ numero, setNumero ] = useState('0')
    const [ numeroAnterior, setNumeroAnterior ] = useState('0')


    const limpiar = () =>{
        setNumero('0')
    }

    const armarNumero = (numeroTexto:string) =>{
        setNumero(numero + numeroTexto)
    }
  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.rsultadoPequeno}>{numeroAnterior}</Text>
        <Text 
            style={styles.resultado}
            numberOfLines={ 1 }
            adjustsFontSizeToFit={true}
            >{numero}</Text>


        {/* fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto={"C"} color={'#9B9B9B'} accion={limpiar} />
            <BotonCalc texto={"+/-"} color={'#9B9B9B'} accion={limpiar}/>
            <BotonCalc texto={'%'} color={'#9B9B9B'} accion={limpiar}/>
            <BotonCalc texto={'/'} color={'#FF9427'} accion={limpiar}/>
        </View>

                {/* fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto={"7"} accion={armarNumero}/>
            <BotonCalc texto={"8"} accion={armarNumero}/>
            <BotonCalc texto={'9'} accion={armarNumero}/>
            <BotonCalc texto={'X'} color={'#FF9427'} accion={limpiar}/>
        </View>

                        {/* fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto={"4"} accion={armarNumero}/>
            <BotonCalc texto={"5"} accion={armarNumero}/>
            <BotonCalc texto={'6'} accion={armarNumero}/>
            <BotonCalc texto={'-'} color={'#FF9427'} accion={limpiar}/>
        </View>

                        {/* fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto={"1"} accion={armarNumero}/>
            <BotonCalc texto={"2"} accion={armarNumero}/>
            <BotonCalc texto={'3'} accion={armarNumero}/>
            <BotonCalc texto={'+'} color={'#FF9427'} accion={limpiar}/>
        </View>

        <View style={styles.fila}>
            <BotonCalc texto={"0"} ancho accion={armarNumero}/>
            <BotonCalc texto={"."} accion={armarNumero}/>
            <BotonCalc texto={'='} color={'#FF9427'} accion={limpiar}/>
        </View>

    </View>
  )
}
