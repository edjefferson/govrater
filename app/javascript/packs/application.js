// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import $ from 'jquery';
global.$ = $;
import Cookies from 'js.cookie';
window.Cookies = Cookies;


import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

const csrfToken = document.querySelector('meta[name="csrf-token"]').content

let audioElement

let cvc
let lvc

function medalsvg(color, title){
  return ("<div class='acontainer'><svg class=xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 744.09 1052.4' version='1.1'>" + 
  "<title>Achievement: "+title+"</title>" + 
  "<g><g transform='matrix(1.0009 0 0 1.0009 -6.2462 46.568)'>" + 
  "<path style='stroke:"+color+";stroke-width:20;fill:"+color+"' d='m187.25-26.544v470.09l50 50 2 2 48 48 2 2 48 48 2 2 40.406 40.406h9.1876l0.40625-0.40625 42-42 2-2 46-46 4-4 46-46 2-2 50-50v-470.09h-344z' /></g>" + 
  "<path style='stroke:"+color+";stroke-width:2.7902;fill:"+color+"' d='m205.71 192.36a71.429 71.429 0 1 1 -142.86 0 71.429 71.429 0 1 1 142.86 0z' transform='matrix(3.2266 0 0 3.2266 -52.227 164.74)'' /></g></svg></div>")
}


let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
      
      
let achievementNumbers
function updateAchievements(){
  cvc = Cookies.get("cvc")
  lvc = Cookies.get("lvc")
  achievementNumbers.forEach( x => {
    if (parseInt(lvc) >= x) {
      $("#achievements").append(medalsvg(colorArray[Math.floor(Math.random() * colorArray.length)],x + " clicks!"))
    } 
  })
  if (lvc) {
    achievementNumbers = achievementNumbers.filter(ac => ac > parseInt(lvc));
  }
  console.log(achievementNumbers)




}

function activateVoteButtons(){
  $(".voteButton").mousedown(function(event){
    if (event.which === 1) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  })

  $(".voteButton").click(function(){
    
    let country_code = $(this).attr("data-govid")

    $.ajax({
      type: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
      },
      url: "/vote",
      data: {
        cc: country_code,
        rating_no: this.id.split("vote")[1],
        check_code: Date.now()
      },
      success: function(){
        updateHistory()
        updateAchievements()
      }
    })
  })
}

function activateSelect(){
  let selectLength = $( "select option:selected" ).text().length
  $("select").width(10 + selectLength * 16 + "px")
  $("select").change(function(){
    $.ajax({
      type: "GET", 
      url: "/load_country",
      data: {
        cc: $(this).val()        
      },
      success: function(){
        window.history.pushState(null, null, $( "select option:selected" ).val());

        activateSelect()
        $( "select option:selected" ).text($( "select option:selected" ).attr("data-fullname"))
        selectLength = $( "select option:selected" ).attr("data-fullname").length
        $("select").width(10 + selectLength * 16 + "px")
        activateVoteButtons()
        updateHistory()
      }
    })
  })
}

function updateHistory(){
  let history = JSON.parse($("#results").attr("data-historyscores"))
  history.forEach( h => {
    let formatted_percent = String(Math.round(h.percent * 1000)/10)
    if (~formatted_percent.indexOf(".") ) {
      formatted_percent = formatted_percent + "%"
    } else {
      formatted_percent = formatted_percent + ".0%"
    }

    let current_percent = $(".result:nth-of-type(" + h.rating_no + ")").attr("data-rawpercent")
    if (!h.percent && h.percent != 0 ) {
      //e.log("no current data")
    } else if (current_percent > h.percent * 100 ) {
      $(".result:nth-of-type(" + h.rating_no + ") > #yesterday").text("was " + formatted_percent + " yesterday")
      $(".result:nth-of-type(" + h.rating_no + ") > #arrows > .greenarrow").css("display","inline")
    } else if (current_percent < h.percent * 100 ) {
      $(".result:nth-of-type(" + h.rating_no + ") > #yesterday").text("was " + formatted_percent + " yesterday")

      $(".result:nth-of-type(" + h.rating_no + ") > #arrows > .redarrow").css("display","inline")
    } else {
      $(".result:nth-of-type(" + h.rating_no + ") > #yesterday").text("No change")

    }
    //console.log(h)

  })
}

$('document').ready(function(){
  achievementNumbers = [10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000,500000,1000000]

  updateAchievements()

  audioElement = document.createElement('audio');
  if ($("body").hasClass("carers")) {
    audioElement.setAttribute('src', 'clapclapclap.mp3');
    window.history.replaceState(null, null, $( "select option:selected" ).val() + "?heroes=click");
  } else {
    audioElement.setAttribute('src', 'button2.mp3');
    window.history.replaceState(null, null, $( "select option:selected" ).val());

  }
  activateVoteButtons()
  activateSelect()
  updateHistory()
})
