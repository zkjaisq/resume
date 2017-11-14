var keys = {
    0: ['1','2','3','4','5','6','7','8','9','0' ],
    1: ['q','w','e','r','t','y','u','i','o','p'],
    2: ['a','s','d','f','g','h','j','k','l'],
    3: ['z','x','c','v','b','n','m',],
   length:4,
}
var  hash = {
    '2': '163.com',
    '3': 'qq.com',
    '5': 'tianya.cn',
    'q': 'qq.com',
    'w': 'weibo.com',
    't': 'taobao.com',
    'i': 'iqiyi.com',
    'a': 'acfun.cn',
    'd': 'douban.com',
    'j': 'jd.com',
    'z': 'zhihu.com',
}
function getFromeloclastorage(name){
   return JSON.parse(localStorage.getItem(name)|| 'null')
}
function tag(tagname){
    return document.createElement(tagname)
}
function createSPAN(textContent){
    var span = tag('span')
    span.textContent = text
    span.className = "text"
    div2.appendChild(span)

}
for(index = 0;index< keys['length']; index=index+1){
    var div1 = tag('div') 
    main.appendChild(div1)

    var row = keys[index]
for(index2 =0; index2 < row['length']; index2 = index2+1){
    var div2 = tag('kbd')
    div2.className = "key"
    div1.appendChild(div2)

    var span = tag('span')
    span.textContent = row[index2]
    span.className = "text"
    div2.appendChild(span)

    var buttom1 = tag('button') //生成button标签，
    div2.appendChild(buttom1)
   
    buttom1.textContent = 'E'
    buttom1.id = row[index2]
    buttom1.onclick = function(xzkjcnxlkcjlk){
        var button = xzkjcnxlkcjlk['target']
        var button3 = button.nextSibling
        var img2 =  button3.nextSibling
        console.log(button3.nextSibling)
        var key = button['id']
        var x = prompt('给我一个网址')
        hash[key] = x
       img2.src = 'http://'+x + './favicon.ico'
       console.log(img2.src)
       img2.onerror = function(xxx){
        xxx.target.src = 'https://i.loli.net/2017/11/13/5a092f5e689ec.png'
    }
       localStorage.setItem('web', JSON.stringify(hash))
}
    
    var buttom2 = tag('span') //生成button标签，
    div2.appendChild(buttom2)
    div1.appendChild(div2)
    buttom2.textContent ='D'
    buttom2.id = "delete"
    
    var buttom3 = tag('img')
    div2.appendChild(buttom3)
    div1.appendChild(div2)
    if(hash[row[index2]]){
        buttom3.src = 'http://'+hash[row[index2]] + './favicon.ico'
    }else{
        buttom3.src = 'https://i.loli.net/2017/11/13/5a092f5e689ec.png'
    }
    buttom3.onerror = function(xxx){
        xxx.target.src = 'https://i.loli.net/2017/11/13/5a092f5e689ec.png'
    }//监听报错时间，如果报错就还是将我们的图片给它。
    //点击屏幕的时候，输入一个网址，将网址储存在浏览器中。
  
}

}
//取出localstroge中存的web对应的网址
hashInLocalStorage = getFromeloclastorage('web')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}


 document.onkeypress = function(xzkjcnxlkcjlk){
    var key = xzkjcnxlkcjlk['key']
    var website =hash[key]
    window.open('http://'+website, '_blank')
}//监听键盘事件，按键时候将所需要的网址弄出来，在新的窗口打开网址。