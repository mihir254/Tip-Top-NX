import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    padding: 10,
    height: 150,
    width: 300,
    // borderWidth: 1,
    justifyContent: "flex-end",
    borderColor: "#000",
    alignSelf: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
  },
  inputContainer: {
    width: 300,
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  inputText: {
    height: 50,
    color: "#000",
    fontSize: 18,
  },
  inputContainerPass: {
    width: 300,
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  inputTextPass: {
    height: 50,
    color: "#000",
    fontSize: 18,
    width: 230,
  },
  button: {
    marginVertical: 5,
    width: 300,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
  },
  buttonDisabled: {
    marginVertical: 10,
    width: 300,
    height: 50,
    borderWidth: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1,
  },
  signInBox: {
    marginVertical: 40,
    // borderWidth: 1,
    borderColor: "#000",
    height: 90,
    width: 300,
    paddingTop: 10,
    alignSelf: "center",
  },
  signInText: {
    color: "#000",
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  error: {
    borderWidth: 3,
    borderColor: "red",
  },
  terms: {
    alignSelf: "center",
    marginLeft:-20,
    flexDirection:"row",
    marginBottom : -12
  },
  agreeText:{
    marginTop:15,
    marginLeft:-30,
    fontWeight:"bold",
    fontSize:13,
    letterSpacing : 0.2
  },
  tcText:{
    marginTop:15,
    color:"#000080",
    fontWeight:"bold",
    fontSize:13,
    textDecorationLine:"underline",
    letterSpacing : 0.2
  }
});

export default styles;
