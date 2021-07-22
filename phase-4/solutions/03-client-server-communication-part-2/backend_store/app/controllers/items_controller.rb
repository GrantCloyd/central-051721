class ItemsController < ApplicationController
    before_action :set_item, only: [:show, :update]
    def index
        items = Item.all
        render json: items
    end
    
    def show
        render json: @item
    end

    def create
        item = Item.create(item_params)
        render json: item    
    end

    def update
        @item.update(item_params)
        render json: @item
    end


    private

    def item_params
        params.require(:item).permit(:store_id, :item_name, :description, :image_url, :price)
    end

    def set_item
        @item = Item.find(params[:id])
    end
end
