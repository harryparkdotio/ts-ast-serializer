import { SyntaxKind } from 'typescript';

import { astWriter } from './ast-writer';

export const serializer: jest.SnapshotSerializerPlugin = {
  test: (value: any) => {
    return (
      value && value.kind && Object.values(SyntaxKind).includes(value.kind)
    );
  },
  print: (value: any) => {
    return astWriter(value);
  },
};
