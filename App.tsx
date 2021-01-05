import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { logger } from "./logger_package/LoggerConfig.js";
// const logger = require("./logger_package/LoggerConfig.js");
import { logger } from "./logger_package/LoggerConfigTs";

export default function App() {
    logger.info("TEST AAAAAAAAAAAAAAA");

    return (
        <View style={styles.container}>
            <Text>expo playground</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
