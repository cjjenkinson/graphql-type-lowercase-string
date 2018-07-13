import { graphql, GraphQLObjectType, GraphQLSchema } from 'graphql';

import GraphQLLowercaseString from '.';

describe('GraphQLLowercaseString', () => {
  let schema;

  beforeEach(() => {
    schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: {
          value: {
            type: GraphQLLowercaseString,
            args: {
              arg: {
                type: GraphQLLowercaseString,
              },
            },
            resolve: (parent, { arg }) => arg,
          },
        },
      }),
    });
  });

  describe('serialize', () => {
    test('supports serialization', () => {
      expect(GraphQLLowercaseString.serialize('lowercasestring')).toEqual(
        'lowercasestring',
      );
    });

    test('converts to lower case during serialization', () => {
      expect(GraphQLLowercaseString.serialize('LOWERCASESTRING')).toEqual(
        'lowercasestring',
      );
    });
  });

  describe('parseValue', () => {
    test('supports parsing values', async () => {
      const {
        data: { value },
      } = await graphql(
        schema,
        'query ($arg: LowercaseString!) { value(arg: $arg) }',
        null,
        null,
        { arg: 'lowercasestring' },
      );
      expect(value).toEqual('lowercasestring');
    });

    test('converts to lower case', async () => {
      const {
        data: { value },
      } = await graphql(
        schema,
        'query ($arg: LowercaseString!) { value(arg: $arg) }',
        null,
        null,
        { arg: 'LOWERCASESTRING' },
      );
      expect(value).toEqual('lowercasestring');
    });
  });

  describe('parseLiteral', () => {
    test('supports parsing literals', async () => {
      const {
        data: { value },
      } = await graphql(schema, '{ value(arg: "lowercasestring") }');
      expect(value).toEqual('lowercasestring');
    });

    test('supports parsing literals', async () => {
      const {
        data: { value },
      } = await graphql(schema, '{ value(arg: "LOWERCASESTRING") }');
      expect(value).toEqual('lowercasestring');
    });
  });
});
