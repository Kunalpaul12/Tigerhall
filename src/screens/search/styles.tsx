import styled from 'styled-components/native';
import colors from '../../colors';
import {Dimensions} from 'react-native';
const {width} = Dimensions?.get('window');

export const IMAGE_WIDTH = width / 1.1;
export const IMAGE_HEIGHT = 200;

export const ListContainer = styled.View`
  background-color: ${colors?.listBackground};
  border-radius: 15px;
`;

export const ListItemSeparator = styled.View`
  padding: 10px;
`;

export default {
  listImage: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
};
