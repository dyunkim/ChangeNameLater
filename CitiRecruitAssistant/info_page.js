import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TextInput, Image, Button, ScrollView} from 'react-native';

export default class InfoPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            comment: ""
        }
        this.getProfile = this.getProfile.bind(this)
    }

    componentDidMount() {
      this.getProfile()
    }
  getProfile() {
    id = this.props.navigation.getParam('id')
    fetch('http://localhost:5000/profile/' + id)
    .then(response => response.json())
    .then(data=> this.setState({name: data.name, email: data.email, comment: data.comment}))
  }

  onPressSave() {
      url = 'http://localhost:5000/updateProfile'
      fetch(url, {
          method: 'POST',
          body: this.state
      })
  }

  static navigationOptions = {
    header: null
  }
  // constructor(propts) {
  //   super(props)
  // }

  render() {
    return (
          <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        
          <Image
    source={require('./mulan.png')}
    style={styles.image}
  ></Image>
        
        <Text style={styles.headerText} onChangeText={(text) => this.setState({name: text})}>
          Name:
        </Text>

        <TextInput
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          value={"David Kim"}
        />
        
        <Text style={styles.headerText}>
          Phone:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        <Text style={styles.headerText}>
          Email:
        </Text>

        <TextInput
          placeholder=" "
          // Making the Under line Transparent.
          value={"david.y.kim@citi.com"}
          underlineColorAndroid="transparent"
        />
        
        <Text style={styles.headerText}>
          Address:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        <Text style={styles.headerText}>
          School:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        <Text style={styles.headerText}>
          Major:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        
        <Text style={styles.headerText}>
          GPA:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        
        <Text style={styles.headerText}>
          Grad Date:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        <Text style={styles.headerText}>
          Skills:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        <Text style={styles.headerText}>
          Work Experience:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        <Text style={styles.headerText}>
          Buzz Words:
        </Text>

        <TextInput
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
        <Text style={styles.headerText}>
          Comments:
        </Text>

        <TextInput
          value={this.state.comments}
          placeholder="Type comments here"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
        />
        
            <Button 
                onPress={this.onPressSave}
                title="Save!"
                color = "#841584"

            />
      </View>
</ScrollView>
    );
  }
  
}

const styles = StyleSheet.create({
//    css
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingTop:60,
  },
});


