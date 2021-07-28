class LogInController < ApplicationController
    def create
            user = User.find_by(user_name:params[:user_name])
            if user && user.authenticate(params[:password])
                render json: {id: user.id, username: user.user_name, }
            else 
                
                render json: {message: ['incorrect user or password']}
            end 
    end 
end
