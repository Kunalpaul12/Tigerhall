import React from 'react';
import {_Text, Container, InnerContainer} from '../../styles';
import {useQuery, gql} from '@apollo/client';
import Query from '../../graphQl';

type Props = {};

const Search: React.FC<Props> = () => {
  const {loading, error, data} = useQuery(
    gql`
      ${Query?.default}
    `,
  );
  return (
    <Container>
      <InnerContainer>
        {loading && <_Text>Loading </_Text>}
        {!loading && <_Text>Search </_Text>}
      </InnerContainer>
    </Container>
  );
};

export default Search;
