import * as lambda from "aws-cdk-lib/aws-lambda"
import * as lambdaNodejs from "aws-cdk-lib/aws-lambda-nodejs"
import * as cdk from "aws-cdk-lib"
import { Construct } from "constructs"

export class ProductsAppStack extends cdk.Stack {
  readonly productsFetchHandler: lambdaNodejs.NodejsFunction

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    this.productsFetchHandler = new lambdaNodejs.NodejsFunction(this, "ProductsFetchFunction", {
      functionName: "ProductsFetchFunction",
      entry: "lambda/products/products-fetch-function.ts",
      handler: "handler",
      memorySize: 128,
      timeout: cdk.Duration.seconds(5),
      bundling: {
        minify: true,
        sourceMap: false,
      },
    })
  }
}
