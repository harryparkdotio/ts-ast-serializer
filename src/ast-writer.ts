import * as ts from 'typescript';

export const astWriter = (ast: any): string => {
  const sf = ts.createSourceFile('snapshot.ts', '', ts.ScriptTarget.Latest);

  const printer = ts.createPrinter({
    newLine: ts.NewLineKind.LineFeed,
    removeComments: false,
  });

  return printer.printNode(ts.EmitHint.Unspecified, ast, sf);
};
