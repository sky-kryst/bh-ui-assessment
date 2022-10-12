import { Entypo, Fontisto } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./styles";

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [isError, setIsError] = useState(false);
  const [isCountryCodeModal, setIsCountryCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorString, setErrorString] = useState("");

  const clearErrors = () => {
    setIsError(false);
    setErrorString("");
  };

  const setInitialStates = () => {
    setIsLoading(false);
    setIsError(false);
    setPhoneNumber("");
    setCountryCode("+1");
  };

  const setValidationError = (message: string) => {
    setIsError(true);
    setErrorString(message);
  };

  const submitForm = () => {
    if (phoneNumber.length < 10) {
      setValidationError("Please enter a valid phone number");
      return;
    }

    if (!phoneNumber) {
      setValidationError("Please enter a phone number");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setInitialStates();
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.Container}
      // keyboardVerticalOffset={-10}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.Container}>
          <View style={styles.BannerContainer}>
            <Image
              source={require("../../assets/images/login.png")}
              style={styles.BannerImage}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderText}>
              Welcome to <Text style={{ fontWeight: "bold" }}>BigHit</Text>
            </Text>
          </View>
          <Modal
            animationType="slide"
            visible={isCountryCodeModal}
            onRequestClose={() => {
              setIsCountryCodeModal(!isCountryCodeModal);
            }}
            presentationStyle="pageSheet"
          >
            <View>
              <Entypo
                name="chevron-thin-left"
                size={24}
                color="black"
                onPress={() => setIsCountryCodeModal(false)}
              />
              <Text>Select Country</Text>
            </View>
            <TextInput
              style={[styles.PhoneNumber, phoneNumber && { fontWeight: "500" }]}
              onChangeText={setPhoneNumber}
              value={phoneNumber}
              placeholder="Enter Mobile Number"
              placeholderTextColor="grey"
              keyboardType="number-pad"
              maxLength={10}
              textContentType="telephoneNumber"
              onFocus={clearErrors}
            />
            <SafeAreaView style={styles.Container}>
              <ScrollView style={styles.Container}>
                {countryCodeArray.map((currentElement) => {
                  return (
                    <View style={styles.Show}>
                      <Text>{currentElement.country}</Text>
                    </View>
                  );
                })}
              </ScrollView>
            </SafeAreaView>
          </Modal>
          <View style={styles.Form}>
            <View style={styles.Inputs}>
              <View style={styles.InputContainer}>
                <TouchableWithoutFeedback
                  onPress={() => setIsCountryCodeModal(true)}
                >
                  <View style={styles.CountryCode}>
                    <Fontisto name="world-o" size={15} color="black" />
                    <Text style={styles.CountryCodeText}>{countryCode}</Text>
                    <Entypo name="chevron-thin-down" size={10} color="grey" />
                  </View>
                </TouchableWithoutFeedback>
                <TextInput
                  style={[
                    styles.PhoneNumber,
                    phoneNumber && { fontWeight: "500" },
                  ]}
                  onChangeText={setPhoneNumber}
                  value={phoneNumber}
                  placeholder="Enter Mobile Number"
                  placeholderTextColor="grey"
                  keyboardType="number-pad"
                  maxLength={10}
                  textContentType="telephoneNumber"
                  onFocus={clearErrors}
                />
              </View>
              {isError ? (
                <Text style={{ fontSize: 15.3, color: "red" }}>
                  {errorString}
                </Text>
              ) : (
                <Text style={[styles.BlueLink, { fontSize: 15.3 }]}>
                  We will send you 6 digit OTP
                </Text>
              )}
            </View>
            <TouchableWithoutFeedback onPress={submitForm}>
              <View style={styles.Button}>
                <Text style={styles.ButtonText}>Let's Go</Text>
              </View>
            </TouchableWithoutFeedback>
            <Text
              style={[
                styles.BlueLink,
                { textTransform: "uppercase", textDecorationLine: "underline" },
              ]}
            >
              Skip to explore
            </Text>
            <Text style={styles.TnC}>
              I agree to the <Text style={styles.BlueLink}>User agreement</Text>{" "}
              and <Text style={styles.BlueLink}>Privacy policy</Text> of BigHit
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

let countryCodeArray = [];

for (let i = 1; i <= 20; i++) {
  countryCodeArray.push({ country: `String${i}`, code: `+${i}` });
}
