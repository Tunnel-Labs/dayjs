import dayjs from 'dayjs';
import * as enLocale from 'dayjs/locale/en.js';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import timezone from 'dayjs/plugin/timezone.js';
import updateLocale from 'dayjs/plugin/updateLocale.js';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

const locale = {
	...enLocale,
	relativeTime: {
		// relative time format strings, keep %s %d as the same
		future: 'in %s', // e.g. in 2 hours, %s been replaced with 2hours
		past: '%s ago',
		s: 'now',
		m: '1m',
		mm: '%dm',
		h: '1h',
		hh: '%dh', // e.g. 2 hours, %d been replaced with 2
		d: '1d',
		dd: '%dd',
		M: '1mo',
		MM: '%dmo',
		y: '1yr',
		yy: '%dyr'
	}
};

// load locale for later use
dayjs.locale(locale, undefined, true);

export { locale };

export { default as dayjs } from 'dayjs';
