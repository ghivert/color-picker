import { useState } from 'react'
import * as clrs from './helpers/colors'
import styles from './App.module.css'

const color = (name, hex) => ({ name, hex })

const colors = {
  1: [
    color('black', '#000000'),
    color('silver', '#c0c0c0'),
    color('gray', '#808080'),
    color('white', '#ffffff'),
    color('maroon', '#800000'),
    color('red', '#ff0000'),
    color('purple', '#800080'),
    color('fuchsia', '#ff00ff'),
    color('green', '#008000'),
    color('lime', '#00ff00'),
    color('olive', '#808000'),
    color('yellow', '#ffff00'),
    color('navy', '#000080'),
    color('blue', '#0000ff'),
    color('teal', '#008080'),
    color('aqua', '#00ffff'),
  ],
  2: [color('orange', '#ffa500')],
  3: [
    color('aliceblue', '#f0f8ff'),
    color('antiquewhite', '#faebd7'),
    color('aquamarine', '#7fffd4'),
    color('azure', '#f0ffff'),
    color('beige', '#f5f5dc'),
    color('bisque', '#ffe4c4'),
    color('blanchedalmond', '#ffebcd'),
    color('blueviolet', '#8a2be2'),
    color('brown', '#a52a2a'),
    color('burlywood', '#deb887'),
    color('cadetblue', '#5f9ea0'),
    color('chartreuse', '#7fff00'),
    color('chocolate', '#d2691e'),
    color('coral', '#ff7f50'),
    color('cornflowerblue', '#6495ed'),
    color('cornsilk', '#fff8dc'),
    color('crimson', '#dc143c'),
    color('cyan / aqua', '#00ffff'),
    color('darkblue', '#00008b'),
    color('darkcyan', '#008b8b'),
    color('darkgoldenrod', '#b8860b'),
    color('darkgray', '#a9a9a9'),
    color('darkgreen', '#006400'),
    color('darkgrey', '#a9a9a9'),
    color('darkkhaki', '#bdb76b'),
    color('darkmagenta', '#8b008b'),
    color('darkolivegreen', '#556b2f'),
    color('darkorange', '#ff8c00'),
    color('darkorchid', '#9932cc'),
    color('darkred', '#8b0000'),
    color('darksalmon', '#e9967a'),
    color('darkseagreen', '#8fbc8f'),
    color('darkslateblue', '#483d8b'),
    color('darkslategray', '#2f4f4f'),
    color('darkslategrey', '#2f4f4f'),
    color('darkturquoise', '#00ced1'),
    color('darkviolet', '#9400d3'),
    color('deeppink', '#ff1493'),
    color('deepskyblue', '#00bfff'),
    color('dimgray', '#696969'),
    color('dimgrey', '#696969'),
    color('dodgerblue', '#1e90ff'),
    color('firebrick', '#b22222'),
    color('floralwhite', '#fffaf0'),
    color('forestgreen', '#228b22'),
    color('gainsboro', '#dcdcdc'),
    color('ghostwhite', '#f8f8ff'),
    color('gold', '#ffd700'),
    color('goldenrod', '#daa520'),
    color('greenyellow', '#adff2f'),
    color('grey', '#808080'),
    color('honeydew', '#f0fff0'),
    color('hotpink', '#ff69b4'),
    color('indianred', '#cd5c5c'),
    color('indigo', '#4b0082'),
    color('ivory', '#fffff0'),
    color('khaki', '#f0e68c'),
    color('lavender', '#e6e6fa'),
    color('lavenderblush', '#fff0f5'),
    color('lawngreen', '#7cfc00'),
    color('lemonchiffon', '#fffacd'),
    color('lightblue', '#add8e6'),
    color('lightcoral', '#f08080'),
    color('lightcyan', '#e0ffff'),
    color('lightgoldenrodyellow', '#fafad2'),
    color('lightgray', '#d3d3d3'),
    color('lightgreen', '#90ee90'),
    color('lightgrey', '#d3d3d3'),
    color('lightpink', '#ffb6c1'),
    color('lightsalmon', '#ffa07a'),
    color('lightseagreen', '#20b2aa'),
    color('lightskyblue', '#87cefa'),
    color('lightslategray', '#778899'),
    color('lightslategrey', '#778899'),
    color('lightsteelblue', '#b0c4de'),
    color('lightyellow', '#ffffe0'),
    color('limegreen', '#32cd32'),
    color('linen', '#faf0e6'),
    color('magenta / fuchsia', '#ff00ff'),
    color('mediumaquamarine', '#66cdaa'),
    color('mediumblue', '#0000cd'),
    color('mediumorchid', '#ba55d3'),
    color('mediumpurple', '#9370db'),
    color('mediumseagreen', '#3cb371'),
    color('mediumslateblue', '#7b68ee'),
    color('mediumspringgreen', '#00fa9a'),
    color('mediumturquoise', '#48d1cc'),
    color('mediumvioletred', '#c71585'),
    color('midnightblue', '#191970'),
    color('mintcream', '#f5fffa'),
    color('mistyrose', '#ffe4e1'),
    color('moccasin', '#ffe4b5'),
    color('navajowhite', '#ffdead'),
    color('oldlace', '#fdf5e6'),
    color('olivedrab', '#6b8e23'),
    color('orangered', '#ff4500'),
    color('orchid', '#da70d6'),
    color('palegoldenrod', '#eee8aa'),
    color('palegreen', '#98fb98'),
    color('paleturquoise', '#afeeee'),
    color('palevioletred', '#db7093'),
    color('papayawhip', '#ffefd5'),
    color('peachpuff', '#ffdab9'),
    color('peru', '#cd853f'),
    color('pink', '#ffc0cb'),
    color('plum', '#dda0dd'),
    color('powderblue', '#b0e0e6'),
    color('rosybrown', '#bc8f8f'),
    color('royalblue', '#4169e1'),
    color('saddlebrown', '#8b4513'),
    color('salmon', '#fa8072'),
    color('sandybrown', '#f4a460'),
    color('seagreen', '#2e8b57'),
    color('seashell', '#fff5ee'),
    color('sienna', '#a0522d'),
    color('skyblue', '#87ceeb'),
    color('slateblue', '#6a5acd'),
    color('slategray', '#708090'),
    color('slategrey', '#708090'),
    color('snow', '#fffafa'),
    color('springgreen', '#00ff7f'),
    color('steelblue', '#4682b4'),
    color('tan', '#d2b48c'),
    color('thistle', '#d8bfd8'),
    color('tomato', '#ff6347'),
    color('turquoise', '#40e0d0'),
    color('violet', '#ee82ee'),
    color('wheat', '#f5deb3'),
    color('whitesmoke', '#f5f5f5'),
    color('yellowgreen', '#9acd32'),
  ],
  4: color('rebeccapurple', '#663399'),
}

const App = () => {
  const [level, setLevel] = useState(4)
  const allColors = Object.entries(colors)
    .filter(([key]) => key <= level)
    .flatMap(([_, clrs]) => clrs)
  // <nav className={styles.sidebar}>side</nav>
  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <nav className={styles.navbar}>
          <div className={styles.title}>Color Picker</div>
          <div className={styles.selectorLevel}>
            <div className={styles.selectorName}>CSS Level</div>
            <select
              className={styles.selectorSelect}
              value={level}
              onChange={event => setLevel(event.target.value)}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </nav>
        <div className={styles.colorGrid}>
          {clrs.sort(allColors).map(color => {
            const [name] = color.name.split('/')
            const colorText = clrs.isDark(color.hex)
              ? styles.colorWhite
              : styles.colorBlack
            return (
              <div
                className={styles.colorSquare}
                style={{
                  background: name,
                  border: `1px solid ${color.hex}`,
                }}
              >
                <div className={colorText}>{color.name}</div>
                <div className={colorText}>{color.hex}</div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
