class Api::V1::UnitOptionsController < ApiController
  	def index
      	unsorted_unit_options = UnitOption.all
        unit_options = unsorted_unit_options.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
      	render json: unit_options
  	end

  	def show
  		render json: UnitOption.find(params[:id])
  	end

  	def create
  		unit_option = UnitOption.new({
  			name: params[:name],
  			display_name: params[:display_name],
            is_spell: params[:is_spell],
            is_unique: params[:is_unique],
  			points: params[:points],
            unit_id: params[:unit_id]
  		})
  		if unit_option.save
  			render json: unit_option
  		else
  			render json: { error: unit_option.errors.full_messages.join(' * ') }
  		end
  	end

  	def update
  		unit_option = UnitOption.find(params[:id])
  		if unit_option.update({
            name: params[:name],
            display_name: params[:display_name],
            is_spell: params[:is_spell],
            is_unique: params[:is_unique],           
            points: params[:points],
            unit_id: unit_option.unit_id
  		})
  			render json: { unit_option: unit_option }
  		else
  			render json: { error: unit_option.errors.full_messages.join(' * ') }
  		end
  	end

  	def destroy
  		unit_option = UnitOption.find(params[:id])
  		unit_option.destroy
  		render json: { unit_option: unit_option }
  	end

  	private

  	def unit_option_params
  		params.require(:unit_option).permit(:name)
  	end
end