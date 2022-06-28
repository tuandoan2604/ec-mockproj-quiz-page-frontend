// @ts-ignore
import React, {useCallback} from "react";
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';
import {Image, StyleSheet, Dimensions} from "react-native";
import {IC_BACK, IC_FB, IC_GG} from "../assets";
import {useNavigation} from "@react-navigation/native";

const width = Dimensions.get('window').width

const SignInScreen = () => {
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => {
        navigation.goBack()
    }, [])
    return (
        <Container>
            <LinearGradient colors={['#3179E3', '#2DA7EB']} style={styles.background}>
                <ButtonBack onPress={goBack}>
                    <Image source={IC_BACK} style={{marginTop: 42, marginLeft: 12}}/>
                </ButtonBack>

                <TitleSection>
                    <Title>Welcome Back</Title>
                </TitleSection>

                <ButtonSection>
                    <ButtonFB>
                        <Image source={IC_FB}/>
                        <ButtonText>CONTINUE WITH FACEBOOK</ButtonText>
                    </ButtonFB>
                    <ButtonGG>
                        <Image source={IC_GG}/>
                        <ButtonText>CONTINUE WITH GOOGLE</ButtonText>
                    </ButtonGG>
                    <TextLoginOther>OR LOGIN WITH EMAIL</TextLoginOther>
                </ButtonSection>

                <InputSection>
                    <InputEmail placeholder={'Email'}/>
                    <InputPassword placeholder={'Password'}/>
                </InputSection>

                <ButtonLogin>
                    <ButtonLoginText>LOG IN</ButtonLoginText>
                </ButtonLogin>

                <ButtonForgotPW>
                    <TextForgotPW>Forgot Password?</TextForgotPW>
                </ButtonForgotPW>

                <RemainingView>
                    <TextNotLogin>DON’T HAVE AN ACCOUNT? </TextNotLogin>
                    <TextRegister>SIGN UP</TextRegister>
                </RemainingView>

            </LinearGradient>
        </Container>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})

const Container = styled.View`
  flex: 1`
const ButtonBack = styled.TouchableOpacity`
`

const TitleSection = styled.View`
  justify-content: center;
  align-items: center`

const Title = styled.Text`
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #FFFFFF;
`
const ButtonSection = styled.View`
  justify-content: center;
  align-items: center`

const ButtonFB = styled(ButtonBack)`
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.01);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
  width: ${width - 22}px;
  height: 63px;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  justify-content: space-evenly;

`
const ButtonGG = styled(ButtonFB)``

const ButtonText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #000000;
`

const TextLoginOther = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #FFFFFF;
  margin-top: 30px`

const InputSection = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 60px`

const InputEmail = styled.TextInput`
  width: 360px;
  height: 50px;
  background-color: white;
  border-radius: 38px;
  flex: auto;
  margin-top: 30px;
`

const InputPassword = styled(InputEmail)``

const ButtonLogin = styled(ButtonFB)`
  justify-content: center;
  align-self: center;
  height: 50px`

const ButtonLoginText = styled(ButtonText)``

const ButtonForgotPW = styled(ButtonBack)`
  justify-content: center;
  align-self: center;
  margin-top: 30px`

const TextForgotPW = styled(ButtonText)`
  color: white`

const RemainingView = styled(ButtonBack)`
  flex-direction: row;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`

const TextNotLogin = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #FFFFFF;`

const TextRegister = styled(TextNotLogin)`
  color: black`
