class OrdersController < ApplicationController

    def show
        order = Order.find(params[:id])
        render json: order, include: [:item, :user]
    end

    def create
        order = Order.create(order_params)
        if order.valid?
            render json: order
        else
            render json: { message: order.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    private

    def order_params
        params.require(:order).permit(:item_id, :user_id)
    end
end
