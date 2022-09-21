import React from 'react';
import {_Text, Container, InnerContainer} from '../../styles';

type Props = {};

const Search: React.FC<Props> = () => {
  return (
    <Container>
      <InnerContainer>
        <_Text>Search </_Text>
      </InnerContainer>
    </Container>
  );
};

export default Search;
