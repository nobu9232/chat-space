$(function(){
  function buildHTML(message){
    var text = message.text !== null ? `${message.text}` : ""
    var image = message.image_url !== null ? `<img class=""input--box__image src=${message.image_url}></img>` : ""
    var html = `<div class="message_list">
                  <div class="upper--info">
                    <p class = upper--info__user>
                      ${message.user_name}
                    </p>
                    <p class="upper--info__date"> 
                      ${message.time}
                    </p>
                  </div>
                  <div class="message--text">
                    ${text}
                    ${image}
                  </div>
                </div>`;
    return html;
  }
  $('.new-message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      datatype: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.new-message')[0].reset();
      $('.new--message__submit--btn').prop('disabled',false);
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('メッセージを入力してください');
      $('.new--message__submit--btn').prop('disabled',false);
    })
  })
})