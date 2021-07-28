class UsersController < ApplicationController
    def create
       user = User.create(user_params)
       if user.valid?
            render json: {id:user.id, username: user.user_name}
       else 
            render json: {message: user.errors.full_messages}
       end 
    end 

    private

    def user_params
        params.require(:user).permit(:user_name, :password, :address)
    end

end
