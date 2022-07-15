import axios from 'axios';
import {baseURL} from '../config/api';
import {useSelector} from 'react-redux';
import {Button} from 'react-native';
import React from 'react';

const ButtonSubmit = ({id, answer}: any) => {
  const token = useSelector(state => state.Auth.payload.tokens.access.token);
  const question_id = {id};
  const question_answer = answer;
  const SubmitAnswer = ({question_id, question_answer}) => {
    axios
      .post(
        baseURL + `/v1/questions/submit`,
        [
          {
            id: {question_id},
            correctanswer: {question_answer},
          },
        ],
        {headers: {Authorization: `Bearer ${token}`}},
      )
      .then(response => {
        // alert(response.data[0].result);
        console.log(response.data);

        //     if ((response.data[0].result) && (String(response.data[0].result) == 'true') ){
        //         setScore((currScore) => currScore +1)
        // }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return <Button title="Submit" onPress={SubmitAnswer} />;
};

export default ButtonSubmit;
