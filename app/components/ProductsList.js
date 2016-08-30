import React from 'react';
import ReactNative from 'react-native';
import { observer } from 'mobx-react/native';
import { Card, Button } from 'react-native-material-design';

const {
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View
} = ReactNative;

class ProductsList extends React.Component {
  render() {
    return (
      <ScrollView>
        {this.props.products.map((product) => (
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
                  <Button text="Check details" />
              </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    );
  }
}

export default observer(ProductsList);

const styles = StyleSheet.create({
  productHeader: {
    color: 'white'
  }
});
