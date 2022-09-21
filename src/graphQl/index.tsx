const Query = {
  default: ` query {
    contentCards(filter: {limit: 20, keywords: "", types: [EBOOK]}) {
        edges {
                ... on Ebook {
          name image {
          ...Image }
            experts {
          ...Expert }
          } 
        }
          meta {
            total
            limit
            offset 
          }
      } 
  }
  fragment Image on Image {
    uri
  }
  fragment Expert on Expert {
    firstName
    lastName
    title
    company 
  }`,
};

export default Query;
