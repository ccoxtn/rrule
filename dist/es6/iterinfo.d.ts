import RRule from './rrule';
import dateutil from './dateutil';
export default class Iterinfo {
    rrule: RRule;
    lastyear: number;
    lastmonth: number;
    yearlen: number;
    nextyearlen: number;
    yearordinal: number;
    yearweekday: number;
    mmask: number[];
    mrange: number[];
    mdaymask: number[];
    nmdaymask: number[];
    wdaymask: number[];
    wnomask: number[];
    nwdaymask: number[];
    eastermask: number[];
    constructor(rrule: RRule);
    easter(y: number, offset?: number): number[];
    rebuild(year: number, month: number): void;
    ydayset(): (number | number[])[];
    mdayset(_: any, month: number, __: any): (number | any[])[];
    wdayset(year: number, month: number, day: number): (number | any[])[];
    ddayset(year: number, month: number, day: number): (number | any[])[];
    htimeset(hour: number, minute: number, second: number, millisecond: number): dateutil.Time[];
    mtimeset(hour: number, minute: number, second: number, millisecond: number): dateutil.Time[];
    stimeset(hour: number, minute: number, second: number, millisecond: number): dateutil.Time[];
}
