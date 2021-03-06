class TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]

  # GET /teams/1
  def show
    render json: @team, include: [:users, { team_presidents: { include: [ :user, :president ] } }]
  end

  # JOIN /teams/join
  def join
    @team = Team.find_by(teamname: team_params["teamname"])
    if @team
      if @team.authenticate(team_params[:password])
        if @team.users.include? current_user
          render json: {error: "You're already on this team"}
        else
          @team.users << current_user
          if !@team.save
            render json: @team
          else
            render json: @team.errors, status: :unprocessable_entity
          end
        end
      else
        render json: { error: 'Invalid password.'}, status: 401
      end
    else
      render json: { error: 'Team not found.'}, status: 404
    end
  end

  #LEAVE /teams/:id/leave
  def leave
    @team = Team.find(params[:team_id])
    @team.users.delete(current_user)
    if !@team.save
      render json: @team
    else
      render json: @team.errors, status: :unprocessable_entity
    end
  end

  # POST /teams
  def create
    @team = Team.new(team_params)

    if @team.save
      @team.users << current_user
      President.all.each do |pres|
        @team.team_presidents.create!(president: pres)
      end
      render json: @team, status: :created, location: @team
    else
      render json: {error: @team.errors}, status: :unprocessable_entity
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
    @team.users.each do |user| 
      @team.users.delete(user)
    end
    @team.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def team_params
      params.require(:team).permit(:teamname, :creator_id, :defeated, :password)
    end
end
