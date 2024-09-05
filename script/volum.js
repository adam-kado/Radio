class Volume{
constructor(){

    this.audio_file = document.getElementById("audio_file");
    this.audio_file.volume = 50/100;

    this.volum_rang = document.getElementById("volum_rang");
    this.volum_rang.addEventListener("change",()=>{
        this.audio_file.volume = this.volum_rang.value/100;
    });




    this.volum_speed = document.getElementById("volum_speed");
   
    
   this.audio_file.playbackRate = 1;
   
    this.volum_speed.addEventListener("change",()=>{
    this.audio_file.volume = this.volum_rang.value/100;
   
   this.audio_file.playbackRate = this.volum_speed.value/100;
    });

}

}
onload = new Volume();




















