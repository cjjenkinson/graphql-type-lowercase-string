import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

const GraphQLLowercaseString = new GraphQLScalarType({
  name: 'LowercaseString',
  description:
    'The `LowercaseString` scalar type returns all strings in lower case',
  serialize: value => {
    return value.toLowerCase();
  },
  parseValue: value => {
    return value.toLowerCase();
  },
  parseLiteral: ast => {
    if (ast.kind === Kind.STRING) {
      return ast.value.toLowerCase();
    }

    return undefined;
  },
});

export default GraphQLLowercaseString;
