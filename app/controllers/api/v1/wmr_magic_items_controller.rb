class Api::V1::WmrMagicItemsController < ApiController
    def index
        unsorted_magic_items = WmrMagicItem.all
        magic_items = unsorted_magic_items.sort {
            |x, y| x.display_name.gsub(/[[:punct:]]/, '').downcase <=>
            y.display_name.gsub(/[[:punct:]]/, '').downcase
        }
        render json: magic_items
    end

    def show
      render json: WmrMagicItem.find(params[:id])
    end
end