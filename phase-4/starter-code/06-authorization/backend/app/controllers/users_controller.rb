class UsersController < ApplicationController

  def create
    user = User.create(user_params)
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end


  private

  def user_params
    params.permit(:username, :password, :admin, :bio)
  end

end
