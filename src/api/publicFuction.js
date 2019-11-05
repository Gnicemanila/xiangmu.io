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
export function name(params) {
    console.log('name') 
}
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

