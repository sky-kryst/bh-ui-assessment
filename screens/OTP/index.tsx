import { NavigationContext } from "@react-navigation/native";
import React, { Component, createRef } from "react";
import { Text, TextInput, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AuthLayout, BlueLink, PrimaryButton } from "../../components";
import { useAuthStore, useLoginDetailsStore } from "../../stores";
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
    isError: false,
    isLoading: false,
    errorString: "",
  };

  inputRef = noOfInputsArr.reduce(
    (accumulator, currentElement) => ({
      ...accumulator,
      [`${currentElement}`]: createRef(),
    }),
    {}
  );

  static contextType = NavigationContext;
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
        if (this.state.otp[`${key}`]) {
          this.setState({
            otp: { ...this.state.otp, [`${key}`]: "" },
          });
        }
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

  onFormSubmit = () => {
    const otpLength = (
      Object.values(this.state.otp).reduce(
        (accumulator: string, currentElement) =>
          (accumulator += currentElement),
        ""
      ) as string
    ).length;

    if (otpLength < 6) {
      this.setState({ errorString: "OTP at least 6 digits", isError: true });
      return;
    }

    if (otpLength < 1) {
      this.setState({
        errorString: "Please enter the OTP sent to you",
        isError: true,
      });
      return;
    }

    this.setState({ errorString: "", isError: false, isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
      useAuthStore.setState({ isAuthenticated: true });
    }, 1500);
  };

  render() {
    return (
      <AuthLayout
        headerHeight={styles.Header.height}
        headerText={
          <View style={styles.Header}>
            <Text style={{ fontWeight: "bold" }}>
              Enter 6 digit OTP sent on
            </Text>
            <View style={styles.PhoneNumber}>
              <Text>
                {useLoginDetailsStore.getState().countryCode}
                {"-"}
                {useLoginDetailsStore.getState().phoneNumber}
              </Text>
              <TouchableWithoutFeedback
                onPress={() => this.context?.navigate("Login")}
              >
                <BlueLink
                  style={{ fontWeight: "600", textDecorationLine: "underline" }}
                >
                  Change
                </BlueLink>
              </TouchableWithoutFeedback>
            </View>
          </View>
        }
      >
        <View style={styles.Form}>
          {/* <View style={styles.InputContainer}> */}
          <View style={[styles.Inputs]}>
            {noOfInputsArr.map((currentElement, currentIndex) => (
              <TextInput
                key={String(currentElement)}
                maxLength={/* noOfInputs - currentIndex */ 1}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                textAlign="center"
                style={[
                  styles.Input,
                  this.state.isError && { borderColor: "red" },
                ]}
                value={this.state.otp[`${currentElement}`]}
                ref={this.inputRef[`${currentElement}`]}
                // onChangeText={this.onInputChange(currentElement)}
                onKeyPress={this.onKeyPressed(currentElement)}
              />
            ))}
          </View>
          <BlueLink>{this.state.isError && this.state.errorString}</BlueLink>
          {/* </View> */}
          <View style={styles.Buttons}>
            <PrimaryButton buttonText="Submit" onPress={this.onFormSubmit} />
            {this.state.isError ? (
              <BlueLink>Resend OTP</BlueLink>
            ) : (
              <Text style={{ fontWeight: "bold", color: "grey" }}>
                Resend OTP 30s
              </Text>
            )}
          </View>
        </View>
      </AuthLayout>
    );
  }
}
