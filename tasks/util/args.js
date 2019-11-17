// 处理命令行参数
import yargs from 'yargs';

const args = yargs

  // 区分开发环境和线上环境
  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })
  // 要不要监听文件修改
  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })
  // 要不要详细输出日志
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })
  // 处理映射
  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })
  // 设置端口
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  // 对输入的命令行以字符串进行解析
  .argv

export default args;
