# Marko + Architect + TodoMVC

Sample app of using Marko with [Architect](https://arc.codes) and TodoMVC.

## Getting Started

Before running the initial creation process, ensure that you update the `.arc`
configuration file to write to the `bucket` that you want. The bucket will
automatically be created, but it must have a unique name.

```
...
@plugins
arc-plugin-marko
  pages ./src/html/get-index/page.marko
  bucket MY_UNIQUE_BUCKET_NAME_HERE
```

Additionally, you should update the `package.json` scripts to use the `AWS_PROFILE`
and `AWS_REGION` that you wish to deploy with. After updating these configuration
options, you can now create the AWS resources.

This command creates all required AWS resources and deploys your project:

```bash
npm run create
```

## Deploy

Additional deploys of your project after the initial creation step can be done
using the following command:

```bash
npm run deploy
```

## Start Local

Run the project locally. This command should only be run after running `npm run create`.

```bash
npm start
```

## How?

Marko can be easily run on [AWS Lambda](https://aws.amazon.com/lambda/). We first run a prebuild of our page.
The prebuild step uses [`lasso`](https://github.com/lasso-js/lasso) and
[`lasso-s3-writer`](https://github.com/lasso-js/lasso-s3-writer) to write all
bundles of JavaScript and CSS as well as static assets to Amazon S3. It then
rewrites your page and creates a static cache using the public S3 URLs returned.
We then precomile all Marko pages using the `npm run compile-templates` command,
which walks the directory tree, finds all Marko templates, and compiles them.
By doing this, we do not have to perform any compilation step in Lambda.

After the build, we use [Architect](https://arc.codes) to easily deploy the
application to [AWS Lambda](https://aws.amazon.com/lambda/).
