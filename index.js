/**
 * @format
 */

import { Navigation } from 'react-native-navigation'
import App from './App'
import MergeOptionsScreen from './MergeOptionsScreen'
import { Platform } from 'react-native'
import GlobalConfig from './GlobalConfig'
import AlarmListScreen from './AlarmListScreen'
import GroupListScreen from './GroupListScreen'
import ContactListScreen from './ContactListScreen'

const colors = {
  white: 'white',
  transparent: 'transparent',
  black: 'black',
  lightBlack: '#212121',
  lightGrey: '#f7f7f7',
  grey: '#bdbec2',
  darkGrey: '#8e8e93',
  veryDarkGrey: '#424242',
  veryDarkBlueGrey: '#37474f',
  lightYellow: '#fffde7',
  lightRed: '#FFEBEE',
  lightBlue: '#e3f2fd',
  darkBlue: '#006db3',
  lightBlueGrey: '#ECEFF1',
  transluscentWhite: '#ffffff88',
  transluscentBlack: '#00000088',
  ...Platform.select({
    ios: {
      green: '#4cd964',
      red: '#ff3b30',
      yellow: '#ffcc00',
      orange: '#ff9500',
      blue: '#007aff',
      transluscentBlue: '#007aff44'
    },
    android: {
      green: '#00897B',
      red: '#E53935',
      yellow: '#FDD835',
      orange: '#ff9800',
      blue: '#039BE5',
      transluscentBlue: '#039BE544'
    }
  })
}

const currentColorTheme = {
  lightTint: colors.lightGrey,
  mediumTint: colors.grey,
  darkTint: colors.darkGrey,
  lightBlueGreyTint: colors.lightBlueGrey,
  transluscentBackground: colors.transluscentBlack,
  transluscentText: colors.transluscentWhite,
  textColor: colors.lightBlack,
  screenBackgroundColor: colors.white,
  textBackgroundColor: colors.white,
  listItemSelectedColor: colors.lightYellow,
  formFieldIcon: colors.grey,
  primary: colors.blue,
  lightPrimary: colors.lightBlue,
  transluscentPrimary: colors.transluscentBlue,
  tabBarBackgroundColor: colors.lightGrey,
  tabBarButtonColor: colors.darkGrey,
  tabBarSelectedButtonColor: colors.blue,
  navBarBackgroundColor: colors.blue,
  navBarTextColor: colors.white,
  navBarButtonColor: colors.white,
  darkPrimary: colors.darkBlue,
  tileShadowColor: colors.darkGrey,
  outlineButtonBackgroundColor: colors.lightGrey,
  warningTileBackgroundColor: colors.lightRed,
  warningTileTextColor: colors.red,
  statusBarColor: colors.darkBlue
}

Navigation.registerComponent('MergeOptionsScreen', () => MergeOptionsScreen)
Navigation.registerComponent('AlarmListScreen', () => AlarmListScreen)
Navigation.registerComponent('GroupListScreen', () => GroupListScreen)
Navigation.registerComponent('ContactListScreen', () => ContactListScreen)

class Main {
  constructor() {
    Navigation.events().registerAppLaunchedListener(() => {
      this.startApp()
    })
    GlobalConfig.eventEmitter.addListener('changeTheme', this.startApp, this)
  }

  startApp() {
    Navigation.setDefaultOptions({
      statusBar: {
        backgroundColor: currentColorTheme.statusBarColor
      },
      layout: {
        orientation: ['portrait'],
        backgroundColor: currentColorTheme.screenBackgroundColor
      },
      bottomTabs: {
        visible: true,
        drawBehind: false,
        backgroundColor: currentColorTheme.tabBarBackgroundColor,
        titleDisplayMode: 'alwaysShow'
      },
      bottomTab: {
        iconColor: currentColorTheme.tabBarButtonColor,
        selectedIconColor: currentColorTheme.tabBarSelectedButtonColor,
        textColor: currentColorTheme.tabBarButtonColor,
        selectedTextColor: currentColorTheme.tabBarSelectedButtonColor
      },
      topBar: {
        leftButtonColor: currentColorTheme.navBarButtonColor,
        rightButtonColor: currentColorTheme.navBarButtonColor,
        title: {
          color: currentColorTheme.navBarTextColor
        },
        subtitle: {
          fontSize: 12,
          color: currentColorTheme.transluscentText
        },
        background: {
          color: currentColorTheme.navBarBackgroundColor
        },
        backButton: {
          color: currentColorTheme.navBarButtonColor,
          showTitle: false
        }
      },
      animations: {
        push: {
          waitForRender: true
        }
      }
    })

    Navigation.setRoot({
      root: {
        bottomTabs: {
          id: 'BottomTabsId',
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      id: 'AlarmListScreen',
                      name: 'AlarmListScreen',
                      passProps: {},
                      options: {
                        bottomTab: {
                          text: 'Alarms',
                          icon: require('./img/ic_find.png')
                        },
                        topBar: {
                          title: {
                            text: 'Alarms'
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      id: 'GroupListScreen',
                      name: 'GroupListScreen',
                      passProps: {},
                      options: {
                        bottomTab: {
                          text: 'Groups',
                          icon: require('./img/ic_find.png')
                        },
                        topBar: {
                          title: {
                            text: 'Groups'
                          }
                        }
                      }
                    }
                  }
                ]
              }
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      id: 'ContactListScreen',
                      name: 'ContactListScreen',
                      passProps: {},
                      options: {
                        bottomTab: {
                          text: 'Contacts',
                          icon: require('./img/ic_find.png')
                        },
                        topBar: {
                          title: {
                            text: 'Contacts'
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    })
  }
}

GlobalConfig.App = new Main()
