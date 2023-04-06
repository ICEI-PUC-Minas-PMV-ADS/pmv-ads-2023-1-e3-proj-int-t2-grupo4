import react from "react";
import { CustomText } from './styles'

export const Text = ({children, color, letterSpacing}) => {
    return (      
      <CustomText color={color} letterSpacing={letterSpacing}>
          {children}
      </CustomText>  
           
    )
}

