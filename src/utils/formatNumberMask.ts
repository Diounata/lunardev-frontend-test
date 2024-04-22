export function formatNumberMask(value: string, mask: string): string {
  let index = 0
  let res = ''

  value = Array.from(value)
    .filter(n => !isNaN(parseInt(n)))
    .join('')

  for (let i = 0; i < mask.length; i++) {
    if (index >= value.length) {
      break
    }

    if (mask[i] === '#') {
      res += value[index]
      index++
    } else res += mask[i]
  }

  return res
}
