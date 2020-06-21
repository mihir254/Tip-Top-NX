import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#E1E2E6",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholder: {
    marginVertical: 10,
    marginTop: 100,
    width: 160,
    height: 160,
    backgroundColor: "#E1E2E6",
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#DDA0DD",
    borderStyle: "dotted",
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 5,
    // backgroundColor: "#333",
  },
  inputContainer: {
    width: 300,
    marginVertical: 10,
    height: 80,
    // borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
  },
  inputText: {
    height: 50,
    color: "#000",
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 15,
  },
  error: {
    borderWidth: 3,
    borderColor: "red",
  },
  emailContainer: {
    width: 300,
    marginVertical: 10,
    height: 80,
    // borderWidth: 1,
    justifyContent: "center",
  },
  emailText: {
    height: 50,
    color: "#777",
    fontSize: 18,
    borderWidth: 1,
    paddingLeft: 15,
  },
  addressContainer: {
    width: 300,
    marginVertical: 10,
    height: 100,
    // borderWidth: 1,
    justifyContent: "center",
  },
  addressText: {
    height: 70,
    color: "#000",
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 10,
  },
  heading: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default styles;