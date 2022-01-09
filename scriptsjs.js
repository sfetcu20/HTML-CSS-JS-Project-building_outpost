function preload()
{
  // Spiderman Mask Filter asset
  imgstar = loadImage("./stars-png-mpd-fl-stars-image-638-2438.png");
  
}

window.onload=()=>{
 
var canvas = document.getElementById('can');
var context=canvas.getContext('2d');
var video = document.getElementById('video');
var save;
savecontext();
var width = 400;
var height = 150;

  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
}).then((stream)=>{
    video.srcObject=stream;
video.play();
});
function computeClearFrame(){
    
    context.drawImage(video, -30, -10, width, height);
    
  
}

function savecontext(){
    var canvas2 = document.getElementById('auxcanvas');
    var context2=canvas.getContext('2d');
    context2.drawImage(video,-30, -10, width, height);
    save =context2.getImageData(0,0,400,150);
}
function render(){
    computeClearFrame();
 
    setTimeout(() => {
        render();
    }, 0);
}
function render2(){
    canvas.style.backgroundImage="url('http://wallpapercave.com/wp/I3ztlZI.jpg')";
    aux=document.getElementById("auxcanvas");
    ctx=aux.getContext('2d');
    ctx.drawImage(video, -30, -10, width, height);
    var frame=ctx.getImageData(0,0,width, height); 
    var data=frame.data;
    for (var i = 0; i<data.length;i+=4)
        {
            var red = data[i];
            var green = data[i+1];
            var blue = data[i+2];
            if (red > 70 && green > 70 && blue > 70)
            {
                data[i+3] = 0;
            }
        }
        context.putImageData(frame,0,0);
        setTimeout(() => {
            render2();
        }, 0);
}
var s=document.getElementById('fl');
s.addEventListener("click",()=>{render2();})
var c=document.getElementById('cafea');
c.addEventListener("click",()=>
{
    i=document.getElementById("stars");
    if(i.hasAttribute('hidden')) i.removeAttribute('hidden');
    else i.setAttribute('hidden','true');
})
img = document.getElementById('rama');
img.addEventListener("click",()=>{
    context=canvas.getContext('2d');
   
    context.filter="none";
    render();
});

}


function fadeMessage(){
    document.getElementById('message').className = 'hidden';
}



function addfilter(id){
    console.log(id);
    var canvas = document.getElementById('can');
    var context=canvas.getContext('2d');
    context.filter="url(#fl_" + id +")";
    render();

}

//Geolocation
function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert("Please enable location on your browser.");
    }
}

function showPosition(position){
    alert("Latitude: " + position.coords.latitude + "\n" + "Longitude: " + position.coords.longitude);
}

//D
function alterId(id, x){
    var altered = id;
    altered = altered.slice(0, -1);
    altered += x;
    return altered;
}

function alive(id){

    document.getElementById(id).style.opacity = 1;
    document.getElementById(alterId(id, 's')).style.opacity = 0;
    document.getElementById(alterId(id, 'a')).play();   
}

function dead(id){
    document.getElementById(id).style.opacity = 0;
    document.getElementById(alterId(id, 's')).style.opacity = 1;
    document.getElementById(alterId(id, 'a')).pause();
    document.getElementById(alterId(id, 'a')).currentTime = 0;
}

function colorFilter(id){ 
    document.getElementById('can').style.filter = 'grayscale(100%)';

}

function removeFilter(id){
    document.getElementById('can').style.filter = "none";
    
}
