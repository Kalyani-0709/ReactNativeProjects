import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class App extends React.Component {
  state = { amount: 0, discount: 0, result: 0 };
  onAmountChange = (text) => {
    this.setState({ amount: text });
  };

  onDiscountChange = (text) => {
    this.setState({ discount: text });
  };

  onButtonPress = () =>
    this.setState({
      result: this.state.amount * (this.state.discount / 100),
    });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Text style={{ fontSize: 22, fontStyle: "bold" }}>Discount Calculator</Text>
        </View>
        <View
          style={{
            marginHorizontal: 40,
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text style={{ marginBottom: 10 }}>Amount</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onAmountChange}
          />
        </View>
        <View style={{ marginHorizontal: 40 }}>
          <Text style={{ marginBottom: 10 }}>Discount (%)</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.onDiscountChange}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.onButtonPress}
          >
            <Text style={{ color: 'white' }}>Calculate</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.result,
            { color: this.state.result ? 'green' : 'black' },
          ]}
        >
          The Amount After Discount is:
        </Text>
        <Text
          style={[
            styles.result,
            { color: this.state.result ? 'green' : 'black' },
          ]}
        >
          {this.state.result
            ? this.state.amount - this.state.result
            : null}
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: 'lightblue',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 20,
    textAlign: 'center',
  },
  btn: {
    backgroundColor: 'black',
    width: 80,
    height: 50,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
  },
});

export default App;
