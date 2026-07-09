import { StyleSheet, Font } from "@react-pdf/renderer";
import Raleway from "../../Fonts/static/Raleway-Regular.ttf";
import RalewayBold from "../../Fonts/static/Raleway-Bold.ttf";
import RalewayItalicBold from "../../Fonts/static/Raleway-BoldItalic.ttf";

Font.register({
  family: "Raleway",
  fonts: [
    { src: Raleway, fontStyle: "normal", fontWeight: "normal" },
    { src: RalewayBold, fontStyle: "normal", fontWeight: "bold" },
    { src: RalewayItalicBold, fontStyle: "italic", fontWeight: "bold" },
  ],
});

export let styles = StyleSheet.create({
  document: {
    fontFamily: "Raleway",
    margin: "50px",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  allContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",

    padding: 40,
    paddingBottom: 0,
  },
  logo: {
    width: "40px",
    height: "80px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
    height: "100px",
  },
  logoName: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    marginLeft: 5,
  },
  logoLetters: {
    color: "#1b3a2f",
    fontSize: 22,
  },
  bold: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    borderColor: "rgba(0,0,0,0)",
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  subHeader: {
    flexDirection: "column",
    alignItems: "flex-start",
    height: 100,
    backgroundColor: "#ececec",
    borderRadius: 10,
    marginBottom: 10,
  },
  subHeadText: {
    fontSize: 12,
    padding: 5,
  },
  regText: {
    fontSize: 11,
    borderColor: "rgba(0,0,0,0)",
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  subSection: {
    padding: 5,
  },
  // shadow: {
  //   backgroundColor: '#cccccc',
  //   position: 'absolute',
  //   top: 4,
  //   left: 4,
  //   width: "105%",
  //   height: "105%",
  //   zIndex: 0,
  // },
  blueBG: { // subtotal background
    // backgroundColor: "#cae0ea",
    backgroundColor: "#1b706240",
  },
  greenBG: { // government fees
    // backgroundColor: "#b9d5d0",
    backgroundColor: "#c3d2ef",
  },
  greyBG: { // row background
    backgroundColor: "#1b3a2f33",
  },
  tableStyles: {
    borderColor: "rgba(0,0,0,0)",
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  entryCell: {
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 0,
    borderColor: "rgba(0,0,0,0)",
  },
  indentedCell: {
    paddingLeft: 10,
    borderColor: "rgba(0,0,0,0)",

    // border: 0
  },
  nonIndentedCell: {
    paddingRight: 8,
    paddingLeft: 2,
    borderColor: "rgba(0,0,0,0)",
  },
  topLeft: {
    paddingRight: 8,
    paddingLeft: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderColor: "rgba(0,0,0,0)",
    borderTopLeftRadius: 10,
    // backgroundColor: "#a8ccc4",
    backgroundColor: "#c3d2ef",
  },
  topRight: {
    borderColor: "rgba(0,0,0,0)",
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderTopRightRadius: 10,
    // backgroundColor: "#a8ccc4",
    backgroundColor: "#c3d2ef",
  },
  bottomLeft: {
    paddingRight: 8,
    paddingLeft: 2,
    borderColor: "rgba(0,0,0,0)",
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderBottomLeftRadius: 10,
    // backgroundColor: "#a8ccc4",
    backgroundColor: "#7798d4",
  },
  bottomRight: {
    borderColor: "rgba(0,0,0,0)",
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderBottomRightRadius: 10,
    // backgroundColor: "#a8ccc4",
    backgroundColor: "#7798d4",
  },
  questions: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  smallText: {
    fontSize: 9,
  },
  boldItalic: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  footer: {
    flexDirection: "column",
    alignItems: "flex-start",
    height: "200px",

    marginTop: 10,
  },

  extraSpace: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
  },
  indentLeft: {
    paddingLeft: 10,
    borderColor: "rgba(0,0,0,0)",
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  indentMoreLeft: {
    paddingLeft: 14, // 20 to stack perfectly
    borderColor: "rgba(0,0,0,0)",
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
  },
  indentLeftViaRight: {
    paddingLeft: 11,
    borderColor: "rgba(0,0,0,0)",
    borderTop: 0,
    borderBottom: 0,
    borderLeft: 0,
    borderRight: 0,
  },
});
