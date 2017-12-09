module.exports = {
    'path': {
        'dev': {
            'html': 'dev/',
            'css': 'dev/styles/',
            'images': 'dev/images/',
            'fonts': 'dev/fonts/',
            'js': 'dev/js/',
            'sound': 'dev/a/'
        },
        'app': {
            'html': 'app/**/*.html',
            'stylus': ['app/stylus/*.styl', 'app/lib/css/bootstrap.min.css'],
            'images': 'app/images/**/*.*',
            'fonts': 'app/fonts/**/*.*',
            'scripts': ['app/js/**/*.js', 'bower_components/jQuery/dist/jquery.min.js'],
            'sound': 'app/a/**/*'
        },
        'watch': {
            'html': 'app/**/*.html',
            'stylus': 'app/stylus/**/*.styl',
            'images': 'app/images/**/*.*',
            'fonts': 'app/fonts/**/*.*',
            'scripts': 'app/js/**/*.js',
            'sound': 'app/a/**/*.mp3'
        },
        'clean': './dev',
    },
    'serverConfig': {
        'server': {
            'baseDir': "./dev"
        },
        // 'tunnel': true,
        'host': 'localhost',
        'port': 9000
    }
}
