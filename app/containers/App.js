import React from 'react';
import ReactNative from 'react-native';
import { Subheader } from 'react-native-material-design';
import { observer } from 'mobx-react/native';
import Drawer from 'react-native-drawer'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';

import { setUser, clearUser } from '../actions/UserActions';
import { FIREBASE_CONFIG } from '../config';

import HomePage from './HomePage';
import Navigation from './Navigation';
import AppStore from '../stores/AppStore';


const {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight
} = ReactNative;


firebase.initializeApp(FIREBASE_CONFIG);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    setUser(user);
  } else {
    clearUser();
  }
});


const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <View style={styles.backButton}>
            <Icon style={styles.backButtonIcon} name="chevron-left" />
            <Text style={styles.backButtonText}>Back</Text>
          </View>
        </TouchableHighlight>
      );
    }
    else {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.leftIconContainer}
          onPress={() => AppStore.drawer.open() }>
          <Icon name="bars" style={styles.icon} />
        </TouchableHighlight>
      );
    }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight
         onPress={ () => route.onPress() }>
         <Text style={ styles.rightNavButtonText }>
              { route.rightText || 'Right Button' }
         </Text>
       </TouchableHighlight>)
  },
  Title(route, navigator, index, navState) {
    return <Text style={ styles.title }>{route.title || 'FramApp'}</Text>
  }
};

class App extends React.Component {

  renderScene(route, navigator) {
    let RouteComponent = route.component
    return <RouteComponent navigator={navigator} {...route.props} />;
  }

  configureScene(route, routeStack) {
    if(route.type === 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Drawer
        ref={(ref) => AppStore.drawer = ref}
        content={<Navigation />}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/1.5 }
        })}
      >
        <Navigator
          ref={(router) => AppStore.router = router}
          configureScene={this.configureScene}
          initialRoute={{ component: HomePage }}
          renderScene={this.renderScene}
          sceneStyle={styles.sceneStyle}
          style={styles.container}
          navigationBar={
            <Navigator.NavigationBar
              style={ styles.nav }
              routeMapper={ NavigationBarRouteMapper }
            />
          }
        />
      </Drawer>
    );
  }
}

export default observer(App);

const drawerStyles = {
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  main: {
    paddingLeft: 3
  },
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  nav: {
    backgroundColor: 'rgb(0, 188, 212)'
  },
  leftIconContainer: {
    padding: 10
  },
  icon: {
    fontSize: 25,
    color: 'white'
  },
  title: {
    color: 'white',
    fontSize: 20
  },
  sceneStyle: {
    top: 64,
    backgroundColor: 'white'
  },
  backButton: {
    flexDirection: 'row',
    padding: 10
  },
  backButtonIcon: {
    fontSize: 25,
    color: 'white'
  },
  backButtonText: {
    fontSize: 18,
    paddingLeft: 5,
    color: 'white'
  }
});
