class ItemsController < ApplicationController
      
  def index
    render json: Item.all
  end

  def create
    item = Item.create(item_params)
    render json: items, status: :created
  end

  def destroy
    item = Item.find(params[:id])
    item.destory
  end 

  private

  def item_params
    params.permit(:item_name, :description, :image_url, :price)
  end


end
