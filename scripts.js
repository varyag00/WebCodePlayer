/**
 * Created by dan on 2016-02-19.
 */

//run button
$("#playButton").click(function () {
    //alert("Clicked play button!")

    //Read all the fields, create a webpage and let it rip

    //load html into result

    var myHTML = $("#inputHTML").val()
    var myCSS =  $("#inputCSS").val()
    var myJS = $("#inputJS").val()

    //alert("<html>" + openScript + myCSS  + closeScript + myHTML + "<\/html>")

    $("#result").contents().find("html").html("<style>" + myCSS  + "<\/style>" + myHTML)

    //eval inputted js code

    //NOTE: it is PROBABLY a terrible idea to let people run random js code on my server, so when I deploy this I'll turn off JS input until I am confident with the security measures i've set
    document.getElementById("result").contentWindow.eval(myJS)


})

//fields bar
$("#toggleHTMLField").click(function () {

//            $("#fieldHTML").toggle("fast", toggleBGColour(this))

    $("#fieldHTML").toggle("fast")
    $(this).toggleClass("active")



})

$("#toggleCSSField").click(function () {

    $("#fieldCSS").toggle("fast")
    $(this).toggleClass("active")

})

$("#toggleJSField").click(function () {

    $("#fieldJS").toggle("fast")
    $(this).toggleClass("active")

})

$("#toggleResultField").click(function () {

    $("#fieldResult").toggle("fast")
    $(this).toggleClass("active")

})






//helper functions

//NO LONGER NEEDED: toggles background colour of element from black to grey
//function toggleBGColour(element){
//
////            alert("element's bg color = " + $(element).css("background-color"))
//
//    //if blue/enabled, disable it (make it black)
//    //for some reason i need to compare the background-color css property to its RGB equivalent (#0095FF will not work)
//    if ($(element).css("background-color") == "rgb(0, 149, 255)"){
//
//        //console.log("element's bg color should be BLUE, is = " + $(element).css("background-color"))
//        $(element).css("background-color", "#333")
//    }
//    //otherwise enable it (make it blue)
//    else{
//
//        //console.log("element's bg color should be BLACK, is = " + $(element).css("background-color"))
//        $(element).css("background-color", "#0095FF")
//    }
//}