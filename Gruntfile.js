module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        svgstore: {
            options: {
              prefix : 'svg-', 
              svg: { 
                viewBox : '0 0 200 200',
                xmlns: 'http://www.w3.org/2000/svg'
              },
              includedemo:true,
            },
            default : {
              files: {
                'src/assets/demo-svg.svg': ['src/icons/svg/*.svg'], //生成位置  和 源svg位置
              },
            }
        }
    });
    // 载入grunt-svgstore
    grunt.loadNpmTasks('grunt-svgstore');
    // 注册任务
    grunt.registerTask('default', ['svgstore']);
};
