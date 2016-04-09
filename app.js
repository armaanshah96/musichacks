function chords(note,position) {
//                if(note[1] == 7) {
//                    note = note[0] + '7'.sup();
//                }
    document.getElementById(position).innerHTML = note 
//                var sound = new Audio("")
//                sound.play()
};
function playProgression() {
    var aud1 = document.getElementById('pos1').innerHTML;
    var aud2 = document.getElementById('pos2').innerHTML;
    var aud3 = document.getElementById('pos3').innerHTML;
    var aud4 = document.getElementById('pos4').innerHTML;
    var sound1 = aud1 + ".mp3";
    var sound2 = aud2 + ".mp3";
    var sound3 = aud3 + ".mp3";
    var sound4 = aud4 + ".mp3";
    var play1 = new Audio("../sounds/" + sound1);
    var play2 = new Audio("../sounds/" + sound2);
    var play3 = new Audio("../sounds/" + sound3);
    var play4 = new Audio("../sounds/" + sound4);
    play1.play();
    play2.play();
    play3.play();
    play4.play();

}
