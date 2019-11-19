class Api::V1::ArtefactsController < ApiController
  	def index
      	unsorted_artefacts = Artefact.all
        artefacts = unsorted_artefacts.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
      	render json: artefacts
  	end

  	def show
  		render json: Artefact.find(params[:id])
  	end

  	def create
  		artefact = Artefact.new({
  			name: params[:name],
            display_name: params[:display_name],
  			points: params[:points],
  			is_heroic: params[:is_heroic]
  		})
  		if artefact.save
  			render json: artefact
  		else
  			render json: { error: artefact.errors.full_messages.join(' * ') }
  		end
  	end

  	def update
  		artefact = Artefact.find(params[:id])
  		if artefact.update({
            name: params[:name],
            display_name: params[:display_name],
            points: params[:points],
            is_heroic: params[:is_heroic]
  		})
  			render json: { artefact: artefact }
  		else
  			render json: { error: artefact.errors.full_messages.join(' * ') }
  		end
  	end

  	def destroy
  		artefact = Artefact.find(params[:id])
  		artefact.destroy
  		render json: { artefact: artefact }
  	end

  	private

  	def artefact_params
  		params.require(:artefact).permit(:name)
  	end
end