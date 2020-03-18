$(function(){

function buildHTML(message){
  if ( message.image ) {
    var html =
     `<div class="message">
        <div class="upper-message_info">
          <div class="upper-message__talker">
            ${message.user_name}
          </div>
          <div class="upper-message__info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
        <img src=${message.image} >
      </div>`
    return html;
  } else {
    var html =
     `<div class="message">
        <div class="upper-message__txit">
          <div class="upper-message__comtent">
            ${message.user_name}
          </div>
          <div class="upper-message__date">
            ${message.created_at}
          </div>
        </div>
        <div class="lower-message">
          <p class="lower-message__content">
            ${message.content}
          </p>
        </div>
      </div>`
    return html;
  };
}


  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      datatype: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html); 
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight
    });
      $('.form__submit').prop('disabled', false);
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
})
});

