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
let country_id
let cvc
let lvc

function medalsvg(color, title){
  return ("<div class='acontainer'><svg class=xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 744.09 1052.4' version='1.1'>" + 
  "<title>Achievement: "+title+"</title>" + 
  "<g><g transform='matrix(1.0009 0 0 1.0009 -6.2462 46.568)'>" + 
  "<path style='stroke:"+color+";stroke-width:20;fill:"+color+"' d='m187.25-26.544v470.09l50 50 2 2 48 48 2 2 48 48 2 2 40.406 40.406h9.1876l0.40625-0.40625 42-42 2-2 46-46 4-4 46-46 2-2 50-50v-470.09h-344z' /></g>" + 
  "<path style='stroke:"+color+";stroke-width:2.7902;fill:"+color+"' d='m205.71 192.36a71.429 71.429 0 1 1 -142.86 0 71.429 71.429 0 1 1 142.86 0z' transform='matrix(3.2266 0 0 3.2266 -52.227 164.74)'' /></g></svg></div>")
}

function globesvg(color, title){
  return ("<div class='acontainer'><svg xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg' viewBox='0 0 160 160' version='1.1'>" +
  "<title>Achievement: "+title+"</title>" + 
  "<g transform='translate(184.53 -764.56)'>" +
  "<path style='fill:" + color + "' d='m-100.6 764.66c-21.346-1.0484-41.82 6.2731-57.643 20.622-15.847 14.364-25.139 34.023-26.187 55.355-1.0484 21.347 6.2729 41.822 20.637 57.654 14.341 15.831 33.999 25.124 55.345 26.172 44.072 2.1646 81.658-31.919 83.822-75.977 2.1638-44.059-31.902-81.662-75.974-83.826zm63.224 83.2c-0.367 7.4689-1.9616 14.587-4.5388 21.176-5.3667-0.699-10.663-1.5857-15.888-2.675 5.3602-13.014 7.1915-27.28 5.1601-41.604-1.9358-13.625-7.2419-25.979-14.924-36.319 19.179 12.669 31.398 34.844 30.191 59.422zm-51.311-56.044c-13.148 15.1-24.369 31.883-33.274 50.025-7.5319-4.3654-14.783-9.1679-21.724-14.36 5.6622-10.761 14.151-19.81 24.825-26.222 9.4861-5.7146 19.827-8.7743 30.173-9.4427zm-38.584 61.698c-5.6789 13.434-10.13 27.54-13.179 42.173-0.469-0.711-0.93-1.4361-1.3679-2.1681-9.2593-15.39-11.962-33.476-7.6309-50.881 0.24-1.0043 0.524-1.9606 0.81-2.9625 6.8515 4.9967 13.981 9.6175 21.368 13.838zm4.8858 49.065c-2.1773 0.313-4.3479 0.489-6.507 0.589 2.7925-15.173 7.1526-29.757 12.921-43.607 12.415 6.2022 25.456 11.319 39.03 15.225-0.377 0.516-0.755 1.0706-1.1482 1.6014-10.797 14.359-26.516 23.649-44.296 26.191zm11.676-54.654c8.9627-18.392 20.442-35.3 33.986-50.365 5.8604 8.3783 9.9015 18.18 11.434 28.974 1.8043 12.725-0.02 25.378-5.1312 36.816-14.053-3.8073-27.533-9.0074-40.289-15.425zm-38.962-53.168c13.305-12.074 30.505-18.227 48.445-17.346 4.0544 0.199 8.0134 0.783 11.836 1.6584-12.368 0.783-24.724 4.4237-36.052 11.24-11.989 7.2111-21.663 17.218-28.364 29.074-3.11-2.628-6.1477-5.3287-9.1191-8.1334 3.4772-6.0937 7.914-11.659 13.254-16.492zm-22.001 46.507c0.3-6.1046 1.4236-12.031 3.2826-17.685 2.947 2.6812 5.9587 5.289 9.0424 7.8318-0.962 2.6418-1.7988 5.3587-2.5008 8.1433-3.4271 13.782-3.1273 27.899 0.681 41.204-7.4934-11.682-11.199-25.356-10.505-39.494zm65.605 70.49c15.132-5.1088 28.388-14.634 38.189-27.698 1.4386-1.9157 2.7884-3.8891 4.0418-5.9209 5.1918 1.1489 10.43 2.1243 15.746 2.9355-12.33 18.983-33.903 31.254-57.977 30.683z'/></g></svg></div"
  )}


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
      
function reloadColorArray(){
  colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
}
let achievementNumbers
let cAchievementNumbers
function updateAchievements(){
  cvc = Cookies.get("cvc")
  lvc = Cookies.get("lvc")
  achievementNumbers.forEach( x => {
    if (parseInt(lvc) >= x) {
      $("#achievements").append(medalsvg(colorArray.pop(),x + " clicks!"))
      if (colorArray.length === 0){reloadColorArray()}
    } 
  })
  if (lvc) {
    achievementNumbers = achievementNumbers.filter(ac => ac > parseInt(lvc));
  }

  cAchievementNumbers.forEach( x => {
    if (Array.isArray(cvc) && cvc.length >= x) {
      $("#achievements").append(globesvg(colorArray.pop(),x + " governments rated!"))
      if (colorArray.length === 0){reloadColorArray()}
    } 
  })
  if (Array.isArray(cvc)) {
    cAchievementNumbers = cAchievementNumbers.filter(ac => ac > cvc.length);
  }




}

let votesLastSentTime = Date.now()
let unsentVotes = 0
let lastVoteRating = 0



function sendUnsentVotes() {
  let country_code = $("#vote1").attr("data-govid")
  $.ajax({
    type: "POST",
    headers: {
      "X-CSRF-Token": csrfToken,
    },
    url: "/vote",
    data: {
      vote_count: unsentVotes,
      cc: country_code,
      rating_no: lastVoteRating,
      check_code: Date.now()
    },
    success: function(){
      updateHistory()
      updateAchievements()
    }
  })
  votesLastSentTime = Date.now()
  unsentVotes = 0
}

function renumberVotes(voted_rating_no){
  let total = 0
  let old_score = $(".result:nth-of-type("+voted_rating_no+")").attr("data-rawscore")
  $(".result:nth-of-type("+voted_rating_no+")").attr("data-rawscore",1 + parseInt(old_score))
  $(".result").each(function(){
    total += parseInt($(this).attr("data-rawscore"))
  })
  console.log(total)
  $(".result").each(function(){
    let score = parseFloat($(this).attr("data-rawscore"))
    let percent = (Math.round(1000*score/total)/10).toString()
    if (percent.slice(-2)[0] != ".") {
      percent = percent + ".0"
    }
    $(this).text(percent + "% (" + score + " ratings)")
  })
}
function activateVoteButtons(){
  $(".voteButton").mousedown(function(event){
    if (event.which === 1) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  })

  



  $(".voteButton").click(function(){
    let voteRating = parseInt(this.id.split("vote")[1])
    
    console.log(voteRating)
    console.log(lastVoteRating)
    if (voteRating != lastVoteRating) {
      sendUnsentVotes()
      unsentVotes += 1
      lastVoteRating = voteRating
      sendUnsentVotes()
    } else if (Date.now() - votesLastSentTime >= 1000) {
      unsentVotes += 1
      lastVoteRating = voteRating
      sendUnsentVotes()
    } else {
      unsentVotes += 1
      lastVoteRating = voteRating
      renumberVotes(lastVoteRating)
    }
    
    

    country_id = parseInt($("#vote1").attr("data-govrecordid"))

    if (!Cookies.get("lvc")) {
      Cookies.set("lvc",0)
    }
    Cookies.set("lvc",Cookies.get("lvc") + 1)
    if (!Array.isArray(Cookies.get("cvc"))) {
      Cookies.set("cvc",[])
    }
    let a = Cookies.get("cvc")
    if (!a.includes(country_id)){
      a.push(country_id)
    }
    a = [...new Set(a)]
    Cookies.set("cvc",a)

    updateHistory()
    updateAchievements()
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
        sendUnsentVotes()
        $("body").removeClass("carers")
        window.history.pushState(null, null, $( "select option:selected" ).val());
        activateSelect()
        $( "select option:selected" ).text($( "select option:selected" ).attr("data-fullname"))
        selectLength = $( "select option:selected" ).attr("data-fullname").length
        $("select").width(10 + selectLength * 16 + "px")
        achievementNumbers = [10,20,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000,500000,1000000]
        cAchievementNumbers = [2,5,10,20,50,100,200,249]
        reloadColorArray()
        updateAchievements()
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
  cAchievementNumbers = [2,5,10,20,50,100,200,249]
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

  $(window).on('beforeunload', function() {
    console.log("bye!")
    sendUnsentVotes()
  });
})
