# Amazon Location Service Map resources

[![GitHub Actions](https://github.com/hello-nrfcloud/aws-map/workflows/Test%20and%20Release/badge.svg)](https://github.com/hello-nrfcloud/aws-map/actions/workflows/test-and-release.yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![@commitlint/config-conventional](https://img.shields.io/badge/%40commitlint-config--conventional-brightgreen)](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)
[![ESLint: TypeScript](https://img.shields.io/badge/ESLint-TypeScript-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

Contains the resources to serve maps to public web applications using
[Amazon Location Service Maps](https://docs.aws.amazon.com/location/latest/developerguide/map-concepts.html)
developed using [AWS CDK](https://aws.amazon.com/cdk) in
[TypeScript](https://www.typescriptlang.org/).

## Installation in your AWS account

### Setup

[Provide your AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-authentication.html).

Install the dependencies:

```bash
npm ci
```

### Deploy

```bash
# Configure the stack name
# export MAP_STACK_NAME=...
npx cdk bootstrap # if this is the first time you use CDK in this account
npx cdk deploy --all
```

## Using with a map

Store the `mapName` output in the parameter registry.

Store the `mapRegion` output in the parameter registry.

Display the API key using

```bash
aws location describe-key --key-name ${MAP_STACK_NAME:-hello-nrfcloud-map}-apiKey | jq '.Key'
```

Store the API key in the parameter registry as `mapApiKey`.
