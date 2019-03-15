## SVG Animated Linear Gradient [iOS + Android]

This component make Animated Linear Gradient for all SVG components as child props. You can use this component as loading component like Facebook or Instagram, used for any group of svg.

## Demo

<table>
<tr><td>
<img src="https://raw.githubusercontent.com/virusvn/react-native-svg-animated-linear-gradient/master/images/demo-svg-animated-linear-gradient.gif" width="300"></td><td>
<img src="https://raw.githubusercontent.com/virusvn/react-native-svg-animated-linear-gradient/master/images/demo-svg-animated-linear-gradient-angle.gif" width="300">
</td>
</tr>
</table>
## Usage

`npm i rn-content-loader --save`

or

`yarn add rn-content-loader`

you will have to install [react native svg](https://github.com/react-native-community/react-native-svg)

Inside your component:

```js
import ContentLoader from 'rn-content-loader';
```

### Examples

#### Instagram style

```jsx
<ContentLoader height={300}>
  <Circle cx="30" cy="30" r="30" />
  <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
  <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
  <Rect x="0" y="70" rx="5" ry="5" width="400" height="200" />
</ContentLoader>
```

#### Facebook style

```jsx
<ContentLoader primaryColor="#e8f7ff" secondaryColor="#4dadf7" height={140}>
  <Rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
  <Rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
  <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  <Rect x="0" y="80" rx="3" ry="3" width="350" height="10" />
  <Rect x="0" y="100" rx="3" ry="3" width="200" height="10" />
  <Rect x="0" y="120" rx="3" ry="3" width="360" height="10" />
</ContentLoader>
```

#### Code style

```jsx
<ContentLoader primaryColor="#fff0f6" secondaryColor="#f783ac" height={80}>
  <Rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
  <Rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
  <Rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
  <Rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
  <Rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
  <Rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
  <Rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
  <Rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
  <Rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
</ContentLoader>
```

### Props

| Prop           | Type   | Default       | Description                                           |
| -------------- | ------ | ---------     | ----------------------------------------------------- |
| primaryColor   | String | '#eeeeee'     | Primary color, also background color                  |
| secondaryColor | String | '#dddddd'     | Secondary color                                       |
| width          | Number | 300           | Width of SVG                                          |
| height         | Number | 200           | Height of SVG                                         |
| viewBox        | String | '0 0 300 200' | ViewBox of SVG                                        |
| x1             | String | '0'           | x of point star gradient, accept Number or Percentage |
| y1             | String | '0'           | y of point star gradient, accept Number or Percentage |
| x2             | String | '100%'        | x of point end gradient, accept Number or Percentage  |
| y2             | String | '0'           | y of point end gradient, accept Number or Percentage  |

## Thankful

- [React Native Svg](https://github.com/react-native-community/react-native-svg)
- [Vova Bilonenko](https://github.com/delfrrr) with [his gist](https://gist.github.com/delfrrr/0ef8871c6c4630b406e73fb66c091cf0)
- [React Content Loader](https://github.com/danilowoz/react-content-loader)
- [Create Content Loader](http://danilowoz.com/create-content-loader/)
- [React Native SVG Animated Linear Gradient](https://github.com/virusvn/react-native-svg-animated-linear-gradient)

## License

MIT
