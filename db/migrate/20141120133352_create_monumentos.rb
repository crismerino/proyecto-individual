class CreateMonumentos < ActiveRecord::Migration
  def change
    create_table :monumentos do |t|
      t.string :nombre
      t.text :descripcion
      t.integer :precio_entrada
      t.integer :tiempo_visita

      t.timestamps
    end
  end
end
