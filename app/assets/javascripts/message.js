$(function(){
  var buildHTML = function(message){
    var text = (message.text)? `${message.text}` : "";
    var image = (message.image_url)? `<img class=""input--box__image src=${message.image_url}></img>` :"";
    var time = (message.created_at)? `${message.created_at}` : "";
    var html = `<div class="message_list" data-id= "${message.id}">
                  <div class="upper--info">
                    <p class = upper--info__user>
                      ${message.user_name}
                    </p>
                    <p class="upper--info__date"> 
                      ${time}
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
    var message = $('.input--box__text').val()
    var image = $('.input--box__image').val()
    $('.new--message__submit--btn').removeAttr('data-disable-with');
    if (message == "" && image == ""){
      alert('メッセージを入力してください');
      $('.new--message__submit--btn').prop('disabled',false);
    }else{
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      
      .done(function(data){
        console.log(data)
        var html = buildHTML(data);
        $('.messages').append(html);
        $('.new-message')[0].reset();
        $('.new--message__submit--btn').prop('disabled',false);
        $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
      })
      .fail(function(){
        alert('非同期通信に失敗しました');
        $('.new--message__submit--btn').prop('disabled',false);
      })
    }
  })

  if (window.location.href.match(/\/groups\/\d+\/messages/)){
    function reloadMessages() {
      var last_message_id = $('.message_list').last().data('id');
      $.ajax({
        url: 'api/messages',
        type: 'GET',
        datatype: 'json',
        data: {id: last_message_id}
      })

      .done(function(messages){
        messages.forEach(function(message){
          var insertHTML = buildHTML(message)
          $('.messages').append(insertHTML)
        });
        $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight});
      })

      .fail(function(){ 
        alert('更新に失敗しました');
      });
    };
    setInterval(reloadMessages, 5000);
  }
})