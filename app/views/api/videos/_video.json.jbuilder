json.extract! video, :id, :title, :runtime, :year, :genre, :description

json.video_link url_for(video.movie)
json.image_link url_for(video.thumbnail)
