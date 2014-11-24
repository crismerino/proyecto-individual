class AddImagenToMonumentos < ActiveRecord::Migration
  def change
    add_column :monumentos, :imagen, :string
  end
end
