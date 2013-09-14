module.exports = function (config) {
    config.set({
        basePath : '../',
        frameworks : ['mocha', 'requirejs'],
        files : ['test/test-main.js', {
            pattern : 'src/**/*.js',
            included : false
        }, {
            pattern : 'components/**/*.js',
            included : false
        }, {
            pattern : 'test/specs/**/*.js',
            included : false
        }],
        customLaunchers : {
            Chrome_without_security : {
                base : 'Chrome',
                flags : ['--disable-web-security']
            }
        }
    });
};
