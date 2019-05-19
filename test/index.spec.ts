import * as ts from 'typescript';

import { serializer } from '../src/serializer';

expect.addSnapshotSerializer(serializer);

it('serializes type alias', () => {
  const node = ts.createTypeAliasDeclaration(
    undefined,
    undefined,
    'abc',
    undefined,
    ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
  );

  expect(node).toMatchSnapshot();
});

it('serializes enum', () => {
  const node = ts.createEnumDeclaration(
    undefined,
    [ts.createToken(ts.SyntaxKind.ExportKeyword)],
    ts.createIdentifier('WhatAnEnum'),
    ['RED', 'GREEN', 'BLUE'].map(value =>
      ts.createEnumMember(value, ts.createStringLiteral(value))
    )
  );

  expect(node).toMatchSnapshot();
});

it('serializes string literal + comment', () => {
  const node = ts.addSyntheticLeadingComment(
    ts.createStringLiteral('abcd'),
    ts.SyntaxKind.SingleLineCommentTrivia,
    'this is a comment',
    true
  );

  expect(node).toMatchSnapshot();
});
