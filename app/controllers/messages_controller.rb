class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def create
    @message = @group.messages.new(message_params)
    respond_to do |format|
      if @message.save
      format.json
      else
        @messages = @group.messages.includes(:user)
        flash.now[:alret] = "メッセージを入力してください"
        render :index
      end
    end
  end

  def destroy
  end

  private

  def message_params
    params.require(:message).permit(:text, :image, :created_at).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end