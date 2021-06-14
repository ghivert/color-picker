const selectCorrectColor = color => {
  if (color.startsWith('var')) {
    return window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(color.substring(4, color.length - 1))
      .trim()
  } else if (color.startsWith('#')) {
    return color.replace('#', '')
  } else {
    return color
  }
}

export const shadeColor = (color, percent) => {
  const num = parseInt(selectCorrectColor(color), 16)
  const amt = Math.round(2.55 * percent)
  const R = (num >> 16) + amt
  const B = ((num >> 8) & 0x00ff) + amt
  const G = (num & 0x0000ff) + amt
  const value = (
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
    (G < 255 ? (G < 1 ? 0 : G) : 255)
  )
    .toString(16)
    .slice(1)
  return `#${value}`
}

export const isDark = color => {
  const c = color.substring(1) // strip #
  const rgb = parseInt(c, 16) // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff // extract red
  const g = (rgb >> 8) & 0xff // extract green
  const b = (rgb >> 0) & 0xff // extract blue
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709
  return luma < 128
}

const constructColor = function (colorObj) {
  const name = colorObj.name
  let hex = colorObj.hex.substring(1)
  /* Get the RGB values to calculate the Hue. */
  let r = parseInt(hex.substring(0, 2), 16) / 255
  let g = parseInt(hex.substring(2, 4), 16) / 255
  let b = parseInt(hex.substring(4, 6), 16) / 255

  /* Getting the Max and Min values for Chroma. */
  let max = Math.max.apply(Math, [r, g, b])
  let min = Math.min.apply(Math, [r, g, b])

  /* Variables for HSV value of hex color. */
  let chr = max - min
  let hue = 0
  let val = max
  let sat = 0

  if (val > 0) {
    /* Calculate Saturation only if Value isn't 0. */
    sat = chr / val
    if (sat > 0) {
      if (r === max) {
        hue = 60 * ((g - min - (b - min)) / chr)
        if (hue < 0) hue += 360
      } else if (g === max) {
        hue = 120 + 60 * ((b - min - (r - min)) / chr)
      } else if (b === max) {
        hue = 240 + 60 * ((r - min - (g - min)) / chr)
      }
    }
  }
  const chroma = chr
  const luma = 0.3 * r + 0.59 * g + 0.11 * b
  const red = parseInt(hex.substring(0, 2), 16)
  const green = parseInt(hex.substring(2, 4), 16)
  const blue = parseInt(hex.substring(4, 6), 16)
  return { hex, hue, sat, val, chroma, luma, red, green, blue, name }
}

export const sort = hexArray => {
  return hexArray.map(constructColor).sort((a, b) => a.hue - b.hue)
}
