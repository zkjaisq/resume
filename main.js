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
    row=keys[index]
    index2=0
    while(index2< row['length']){
        div2 = document.createElement('kbd')
        div1.appendChild(div2)
        div2.textContent = row[index2]
        buttom1 = document.createElement('button')
        div2.appendChild(buttom1)
        div1.appendChild(div2)
        buttom1.textContent = 'E'
        buttom1.id= row[index2]
        document.onclick = function(xzkjcnxlkcjlk){
            key = xzkjcnxlkcjlk['target']['id']
            x =prompt('给我一个网址')
            hash[key] = x
            localStorage.setItem('web', JSON.stringify(hash))
            console.log(hash)
        }
        index2=index2+1
    }
    
    index=index+1
}
document.onkeypress = function(xzkjcnxlkcjlk){
   key = xzkjcnxlkcjlk['key']
   website =hash[key]
   console.log(website)
   window.open('http://'+website, '_blank')
}