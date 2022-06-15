module.exports = function(grunt){

    // configuration
    grunt.initConfig({
        // pass in options tu plugins, references to files etc
        concat: {
            js: {
                src: ['assets/js/*.js'],
                dest: 'build/script.min.js'
            },
            css: {
                src: ['assets/css/*.css'],
                dest: 'build/style.min.css'
            }
        },
        uglify: {
            build:{
                files:[{
                    src: "build/script.min.js",
                    dest: "build/script.min.js"
                }],
            },
        },
        cssmin: {
            target: {
                files: {
                    'build/style.min.css': ['build/style.min.css']
                }
            }
        }
    })

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat')
    grunt.loadNpmTasks('grunt-contrib-uglify')
    grunt.loadNpmTasks('grunt-contrib-cssmin')

    // register tasks
    grunt.registerTask('concat-js', ['concat:js']);
    grunt.registerTask('concat-css', ['concat:css']);

};
