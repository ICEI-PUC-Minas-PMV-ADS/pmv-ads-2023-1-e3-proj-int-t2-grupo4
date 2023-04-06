import react from "react";
import { Text, StyleSheet, View } from "react-native";

export const CustomText = ({children}) => {
    return (      
      <Text style={styles.textTitle}>
          {children}
      </Text>  
           
    )
}

const styles = StyleSheet.create({    
    textTitle: {
      color: '#fff',    
    }, 
    textEasy: {
      color: '#004AAD',
      letterSpacing: 4      
    }
  });
  