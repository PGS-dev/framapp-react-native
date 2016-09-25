import React from 'react';
import { observer } from 'mobx-react/native';

import Product from '../components/Product';

const ProductPage = ({ product }) => <Product product={product} />;

export default observer(ProductPage);