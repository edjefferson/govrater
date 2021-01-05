// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import $ from 'jquery';
global.$ = $;

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


Rails.start()
Turbolinks.start()
ActiveStorage.start()

const csrfToken = document.querySelector('meta[name="csrf-token"]').content

let audioElement
function activateVoteButtons(){
  $(".voteButton").mousedown(function(event){
    if (event.which === 1) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  })

  $(".voteButton").click(function(){
    
    let country_code = $(this).attr("data-govid")
    console.log(country_code);

    $.ajax({
      type: "POST",
      headers: {
        "X-CSRF-Token": csrfToken,
      },
      url: "/vote",
      data: {
        cc: country_code,
        rating_no: this.id.split("vote")[1],
        
      },
      success: function(){
      }
    })
  })
}




$('document').ready(function(){
  window.history.replaceState(null, null, $( "select option:selected" ).val());

  audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'button2.mp3');
  activateVoteButtons()
  
  activateSelect()
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
        }
    })
  })
  }
})
  