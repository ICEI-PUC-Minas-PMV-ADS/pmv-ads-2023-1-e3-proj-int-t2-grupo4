import styled from 'styled-components/native'

export const CustomText = styled.Text` 
    font-size: 14px;
    color: ${({color}) => color || 'white'};
    gont-weight: bold;
    letterSpacing: ${({letterSpacing}) => letterSpacing || '0'};
`;

/*textEasy: {
    color: '#004AAD',
    letterSpacing: 4,
    fontWeight: 'bold'      
  }*/