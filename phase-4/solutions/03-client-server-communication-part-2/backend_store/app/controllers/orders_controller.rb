class OrdersController < ApplicationController

  def show
    order = Order.find(params[:id])
    render json: order, include: [:item, :user]
  end
  
  def create
    order = Order.create(order_params)
    render json: order, status: :created
  end

  private

  def order_params
    params.require(:order).permit(:user_id, :item_id)
  end
   
end
