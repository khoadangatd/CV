// About me
var left=document.getElementsByClassName("icon--left")[0];
var right=document.getElementsByClassName("icon--right")[0];
var cleft=document.getElementsByClassName("c-icon--left")[0];
var cright=document.getElementsByClassName("c-icon--right")[0];
var slidesComment=document.getElementsByClassName("about-me__comment__sildes")[0];
var slidesClient=document.getElementsByClassName("about-me__clients__sildes")[0];
function clickRightComment(){
    slidesComment.style.transform=`translateX(-38.15%)`;
}
function clickLeftComment(){
    slidesComment.style.transform=`translateX(0%)`;
}
right.addEventListener("click",clickRightComment);
left.addEventListener("click",clickLeftComment);

function clickRightClient(){
    slidesClient.style.transform=`translateX(-29%)`;
}
function clickLeftClient(){
    slidesClient.style.transform=`translateX(0%)`;
}

cright.addEventListener("click",clickRightClient);
cleft.addEventListener("click",clickLeftClient);
// change tab
// resume
var intro2=document.getElementsByClassName("intro--2")[0];
var intro1=document.getElementsByClassName("intro--1")[0];
var intro3=document.getElementsByClassName("intro--3")[0];
var intro4=document.getElementsByClassName("intro--4")[0];
var intro5=document.getElementsByClassName("intro--5")[0];
var intronor=document.getElementsByClassName("intro--normal")[0];
var btnLeft=document.getElementsByClassName("control__icon--left")[0];
var btnRight=document.getElementsByClassName("control__icon--right")[0];
function select(intro){
    var temp;
    if(intro.innerHTML=="About me")
        temp=document.getElementsByClassName("about-me")[0];
    if(intro.innerHTML=="Resume")
        temp=document.getElementsByClassName("resume")[0];
    if(intro.innerHTML=="Habit")
        temp=document.getElementsByClassName("habit")[0];
    if(intro.innerHTML=="Blog")
        temp=document.getElementsByClassName("blog")[0];
    if(intro.innerHTML=="Contact")
        temp=document.getElementsByClassName("contact")[0];
    return temp;
}
function changeTab(e){
    var introcr=document.getElementsByClassName("intro--current")[0];
    if(introcr.innerHTML!=e.target.innerHTML)
    {
        select(introcr).style.display="none";
        select(e.target).style.animation="TOPTOBOT 1s";
        select(e.target).style.display="block";
        introcr.className=introcr.className.replace("intro--current","intro--normal");
        e.target.className=e.target.className.replace("intro--normal","intro--current");
    }
}
var a=document.getElementsByClassName("intro--1")[0];
var b=document.getElementsByClassName("intro--2")[0];
var c=document.getElementsByClassName("intro--3")[0];
var d=document.getElementsByClassName("intro--4")[0];
var e=document.getElementsByClassName("intro--5")[0];
function changeTabLeft(){
    var introcr=document.getElementsByClassName("intro--current")[0];
    var arr=[a,b,c,d,e];
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        if(introcr.innerHTML==arr[i].innerHTML)
        {
            select(introcr).style.display="none";
            if(i==0)
            {
                select(arr[arr.length-1]).style.animation = "TOPTOBOT 1s";
                select(arr[arr.length-1]).style.display = "block";
                introcr.className=introcr.className.replace("intro--current","intro--normal");
                arr[arr.length-1].className=arr[arr.length-1].className.replace("intro--normal","intro--current");
            }
            else{
                select(arr[i-1]).style.animation="TOPTOBOT 1s";
                select(arr[i-1]).style.display="block";
                introcr.className=introcr.className.replace("intro--current","intro--normal");
                arr[i-1].className=arr[i-1].className.replace("intro--normal","intro--current");
            }
        }
    }
}
function changeTabRight(){
    var introcr=document.getElementsByClassName("intro--current")[0];
    var arr=[a,b,c,d,e];
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        if(introcr.innerHTML==arr[i].innerHTML)
        {
            select(introcr).style.display="none";
            if(i==arr.length-1)
            {
                select(arr[0]).style.animation = "TOPTOBOT 1s";
                select(arr[0]).style.display = "block";
                introcr.className=introcr.className.replace("intro--current","intro--normal");
                arr[0].className=arr[0].className.replace("intro--normal","intro--current");
            }
            else{
                select(arr[i+1]).style.animation="TOPTOBOT 1s";
                select(arr[i+1]).style.display="block";
                introcr.className=introcr.className.replace("intro--current","intro--normal");
                arr[i+1].className=arr[i+1].className.replace("intro--normal","intro--current");
            }
        }
    }
}
intro1.addEventListener("click",changeTab);
intro2.addEventListener("click",changeTab);
intro3.addEventListener("click",changeTab);
intro4.addEventListener("click",changeTab);
intro5.addEventListener("click",changeTab);
btnLeft.addEventListener("click",changeTabLeft);
btnRight.addEventListener("click",changeTabRight);


