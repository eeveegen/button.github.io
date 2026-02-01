function button() 
{ 
    //return Date(); 
    return "Hello there";
}

function counter(cnt)
{
    //return Number(cnt)+1;
    return !isNaN(cnt);
}

function testfunc(text)
{
    document.getElementById('submit-button').style.fontFamily = 'Times New Roman';
    document.getElementById('submit-button').style.fontSize = '20px';
    text = Number(text);
    if (isNaN(text)) {
        return 0;
    } else {
        return text + 1;
    }
}