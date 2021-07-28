class CreateStores < ActiveRecord::Migration[6.1]
  def change
    create_table :stores do |t|
      t.string :store_name
      t.string :mission
      t.string :owner

      t.timestamps
    end
  end
end
