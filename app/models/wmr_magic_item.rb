class WmrMagicItem < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :display_name, presence: true
	validates :magic_item_type, presence: true, inclusion: {
		in: %w("Magic Standard" "Magic Weapon" "Device of Power"),
    	message: "%{value} is not a valid magic item type"
    }
	validates :points, presence: true, numericality: true
	validates :description, presence: true

	belongs_to :wmr_army
end