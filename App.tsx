import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LoggerExample } from "./logger/LoggerExample";
import { loggerFactory } from "./logger/LoggerConfig";

const logger = loggerFactory.getLogger("App");

export default function App() {
    // console.log("-----------------------------------------START");
    // new LoggerExample().doSomeLogs();
    // console.log("-----------------------------------------STOP");

    return (
        <View style={styles.container}>
            <Text>expo playground</Text>

            <TouchableOpacity onPress={() => console.log("This is a basic CONSOLE log.")} style={styles.button}>
                <Text style={styles.buttonText}>log CONSOLE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => logger.trace("This is a TRACE log.")} style={styles.button}>
                <Text style={styles.buttonText}>log TRACE</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => logger.debug("This is a DEBUG log.")} style={styles.button}>
                <Text style={styles.buttonText}>log DEBUG</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => logger.info("This is an INFO log.")} style={styles.button}>
                <Text style={styles.buttonText}>log INFO</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => logger.warn("This is a WARN log.")} style={styles.button}>
                <Text style={styles.buttonText}>log WARN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => logger.error("This is an ERROR log.")} style={styles.button}>
                <Text style={styles.buttonText}>log ERROR</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => logger.fatal("This is a FATAL log.")} style={styles.button}>
                <Text style={styles.buttonText}>log FATAL</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: "green",
        padding: 10,
        borderRadius: 10,
        margin: 3,
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
});
