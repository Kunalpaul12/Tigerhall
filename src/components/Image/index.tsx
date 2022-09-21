import React, {useState} from 'react';
import {Image} from 'react-native';
import StaticImage from '../../assets/icons';

type Props = {
  imageUrl: string;
  imageStyle: any;
  IMAGE_WIDTH: number;
};

const _Image: React.FC<Props> = ({imageUrl, imageStyle, IMAGE_WIDTH}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const getResizedImageUrl = (url: string) => {
    const newUrl = url.replace(/io/, `io/resize/${IMAGE_WIDTH}x`);
    return newUrl;
  };
  return (
    <Image
      style={imageStyle}
      source={
        loading
          ? StaticImage?.downloadingImage
          : {uri: getResizedImageUrl(imageUrl)}
      }
      onLoadEnd={() => setLoading(false)}
    />
  );
};

export default _Image;
