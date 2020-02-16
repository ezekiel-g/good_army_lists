class Game < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :display_name, presence: true
	validates :abbreviation, presence: true
	validates :company, presence: true

	def to_param
		abbreviation
	end
end