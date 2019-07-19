class PresidentsController < ApplicationController
  before_action :set_president, only: [:show, :update, :destroy]

  # GET /presidents
  def index
    @presidents = President.all

    render json: @presidents
  end

  # GET /presidents/1
  def show
    render json: @president
  end

  # POST /presidents
  def create
    @president = President.new(president_params)

    if @president.save
      render json: @president, status: :created, location: @president
    else
      render json: @president.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /presidents/1
  def update
    if @president.update(president_params)
      render json: @president
    else
      render json: @president.errors, status: :unprocessable_entity
    end
  end

  # DELETE /presidents/1
  def destroy
    @president.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_president
      @president = President.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def president_params
      params.require(:president).permit(:name, :presidency, :years_active, :specific_drink, :drink_type, :alt_one, :alt_two, :image_url)
    end
end
