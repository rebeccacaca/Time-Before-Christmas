// 将功能封装在函数内
function showTime() {
    // 定义两个时间对象
    // 1.当前时间
    var now = new Date();
    // 2.圣诞节
    var target = new Date('2020/12/25');
    // 计算两个时间相差的毫秒数
    // var d = now.getTime() -target.getTime();
    // 直接相减就可以得到
    var d = target - now;
    // 相差的时间转为秒为单位，除以1000
    d/=1000;
    // 对结果进行向下取整
    d = Math.floor(d);
    // 1.计算相差的天数 = 相差的秒 / 一天的秒数
    var day = Math.floor(d / (24*60*60));
    // 2.计算相差的小时 = 相差的秒 % 一天的秒数
    var hours = d % (24*60*60);
    // 把秒数转换为小时
    hours = Math.floor(hours/(60*60));
    // 3.计算相差的分钟 = 相差的秒 % 一小时的秒数
    var minutes = d % (60*60);
    // 把秒数转换成分钟
    minutes = Math.floor(minutes/60);
    // 4.计算相差的秒数 = 相差的秒 % 一分钟的秒数
    var seconds = d % 60;
    seconds = Math.floor(seconds);
    // console.log('距离圣诞节还有'+day+'天'+hours+'时'+minutes+'分'+seconds+'秒');
    var time = `距离圣诞节还有${day}天${hours}时${minutes}分${seconds}秒`;
    document.getElementById("clockDispaly").innerText = time;
    // 定时器
    setTimeout(showTime,1000);
}
showTime();
