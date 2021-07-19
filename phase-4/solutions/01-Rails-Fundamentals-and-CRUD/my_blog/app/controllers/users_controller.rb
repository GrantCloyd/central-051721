class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def update
    # find the user
    user = User.find(params[:id])
    # update the user - how? reassign values - where are values coming from? by pulling from user_params
    user.update(user_params)
    # render json for that user
    render json: user
  end
  
  def destroy
    # find the user by the id
    user = User.find(params[:id])
    # destroy it
    byebug
    user.destroy
    # render json for that destroyed user
    render json: user
  end

 
  private 

  # strong parameters
  def user_params 
    params.require(:user).permit(:username, :email)
  end
end
