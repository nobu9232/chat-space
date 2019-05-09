class Api::MessagesController < ApplicationController
  before_action :set_group, only: [:index]

  def index
    @messages = @group.messages.includes(:user).where('id > ?', params[:id])
  end

  private

  def set_group
    @group = Group.find(params[:group_id])
  end
end