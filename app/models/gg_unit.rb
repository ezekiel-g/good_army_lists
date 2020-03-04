class GgUnit < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :display_name, presence: true
	validates :unit_type, presence: true
	validates :unit_type_index, presence: true, numericality: { only_integer: true }
	validates :unit_strength, presence: true, numericality: { only_integer: true }
	validates :points, presence: true, numericality: { only_integer: true }
    validates :limited_n, null: false
    validates :unlocking_class, null: false
    validates :is_irregular, default: false, null: false
    validates :is_army_specific, default: false, null: false
    validates :height, presence: true
    validates :speed, presence: true
    validates :melee, presence: true
    validates :ranged, presence: true
    validates :defense, presence: true
    validates :attacks, presence: true
    validates :nerve, presence: true
end