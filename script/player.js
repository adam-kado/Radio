class player{
    constructor(){
var heightMain = document.getElementById("player");
heightMain.style.height = screen.height + "px";
if(screen.width<500){
heightMain.style.width = screen.width + "px";
}
var heightDiv = document.getElementById("content");
heightDiv.style.height = screen.height-325 + "px";

    }
}
onload = new player();

// creat class buttons

class Audio_player{
constructor(){
this.audio_file =document.getElementById("audio_file");
this.title_radio = document.getElementById("title_radio");
this.play_pause_button =document.getElementById("play_pause");

this.isPlayed ;

this.play_pause_button.addEventListener("click",()=>{

   this.play_pause();



});


this.names_radio =[];
this.names_radio [0] = "Live Arabic Music";
this.names_radio [1] = "Live English Music";
this.names_radio [2] = "Live Music Max";
this.names_radio[3] = "Nederland Muziek";
this.names_radio[4] =" Watar  الهوا كله على وتر" ;
this.names_radio[5] =" اذاعة ناي Radio Nay";
this.names_radio[6] ="راديو مكان  Makan Radio  ";
this.names_radio[7] ="Radio Club France";
this.names_radio[8] ="Sky Radio Lounge ";
this.names_radio[9] ="Radio Top 50";
this.names_radio[10] ="Turkish Radio YOL";
this.names_radio [11] = "Rudaw Kurd radio";
this.names_radio [12] = "Radio Rojava Kurd ";


this.source_audio =[];
this.source_audio [0] ="https://scdn.nrjaudio.fm/lb/1/mp3_128.mp3?cdn_path=audio_lbs12&access_token=034b0db58eb24855ab81114aa552c847";
this.source_audio [1] ="https://19763.live.streamtheworld.com/977_HITS.mp3";
this.source_audio [2] ="https://stream.radyo45lik.com:4545/";
this.source_audio [3] ="https://22713.live.streamtheworld.com/WEB16_MP3_SC";
this.source_audio [4] = "https://securestreams2.autopo.st:1243/live";
this.source_audio [5] = "https://naifm.radioca.st/;";
this.source_audio [6] = "https://stream-164.zeno.fm/06w0wdnegphvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiIwNncwd2RuZWdwaHZ2IiwiaG9zdCI6InN0cmVhbS0xNjQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjhUTGtmb3I5UzR5UHRPNTB6dmNoZ3ciLCJpYXQiOjE3MjUxNDI1MTAsImV4cCI6MTcyNTE0MjU3MH0.WIRc_Pu0wrouy_aV8lLI-2PkyhMk7sB0S6fQb7eQZXA&aw_0_req_lsid=43e66b578c9bfc392b9800f2816322fd&an-uid=4101155914180720317&dot-uid=0aa6220400b2f1c55dac04f5&triton-uid=cookie%3A058f1511-2291-4fe5-b05e-41581607fc80&amb-uid=4449745509193008068&aw-uid=43e66b578c9bfc392b9800f2816322fd&cto-uid=23d8ea13-03fe-4b10-b2bb-c957cca5d5a6-663f4499-5553&bsw-uid=29ad79c0-0623-424f-8018-82b9e1019715";
this.source_audio [7] = "http://radio-shoutcast2.cyber-streaming.com:8128/stream?type=http&nocache=10384";
this.source_audio [8] = "https://22663.live.streamtheworld.com/SRGSTR07.mp3";
this.source_audio [9] = "https://22653.live.streamtheworld.com/TLPSTR13.mp3";
this.source_audio [10] = "https://radyo.yayin.com.tr:5932/stream";
this.source_audio [11]="https://l3.itworkscdn.net/itwaudio/9006/stream";
this.source_audio [12]= "http://5.9.71.122:8094/stream?type=http&nocache=3";



this.server = 0;


this.setResource();

document.getElementById("next").addEventListener("click",()=>{
if(this.server<this.source_audio.length-1){
++this.server;

this.isPlayed =false;


}else{
    this.server = 0;
}

localStorage.setItem("save_potition", this.server);



this.setResource();
});

document.getElementById("back").addEventListener("click",()=>{
    if(this.server>0){
        --this.server;

        this.isPlayed =false;

    }else{
        this.server = this.source_audio.length-1;
    }
 // ذلك عندما يقوم المستخدم بتحديث الصفحه يبقى بنفس الصفحه ولا ينتقل الى صفحه البدايه localstorage
    localStorage.setItem("save_potition", this.server);
// -----------------

    this.setResource();

});

}

setResource(){
// ذلك عندما يقوم المستخدم بتحديث الصفحه يبقى بنفس الصفحه ولا ينتقل الى صفحه البدايه localstorage

if(localStorage.getItem("save_potition")!=null){
    this.server = localStorage.getItem("save_potition");

}
// -------------------------


    this.audio_file.src = this.source_audio[this.server];
    this.title_radio.innerHTML = this.names_radio[this.server];

   this.play_pause();
}



play_pause(){
    if(this.isPlayed == false){
        this.play_pause_button.src  = "./img/pause.png";

        this.audio_file.play();
        this.isPlayed= true;


    }else{
        this.play_pause_button.src  = "./img/play.png";

        this.audio_file.pause();
        this.isPlayed= false;

    }
}

}
onload = new Audio_player();


















