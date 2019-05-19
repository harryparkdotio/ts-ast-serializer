jest.mock('../ast-writer');

import * as ts from 'typescript';

import { serializer } from '../serializer';
import { astWriter } from '../ast-writer';

describe('serializer.test', () => {
  it.each([
    true,
    false,
    1,
    0,
    'abcd',
    '',
    {},
    [],
    { ast: true },
    /^.*$/,
    Infinity,
    -Infinity,
  ])("should return false for '%p'", (_case: any) => {
    expect(serializer.test(_case)).toBeFalsy();
  });

  it.each([
    ts.createToken(ts.SyntaxKind.ArrayLiteralExpression),
    ts.createIdentifier('_abcd'),
  ])('should return true for ts.Node', node => {
    expect(serializer.test(node)).toBeTruthy();
  });
});

describe('serializer.print', () => {
  it('should call astWriter', () => {
    const node = ts.createToken(ts.SyntaxKind.ArrayLiteralExpression);

    // @ts-ignore unnecessary parameter passing
    serializer.print(node);

    expect(astWriter).toHaveBeenCalledWith(node);
  });
});
