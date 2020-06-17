class Api::V1::WmrSpellsController < ApiController
    def index
        unsorted_units = WmrSpell.all
        spells = unsorted_spells.sort {
            |x, y| x.display_name.gsub(/[[:punct:]]/, '').downcase <=>
            y.display_name.gsub(/[[:punct:]]/, '').downcase
        }
        render json: spells
    end

    def show
      render json: WmrSpell.find(params[:id])
    end
end