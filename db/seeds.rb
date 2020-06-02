# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Video.destroy_all
gonegirl = Video.create({title: "Gone Girl", year: 2014, runtime: "2m 42s", description: "Set in Missouri, the story begins as a mystery that follows the events surrounding Nick Dunne (Affleck), who becomes the prime suspect in the sudden disappearance of his wife Amy (Pike)."} )
gonegirl.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Gone_Girl_Trailer'), filename: 'Gone_Girl_Trailer')
gonegirl.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Gone_Girl_Thumbnail'), filename: 'Gone_Girl_Thumbnail')

xmen = Video.create({title: "X-Men", year: 2000, runtime: "2m 05s", description: "The film depicts a world where a small proportion of people are mutants, whose possession of superhuman powers makes them distrusted by normal humans."} )
xmen.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/X-Men_Trailer'), filename: 'X-Men_Trailer')
xmen.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/X-Men_Thumbnail'), filename: 'X-Men_Thumbnail')

startrek = Video.create({title: "Star Trek: First Contact", year: 1996, runtime: "2m 19s", description: "The crew of the USS Enterprise-E travel back in time from the 24th century to the mid-21st century in order to stop the cybernetic Borg from conquering Earth by changing their past."} )
startrek.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Star_Trek_First_Contact_Trailer.mp4'), filename: 'Star_Trek_First_Contact_Trailer.mp4')
startrek.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/star_trek_first_contact_thumbnail.jpg'), filename: 'star_trek_first_contact_thumbnail.jpg')

doogiehowser = Video.create({title: "Doogie Howser", year: 1989, runtime: "1m 01s", description: "The show stars Neil Patrick Harris in the title role as a teenage physician who balances the challenge of practicing medicine with the everyday problems of teenage life."} )
doogiehowser.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Doogie_Howser_Trailer.mp4'), filename: 'Doogie_Howser_Trailer.mp4')
doogiehowser.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/doogie_howser_thumbnail'), filename: 'doogie_howser_thumbnail')

himym = Video.create({title: "How I Met Your Mother", year: 2005, runtime: "0m 46s", description: "Ted, in the year 2030, recounts to his son and daughter the events that led him to meet their mother."} )
himym.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/HIMYM_Trailer.mp4'), filename: 'HIMYM_Trailer.mp4')
himym.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/himym_thumbnail.png'), filename: 'himym_thumbnail.png')

dirtydancing = Video.create({title: "Dirty Dancing", year: 1986, runtime: "2m 25s", description: "It stars Jennifer Grey as Frances 'Baby' Houseman, a young woman who falls in love with dance instructor Johnny Castle (Patrick Swayze) at a holiday resort."} )
dirtydancing.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dirty_dancing_trailer.mp4'), filename: 'dirty_dancing_trailer.mp4')
dirtydancing.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dirty_dancing_thumbnail.jpg'), filename: 'dirty_dancing_thumbnail.jpg')

ghost = Video.create({title: "Ghost", year: 1990, runtime: "2m 34s", description: "The plot centers on a young woman in jeopardy (Moore), the ghost of her murdered lover (Swayze), and a reluctant psychic (Goldberg) who assists him in saving her."} )
ghost.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ghost_trailer.mp4'), filename: 'ghost_trailer.mp4')
ghost.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ghost_thumbnail.jpg'), filename: 'ghost_thumbnail.jpg')

pointbreak = Video.create({title: "Point Break", year: 1991, runtime: "1m 21s", description: "The film features Reeves as an undercover FBI agent tasked with investigating the identities of a group of bank robbers, who then develops a complex relationship with the group's leader."} )
pointbreak.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/point_break_trailer.mp4'), filename: 'point_break_trailer.mp4')
pointbreak.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/point_break_thumbnail.jpg'), filename: 'point_break_thumbnail.jpg')

roadhouse = Video.create({title: "Road House", year: 1989, runtime: "1m 55s", description: "Patrick Swayze as a cooler at a newly refurbished roadside bar who protects a small town in Missouri from a corrupt businessman."} )
roadhouse.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/road_house_trailer.mp4'), filename: 'road_house_trailer.mp4')
roadhouse.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/road_house_thumbnail.jpg'), filename: 'road_house_thumbnail.jpg')

ted = Video.create!({title: "Ted", year: 2012, runtime: "2m 30s", description: "The film tells the story of John Bennett, a Boston native whose childhood wish brings his teddy bear friend Ted to life."} )
ted.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ted_trailer.mp4'), filename: 'ted_trailer.mp4')
ted.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ted_thumbnail.jpg'), filename: 'ted_thumbnail.jpg')

