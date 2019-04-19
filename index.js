
function big(id, option) {
    var p = document.getElementById(id);
    var moren = {
        activepcic_width: 400,
        activepcic_height: 350,
        smlle_width: 130,
        smlle_height: 40
    }
    //合并
    var a = Object.assign({}, moren, option);
    console.log(a);
    //获取图片数量
    console.log(p.children.length)
    // 判断
    if (a.chang * a.kuan != p.children.length) {
        throw 'geshubuxaingfu'
    }
    //设置父元素
    p.style.width = a.activepcic_width + a.smlle_width * (a.chang - 1) + 'px';
    var activepic = function (index) {
        var cx = index % a.chang;
        var cy = Math.floor(index / a.chang);
        console.log(cx, cy)//获取坐标
        for (var x = 0; x < a.chang; x++) {
            for (var y = 0; y < a.kuan; y++) {
                console.log(x, y)//获取全部坐标
                var cindex = x + y * a.chang;
                console.log(cindex);//获取下标
                var item = p.children[cindex];
                console.log(item)//获取下表的div
                if (cx == x && cy == y) {//选中的图片
                    item.style.width = moren.activepcic_width + 'px';
                    item.style.height = moren.activepcic_height + 'px';
                }
                else if (cx == x) {//与选中图片同列的图片
                    item.style.width = moren.activepcic_width + 'px';
                    item.style.height = moren.smlle_height + 'px';
                }
                else if (cy == y) {//与选中图片同行的图片
                    item.style.width = moren.smlle_width + 'px';
                    item.style.height = moren.activepcic_height + 'px';
                }
                else {//没关系的图片
                    item.style.width = moren.smlle_width + 'px';
                    item.style.height = moren.smlle_height + 'px';
                }
            }
        }
    }
    activepic(9);
    for (var i = 0; i < p.children.length; i++) {
        p.children[i].ind = i;
        p.children[i].onmouseenter = function () {
            activepic(this.ind);
        }
    }


    
}