// 引入  dayjs--->utc  方法
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const FORMAT_DATA = 'YYYY-MM-DD HH:mm:ss'

export function formatUtc(utc, format = FORMAT_DATA) {
  return dayjs.utc(utc).utcOffset(8).format(format)
}
