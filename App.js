import React from 'react';

import {
  SafeAreaView, 
  StyleSheet,
  View,
} 
  
  from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      
    <View style={styles.rouge}>
          
    </View>
    <View style={styles.vert}>
          <View style={styles.square}>
                  
          </View>
          
          <View style={styles.square}>

          </View>

          <View style={styles.square}>

          </View>
    </View>
    <View style={styles.bleu}>
          
    </View>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  rouge: {
    flex: 1,
    backgroundColor: "red"
  },

  vert: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
    


  },

  bleu: {
    flex: 3,
    backgroundColor: "blue"
  }, 

    square: {
      height: 30,
      width: 30,
      backgroundColor: "yellow",
      borderWitdh: 10,
      borderColor: "black"
    }
});

export default App;