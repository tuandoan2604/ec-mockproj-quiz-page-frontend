// @ts-ignore
import React, {useCallback, useState} from "react";
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient';
import {Image, StyleSheet, Dimensions, TouchableOpacity, View} from "react-native";
import {IC_BACK_CIRCLE, IC_FB, IC_GG} from "../assets";
import {useNavigation} from "@react-navigation/native";
import CheckBox from '@react-native-community/checkbox';

const width = Dimensions.get('window').width

const SignUpScreen = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation<any>()
    const goBack = useCallback(() => {
        navigation.goBack()
    }, [])
    return (
        <Container>
            <LinearGradient colors={['#3179E3', '#2DA7EB']} style={styles.background}>
                <ButtonBack onPress={goBack}>
                    <Image source={IC_BACK_CIRCLE} style={{marginTop: 42, marginLeft: 12}}/>
                </ButtonBack>

                <TitleSection>
                    <Title>Create your account</Title>
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

                <PolicySection>
                    <View style={{flexDirection: 'row'}}>
                        <LeftCheckBoxText>I have read</LeftCheckBoxText>
                        <TouchableOpacity>
                            <PolicyText>Privacy Policy</PolicyText>
                        </TouchableOpacity>
                    </View>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={newValue => setToggleCheckBox(newValue)}
                        boxType="square"
                        style={{width: 18, height: 18, marginLeft: 12}}
                        onFillColor={'#005FED'}
                        onCheckColor={'#fff'}
                        tintColor={'#fff'}
                        animationDuration={0}/>
                </PolicySection>

                <ButtonLogin>
                    <ButtonLoginText>GET STARTED</ButtonLoginText>
                </ButtonLogin>


                <RemainingView>
                    <TextNotLogin>ALREADY HAVE AN ACCOUNT? </TextNotLogin>
                    <TextRegister>LOG IN</TextRegister>
                </RemainingView>

            </LinearGradient>
        </Container>
    )
}

export default SignUpScreen;

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

const PolicySection = styled.View`
  margin: 25px 24px 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center`

const ButtonLogin = styled(ButtonFB)`
  justify-content: center;
  align-self: center;
  height: 50px`

const ButtonLoginText = styled(ButtonText)``


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

const LeftCheckBoxText = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.05px;
  color: #FFFFFF;
  margin-right: 3px;
`

const PolicyText = styled(LeftCheckBoxText)`
  color: #0028FD`
