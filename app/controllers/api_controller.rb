class ApiController < ApplicationController 	
 	protect_from_forgery unless: -> { request.format.json? }
 	respond_to :json
 	# protect_from_forgery with: :null_session
 	skip_before_action :verify_authenticity_token
end