class Api::V1::WmrUnitsController < ApiController
    def index
        unsorted_units = WmrUnit.all
        units = unsorted_units.sort {
            |x, y| x.display_name.gsub(/[[:punct:]]/, '').downcase <=>
            y.display_name.gsub(/[[:punct:]]/, '').downcase
        }
        render json: units
    end

    def show
      render json: WmrUnit.find(params[:id])
    end
end