class Api::V1::GamesController < ApiController
  	def index
      	unsorted_games = Game.all
        games = unsorted_games.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
      	render json: games
  	end

   	def show
  		render json: Game.find(params[:id])
  	end
end