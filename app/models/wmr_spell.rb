class WmrSpell < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :display_name, presence: true
	validates :needed_to_cast, presence: true
	validates :range, presence: true
	validates :description, presence: true

	belongs_to :wmr_army
end