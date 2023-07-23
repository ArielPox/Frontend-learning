// var that;
class Tab {
    constructor(id) {
            // 获取元素
            // that = this;
            this.main = document.querySelector(id);
            this.add = this.main.querySelector('.tabadd');
            // 获取li的父元素ul
            this.ul = this.main.querySelector(".fisrstnav ul:first-child");
            // 获取section的父元素
            this.fsection = this.main.querySelector(".tabscon");

            this.init();

        }
        // 1.切换功能
    init() {
        // 每一次的初始化都要重新的获得所有的li还有section
        this.updateNode()
            // 让init中的相关的元素绑定上事件
        this.add.onclick = this.addTab.bind(this.add, this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this); //将自己的保留 也将全局的this传递进去
            // 给每一个元素都绑定一个移除的元素
            this.remove[i].onclick = this.removeTab.bind(this.remove[i], this);
            this.span[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }

    // 将所有的新添加的方法法还有可以变的元素全部更新
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        // 获取的是移除元素
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.span = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }

    // 清除所有人留下自己
    toggleTab(that) {
        // 先清除所有的人 之后再留下自己
        that.clearClass();
        this.className = 'liative';
        that.sections[this.index].className = 'conactive';

    }

    // 将所有的元素的样式全部给清除掉
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }

    // 2.添加功能
    addTab(that) {
        that.clearClass();
        var random = Math.random();
        // (1)创建li元素追加到对应的父元素里面
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        // (2)追加到对应的父元素里面去 brforeend 是添加到父元素后面
        that.ul.insertAdjacentHTML('beforeend', li);
        // 创建一个section 添加到section的父元素的里面
        var section = '<section class="conactive">测试' + random + '< /section>';
        that.fsection.insertAdjacentHTML('beforeend', section);
        // 添加了功能之后，要先初始化一下页面
        that.init();
    }


    // 3.删除功能
    removeTab(that, e) {
            // 阻止触发li的切换点击事件
            e.stopPropagation();
            var index = this.parentNode.index;
            // console.log(index);
            //删除指定的索引号对应的li和section remove()方法可以直接去除掉指定的元素
            that.lis[index].remove();
            that.sections[index].remove();
            // 初始化：
            that.init();
            // 如果删除的不是选定状态的元素，之前的元素选定的状态不变，就不用执行下面的代码
            if (document.querySelector('.liactive')) {
                return;
            }
            // 当删除当前选定状态的元素的时候 自动的切换到上一个的状态
            index--;
            // 用一个是非判断就可以直接省略判断index是不是小于零的状态
            that.lis[index] && that.lis[index].click();

        }
        // 4.修改功能
    editTab() {
        var str = this.innerHTML;
        // 禁止选中文字的代码:
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //在双击的框里面添加上一个文本框
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        // 将文本框里面的值处于选定的状态
        input.select();
        // 离开文本框的时候就会将里面的值赋值给span
        input.onblur = function() {
                this.parentNode.innerHTML = this.value;
            }
            //按下回车的时候也可以将文本框赋值给span
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }

    }
}

var tab = new Tab('#tab');
tab.init();