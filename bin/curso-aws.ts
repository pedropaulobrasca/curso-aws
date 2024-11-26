#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ProductsAppStack } from '../lib/products-app-stack';
import { EcommerceApiStack } from '../lib/ecommerce-api-stack';

const app = new cdk.App();

const env: cdk.Environment = {
  account: "1234567890",
  region: "us-east-1"
}

const tags = {
  cost: "Ecommerce",
  team: "BrascaTeam"
}

const productsAppStack = new ProductsAppStack(app, "ProductsAppStack", {
  tags,
  env
})

const ecommerceApiStack = new EcommerceApiStack(app, "EcommerceApiStack", {
  productsFetchHandler: productsAppStack.productsFetchHandler,
  tags,
  env
})

ecommerceApiStack.addDependency(productsAppStack)
