# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  before_action :authenticate_user, only: %i[verify]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @user = User.select(:id, :username, :email, :created_at, :updated_at).find @user.id
      @token = Knock::AuthToken.new payload: { sub: @user.id }
      @teams = @user.teams.order(created_at: :desc)

      render json: {user: @user, token: @token.token, teams: @teams }, status: :created
    else
      @user.errors
      render json: {error: @user.errors}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.id == params[:id].to_i
      @user.update_attribute(:username, params[:username])
      @user.update_attribute(:email, params[:email])
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    # @user.destroy
  end

  def verify
    render json: { user: current_user, teams: current_user.teams.order(created_at: :desc) }
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :username)
  end
end
