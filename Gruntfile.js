module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        meta:{
            banner:'/*!\n' +
                ' * isona.js <%= pkg.version %>\n' +
                ' * https://github.com/miskun/isona\n' +
                ' * MIT licensed\n' +
                ' *\n' +
                ' * Copyright (C) 2015 Miska Kaipiainen\n' +
                ' */',
            version:'<%= pkg.version %>'
        },

        concat:{
            core:{
                src:[
                    'src/*.js',
                    'src/*/*.js'
                ],
                dest:'build/isona.js'
            }
        },

        uglify:{
            options:{
                banner:'<%= meta.banner %>\n'
            },
            build:{
                src:'<%= concat.core.dest %>',
                dest:'build/isona.min.js'
            }
        },

        mochaTest: {
            unit:{
                options: {
                    reporter: 'spec'
                },
                src: ['test/**/*.js']
            }
        },

        watch:{
            scripts:{
                files:[
                    'src/**/*.js'
                ],
                tasks:['concat']
            }
        }
    });

    // Dependencies
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-mocha-test');

    // Tasks
    grunt.registerTask('default', [ 'concat', 'uglify']);
    grunt.registerTask('develop', [ 'concat', 'watch']);
    grunt.registerTask('build', [ 'concat', 'uglify']);
    grunt.registerTask('test', [ 'mochaTest']);

};
