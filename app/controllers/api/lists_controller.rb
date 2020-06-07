class Api::ListsController < ApplicationController
    def index
        @user = User.find(params[:user_id])

        @lists = @user.lists
        render json: @lists, status: 200
    end
    
    def create
        @list = List.new(list_params)
        if @list.save
            render json: @list, status: 200
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        @list = List.find(params[:id])
        if @list.destroy
            render json: @list, status: 200
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def show
        @list = List.find(params[:id])
        if @list
            render json: @list, status: 200
        else
            render json: @list.errors.full_messages, status: 404
        end
    end

    

    private

    def list_params
        params.require(:list).permit(:user_id, :video_id)
    end
    
end