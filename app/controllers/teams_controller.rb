class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]

  # GET /teams/1
  def show
    render json: @team, include: [:users, { team_presidents: { include: [ :user, :president ] } }]
  end

  # POST /teams
  def create
    @team = Team.new(team_params)

    if @team.save
      President.all.each do |pres|
        @team.team_presidents.create!(president: pres)
      end
      render json: @team, status: :created, location: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /teams/1
  def update
    if @team.update(team_params)
      render json: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # DELETE /teams/1
  def destroy
    @team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def team_params
      params.require(:team).permit(:teamname, :creator_id, :defeated)
    end
end
