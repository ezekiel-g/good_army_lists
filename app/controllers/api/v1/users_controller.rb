class Api::V1::UsersController < ApiController
  	def index
    	render json: User.all.sort_by{ |user| user.username.downcase }
  	end

  	def show
  		render json: User.find(params[:id])
  	end

  	# def create
  	# 	user = User.new({
  	# 		username: params[:username],
  	# 		email: params[:email],
  	# 		email_confirmation: params[:email_confirmation],
  	# 		password: params[:password],
  	# 		password_confirmation: params[:password_confirmation],
  	# 		role: params[:role]
  	# 	})
  	# 	if user.save
  	# 		render json: user
  	# 	else
  	# 		render json: { error: user.errors.full_messages.join(' * ') }
  	# 	end
  	# end

  	# def update
  	# 	user = User.find(params[:id])
  	# 	if user.update({
  	# 		username: user.username,
  	# 		email: params[:email],
  	# 		email_confirmation: params[:email_confirmation],
  	# 		password: params[:password],
  	# 		password_confirmation: params[:password_confirmation],
  	# 		role: user.role
  	# 	})
  	# 		render json: { user: user }
  	# 	else
  	# 		render json: { error: user.errors.full_messages.join(' * ') }
  	# 	end
  	# end

  	def destroy
  		user = User.find(params[:id])
  		user.destroy
  		render json: { user: user }
  	end

  	# private

  	# def user_params
  	# 	params.require(:user).permit(:username)
  	# end
end