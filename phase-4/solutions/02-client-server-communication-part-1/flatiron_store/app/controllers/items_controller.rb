class ItemsController < ApplicationController
    def index
        items = Item.all
        render json: items
    end
    
    def show
        item = Item.find(params[:id])
        render json: item
    end

    def create
        byebug
        item = Item.create(item_params)
        if item.valid?
            render json: item
        else 
            render json: {status: "error", message: Items.errors}, status: 422
        end 
    end

    def update
        item = Item.find(params[:id])
        Item.update(item_params)
        render json: item
    end 

    def destroy
        item = Item.find(params[:id])
        Item.delete
        render json: {message: 'item removed'}
    end 

    private

    def item_params
        params.require(:item).permit(:store_id, :item_name, :description, :image_url, :price)
    end
end
