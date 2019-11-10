//转换年月日
export function transDate(date) {
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    return date.getFullYear() + seperator1 + month + seperator1 + strDate;
}

//举个栗子
export function name(params) {
    console.log('name') 
}

//获取当前元素的高度
export function getElementViewTop(element){
    if(!element){
        return 0
    }
    let actualTop = element.offsetTop;
    let current = element.offsetParent;
    let elementScrollTop;
    while (current !== null){
        actualTop += current. offsetTop;
        current = current.offsetParent;
    }

    if (document.compatMode == "BackCompat"){
        elementScrollTop=document.body.scrollTop;
    } else {
        elementScrollTop=document.documentElement.scrollTop;
    }

    return actualTop-elementScrollTop;
}

//获取经纬度方法
export function getPosition () {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let latitude = position.coords.latitude
        let longitude = position.coords.longitude
        let data = {
          latitude: latitude,
          longitude: longitude
        }
        resolve(data)
      }, function () {
        reject(arguments)
      })
    } else {
      reject('你的浏览器不支持当前地理位置信息获取')
    }
  })
}

