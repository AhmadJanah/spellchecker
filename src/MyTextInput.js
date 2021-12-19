import React from 'react';
import { View, TextInput } from 'react-native';

const MyTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40000}
    />
  );
}

const TextInputMultiline = (props) => {
  const [value, onChangeText] = React.useState('');

  // If you type something in the text box that is a color, the background will change to that
  // color.

function handleChanges(text){
    onChangeText(text); 
    // console.log(text);
    props.onhandle(text);
}

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        borderBottomColor: '#000000',
        width: '50rem',
        // height: '20rem',
        borderBottomWidth: 1,
      }}>
      <MyTextInput
        multiline
        numberOfLines={40}
        
        onChangeText={handleChanges}
        value={value}
        style={{padding: 10}}
      />
    </View>
  );
}

export default TextInputMultiline;