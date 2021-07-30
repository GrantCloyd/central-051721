class OrdersController < ApplicationController
    def create
        order = Order.create(item_id:params[:item_id], user_id:session[:user_id])
        render json: order
    end 
    
end
