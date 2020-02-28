class Api::V1::VeteranAbilitiesController < ApiController
    def index
        unsorted_veteran_abilities = VeteranAbility.all
        veteran_abilities = unsorted_veteran_abilities.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
        render json: veteran_abilities
    end

    def show
      render json: VeteranAbility.find(params[:id])
    end
end