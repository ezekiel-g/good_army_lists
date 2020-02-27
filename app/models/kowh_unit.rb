class KowhUnit < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :display_name, presence: true
	validates :unit_type, presence: true
	validates :unit_type_index, presence: true, numericality: { only_integer: true }
	validates :unit_strength, presence: true, numericality: { only_integer: true }
	validates :points, presence: true, numericality: { only_integer: true }
end