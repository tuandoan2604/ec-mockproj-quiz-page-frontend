import {Dimensions, StyleSheet, Text,} from 'react-native';
// @ts-ignore
import React, {useCallback} from 'react';
import styled from 'styled-components/native';
import ItemLesson from "../../../components/ItemLesson";
import ContinueLesson from "../../../components/ContinueLesson";
import {useNavigation} from "@react-navigation/native";

const width = Dimensions.get('window').width

const ComputerScreen = () => {
    const navigation = useNavigation<any>()
    const goToDetail = useCallback(
        () => {
            navigation.navigate('DetailScreen')
        },
        [],
    );

    return (
        <Container>
            <ItemLesson title={'UI UX Design'}/>
            <ItemLesson title={'Graphic Design'}/>
            <ContinueQuizText>Continue Quiz</ContinueQuizText>
            <ContinueLesson title={"3D Animation"}/>

            <StartBtn onPress={goToDetail}>
                <BtnText>Start Quiz</BtnText>
            </StartBtn>

        </Container>
    );
};

export default ComputerScreen;

const styles = StyleSheet.create({});

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ContinueQuizText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #333333;
  margin: 16px 0 0 24px;
`

const StartBtn = styled.TouchableOpacity`
  width: ${width - 24}px;
  height: 50px;
  background-color: #3179E3;
  align-self: center;
  margin-top: 56px;
  border-radius: 5px;
  justify-content: center;
`

const BtnText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #FFFFFF;
  text-align: center;
`
