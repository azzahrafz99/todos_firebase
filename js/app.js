$(document).ready(function() {
  refreshCount();
});

$("#new-todo").keypress(function(e) {
  var toAdd = $('input[name=todos]').val();

  if (e.which == 13 && toAdd.length > 0) {
    var uid = Math.floor(Date.now() / 1000);

    writeTodos(uid, toAdd, 'Pending');
  }
});

$('body').on('click', '.destroy', function() {
  $(this).parent().parent().remove();
  refreshCount();
});


$('body').on('click', '.toggle', function() {
  if($(this).parent().parent().hasClass('completed')){
    $(this).parent().parent().removeClass('completed');
  } else {
    $(this).parent().parent().addClass('completed');
  }
  console.log($(this));
});

$('#toggle-all').click(function() {
  console.log($(this));
  $('.toggle').each(function(){
    console.log($(this));
    if($(this).parent().parent().hasClass('completed')){
      $(this).parent().parent().removeClass('completed');
    } else {
      $(this).parent().parent().addClass('completed');
    }

    if($(this).prop('checked')) {
      $(this).prop('checked', false);
    } else {
      $(this).prop('checked', true);
    }
  });
});

$('#clear-completed').click(function() {
  $('.toggle').each(function() {
    if ($(this).parent().parent().hasClass('completed')) {
      $(this).parent().remove();
      refreshCount();
    }
  });
});

$('#completed').click(function() {
  $('.toggle').each(function() {
    if ($(this).parent().parent().hasClass('completed')) {
      $(this).parent().show();
    } else {
      $(this).parent().hide();
    }
  });
});

$('#active').click(function() {
  $('.toggle').each(function() {
    if ($(this).parent().parent().hasClass('completed')) {
      $(this).parent().hide();
    } else {
      $(this).parent().show();
    }
  });
});

$('#selected').click(function() {
  $('.toggle').each(function() {
    $(this).parent().show();
  });
});

// Additional functions

function refreshCount() {
  var n = $( ".view" ).length;
  $( "#todo-count" ).text( n + " items" + " left.");
  if (n > 0) {
    $('#footer').show();
  }
}
