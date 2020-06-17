class Api::V1::WmrArmiesController < ApiController
  	def index
        unsorted_armies = WmrArmy.all
        armies = unsorted_armies.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
    	render json: armies
  	end

  	def show
  		render json: WmrUnit.where(army_id: WmrArmy.find(params[:id]))
  	end
end