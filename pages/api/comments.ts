import { GraphQLClient, gql } from 'graphql-request'
import { NextApiRequest, NextApiResponse } from 'next'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const BEARER_TOKEN = process.env.GRAPHCMS_TOKEN

export default async function commments(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const graphqlClient = new GraphQLClient(graphqlAPI!, {
    headers: {
      authorization: `Bearer ${BEARER_TOKEN}`,
    },
  })

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `

  try {
    const result = await graphqlClient.request(query, req.body)
    return res.status(200).send(result)
  } catch (error) {
    return res.status(500).send(error)
  }
}
