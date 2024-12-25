"use strict";
let log = (message, userId = 'Not signed in') => {
    let time = new Date().toISOString();
    console.log(time, message, userId);
};
log('Hello');
//# sourceMappingURL=index.js.map