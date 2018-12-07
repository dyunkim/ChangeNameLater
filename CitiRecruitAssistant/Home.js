import React from 'react';
import { StyleSheet, SectionList, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

export default class Home extends React.Component {

  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props)
    this.state = {
      full_sections: [],
      view_sections: []
    }
    this.filter = this.filter.bind(this)
  }


  componentDidMount() {
    this.create_sections()
  }

  create_sections() {
    data = [
        {title: "SMU", data: [{name: "David Kim", id: 1}, {name: "Matthew Lee", id: 2}]},
        {title: "UTD", data: [{name: "Arsh Singh", id: 3}, {name: "Jeff Mayeaux", id: 4}]},
      ]
    this.setState({
      full_sections: data,
      view_sections: data
    })

  }

  filter(text) {
    if (text != "") {
      new_view_sections = []
      this.state.full_sections.forEach( section => {
        new_data = section['data'].filter(name => (name.toUpperCase().includes(text.toUpperCase())))
        new_section = {title: section['title'], data: new_data}
        if(new_data.length > 0) {
          new_view_sections.push(new_section)
        }
      })
      this.setState({view_sections: new_view_sections})
    }
    else {
      this.setState({view_sections: this.state.full_sections})
    }
  }

  doThing() {
    console.debug("change to camera")
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          centerElement="Citi Assistant"
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
            onChangeText: this.filter
          }}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')} >
          <View style={styles.add_container}>
            <View style={{flex: 0}}>
              <Image style={styles.add_icon}
                source={require('./res/plus_icon.png')}/>
            </View>
            <View style={{flex: 1, alignContent: 'flex-start', justifyContent: 'center'}}
              
              >
              <Text style={styles.add_text}>Add New Profile</Text>
            </View>
          </View>
        </TouchableOpacity>
        <SectionList 
          sections={this.state.view_sections}
          renderItem={({item}) => <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 22
  },
  add_container: {
    flexDirection: 'row'
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  add_icon: {
    width: 35,
    height: 35,
    margin: 8,
    marginLeft: 10
  },
  add_text: {
    fontSize: 22,
    justifyContent: 'center'
  }
})

