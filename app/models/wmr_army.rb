class WmrArmy < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	has_many :units, dependent: :destroy

	def all_units
		WmrUnit.where(wmr_army_id: self.id)
	end

	def all_unit_names
		unsorted_names = []
		units = WmrUnit.where(wmr_army_id: self.id)
		units.each do |unit|
			unsorted_names << unit.name
		end
		names = unsorted_names.sort {
			|x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
		}
		names
	end
end