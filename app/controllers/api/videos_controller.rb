class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
    end

    def show
        @video = Video.find(params[:id])
        if @video
            render json: @video, status: 200
        else
            render json: @video.errors.full_messages, status: 422
        end
    end


end