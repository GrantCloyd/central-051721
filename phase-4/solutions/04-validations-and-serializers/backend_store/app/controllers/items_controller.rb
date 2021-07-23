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
        item = Item.create(item_params)
        if item.valid?
            render json: item
        else
            render json: {message: item.errors.full_messages.to_sentence}, status: :unprocessable_entity
        end
    end

    def update
        item = Item.find(params[:id])
        item.update(item_params)

        render json: item
    end 

    def destroy
        item = Item.find(params[:id])
        item.destroy
        render json: item
    end

    
    private

    def item_params
        params.require(:item).permit(:store_id, :item_name, :description, :image_url, :price)
    end
end
