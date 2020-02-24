require 'rails_helper'

feature 'user makes list', %Q{
	As a user
	I want to be able to add units
	To make a legal army list
} do

	scenario 'user adds unit' do
		visit game_path(Game.find_by(name: 'Kings of War'))

		find('.Select.react-select').click
		within('.Select.react-select') do
			find('Select-option', text: 'Kingdoms of Men').click
		end

		expect(page).to have_content('Available Units')
		expect(page).to have_content('Kingdoms of Men')
		expect(page).to have_content('Points: ')
		expect(page).to have_content('Unit Count: ')
		expect(page).to have_content('Unit Strength: ')
	end
end