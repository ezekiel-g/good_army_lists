class Api::V1::KowhUnitOptionsController < ApiController
  	def index
      	unsorted_kowh_unit_options = KowhUnitOption.all
        kowh_unit_options = unsorted_kowh_unit_options.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
      	render json: kowh_unit_options
  	end

  	def show
  		render json: KowhUnitOption.find(params[:id])
  	end
end