import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appTheme';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      {/* statusBar estiliza la barra que esta en la parte superior, donde se encuentra la hora, porcentaje de bateria, etc... */}
      <StatusBar backgroundColor={'black'} barStyle={'light-content'}/>
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}