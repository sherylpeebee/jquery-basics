// 'use strict';
//
// $(document).ready(init);
//
// function init(){
//   $("#go").click(go);
// }
//
// function go(){
//   var numbers = $('#numbers').val();//.val retrieves input of numbers; .text for letters//
//   numbers = numbers.split(',');
//   numbers = numbers.map(function(n)){
//     return n * 1;
//   };
//   var sum = numbers.reduce(function(old, curr)){
//     return old + curr;
//   }
//
// var product =   var sum = numbers.reduce(function(old, curr)){
//     return old * curr;
//
//   $('#sum').text(sum);
//   $('#product').text(product;);
// }

'use strict';

$(document).ready(init);

function init(){

  $('.article').click(setText);
  $('.noun').click(setText);
  $('.adj').click(setText);
  $('.verb').click(setText);
  $('#cleat').click(clear);
}

function clear(){
$('#sentence').text('');

}

function setText(){
var old = $('#sentence').text();
var text = $(this).text();
var newText = old + ' ' + text;
$('#sentence').text(newText);
}
