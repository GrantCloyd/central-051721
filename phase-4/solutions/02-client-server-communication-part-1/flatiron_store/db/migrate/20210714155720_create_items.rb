class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.string :description
      t.string :image_url
      t.float :price
      t.belongs_to :store, null: false, foreign_key: true


      t.timestamps
    end
  end
end
