import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const method = event.httpMethod
  const lambdaRequestId = context.awsRequestId
  const apiRequestId = event.requestContext.requestId

  console.log(`Lambda Request ID: ${lambdaRequestId} - API Request ID: ${apiRequestId}`)

  if (event.resource === "/products") {
    if (method === "GET") {
      console.log("GET /products")

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello, world!" }),
      }
    }
  }

  return {
    statusCode: 404,
    body: "Not found",
  }
}
