import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {_Text, Container, InnerContainer} from '../../styles';
import {useQuery, gql} from '@apollo/client';
import Query from '../../graphQl';
import {_Image} from '../../components/Index';
import styles, {ListContainer, ListItemSeparator, IMAGE_WIDTH} from './styles';

type Props = {};

const Search: React.FC<Props> = () => {
  const {loading, error, data} = useQuery(
    gql`
      ${Query?.default}
    `,
  );
  const [eBooks, setEBooks] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setEBooks(data?.contentCards?.edges);
    }
  }, [loading, data]);

  const List = () => {
    const _renderItem = ({item, index}) => {
      return (
        <ListContainer>
          <_Image
            imageUrl={item?.image?.uri}
            imageStyle={styles?.listImage}
            IMAGE_WIDTH={IMAGE_WIDTH}
          />
          <_Text>{item?.name}</_Text>
        </ListContainer>
      );
    };
    return (
      <FlatList
        data={eBooks}
        renderItem={_renderItem}
        extraData={eBooks}
        ItemSeparatorComponent={() => <ListItemSeparator />}
      />
    );
  };

  return (
    <Container>
      <InnerContainer>
        {loading && <_Text>Loading </_Text>}
        {!loading && <_Text>Search </_Text>}
        {!!eBooks?.length && List()}
      </InnerContainer>
    </Container>
  );
};

export default Search;
