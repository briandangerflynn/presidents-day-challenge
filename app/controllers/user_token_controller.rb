# frozen_string_literal: true

class UserTokenController < Knock::AuthTokenController
  skip_before_action :verify_authenticity_token, raise: false

  def create
    @user = User.select(:id, :username, :email, :created_at, :updated_at).find entity.id
    @teams = @user.teams.order(created_at: :desc)
    render json: {user: @user, token: auth_token.token, teams: @teams }, status: :created
  end

  private

  def entity
    @entity ||=
      if entity_class.respond_to? :from_token_request
        entity_class.from_token_request request
      else
        entity_class.find_by username: auth_params[:username]
      end
  end

  def auth_params
    params.require(:auth).permit :username, :password
  end

end
