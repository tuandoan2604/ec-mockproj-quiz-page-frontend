import {StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderBack from '../../components/HeaderBack';
import QuestionsTopTab from './Questions/QuestionsTopTab';

// <TouchableOpacity style={{
//     backgroundColor: isActive ? 'salmon' : '#fff',
// }} onPress={changeStyle}>
//    <Text>alo</Text>
//
// </TouchableOpacity>

const QuizScreen = () => {
  const [isActive, setIsActive] = useState(Boolean);

  const changeStyle = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <LinearGradient colors={['#3179E3', '#2DA7EB']} style={styles.background}>
      <HeaderBack title={'UI UX Design Quiz '} />
      <QuestionsTopTab />
    </LinearGradient>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

const MainSection = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;
