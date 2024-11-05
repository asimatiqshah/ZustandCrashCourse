import { Link } from "expo-router";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import useCourseStore from "../store/courseStore";
import { useState } from "react";


const Home = () => {
    const addCourse = useCourseStore((state) => state.addCourse);
    const { courses, removeCourse, toggleCourseStatus } = useCourseStore();
    const [courseTitle, setCourseTitle] = useState();
    const handleCourseSubmit = () => {
        let newObj = {
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle,
            completed: true
        }
        addCourse(newObj);
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TextInput
                style={styles.input}
                onChangeText={(val) => setCourseTitle(val)}
                value={courseTitle}
            />
            <Button title="Add Course" onPress={handleCourseSubmit} />

            {/* row */}

            {
                courses.map((item, index) => {
                    return (
                        <View key={item.id} style={{ flexDirection: 'row', backgroundColor: 'grey', width: '100%', justifyContent: 'center', marginTop: 20 }}>
                            <BouncyCheckbox isChecked={item.completed} onPress={()=>toggleCourseStatus(item.id)} />
                            <Text> {item.title} </Text>
                            <Button
                            onPress={()=>removeCourse(item.id)}
                            title="Deleted" />
                        </View>
                    )
                })
            }

        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});