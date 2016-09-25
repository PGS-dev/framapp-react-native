import React from 'react';
import ReactNative from 'react-native';
import { observer, propTypes } from 'mobx-react/native';
import { Card } from 'react-native-material-design';

import Button from '../components/Button';

const {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View
} = ReactNative;

const ProductsList = ({ products, onClickItem }) => (
  <ScrollView>
    {products.map((product) => (
      <Card key={product.id}>
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
          <Card.Actions position="right">
              <Button onPress={() => onClickItem(product)} text="Check details" />
          </Card.Actions>
      </Card>
    ))}
  </ScrollView>
);

ProductsList.propTypes = {
  products: propTypes.arrayOrObservableArray.isRequired,
  onClickItem: React.PropTypes.func.isRequired,
};

export default observer(ProductsList);

const styles = StyleSheet.create({
  productHeader: {
    color: 'white'
  }
});
