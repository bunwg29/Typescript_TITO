
type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
type Days = Weekdays | 'Sat' | 'Sun';

function getNextDay(w: Weekdays): Days {
    switch (w) {
        case 'Mon': return 'Tue'
        case 'Tue': return 'Wed'
        case 'Wed': return 'Thu'
        case 'Thu': return 'Fri'
        case 'Fri': return 'Sat'
    }
}