        const modules = [
require('./domain.js'),
require('./email.js'),
require('./ftel.js'),
require('./id.js'),
require('./password.js'),
require('./postcode.js'),
require('./qq.js'),
require('./telCN.js'),
require('./telHK.js'),
require('./telTW.js'),
];
        modules.forEach((obj) => {
            Object.keys(obj).forEach((key) => {
                exports[key] = obj[key];
            });
        });        