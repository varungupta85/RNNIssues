import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Navigation } from 'react-native-navigation'

class MergeOptionsScreen extends Component {
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
    Navigation.mergeOptions(this.props.componentId, {
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
        ],
        leftButtons: [
          {
            id: 'cancel',
            icon: require('./img/ic_close.png')
          }
        ]
      }
    })

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{'Merge Options Screen'}</Text>
      </View>
    )
  }
}

export default MergeOptionsScreen
