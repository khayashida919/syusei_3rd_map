import type { ConfigType, Dayjs } from 'dayjs';
import dayjs from 'dayjs';

type TemplateType =
  | 'YYYYMMDDHHmmss'
  | 'YYYY/MM/DD HH:mm:ss'
  | 'YYYY-MM-DDTHH:mm:ssZ'
  | 'YYYY/MM/DD'
  | 'YYYY/MM'
  | 'YYYY年M月D日'
  | 'YYYY-MM-DD';

export class Day {
  private _day: Dayjs;

  constructor(date?: ConfigType) {
    /* タイムゾーンを考慮する場合は以下をコメントイン */
    // dayjs.extend(utc);
    // dayjs.extend(timezone);
    // dayjs.tz.setDefault('Asia/Tokyo');
    this._day = dayjs(date);
  }

  public format(template?: TemplateType) {
    return this._day.format(template);
  }

  public date() {
    return this._day.date();
  }

  public utc() {
    return this._day;
  }
}
