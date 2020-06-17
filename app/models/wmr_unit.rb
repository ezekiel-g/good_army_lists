class WmrUnit < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :display_name, presence: true
	validates :unit_type, presence: true
	validates :unit_type_index, presence: true, numericality: { only_integer: true }
	validates :attacks, presence: true
	validates :hits, presence: true
	validates :armor, presence: true
	validates :command, presence: true
	validates :unit_size, presence: true
	validates :points_per_stand, presence: true
	validates :min_max, presence: true

	belongs_to :wmr_army

    def army_name
        WmrArmy.find_by_id(self.army_id).name
    end
end