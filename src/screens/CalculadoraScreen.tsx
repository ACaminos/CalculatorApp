import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.rsultadoPequeno}>1,500.00</Text>
        <Text style={styles.resultado}>1,500.00</Text>


        {/* fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto={"C"} color={'#9B9B9B'} />
            <BotonCalc texto={"+/-"} color={'#9B9B9B'}/>
            <BotonCalc texto={'%'} color={'#9B9B9B'}/>
            <BotonCalc texto={'/'} color={'#FF9427'}/>
        </View>

                {/* fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto={"7"}/>
            <BotonCalc texto={"8"}/>
            <BotonCalc texto={'9'}/>
            <BotonCalc texto={'X'} color={'#FF9427'}/>
        </View>

                        {/* fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto={"4"}/>
            <BotonCalc texto={"5"}/>
            <BotonCalc texto={'6'}/>
            <BotonCalc texto={'-'} color={'#FF9427'}/>
        </View>

                        {/* fila de botones */}
        <View style={styles.fila}>
            <BotonCalc texto={"1"}/>
            <BotonCalc texto={"2"}/>
            <BotonCalc texto={'3'}/>
            <BotonCalc texto={'+'} color={'#FF9427'}/>
        </View>

        <View style={styles.fila}>
            <BotonCalc texto={"0"} ancho/>
            <BotonCalc texto={"."}/>
            <BotonCalc texto={'='} color={'#FF9427'}/>
        </View>

    </View>
  )
}