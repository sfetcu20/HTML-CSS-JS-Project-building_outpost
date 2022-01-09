function preload()
{
  // Spiderman Mask Filter asset
  imgstar = loadImage("./stars-png-mpd-fl-stars-image-638-2438.png");
  
}
window.onload=()=>{
 
var canvas = document.getElementById('can');
var context=canvas.getContext('2d');
var video = document.getElementById('video');

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

function render(){
    computeClearFrame();
 
    setTimeout(() => {
        render();
    }, 0);
}
var c=document.getElementById('cafea');
c.addEventListener("click",()=>
{
    i=document.getElementById("stars");
    if(i.hasAttribute('hidden')) i.removeAttribute('hidden');
    else i.setAttribute('hidden','true');
})
img = document.getElementById('rama');
img.addEventListener("click",()=>{
    context.filter="none";
    render();
});

}






function addfilter(id){
    console.log(id);
    var canvas = document.getElementById('can');
    var context=canvas.getContext('2d');
    context.filter="url(#fl_" + id +")";
    render();

}
