const arr = [{
    title: '一步一个脚印'
}, {
    title: '问多了全是问题 做多了全是答案'
}, {
    title: '向上的路，并不拥挤。拥挤是因为，大部分人选择了安逸'
}, {
    title: '加油,后盾人'
}];
let getSectioP = document.querySelector('section p');
let i = 0;
setInterval(function() {
    getSectioP.innerHTML = arr[i].title;
    i++;
    if (i >= arr.length) {
        i = 0;
    }
}, 1000);