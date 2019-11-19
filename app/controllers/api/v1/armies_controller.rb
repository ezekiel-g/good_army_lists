class Api::V1::ArmiesController < ApiController
  	def index
        unsorted_armies = Army.all
        armies = unsorted_armies.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
    	render json: armies
  	end

  	def show
  		render json: Unit.where(army_id: Army.find(params[:id]))
  	end

  	def create
  		army = Army.new({
            name: params[:name],
            alignment: params[:alignment]
        })
  		if army.save
  			render json: army
  		else
  			render json: { error: army.errors.full_messages.join(' * ') }
  		end
  	end

  	def update
  		army = Army.find(params[:id])
  		if army.update({
            name: params[:name],
            alignment: params[:alignment]
        })
  			render json: { army: army }
  		else
  			render json: { error: army.errors.full_messages.join(' * ') }
  		end
  	end

  	def destroy
  		army = Army.find(params[:id])
  		army.destroy
  		render json: { army: army }
  	end

  	private

  	def army_params
  		params.require(:army).permit(:name, :alignment)
  	end
end