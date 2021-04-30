$(document).ready(() => {
    $('#text').keyup(function(){
      $('.preview').html($(this).val());
      $('select#font').change(function(){
        $('.preview').css({'font-family':$(this).val()})
      })
      $('select#weight').change(function(){
        $('.preview').css({'font-weight':$(this).val()})
      })
      $('input#size').keyup(function(){
        $('.preview').css({'font-size':$(this).val()+'px'})
      })
    })
  })