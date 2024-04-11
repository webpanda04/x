function sectionP() {
    const arr = [{
        title: '一步一个脚印'
    }, {
        title: `问多了全是问题 <br>做多了全是答案`
    }, {
        title: `向上的路，并不拥挤。<br>拥挤是因为，<br>大部分人选择了安逸`
    }, {
        title: '加油后盾人'
    }, { title: `hallo world` },
    { title: '苦尽甘来时绝不提来时的路' }
    ];
    let getSectioP = document.querySelector('section p');
    let i = 0;
    setInterval(function () {
        i = (i + 1) % arr.length;
        getSectioP.innerHTML = arr[i].title;
    }, 3000);
}
sectionP(); //文字轮博定时

function sectionImg() {
    let getSectioImg = document.querySelector('section img');
    let images = ['https://picsum.photos/224/224', 'https://picsum.photos/225/225', 'https://picsum.photos/226/226'];
    let i = 0;
    setInterval(function () {
        getSectioImg.src = images[i];
        i = (i + 1) % images.length;
    }, 6000);
}
sectionImg(); //定时器轮博图
//鼠标放在邮箱显示
const getTop_qqEmail = document.querySelector('nav .top  ul  .qqE-mail');
const getTop_qqEmaliB = document.querySelector('nav .top ul li b');
getTop_qqEmail.addEventListener('mouseover', function () {
    getTop_qqEmaliB.style.opacity = 1;
})
getTop_qqEmail.addEventListener('mouseout', function () {
    getTop_qqEmaliB.style.opacity = 0;
}) //鼠标离开消失
// aside滚动栏显示
const getAside = document.querySelector('aside');
window.addEventListener('scroll', function () {
    let Top = getAside.offsetTop;
    let n = getAside.style.opacity = Top <= document.documentElement.scrollTop ? 1 : 0;
});

const data_article = [{ Text: '随机<i>吃</i>什么？', Image: './案例/0-2chi/icon_吃什么.png ' },]