import React, { useState} from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
import { colors } from './src/utils/colors';
import { spacing } from './src/utils/sizes';
import Focus from './src/features/focus.js';
import FocusHistory from './src/features/FocusHistory';
import Timer from './src/features/Timer'


export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState ([]);
  return (
    <SafeAreaView style={styles.container}>
    { !currentSubject ?
    (<>
    <Focus addSubject={setCurrentSubject}/> 
    <FocusHistory history={history} /></>)
    : (<Timer
      focusSubject={currentSubject}
      onTimerEnd={(subject)=> {
        setHistory([...history, subject])
      }}
      clearSubject={()=> {setCurrentSubject(null)}} />)
      }
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: spacing.sm,
    backgroundColor: colors.background,
  },
});