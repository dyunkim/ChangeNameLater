import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, TextInput, Image, Button, ScrollView} from 'react-native';

export default class InfoPage extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: ""
        }
    }
//    send_data() {
//        request.POST(this.state)
//    }
//    send(){
//        request
//          .post(SERVER)
//          .on('error', function(err) {
//            console.log(err)
//        })
//    }
//  .pipe(fs.createWriteStream(this.state))
//    
  onPressSave() {
      url = 'http://localhost:5000/updateProfile'
      fetch(url, {
          method: 'POST',
          body: this.state
      })
  }
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
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
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
          // Adding hint in TextInput using Placeholder option.
          placeholder=" "
          // Making the Under line Transparent.
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
          // Adding hint in TextInput using Placeholder option.
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


