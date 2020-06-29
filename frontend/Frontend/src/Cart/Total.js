import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Total = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={{ fontWeight: "bold" }}>CART TOTAL</Text>
      </View>
      <View style={styles.cartDetails}>
        <View style={styles.boxStyle}>
          <View style={styles.totalTextBox}>
            <Text>SUB TOTAL</Text>
          </View>
          <View style={styles.valueTextBox}>
            <Text>₹ 2000</Text>
          </View>
        </View>
        <View style={styles.boxStyle}>
          <View style={styles.totalTextBox}>
            <Text>TOTAL DISCOUNT</Text>
          </View>
          <View style={styles.valueTextBox}>
            <Text>₹ 2000</Text>
          </View>
        </View>
        <View style={styles.boxStyle}>
          <View style={styles.totalTextBox}>
            <Text>DELIVERY CHARGES</Text>
          </View>
          <View style={styles.valueTextBox}>
            <Text>₹ 2000</Text>
          </View>
        </View>
        <View style={styles.boxStyle}>
          <View style={styles.totalTextBox}>
            <Text style={{ fontWeight: "bold" }}>GRAND TOTAL</Text>
          </View>
          <View style={styles.valueTextBox}>
            <Text style={{ fontWeight: "bold" }}>₹ 2000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Total;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: "100%",
    height: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 5,
  },
  headerStyle: {
    borderRightWidth: 1,
    width: "30%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
  },
  cartDetails: {
    width: "60%",
    height: "100%",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  totalTextBox: {
    padding: 2,
    // borderWidth: 1,
    width: "70%",
    height: 30,
    justifyContent: "center",
    paddingLeft: 5,
  },
  boxStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
    width: "100%",
    height: 30,
    marginVertical: 5,
  },
  valueTextBox: {
    width: "30%",
    // borderWidth: 1,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
