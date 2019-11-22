module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            main: {
                src: [
                    'src/vue.min.js',
                    'src/main.js',
                ],
                dest: 'dist/build.js',
            },
        },

        uglify: {
            main: {
                src: 'dist/build.js',
                dest: 'dist/build.min.js'
            }
        },

        cssmin: {
            main: {
                src: 'src/style.css',
                dest: 'dist/build.min.css'
            },
        },

        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    interrupt: true
                },
            },
            styles: {
                files: ['src/*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                    interrupt: true
                },
            },
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat','uglify','cssmin','watch']);

};