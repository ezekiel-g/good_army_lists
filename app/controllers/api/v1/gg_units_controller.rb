class Api::V1::GgUnitsController < ApiController
    def index
        unsorted_gg_units = GgUnit.all
        gg_units = unsorted_gg_units.sort {
            |x, y| x.display_name.gsub(/[[:punct:]]/, '').downcase <=>
            y.display_name.gsub(/[[:punct:]]/, '').downcase
        }
        render json: gg_units
    end

    def show
      render json: GgUnit.find(params[:id])
    end
end