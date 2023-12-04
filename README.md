TypeScript Webpack "@emotion/react" across iframe with "ClassNames" component Demo
=================================

想跨window但不想用emotion/react提供的 `css` attribute，可以用提供的 `ClassNames`组件来获取 `css`

但是这种方式会让我们的styles只能被包在view里，多的话很难看。它如果提供一个hook会更好。

所以也许我们还是要自己用react的context实现一个hook

```
npm install
npm run demo
```

It will open page on browser automatically.
