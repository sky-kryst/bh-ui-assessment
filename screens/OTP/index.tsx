import React, { Component, createRef } from "react";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { AuthLayout } from "../../components";
import styles from "./styles";

const noOfInputsArr = [1, 2, 3, 4, 5, 6];

const noOfInputs = noOfInputsArr.length;

export class OTP extends Component {
  state = {
    otp: noOfInputsArr.reduce(
      (accumulator, currentElement) => ({
        ...accumulator,
        [`${currentElement}`]: "",
      }),
      {}
    ),
  };

  inputRef = noOfInputsArr.reduce(
    (accumulator, currentElement) => ({
      ...accumulator,
      [`${currentElement}`]: createRef(),
    }),
    {}
  );

  onInputChange = (key: number) => {
    return (input: string) => {
      this.setState({
        otp: { ...this.state.otp, [`${key}`]: input },
      });

      if (input) {
        this.inputRef[`${key + 1}`]?.current.focus();
      } else {
        this.inputRef[`${key - 1}`]?.current.focus();
      }
    };
  };

  onKeyPressed = (key: number) => {
    return ({ nativeEvent: { key: keyValue } }) => {
      if (!isNaN(keyValue)) {
        this.setState({
          otp: {
            ...this.state.otp,
            [`${key + (this.state.otp[`${key}`] ? 1 : 0)}`]: keyValue,
          },
        });
        this.inputRef[`${key + 1}`]?.current.focus();
        return;
      }

      if (keyValue === "Backspace") {
        // if (this.state.otp[`${key}`]) {
        //   this.setState({
        //     otp: { ...this.state.otp, [`${key}`]: "" },
        //   });
        // } else {
        this.inputRef[`${key - 1}`]?.current.focus();
        // }
        return;
      }

      if (keyValue === "Enter") {
        this.inputRef[`${key - 1}`]?.current.focus();
        return;
      }
    };
  };

  render() {
    return (
      <AuthLayout
        headerText={
          <Text style={{ fontWeight: "bold" }}>Enter 6 digit OTP sent on</Text>
        }
      >
        <View style={styles.Form}>
          <View style={[styles.InputContainer, { width: "100%" }]}>
            {noOfInputsArr.map((currentElement, currentIndex) => (
              <TextInput
                key={String(currentElement)}
                maxLength={/* noOfInputs - currentIndex */ 1}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                textAlign="center"
                style={[styles.Input, { borderWidth: 1 }]}
                value={this.state.otp[`${currentElement}`]}
                ref={this.inputRef[`${currentElement}`]}
                onChangeText={this.onInputChange(currentElement)}
                onKeyPress={this.onKeyPressed(currentElement)}
              />
            ))}
          </View>
          <View>
            <TouchableWithoutFeedback>
              <View>
                <Text>Submit</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text>Resend OTP 30s</Text>
          </View>
        </View>
      </AuthLayout>
    );
  }
}
