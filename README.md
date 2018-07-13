[![Travis][build-badge]][build] [![Codecov][codecov-badge]][codecov]

# graphql-type-lowercase-string [![npm][npm-badge]][npm]

LowercaseString scalar type for [GraphQL.js](https://github.com/graphql/graphql-js).

## Usage

This package exports a LowercaseString scalar GraphQL.js type which is useful for ensuring a field has no uppercase characters e.g a username.

```js
import GraphQLLowercaseString from 'graphql-type-lowercase-string';
```

### Programmatically-constructed schemas

The type can be used in a programmatically constructed schema:

```js
import { GraphQLObjectType } from 'graphql';
import GraphQLLowercaseString from 'graphql-type-lowercase-string';

export default new GraphQLObjectType({
  name: 'MyType',
  fields: {
    myField: { type: GraphQLLowercaseString },
  },
});
```

### SDL with [graphql-tools](https://github.com/apollographql/graphql-tools)

When using the SDL with graphql-tools, define `GraphQLLowercaseString` as the resolver for
the corresponding scalar type in the schema:

```js
import { makeExecutableSchema } from 'graphql-tools';
import GraphQLLowercaseString from 'graphql-type-lowercase-string';

const typeDefs = `
scalar LowercaseString

type MyType {
  myField: LowercaseString
}
`;

const resolvers = {
  LowercaseString: GraphQLLowercaseString,
};

export default makeExecutableSchema({ typeDefs, resolvers });
```

## Related

This project was inspired by [graphql-type-json](https://github.com/taion/graphql-type-json)

[npm-badge]: https://img.shields.io/npm/v/graphql-type-lowercase-string.svg
[npm]: https://www.npmjs.com/package/graphql-type-lowercase-string
[build-badge]: https://img.shields.io/travis/cjjenkinson/graphql-type-lowercase-string/master.svg
[build]: https://travis-ci.org/cjjenkinson/graphql-type-lowercase-string
[codecov-badge]: https://img.shields.io/codecov/c/github/cjjenkinson/graphql-type-lowercase-string/master.svg
[codecov]: https://codecov.io/gh/cjjenkinson/graphql-type-lowercase-string
