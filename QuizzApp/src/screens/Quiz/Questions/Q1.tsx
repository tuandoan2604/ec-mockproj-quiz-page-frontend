import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';

const Q1 = () => {
  const [isFalse, setIsFalse] = useState(true);
  const [isTrue, setIsTrue] = useState(true);

  const changeStyleFalse = useCallback(() => {
    setIsFalse(!isFalse);
  }, [isFalse]);

  const changeStyleTrue = useCallback(() => {
    setIsTrue(!isTrue);
  }, [isTrue]);

  return (
    <Container>
      <Question>What is the meaning of UI UX Design ?</Question>

      <AnswerSection onPress={changeStyleFalse}>
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

      <AnswerSection onPress={changeStyleFalse}>
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

      <AnswerSection onPress={changeStyleFalse}>
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
    </Container>
  );
};

export default Q1;

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
