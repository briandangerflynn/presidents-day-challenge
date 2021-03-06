class TeamPresidentsController < ApplicationController
  before_action :set_team, :authenticate_user

  def defeat
    @team_president = @team.team_presidents.where(president_id: params[:president_id])
    @team_president.update(user_id: current_user.id)
    TeamsChannel.broadcast_to @team, @team_president
    render json: @team_president
  end
  
  def revive
    @team_president = @team.team_presidents.where(president_id: params[:president_id])
    @team_president.update(user: nil)
    TeamsChannel.broadcast_to @team, @team_president
    render json: @team_president
  end
  
  private
  # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:team_id])
    end

    # Only allow a trusted parameter "white list" through.
    def team_president_params
      params.require(:team_president).permit(:team_id, :president_id)
    end
end
