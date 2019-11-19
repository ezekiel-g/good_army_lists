class Army < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :alignment, presence: true, inclusion: { in: %w(Good Evil Neutral),
    message: "%{value} is not a valid alignment" }

	has_many :units, dependent: :destroy

	def all_units
		Unit.where(army_id: self.id)
	end

	def all_unit_names
		unsorted_names = []
		units = Unit.where(army_id: self.id)
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