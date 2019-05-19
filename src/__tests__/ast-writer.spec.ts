import * as ts from 'typescript';

import { astWriter } from '../ast-writer';

describe('astWriter', () => {
  it('should call printer.printNode(ts.EmitHint.Unspecified, ast, sourceFile)', () => {
    jest.spyOn(ts, 'createSourceFile');

    const node = ts.createTypeAliasDeclaration(
      undefined,
      undefined,
      'abc',
      undefined,
      ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    );

    const expectedOutput = `type abc = any;`;

    expect(astWriter(node)).toEqual(expectedOutput);
  });
});
