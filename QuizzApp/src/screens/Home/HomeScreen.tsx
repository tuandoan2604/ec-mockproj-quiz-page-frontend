import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    return (
        <Container>
            <LinearGradient colors={['#3179E3', '#2DA7EB']} style={styles.background}>

            </LinearGradient>
        </Container>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})

const Container = styled.View`
  flex: 1`
