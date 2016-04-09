function chords(note,position) {

    
//                if(note[1] == 7) {
//                    note = note[0] + '7'.sup();
//                }
    document.getElementById(position).innerHTML = note 
//                var sound = new Audio("")
//                sound.play()
};
function playProgression() {
    console.log('function')
    var aud1 = document.getElementById('pos1').innerHTML;
    var aud2 = document.getElementById('pos2').innerHTML;
    var aud3 = document.getElementById('pos3').innerHTML;
    var aud4 = document.getElementById('pos4').innerHTML;
    var sound1 = aud1 + ".m4a";
    var sound2 = aud2 + ".m4a";
    var sound3 = aud3 + ".m4a";
    var sound4 = aud4 + ".m4a";
    var play1 = new Audio("sounds/" + sound1);
    var play2 = new Audio("sounds/" + sound2);
    var play3 = new Audio("sounds/" + sound3);
    var play4 = new Audio("sounds/" + sound4);
    setTimeout(function(){
        playSound(play1);
        console.log("sound1");
        setTimeout(function(){
            playSound(play2);
            console.log("sound2");
            setTimeout(function(){
                playSound(play3);
                console.log("sound3");
                setTimeout(function(){
                    playSound(play4);
                    console.log("sound4");},1000);
        }, 2000);
        }, 2000); 
    }, 1000);
};


function playSound(audio_file) {
    console.log("working")
    audio_file.play();
    console.log("delay happened")
};

function playSound(id) {
    var sound = document.getElementById(id).innerHTML + ".m4a";
    var play1 = new Audio("sounds/" + sound);
    play1.play();
}