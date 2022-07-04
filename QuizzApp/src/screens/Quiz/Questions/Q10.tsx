import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import {IC_NEXT, IC_PREVIOUS_COLOR} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const Q10 = () => {
  const navigation = useNavigation<any>();
  const [isFalse, setIsFalse] = useState(true);
  const [isTrue, setIsTrue] = useState(true);

  const changeStyleFalse = useCallback(() => {
    setIsFalse(!isFalse);
  }, [isFalse]);

  const changeStyleTrue = useCallback(() => {
    setIsTrue(!isTrue);
  }, [isTrue]);

  const goToResult = useCallback(() => {
    navigation.navigate('ResultScreen');
  }, []);

  return (
    <Container>
      <Question>What is the meaning of UI UX Design ?</Question>

      <AnswerSection>
        <AnswerHover
          style={{
            backgroundColor: isFalse ? '#e9e9e9' : '#FF0000',
          }}>
          <AnswerSelection>A</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isFalse ? '#333333' : '#FF0000',
          }}>
          User Interfoce and User Experience
        </AnswerText>
      </AnswerSection>

      <AnswerSection>
        <AnswerHover
          style={{
            backgroundColor: isFalse ? '#e9e9e9' : '#FF0000',
          }}>
          <AnswerSelection>B</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isFalse ? '#333333' : '#FF0000',
          }}>
          User Introface and User Experience
        </AnswerText>
      </AnswerSection>

      <AnswerSection onPress={changeStyleFalse}>
        <AnswerHover
          style={{
            backgroundColor: isFalse ? '#e9e9e9' : '#FF0000',
          }}>
          <AnswerSelection>C</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isFalse ? '#333333' : '#FF0000',
          }}>
          User Interfice and Using Experience
        </AnswerText>
      </AnswerSection>

      <AnswerSection onPress={changeStyleTrue}>
        <AnswerHover
          style={{
            backgroundColor: isTrue ? '#e9e9e9' : '#3dcf79',
          }}>
          <AnswerSelection>D</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isTrue ? '#333333' : '#3dcf79',
          }}>
          User Interface and User Experience
        </AnswerText>
      </AnswerSection>

      <AnswerSection>
        <AnswerHover
          style={{
            backgroundColor: isFalse ? '#e9e9e9' : '#FF0000',
          }}>
          <AnswerSelection>E</AnswerSelection>
        </AnswerHover>
        <AnswerText
          style={{
            color: isFalse ? '#333333' : '#FF0000',
          }}>
          Using Interface and Using Experience
        </AnswerText>
      </AnswerSection>

      <Footer>
        <TouchableOpacity>
          <Image source={IC_PREVIOUS_COLOR} />
        </TouchableOpacity>
        <ButtonSubmit onPress={goToResult}>
          <Text>Submit Quiz</Text>
        </ButtonSubmit>
        <Image source={IC_NEXT} />
      </Footer>
    </Container>
  );
};

export default Q10;

const styles = StyleSheet.create({});

const Container = styled.View`
  flex: 1;
`;

const Question = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #333333;
  margin: 24px 24px;
`;

const AnswerSection = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const AnswerHover = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 0 8px 0 24px;
`;
const AnswerSelection = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;

const AnswerText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 24px;
  align-items: center;
  flex: 1;
`;

const ButtonSubmit = styled.TouchableOpacity`
  width: 195px;
  height: 50px;
  border-color: #3550dc;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
