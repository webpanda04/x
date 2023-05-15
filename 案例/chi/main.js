let arr = ['馄饨', '烩面', '热干面', '刀削面', '油泼面', '炸酱面', '炒面', '重庆小面', '米线', '酸辣粉', '土豆粉', '螺狮粉', '凉皮儿', '麻辣烫', '肉夹馍', '羊肉泡馍', '炒饭', '盖浇饭', '烤肉饭', '黄焖鸡米饭', '麻辣香锅', '火锅', '酸菜鱼', '烤串', '披萨', '烤鸭', '汉堡', '炸鸡', '寿司', '煎饼果子', '南瓜粥', '小龙虾', '牛排', '砂锅', '大排档', '馒头', '西餐', '自助餐', '小笼包', '水果', '西北风', '烧烤', '泡面', '水饺', '涮羊肉', '兰州拉面', '肯德基', '面包', '臊子面', '小笼包', '麦当劳', '沙县小吃', '烤鱼', '海鲜', '铁板烧', '韩国料理', '甜点', '鸭血粉丝汤'];
let sj = 0;
let dis = 0;
let getButtomOpen; // 声明全局变量

function buttom() {
    getButtomOpen = document.querySelector('main .open'); // 获取网页元素
    let getMainH2 = document.querySelector('main h2');
    getButtomOpen.addEventListener('click', function() {
        dis = getButtomOpen.disabled = true;
        sj = setInterval(function() {
            // 随机数
            let random = parseInt(Math.random() * arr.length);
            getMainH2.innerHTML = arr[random];
        }, 60);
    });
}
buttom();

function buttomNo() {
    let getButtomNo = document.querySelector('main .no');
    getButtomNo.addEventListener('click', function() {
        clearInterval(sj);
        getButtomOpen.disabled = false; // 启用开始按钮
    });
}
buttomNo();