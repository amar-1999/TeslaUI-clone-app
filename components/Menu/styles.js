import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    menuItems: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    icon: {
        color: "white",
    },
    arrowIcon: {
        color: "#4D4D4E",
    },
    menuText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 15,
        textTransform: "uppercase",
    },
    menuRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15,
    },
    menuTextBox: {
        flexGrow: 1
    },
    subTitle: {
        color: "grey",
        fontSize: 14,
        marginLeft: 15,
    }
})

export default styles;