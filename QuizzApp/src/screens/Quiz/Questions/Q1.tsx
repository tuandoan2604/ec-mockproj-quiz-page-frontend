import {Button, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import Answer from '../../../components/Answer';
import axios from 'axios';
import {baseURL} from '../../../config/api';

const Q1 = () => {
  const [score, setScore] = useState(0);
  const token = useSelector(state => state.Auth.payload.tokens.access.token);
  const question = useSelector(state => state.Question.question[0]);
  const id = question.id;

  const SubmitAnswer = () => {
    axios
      .post(
        baseURL + `/v1/questions/submit`,
        [
          {
            id: id,
            correctanswer: question.answer1,
          },
        ],
        {headers: {Authorization: `Bearer ${token}`}},
      )
      .then(response => {
        console.log(response.data);
        if (
          response.data[1].result &&
          String(response.data[1].result) == 'true'
        ) {
          setScore(score => score + 1);
        } else {
          setScore(score => (score = 0));
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Question>{question.question}</Question>

      <Answer
        answer1={question.answer1}
        answer2={question.answer2}
        answer3={question.answer3}
        answer4={question.answer4}
        id={id}
      />

      {/* <Button title="submit" onPress={SubmitAnswer} /> */}
      {/* <Text>{score}</Text> */}
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
