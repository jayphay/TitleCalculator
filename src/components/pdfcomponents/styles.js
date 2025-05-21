import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  logo: {
    width: "50px",
    height:"100%",
    objectFit: "contain",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100px"
  }
});