class AreasController < ApplicationController

    def index
        @areas = Area.all 
        render json: @areas
    end

    def show
        @area = Area.find_by(area_params)
        render json: @area
    end

    def create
        @area = Area.create(area_params)
        render json: @area, status: :created
    end

    def destroy
        @area = Area.find(params[:id])
        @area.destroy
        render json: :no_content
    end

    
    private
    
    def area_params
        params.require(:area).permit(:name, :state, :logo, :age, :ski, :snowboard)
    end
    
end