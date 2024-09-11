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
this.names_radio [0]= "Al Madina FM";
this.names_radio [1] = "Radio Farah";
this.names_radio[2] =" Watar  الهوا كله على وتر" ;
this.names_radio[3] =" اذاعة ناي Radio Nay";
this.names_radio[4] ="راديو مكان  Makan Radio  ";
this.names_radio[5] ="Radio Nogoum ";
this.names_radio [6]= "Mazaj FM";
this.names_radio [7]= "Mazaj TOP 40";
this.names_radio [8]= "Sham FM";
this.names_radio [9]= "Mahatet Masr";
this.names_radio [10]= "Melody FM";
this.names_radio [11] = "Live English Music";
this.names_radio [12] = "Live Music Max";
this.names_radio[13] = "Nederland Muziek";
this.names_radio[14] ="Radio Top 50";
this.names_radio [15]= "Kiss FM";
this.names_radio [16]= "RTL Berlin Radio";
this.names_radio [17]= "Germany Fox Radio";
this.names_radio [18]= "Germany Party Radio";
this.names_radio[19] ="Sky Radio Lounge ";
this.names_radio [20]= "Annai FM India";
this.names_radio [21] = "Rudaw Kurd radio";
this.names_radio[22] ="Turkish Radio YOL";
this.names_radio [23]= "ARTA FM";
this.names_radio [24] = "Radio Gundi FM";
this.names_radio [25] = "Azadi FM";
this.names_radio [26] = "Mezopotamya Radio";
this.names_radio [27] = "Radio Duhok";
this.names_radio [28] = "SLEMANI RADIO ";



this.source_audio =[];
this.source_audio[0] = "https://stream.almadinafm.com/;stream.mp3?1726085789";
this.source_audio [1] ="https://radio.farah.fm/?type=http&1725798058";
this.source_audio [2] = "https://securestreams2.autopo.st:1243/live";
this.source_audio [3] = "https://naifm.radioca.st/;";
this.source_audio [4] = "https://stream-164.zeno.fm/06w0wdnegphvv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiIwNncwd2RuZWdwaHZ2IiwiaG9zdCI6InN0cmVhbS0xNjQuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6IjhUTGtmb3I5UzR5UHRPNTB6dmNoZ3ciLCJpYXQiOjE3MjUxNDI1MTAsImV4cCI6MTcyNTE0MjU3MH0.WIRc_Pu0wrouy_aV8lLI-2PkyhMk7sB0S6fQb7eQZXA&aw_0_req_lsid=43e66b578c9bfc392b9800f2816322fd&an-uid=4101155914180720317&dot-uid=0aa6220400b2f1c55dac04f5&triton-uid=cookie%3A058f1511-2291-4fe5-b05e-41581607fc80&amb-uid=4449745509193008068&aw-uid=43e66b578c9bfc392b9800f2816322fd&cto-uid=23d8ea13-03fe-4b10-b2bb-c957cca5d5a6-663f4499-5553&bsw-uid=29ad79c0-0623-424f-8018-82b9e1019715";
this.source_audio [5] = "https://audio.nrpstream.com/listen/nogoumfm/radio.mp3?1725743745";
this.source_audio[6] ="https://mazajfm.ice.infomaniak.ch/mazajfm-192.mp3?1725743040";
this.source_audio[7] ="https://mazajtop40.ice.infomaniak.ch/mazajtop40-192.mp3?1725743130";
this.source_audio[8] = "https://radioshamfm.grtvstream.com:8400/stream?1725747316";
this.source_audio[9] ="https://s3.radio.co/s9cb11828c/listen?1725743624";
this.source_audio[10] ="https://ssl.surfmusic.de/s.php?s=http://streaming.inet.sy:8000/melodyfm?1726085597";
this.source_audio [11] ="https://19763.live.streamtheworld.com/977_HITS.mp3";
this.source_audio [12] ="https://stream.radyo45lik.com:4545/";
this.source_audio [13] ="https://22713.live.streamtheworld.com/WEB16_MP3_SC";
this.source_audio [14] = "https://22653.live.streamtheworld.com/TLPSTR13.mp3";
this.source_audio[15] = "https://topradio-stream19.radiohost.de/kissfm_mp3-192?1725745638";
this.source_audio[16] ="https://stream.104.6rtl.com/rtl-live/mp3-128/surfmusikDE/?1725744211";
this.source_audio[17] = "https://rautemusik-de-hz-fal-stream17.radiohost.de/schlager?1725741340";
this.source_audio[18] = "https://streams.ilovemusic.de/iloveradio25.mp3?1725741575";
this.source_audio [19] = "https://22663.live.streamtheworld.com/SRGSTR07.mp3";
this.source_audio[20] ="https://stream.zeno.fm/ewuo8mhb9zyvv?1725743345";
this.source_audio [21]="https://l3.itworkscdn.net/itwaudio/9006/stream";
this.source_audio [22] = "https://radyo.yayin.com.tr:5932/stream";
this.source_audio[23] = "https://edge.mixlr.com/channel/qtgru?1725747112";
this.source_audio [24]= "https://player.web.tr/listen/9a527b1b7a2a8f13614ee3c71087bf2a";
this.source_audio [25]= "https://amed.ozelip.com/8040/;stream.mp3";
this.source_audio [26]= "https://anadolu.liderhost.com.tr:10965/;stream.mp3";
this.source_audio [27]= "https://stream-151.zeno.fm/2rqkdc0ul88vv?zs=aCcDwiBNTrWnMS_wMiE_VA";
this.source_audio [28]= "https://stream-152.zeno.fm/8eq5qs5hpm0uv?zs=ZXFvXJ9tQgy7NQPcC0n0fw";



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


















