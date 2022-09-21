const Query = {
  default: ` query {
        contentCards(filter: {limit: 20, keywords: "", types: [EBOOK]}) {
          edges {
            ... on Ebook {
              experts {
                firstName
                lastName
                title
                company
                biography
                mentorPriceText
              }
            }
          }
          meta {
            total
            limit
            offset
          }
        }
      }`,
};

export default Query;
