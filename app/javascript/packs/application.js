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



$('document').ready(function(){

  $(".voteButton").click(function(){

    console.log(this.id);

    $.ajax({
      type: "GET", 
      url: "/vote",
      data: {
        rating_no: this.id.split("vote")[1]
      },
      success: function(){
      }
    })
  })
});

