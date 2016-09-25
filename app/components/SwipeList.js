import React from 'react';
import ReactNative from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const {
  ListView,
  View,
} = ReactNative;

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const SwipeList = ({ data, rowComponent: RowComponent, rightHiddenComponent: RightHiddenComponent, rightWidthToOpen }) => (
  <SwipeListView
    dataSource={ds.cloneWithRows(data)}
    disableRightSwipe
    renderRow={data => <RowComponent data={data} />}
    renderHiddenRow={data => <RightHiddenComponent data={data} />}
    rightOpenValue={rightWidthToOpen || -75}
  />
);

SwipeList.propTypes = {
  data: React.PropTypes.array.isRequired,
  rowComponent: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.func,
  ]).isRequired,
  rightHiddenComponent: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.func,
  ]),
  rightWidthToOpen: React.PropTypes.number,
};

export default SwipeList;