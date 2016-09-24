import React from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} = ReactNative;

const ModalComp = ({ visible, children, headerText, onClickCancel }) => (
  <Modal
    animationType={"fade"}
    transparent={true}
    visible={visible}
    style={styles.overlay}
  >
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          { headerText ? <Text style={styles.headerText}>{headerText}</Text> : null }
          <TouchableOpacity onPress={onClickCancel} style={styles.close}>
            <Icon name="close" size={25} style={styles.closeButton}/>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </View>
  </Modal>
);

ModalComp.propTypes = {
  visible: React.PropTypes.bool.isRequired,
  children: React.PropTypes.node,
  headerText: React.PropTypes.string,
  onClickCancel: React.PropTypes.func.isRequired,
};

export default ModalComp;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 10
  },
  headerText: {
    flex: 0.9,
    fontSize: 25
  },
  close: {
    flex: 0.1
  },
  closeButton: {
    flex: 1,
    alignSelf: 'flex-end'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    padding: 30
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20
  }
});
