class GamesController < ApplicationController
	def index
      	@unsorted_games = Game.all
       	@games = @unsorted_games.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
	end

	def show
		@game = Game.find_by(abbreviation: params[:abbreviation])
	end
end