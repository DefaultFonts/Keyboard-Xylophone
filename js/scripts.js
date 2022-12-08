// Audio
var c4sound = document.getElementById("c4-audio")
var d4sound = document.getElementById("d4-audio")
var e4sound = document.getElementById("e4-audio")
var f4sound = document.getElementById("f4-audio")
var g4sound = document.getElementById("g4-audio")
var a4sound = document.getElementById("a4-audio")
var b4sound = document.getElementById("b4-audio")
var c5sound = document.getElementById("c5-audio")
var d5sound = document.getElementById("d5-audio")
var e5sound = document.getElementById("e5-audio")

// Play note on click
$("#c4-note").on("click", playC4)
$("#d4-note").on("click", playD4)
$("#e4-note").on("click", playE4)
$("#f4-note").on("click", playF4)
$("#g4-note").on("click", playG4)
$("#a4-note").on("click", playA4)
$("#b4-note").on("click", playB4)
$("#c5-note").on("click", playC5)
$("#d5-note").on("click", playD5)
$("#e5-note").on("click", playE5)

// Play sound on keypress
$(document).on("keypress", function (e) {
    console.log(e.key)
    if (e.key == 'q') { playC4() }
    if (e.key == 'w') { playD4() }
    if (e.key == 'e') { playE4() }
    if (e.key == 'r') { playF4() }
    if (e.key == 't') { playG4() }
    if (e.key == 'y') { playA4() }
    if (e.key == 'u') { playB4() }
    if (e.key == 'i') { playC5() }
    if (e.key == 'o') { playD5() }
    if (e.key == 'p') { playE5() }
})

function playC4() {
    c4sound.currentTime = 0
    c4sound.play()
    $("#c4-note-body").addClass('vibration')
    setTimeout(function () { $("#c4-note-body").removeClass('vibration') }, 350)
}

function playD4() {
    d4sound.currentTime = 0
    d4sound.play()
    $("#d4-note-body").addClass('vibration')
    setTimeout(function () { $("#d4-note-body").removeClass('vibration') }, 350)
}

function playE4() {
    e4sound.currentTime = 0
    e4sound.play()
    $("#e4-note-body").addClass('vibration')
    setTimeout(function () { $("#e4-note-body").removeClass('vibration') }, 350)
}

function playF4() {
    f4sound.currentTime = 0
    f4sound.play()
    $("#f4-note-body").addClass('vibration')
    setTimeout(function () { $("#f4-note-body").removeClass('vibration') }, 350)
}

function playG4() {
    g4sound.currentTime = 0
    g4sound.play()
    $("#g4-note-body").addClass('vibration')
    setTimeout(function () { $("#g4-note-body").removeClass('vibration') }, 350)
}

function playA4() {
    a4sound.currentTime = 0
    a4sound.play()
    $("#a4-note-body").addClass('vibration')
    setTimeout(function () { $("#a4-note-body").removeClass('vibration') }, 350)
}

function playB4() {
    b4sound.currentTime = 0
    b4sound.play()
    $("#b4-note-body").addClass('vibration')
    setTimeout(function () { $("#b4-note-body").removeClass('vibration') }, 350)
}

function playC5() {
    c5sound.currentTime = 0
    c5sound.play()
    $("#c5-note-body").addClass('vibration')
    setTimeout(function () { $("#c5-note-body").removeClass('vibration') }, 350)
}

function playD5() {
    d5sound.currentTime = 0
    d5sound.play()
    $("#d5-note-body").addClass('vibration')
    setTimeout(function () { $("#d5-note-body").removeClass('vibration') }, 350)
}

function playE5() {
    e5sound.currentTime = 0
    e5sound.play()
    $("#e5-note-body").addClass('vibration')
    setTimeout(function () { $("#e5-note-body").removeClass('vibration') }, 350)
}

// Mallet Cursor
$(function () {
    $("#notes").mousemove(function (e) {
        $(".cursor").show().css({
            "left": e.clientX,
            "top": e.clientY
        });
    }).mouseout(function () {
        $(".cursor").hide();
    });
});


// Dark Mode
// please ignore this code... I was originally going to get the two mallets in the footer to change to ones with a gray outline, but after adding the functionality to the alternate key colours, it performed inconsistently. I was originally just going to get rid of this whole chunk of code, but if I try to do that then both the dark mode and alternate colour functions stop working ;-;
var rightMallets = ["mallet-ds-r.png", "mallet-dm-r.png"]
var leftMallets = ["mallet-ds-l.png", "mallet-dm-l.png"]

$(".button").on("click", updateMallets)
var counter = 1

function updateMallets() {
    // $(".left").html('<img src="images/' + rightMallets[counter] + '" class="mallet" id="mallet-r" alt="Mallet laying on its side">')
    // $(".right").html('<img src="images/' + leftMallets[counter] + '" class="mallet" id="mallet-l" alt="Mallet laying on its side">')
    counter++
    if (counter == rightMallets.length) { counter = 0; }
}
// end of code to ignore

$(".button").on("click", function () {
    $("body").toggleClass("dark-mode")
    $("footer").toggleClass("footer-dm")
    $(".button").toggleClass("dark-mode-button")
    $("a").toggleClass("dark-mode")
    $("#keyboard-letters").toggleClass("dark-mode")
    if ($("body").hasClass("dark-mode")) {
        $(this).text("dark_mode")
    }
    else {
        $(this).text("light_mode")
    }
})


// Alternate Key Colors

var c4fill = ["#eb2c3b", "#d60270", "#d42c00", "#5bcefa", "#004e66", "#f1c0e8"]
var c4secondary = ["#b52334", "#a00154", "#9f2100", "#449abb", "#093345", "#b590ae"]

var d4fill = ["#ef8031", "#c8167a", "#e9622b", "#f5a9b8", "#005f73", "#ffcfd2"]
var d4secondary = ["#b56026", "#96105b", "#af4920", "#b87f8a", "#004756", "#bf9b9d"]

var e4fill = ["#fde92b", "#b92983", "#fd9855", "#fad4dc", "#0a9396", "#fde4cf"]
var e4secondary = ["#ccb946", "#8b1f62", "#be7240", "#bb9fa5", "#076e70", "#beab9b"]

var f4fill = ["#91be4a", "#aa3c8d", "#feccaa", "#fdeaee", "#94d2bd", "#fbf8cc"]
var f4secondary = ["#718e39", "#7f2d6a", "#be997f", "#beafb2", "#6f9d8e", "#bcba99"]

var g4fill = ["#00a055", "#a34692", "#ffe6d5", "#ffffff", "#e9d8a6", "#b9fbc0"]
var g4secondary = ["#007038", "#7a346d", "#bfaca0", "#bfbfbf", "#afa27c", "#8bbc90"]

var a4fill = ["#00a8de", "#9b4f96", "#f4d8e8", "#ffffff", "#ee9b00", "#98f5e1"]
var a4secondary = ["#007c99", "#743b70", "#b7a2ae", "#bfbfbf", "#b27400", "#72b8a9"]

var b4fill = ["#3b3ba8", "#884d99", "#e8b0d1", "#fdeaee", "#ca6702", "#8eecf5"]
var b4secondary = ["#1f1f77", "#663a73", "#ae849d", "#beafb2", "#974d01", "#6ab1b8"]

var c5fill = ["#9c298c", "#754a9b", "#d161a2", "#fad4dc", "#bb3e03", "#90dbf4"]
var c5secondary = ["#6d1d65", "#583774", "#9d4979", "#bb9fa5", "#8c2e02", "#6ca4b7"]

var d5fill = ["#e9187e", "#4e449f", "#ba3182", "#f5a9b8", "#ae2012", "#a3c4f3"]
var d5secondary = ["#ba156c", "#3a3377", "#8b2561", "#b87f8a", "#82180d", "#7a93b6"]

var e5fill = ["#f190ac", "#0038a8", "#a20161", "#5bcefa", "#9b2226", "#cfbaf0"]
var e5secondary = ["#c1748e", "#002a7e", "#790149", "#449abb", "#74191c", "#9b8bb4"]


function updateKeycolor() {
    // C4
    $(".cls-15").css("fill", c4fill[counter])
    $(".cls-16").css("stroke", c4secondary[counter])
    $(".cls-39").css("fill", c4secondary[counter])

    // D4
    $(".cls-17").css("fill", d4fill[counter])
    $(".cls-18").css("stroke", d4secondary[counter])
    $(".cls-42").css("fill", d4secondary[counter])

    // E4
    $(".cls-19").css("fill", e4fill[counter])
    $(".cls-20").css("stroke", e4secondary[counter])
    $(".cls-44").css("fill", e4secondary[counter])

    // F4
    $(".cls-21").css("fill", f4fill[counter])
    $(".cls-22").css("stroke", f4secondary[counter])
    $(".cls-46").css("fill", f4secondary[counter])

    // G4
    $(".cls-23").css("fill", g4fill[counter])
    $(".cls-24").css("stroke", g4secondary[counter])
    $(".cls-48").css("fill", g4secondary[counter])

    // A4
    $(".cls-25").css("fill", a4fill[counter])
    $(".cls-26").css("stroke", a4secondary[counter])
    $(".cls-50").css("fill", a4secondary[counter])

    // B4
    $(".cls-27").css("fill", b4fill[counter])
    $(".cls-28").css("stroke", b4secondary[counter])
    $(".cls-52").css("fill", b4secondary[counter])

    // C5
    $(".cls-29").css("fill", c5fill[counter])
    $(".cls-30").css("stroke", c5secondary[counter])
    $(".cls-55").css("fill", c5secondary[counter])

    // D5
    $(".cls-31").css("fill", d5fill[counter])
    $(".cls-32").css("stroke", d5secondary[counter])
    $(".cls-57").css("fill", d5secondary[counter])

    // E5
    $(".cls-33").css("fill", e5fill[counter])
    $(".cls-34").css("stroke", e5secondary[counter])
    $(".cls-59").css("fill", e5secondary[counter])

    counter++
    if (counter == c4fill.length) { counter = 0; }
}

$(document).on("keypress", function (e) {
    console.log(e.key)
    if (e.key == "Enter") {
        updateKeycolor()
    }
})