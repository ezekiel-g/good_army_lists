class Api::V1::GgUnitOptionsController < ApiController
    def index
        unsorted_gg_unit_options = GgUnitOption.all
        gg_unit_options = unsorted_gg_unit_options.sort {
            |x, y| x.name.sub(/^(A|An|The)\s/i, "").downcase <=>
            y.name.sub(/^(A|An|The)\s/i, "").downcase
        }
        render json: gg_unit_options
    end

    def show
        render json: GgUnitOption.find(params[:id])
    end
end