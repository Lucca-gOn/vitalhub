import styled from "styled-components";

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#34898f"
})`
  width: 90%;
  height: 53px;
  padding: 16px;
  margin-top: 15px;

  border: 2px solid #49b3ba;
  border-radius: 5px;
  color: #34898f;
  font-size: 16px;
  font-family: "MontserratAlternates_600SemiBold";
  
`;

export const InputNumber = styled(Input)`
  width: 18%;
  height: 65px;

  border-color: #77CACF;
  text-align: center;
  font-size: 40px;
  font-family: "Quicksand_600SemiBold";
`
export const InputLarge = styled(Input)`
  width: 100%;
  height: 121px;
  padding-bottom: 84px; 
  margin-bottom: 20px;
`

export const InputMedium = styled(InputLarge)`
  height: 53px;
  padding-bottom: 16px;
`