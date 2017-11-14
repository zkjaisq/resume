
function init() {
    var keys = {
        0: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        3: ['z', 'x', 'c', 'v', 'b', 'n', 'm',],
        length: 4,
    }
    var hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        't': 'taobao.com',
        'i': 'iqiyi.com',
        'a': 'amazon.com',
        'd': 'douban.com',
        'f': 'fenghuang.com',
        'j': 'jindong.com',
        'z': 'zhilian.com',
    }
    //取出localstroge中存的web对应的网址
    hashInLocalStorage = getFromeloclastorage('web')
    if (hashInLocalStorage) {
        hash = hashInLocalStorage
    }
    return {
        "keys": keys,
        "hash": hash
    }
}
function getFromeloclastorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}
function tag(tagname) {
    return document.createElement(tagname)
}
function textContent(textContent) {
    var span = tag('span')
    span.textContent = textContent
    span.className = "text"
    return span
}
function Button(id) {
    var button = tag('button') //生成button标签，

    button.textContent = 'E'
    button.id = id
    button.onclick = function (xzkjcnxlkcjlk) {
        var button = xzkjcnxlkcjlk['target']
        var button3 = button.nextSibling
        var img2 = button3.nextSibling
        console.log(button3.nextSibling)
        var key = button['id']
        var x = prompt('给我一个网址')
        hash[key] = x
        img2.src = 'http://' + x + './favicon.ico'
        console.log(img2.src)
        img2.onerror = function (xxx) {
            xxx.target.src = 'https://i.loli.net/2017/11/13/5a092f5e689ec.png'
        }
        localStorage.setItem('web', JSON.stringify(hash))
    }
    return button
}
function span() {
    var span = tag('span') //生成button标签，
    span.textContent = 'D'
    span.id = "delete"
    return span
}
function createImg(domain) {
    var img = tag('img')

    if (domain) {
        img.src = 'http://' + domain + './favicon.ico'
    } else {
        img.src = 'https://i.loli.net/2017/11/13/5a092f5e689ec.png'
    }
    img.onerror = function (xxx) {
        xxx.target.src = 'https://i.loli.net/2017/11/13/5a092f5e689ec.png'
    }//监听报错时间，如果报错就还是将我们的图片给它。
    //点击屏幕的时候，输入一个网址，将网址储存在浏览器中。
    return img
}
function generatekeyboard(keys, hash) {
    for (index = 0; index < keys['length']; index = index + 1) {
        var div = tag('div')
        main.appendChild(div)

        var row = keys[index]
        for (index2 = 0; index2 < row['length']; index2 = index2 + 1) {
            var kbd = tag('kbd')
            kbd.className = "key"

            var span = textContent(row[index2])
            var button = Button(row[index2])
            var span = span
            var img = createImg(hash[row[index2]])

            div.appendChild(kbd)
            kbd.appendChild(button)
            kbd.appendChild(span)
            kbd.appendChild(span)
            kbd.appendChild(img)
        }
    }
    return
}
function listernTOkeyboard(hash) {
    document.onkeypress = function (xzkjcnxlkcjlk) {
        var key = xzkjcnxlkcjlk['key']
        var website = hash[key]
        window.open('http://' + website, '_blank')
    }//监听键盘事件，按键时候将所需要的网址弄出来，在新的窗口打开网址。
    return
}

//初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']
//生成键盘
generatekeyboard(keys, hash)
//监听事件
listernTOkeyboard(hash)

