array_art_names = ["Smile Emoji", "Spectacles", "Key", "Basketball", "Socks", "Doughnut"];
random_number = Math.floor((Math.random() * array_art_names.length) + 1);
console.log(array_art_names[random_number]);
sketch = array_art_names[random_number];
document.getElementById("draw_object").innerHTML = 'Sketch to be Drawn: ' + sketch;
timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function updateCanvas() {
    background("White");
}
function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    background("White");
}
function draw() {
    check_sketch();
        if (drawn_sketch==sketch) {
            answer_holder = "set";
            score = score + 1;
            document.getElementById("score").innerHTML = "Score: " + score;
        }
}
function check_sketch() {
    timer_counter = timer_counter + 1;
    document.getElementById("timer").innerHTML = "Time Left: " + timer_counter;
    console.log(timer_counter);
    if (timer_counter>10000) {
        timer_counter = 0;
        timer_check = "complete";
    }
    if (answer_holder == "set" || timer_check == "complete") {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}