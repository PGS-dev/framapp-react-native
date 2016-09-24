import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';
import { Card, Button } from 'react-native-material-design';

const {
  Text,
  Image,
  StyleSheet,
  View
} = ReactNative;

const Product = ({ product }) => (
  <Card>
    <Card.Media
      image={<Image source={{ uri: product.imageUrl }} />}
      overlay
    >
      <Text style={styles.productHeader}>{product.name} {product.promoted ? 'PROMOTED!!' : null}</Text>
    </Card.Media>
    <Card.Body>
      <View>

      </View>
      <Text>{product.description}</Text>
    </Card.Body>
  </Card>
);

Product.propTypes = {
  product: React.PropTypes.object.isRequired,
};

export default observer(Product);

const styles = StyleSheet.create({
  productHeader: {
    color: 'white'
  }
});