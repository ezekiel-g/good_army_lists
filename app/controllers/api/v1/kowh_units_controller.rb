class Api::V1::KowhUnitsController < ApiController
    def index
        unsorted_kowh_units = KowhUnit.all
        kowh_units = unsorted_kowh_units.sort {
            |x, y| x.display_name.gsub(/[[:punct:]]/, '').downcase <=>
            y.display_name.gsub(/[[:punct:]]/, '').downcase
        }
        render json: kowh_units
    end

    def show
      render json: KowhUnit.find(params[:id])
    end
end