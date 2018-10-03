import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Button,
  Modal,
  TouchableOpacity
} from "react-native";

export default class App extends React.Component {
  state = {
    pickerSelection: "default",
    pickerDisplayed: false
  };

  setPickerValue = value => {
    this.setState({ pickerSelection: value });
    this.togglePicker();
  };

  togglePicker = () => {
    this.setState({ pickerDisplayed: !this.state.pickerDisplayed });
  };
  render() {
    const pickerValues = [
      {
        title: "Chicken",
        value: "chicken"
      },
      {
        title: "Vegetables",
        value: "vegetables"
      },
      {
        title: "Eggs",
        value: "eggs"
      }
    ];

    return (
      <View style={styles.container}>
        <Text>Value of the picker is {this.state.pickerSelection}</Text>
        <Button onPress={this.togglePicker} title={"Select a value!"} />
        {/* <Picker
          selectedValue={this.state.pickerSelection}
          style={{
            backgroundColor: "#fafafa",
            position: "absolute",
            bottom: 0,
            right: 0,
            left: 0
          }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ pickerSelection: itemValue })
          }
        >
          <Picker.Item label="Chicken" value="chicken" />
          <Picker.Item label="Eggs" value="eggs" />
          <Picker.Item label="Vegetables" value="vegetables" />
        </Picker> */}
        <Modal
          visible={this.state.pickerDisplayed}
          transparent={true}
          animationType="slide"
        >
          <View
            style={{
              margin: 20,
              padding: 20,
              backgroundColor: "#efefef",
              bottom: 20,
              left: 20,
              right: 20,
              position: "absolute",
              alignItems: "center"
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Please Pick a Value
            </Text>
            {pickerValues.map((value, index) => (
              <TouchableOpacity
                key={index}
                style={{ paddingVertical: 4 }}
                onPress={() => this.setPickerValue(value.value)}
              >
                <Text>{value.title}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              onPress={this.togglePicker}
              style={{ paddingVertical: 4 }}
            >
              <Text style={{ color: "#999" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
