@videos.each do |video|
    json.set! video.id do
        json.partial! 'api/videos/video', video: video
        # json.video_link url_for(video.movie)
        # json.image_link url_for(video.thumbnail)
    end
end