function sectionP() {
    const arr = [{
        title: '一步一个脚印'
    }, {
        title: `问多了全是问题 <br>做多了全是答案`
    }, {
        title: `向上的路，并不拥挤。<br>拥挤是因为，<br>大部分人选择了安逸`
    }, {
        title: '加油后盾人'
    }];
    let getSectioP = document.querySelector('section p');
    let i = 0;
    setInterval(function() {
        i = (i + 1) % arr.length;
        getSectioP.innerHTML = arr[i].title;
    }, 3000);
}
sectionP();

function sectionImg() {
    let getSectioImg = document.querySelector('section img');
    let images = ['https://picsum.photos/224/224', 'https://picsum.photos/225/225', 'https://picsum.photos/226/226'];
    let i = 0;
    setInterval(function() {
        getSectioImg.src = images[i];
        i = (i + 1) % images.length;
    }, 6000);
}
sectionImg();