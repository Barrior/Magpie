const modules = [
    require('./qq'),
    require('./password'),
];

modules.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
        exports[key] = obj[key];
    });
});