# == Schema Information
#
# Table name: videos
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  runtime     :string           not null
#  year        :integer          not null
#  genre       :string
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Video < ApplicationRecord
    validates :title, :runtime, :year, :description, presence: true
    validates :title, uniqueness: true
    
end
