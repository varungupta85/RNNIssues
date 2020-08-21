/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native'

import { Header, Colors } from 'react-native/Libraries/NewAppScreen'
import { Navigation } from 'react-native-navigation'
import GlobalConfig from './GlobalConfig'

class App extends Component {
  static options() {
    return {
      topBar: {
        rightButtons: [
          {
            text: 'Save',
            id: 'saveMembers'
          },
          {
            icon: require('./img/ic_find.png'),
            id: 'search'
          }
        ]
      }
    }
  }

  constructor(props) {
    super(props)
    Navigation.events().bindComponent(this)
  }

  navigationButtonPressed = ({ buttonId }) => {
    if (buttonId === 'saveMembers') {
      alert('saveMembers')
    }
    if (buttonId === 'cancel') {
      Navigation.pop(this.props.componentId)
    }
    if (buttonId === 'search') {
      alert('search')
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal === null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <TouchableOpacity
                  onPress={() =>
                    Navigation.push(this.props.componentId, {
                      component: {
                        name: 'MergeOptionsScreen'
                      }
                    })
                  }>
                  <Text style={styles.sectionTitle}>
                    {'Merge Options Screen'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => GlobalConfig.eventEmitter.emit('changeTheme')}>
                  <Text style={styles.sectionTitle}>{'Set Root'}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter
  },
  engine: {
    position: 'absolute',
    right: 0
  },
  body: {
    backgroundColor: Colors.white
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
})

export default App
