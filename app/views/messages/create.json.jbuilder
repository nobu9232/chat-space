json.user_name  @message.user.name
json.time  @message.created_at.strftime("%Y/%m/%d %H:%M")
json.text  @message.text
json.image_url @message.image.url
# json.user_id @message.user.id
# json.gruop_id @message.group.id