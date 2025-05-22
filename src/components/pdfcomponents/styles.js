import { StyleSheet, Font } from "@react-pdf/renderer";
import Raleway from "../../Fonts/static/Raleway-Regular.ttf";
import RalewayBold from "../../Fonts/static/Raleway-Bold.ttf";
import RalewayItalicBold from "../../Fonts/static/Raleway-BoldItalic.ttf";

Font.register({
  family: "Raleway",
  fonts: [
    { src: Raleway, fontStyle: "normal", fontWeight: "normal" },
    { src: RalewayBold, fontStyle: "normal", fontWeight: "bold" },
    { src: RalewayItalicBold, fontStyle: "italic", fontWeight: "bold" }
  ]
  
})


export const styles = StyleSheet.create({
  document: {
    fontFamily: "Raleway",
    margin: "50px",
  },
  page: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  allContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    // justifyContent: "space-evenly",
    // alignItems: "center",
    padding: 40,
    paddingBottom: 0,
  },
  logo: {
    width: "40px",
    height: "80px",
    // objectFit: "cover",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    width: "100%",
    height: "100px",
    // margin: "40 20 20 20"
  },
  logoName: {
    display: "flex",
    flexDirection: "column",
    // flex: 1,
    height: "100%",
    marginLeft: 5,
  },
  logoLetters: {
    color: "#0076bd",
    fontSize: 22,
  },
  bold: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    borderColor: 'rgba(0,0,0,0)',
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
    marginBottom: 10
  },
  subHeadText: {
    fontSize: 12,
    padding: 5,

  },
  regText: {
    fontSize: 11,
    borderColor: 'rgba(0,0,0,0)',
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
  blueBG: {
    backgroundColor: "#cae0ea"
  },
  greenBG: {
    backgroundColor: "#a8ccc4"
  },
  greyBG: {
    backgroundColor: "#cccccc"
  },
  tableStyles: {
    borderColor: 'rgba(0,0,0,0)',
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
    borderColor: 'rgba(0,0,0,0)',
  },
  indentedCell: {
    paddingLeft: 10,
    borderColor: 'rgba(0,0,0,0)',

    // border: 0
  },
  nonIndentedCell: {
    paddingRight: 8,
    paddingLeft: 2,
    borderColor: 'rgba(0,0,0,0)',

  },
  topLeft: {
    paddingRight: 8,
    paddingLeft: 2,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderTopLeftRadius: 10,
    backgroundColor: "#a8ccc4",
    
  },
  topRight: {
    borderColor: 'rgba(0,0,0,0)',
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderTopRightRadius: 10,
    backgroundColor: "#a8ccc4",

  },
  bottomLeft: {
    paddingRight: 8,
    paddingLeft: 2,
    borderColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderBottomLeftRadius: 10,
    backgroundColor: "#a8ccc4",

  },
  bottomRight: {
    borderColor: 'rgba(0,0,0,0)',
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderBottomRightRadius: 10,
    backgroundColor: "#a8ccc4",
  },
  questions: {
    display: 'flex',
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
    // backgroundColor: "#ececec",
    // borderRadius: 10,
    marginTop: 10
  },

  extraSpace: {
    // flexDirection: "column",  
    // flexWrap: "wrap",      
    // alignItems: "flex-end",
    // height: "100%",
    position:"absolute",
    bottom: 30,
    // width: "100%",
    left: 50,
    right: 50,
  }

});