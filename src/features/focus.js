import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import RoundedButton from '../components/roundedButton'

const Focus = ( { addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label={'What do you want to focus on?'}
          onChangeText={setSubject}
          style={styles.text}
        />
        <RoundedButton 
        title="+"
        size={50}
        onPress={()=> addSubject(subject)}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: .2
  },
  text: {
    flex: .9,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
});

export default Focus;
