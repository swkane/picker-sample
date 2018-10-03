import React from "react";
import { StyleSheet, Text, View, Picker } from "react-native";

export default class App extends React.Component {
  state = {
    pickerSelection: "default"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Value of the picker is {this.state.pickerSelection}</Text>
        <Picker
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
        </Picker>
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
