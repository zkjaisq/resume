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
    '6': 'zhifubao.com',
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
hashInLocalStorage =JSON.parse(localStorage.getItem('web')|| 'null')
if(hashInLocalStorage){
    hash = hashInLocalStorage
}
//遍历keys，生成kbd标签
index=0
while(index< keys['length']){
    div1 = document.createElement('div') 
    main.appendChild(div1)
    row = keys[index]
    index2=0
    while(index2< row['length']){
        div2 = document.createElement('kbd')
        span = document.createElement('span')
        div1.appendChild(div2)
        div2.appendChild(span)
        span.textContent = row[index2]
        span.className = "text"
        div2.className = "key"
        buttom1 = document.createElement('button') //生成button标签，
        div2.appendChild(buttom1)
        div1.appendChild(div2)
        buttom2 = document.createElement('span') //生成button标签，
        div2.appendChild(buttom2)
        div1.appendChild(div2)
        buttom1.textContent = 'E'
        buttom1.id = row[index2]
        buttom2.textContent ='D'
        buttom2.id = "delete"
       buttom3 = document.createElement('img')
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
        buttom1.onclick = function(xzkjcnxlkcjlk){
            button = xzkjcnxlkcjlk['target']
            button3 = button.nextSibling
            img2 =  button3.nextSibling
            console.log(button3.nextSibling)
            key = button['id']
            x = prompt('给我一个网址')
            hash[key] = x
           img2.src = 'http://'+x + './favicon.ico'
           console.log(img2.src)
           img2.onerror = function(xxx){
            xxx.target.src = 'https://i.loli.net/2017/11/13/5a092f5e689ec.png'
        }
           localStorage.setItem('web', JSON.stringify(hash))
        }
        index2=index2+1
    }
    
    index=index+1
}
 document.onkeypress = function(xzkjcnxlkcjlk){
   key = xzkjcnxlkcjlk['key']
   website =hash[key]
   window.open('http://'+website, '_blank')
}//监听键盘事件，按键时候将所需要的网址弄出来，在新的窗口打开网址。