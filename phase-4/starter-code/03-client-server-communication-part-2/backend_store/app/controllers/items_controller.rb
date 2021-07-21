class ItemsController < ApplicationController
    def index
        items = Item.all
        render json:items
    end
    
    def show
        item = Item.find(params[:id])
        render json:item
    end

    def create
        item = Item.create(item_params)
        render json:item
    
    end


    private

    def item_params
        params.require(:item).permit(:store_id, :item_name, :description, :image_url, :price)
    end
end
