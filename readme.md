# ts-ast-serializer

jest typescript ast snapshot serializer

### install

```bash
$ npm install --save-dev ts-ast-serializer
# or
$ yarn add -D ts-ast-serializer
```

### usage

```json
"snapshotSerializers": ["ts-ast-serializer"]
```

---

### example

**`sometest.test.ts`**

```ts
it('should do something', () => {
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
```

**`__snapshots__/sometest.test.ts.snap`**

```js
exports[`should do something 1`] = `
export enum WhatAnEnum {
    RED = "RED",
    GREEN = "GREEN",
    BLUE = "BLUE"
}
`;
```
