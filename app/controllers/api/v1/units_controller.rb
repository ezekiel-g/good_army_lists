class Api::V1::UnitsController < ApiController
  	def index
      	unsorted_units = Unit.all
        units = unsorted_units.sort {
            |x, y| x.display_name.gsub(/[[:punct:]]/, '').downcase <=>
            y.display_name.gsub(/[[:punct:]]/, '').downcase
        }
      	render json: units
  	end

  	def show
  		render json: Unit.find(params[:id])
  	end

  	def create
  		unit = Unit.new({
  			name: params[:name],
            display_name: params[:display_name],
  			unit_type: params[:unit_type],
            unit_type_index: params[:unit_type_index],
  			unit_size: params[:unit_size],
            unit_strength: params[:unit_strength],
  			points: params[:points],
            is_irregular: params[:is_irregular],
            limited_n: params[:limited_n],
            army_id: params[:army_id]
  		})
  		if unit.save
  			render json: unit
  		else
  			render json: { error: unit.errors.full_messages.join(' * ') }
  		end
  	end

  	def update
  		unit = Unit.find(params[:id])
  		if unit.update({
            name: params[:name],
            display_name: params[:display_name],
            unit_type: params[:unit_type],
            unit_type_index: params[:unit_type_index],
            unit_size: params[:unit_size],
            unit_strength: params[:unit_strength],
            points: params[:points],
            is_irregular: params[:is_irregular],
            limited_n: params[:limited_n],
            army_id: unit.army_id
  		})
  			render json: { unit: unit }
  		else
  			render json: { error: unit.errors.full_messages.join(' * ') }
  		end
  	end

  	def destroy
  		unit = Unit.find(params[:id])
  		unit.destroy
  		render json: { unit: unit }
  	end

  	private

  	def unit_params
  		params.require(:unit).permit(:name)
  	end
end