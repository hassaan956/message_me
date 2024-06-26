// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// import '@doabit/semantic-ui-sass'

require("@rails/ujs").start
require("jquery")
require("turbolinks").start()
// Loads all Semantic javascripts
require("semantic-ui")
//= require semantic-ui/dropdown

require("@rails/activestorage").start()
require("channels")
//= require_tree .

// require rails-ujs
// require jquery
// require activestorage
// require turbolinks
  
import $ from 'jquery'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.js'



$(function() {
  $('.ui.dropdown').dropdown();
});


$(document).on('turbolinks:load', function() {
  // $('.ui.dropdown').dropdown();
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

submit_message = function() {
  $('#message_body').on('keydown', function(e) {
    if (e.keyCode == 13) {
      $('button').click();
      e.target.value = "";
    };
  });
};

  submit_message();
  scroll_bottom();
})