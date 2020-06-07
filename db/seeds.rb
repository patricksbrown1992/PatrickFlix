# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'
# Video.destroy_all

# ted = Video.create!({title: "Ted", year: 2012, runtime: "2m 30s", description: "The film tells the story of John Bennett, a Boston native whose childhood wish brings his teddy bear friend Ted to life."} )
# ted.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ted_trailer.mp4'), filename: 'ted_trailer.mp4')
# ted.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ted_thumbnail.jpg'), filename: 'ted_thumbnail.jpg')

# xmen = Video.create({title: "X-Men", year: 2000, runtime: "2m 05s", description: "The film depicts a world where a small proportion of people are mutants, whose possession of superhuman powers makes them distrusted by normal humans."} )
# xmen.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/X-Men_Trailer'), filename: 'X-Men_Trailer')
# xmen.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/X-Men_Thumbnail'), filename: 'X-Men_Thumbnail')

# startrek = Video.create({title: "Star Trek: First Contact", year: 1996, runtime: "2m 19s", description: "The crew of the USS Enterprise-E travel back in time from the 24th century to the mid-21st century in order to stop the cybernetic Borg from conquering Earth by changing their past."} )
# startrek.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Star_Trek_First_Contact_Trailer.mp4'), filename: 'Star_Trek_First_Contact_Trailer.mp4')
# startrek.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/star_trek_first_contact_thumbnail.jpg'), filename: 'star_trek_first_contact_thumbnail.jpg')

# dirtydancing = Video.create({title: "Dirty Dancing", year: 1986, runtime: "2m 25s", description: "It stars Jennifer Grey as Frances 'Baby' Houseman, a young woman who falls in love with dance instructor Johnny Castle (Patrick Swayze) at a holiday resort."} )
# dirtydancing.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dirty_dancing_trailer.mp4'), filename: 'dirty_dancing_trailer.mp4')
# dirtydancing.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dirty_dancing_thumbnail.jpg'), filename: 'dirty_dancing_thumbnail.jpg')

# ghost = Video.create({title: "Ghost", year: 1990, runtime: "2m 34s", description: "The plot centers on a young woman in jeopardy (Moore), the ghost of her murdered lover (Swayze), and a reluctant psychic (Goldberg) who assists him in saving her."} )
# ghost.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ghost_trailer.mp4'), filename: 'ghost_trailer.mp4')
# ghost.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ghost_thumbnail.jpg'), filename: 'ghost_thumbnail.jpg')

# pointbreak = Video.create({title: "Point Break", year: 1991, runtime: "1m 21s", description: "The film features Reeves as an undercover FBI agent tasked with investigating the identities of a group of bank robbers, who then develops a complex relationship with the group's leader."} )
# pointbreak.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/point_break_trailer.mp4'), filename: 'point_break_trailer.mp4')
# pointbreak.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/point_break_thumbnail.jpg'), filename: 'point_break_thumbnail.jpg')

# roadhouse = Video.create({title: "Road House", year: 1989, runtime: "1m 55s", description: "Patrick Swayze as a cooler at a newly refurbished roadside bar who protects a small town in Missouri from a corrupt businessman."} )
# roadhouse.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/road_house_trailer.mp4'), filename: 'road_house_trailer.mp4')
# roadhouse.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/road_house_thumbnail.jpg'), filename: 'road_house_thumbnail.jpg')

# gonegirl = Video.create({title: "Gone Girl", year: 2014, runtime: "2m 42s", description: "Set in Missouri, the story begins as a mystery that follows the events surrounding Nick Dunne (Affleck), who becomes the prime suspect in the sudden disappearance of his wife Amy (Pike)."} )
# gonegirl.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Gone_Girl_Trailer'), filename: 'Gone_Girl_Trailer')
# gonegirl.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Gone_Girl_Thumbnail'), filename: 'Gone_Girl_Thumbnail')

# doogiehowser = Video.create({title: "Doogie Howser", year: 1989, runtime: "1m 01s", description: "The show stars Neil Patrick Harris in the title role as a teenage physician who balances the challenge of practicing medicine with the everyday problems of teenage life."} )
# doogiehowser.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Doogie_Howser_Trailer.mp4'), filename: 'Doogie_Howser_Trailer.mp4')
# doogiehowser.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/doogie_howser_thumbnail'), filename: 'doogie_howser_thumbnail')

# himym = Video.create({title: "How I Met Your Mother", year: 2005, runtime: "0m 46s", description: "Ted, in the year 2030, recounts to his son and daughter the events that led him to meet their mother."} )
# himym.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/HIMYM_Trailer.mp4'), filename: 'HIMYM_Trailer.mp4')
# himym.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/himym_thumbnail.png'), filename: 'himym_thumbnail.png')

# aquaman = Video.create({title: "Aquaman", year: 2018, runtime: "2m 24s", description: "In the film, Aquaman sets out to lead the underwater kingdom of Atlantis, replacing his half-brother, King Orm, who seeks to unite the seven underwater kingdoms against the surface world."} )
# aquaman.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/aquaman_trailer.mp4'), filename: 'aquaman_trailer.mp4')
# aquaman.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/aquaman_poster.jpg'), filename: 'aquaman_poster.jpg')

# youngadult = Video.create({title: "Young Adult", year: 2011, runtime: "1m 58s", description: "Mavis Gary (Charlize Theron) is a successful writer of teen literature who returns to her hometown with a dual mission: to relive her glory days and steal away her now-married high-school sweetheart (Patrick Wilson)."} )
# youngadult.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/young_adult_trailer.mp4'), filename: 'young_adult_trailer.mp4')
# youngadult.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/young_adult_poster.jpg'), filename: 'young_adult_poster.jpg')

# watchmen = Video.create({title: "Watchmen", year: 2009, runtime: "2m 22s", description: "A dark and dystopian deconstruction of the superhero genre, the film is set in an alternate history in the year 1985 at the height of the Cold War between the United States and the Soviet Union, as a group of mostly retired American superheroes investigates the murder of one of their own before uncovering an elaborate and deadly conspiracy, while their moral limitations are challenged by the complex nature of the circumstances."} )
# watchmen.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/watchmen_trailer.mp4'), filename: 'watchmen_trailer.mp4')
# watchmen.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/watchmen_poster.jpg'), filename: 'watchmen_poster.jpg')

# conjuring = Video.create({title: "The Conjuring", year: 2013, runtime: "2m 28s", description: "Patrick Wilson and Vera Farmiga star as Ed and Lorraine Warren, paranormal investigators and authors associated with prominent cases of haunting."} )
# conjuring.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/conjuring_trailer.mp4'), filename: 'conjuring_trailer.mp4')
# conjuring.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/the_conjuring_poster.jpg'), filename: 'the_conjuring_poster.jpg')

# greyanatomy = Video.create({title: "Grey's Anatomy", year: 2005, runtime: "3m 26s", description: "The fictional series focuses on the lives of surgical interns, residents, and attending doctors as they develop into seasoned doctors while balancing personal and professional relationships."} )
# greyanatomy.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/greys_anatomy_trailer.mp4'), filename: 'greys_anatomy_trailer.mp4')
# greyanatomy.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/grey_anatomy_poster.jpg'), filename: 'grey_anatomy_poster.jpg')

# enchanted = Video.create({title: "Enchanted", year: 2007, runtime: "2m 30s", description: "The plot focuses on an archetypal Disney Princess, who is forced from her traditional animated world into the live-action world of New York City."} )
# enchanted.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/enchanted_trailer.mp4'), filename: 'enchanted_trailer.mp4')
# enchanted.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/enchanted_poster.jpg'), filename: 'enchanted_poster.jpg')

# madeofhonor = Video.create({title: "Made of Honor", year: 2008, runtime: "1m 22s", description: "The plot follows a lifelong playboy who falls in love with his best friend, only to have her get engaged and ask him to be her maid of honor."} )
# madeofhonor.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/made_of_honor_trailer.mp4'), filename: 'made_of_honor_trailer.mp4')
# madeofhonor.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/made_of_honor_poster.jpg'), filename: 'made_of_honor_poster.jpg')

# cantbuymelove = Video.create({title: "Can't Buy Me Love", year: 1987, runtime: "1m 34s", description: "Patrick Dempsey and Amanda Peterson in a story about a nerd at a high school in Tucson, Arizona who gives a cheerleader $1,000 to pretend to be his girlfriend for a month."} )
# cantbuymelove.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/cantbuymelove_trailer.mp4'), filename: 'cantbuymelove_trailer.mp4')
# cantbuymelove.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/cant_buy_me_love_poster.jpg'), filename: 'cant_buy_me_love_poster.jpg')


# ----------------

ted = Video.create!({title: "Ted", year: 2012, runtime: "2m 30s", description: "The film tells the story of John Bennett, a Boston native whose childhood wish brings his teddy bear friend Ted to life."} )
ted.movie.attach(io: open('app/assets/stewart/ted_trailer.mp4'), filename: 'ted_trailer.mp4')
ted.thumbnail.attach(io: open('app/assets/stewart/ted_thumbnail.jpg'), filename: 'ted_thumbnail.jpg')

xmen = Video.create({title: "X-Men", year: 2000, runtime: "2m 05s", description: "The film depicts a world where a small proportion of people are mutants, whose possession of superhuman powers makes them distrusted by normal humans."} )
xmen.movie.attach(io: open('app/assets/stewart/X-Men_Trailer.mp4'), filename: 'X-Men_Trailer.mp4')
xmen.thumbnail.attach(io: open('app/assets/stewart/X-Men_Thumbnail.jpeg'), filename: 'X-Men_Thumbnail.jpeg')

startrek = Video.create({title: "Star Trek: First Contact", year: 1996, runtime: "2m 19s", description: "The crew of the USS Enterprise-E travel back in time from the 24th century to the mid-21st century in order to stop the cybernetic Borg from conquering Earth by changing their past."} )
startrek.movie.attach(io: open('app/assets/stewart/Star_Trek_First_Contact_Trailer.mp4'), filename: 'Star_Trek_First_Contact_Trailer.mp4')
startrek.thumbnail.attach(io: open('app/assets/stewart/star_trek_first_contact_thumbnail.jpg'), filename: 'star_trek_first_contact_thumbnail.jpg')

logan = Video.create({title: "Logan", year: 2017, runtime: "1m 48s", description: "It follows an aged Wolverine and an extremely ill Charles Xavier who defend a young mutant named Laura from the villainous Reavers led by Donald Pierce and Zander Rice."} )
logan.movie.attach(io: open('app/assets/stewart/logan_trailer.mp4'), filename: 'logan_trailer.mp4')
logan.thumbnail.attach(io: open('app/assets/stewart/logan_poster.jpg'), filename: 'logan_poster.jpg')

dune = Video.create({title: "Dune", year: 1984, runtime: "3m 40s", description: 'Set in the distant future, the film chronicles the conflict between rival noble families as they battle for control of the extremely harsh desert planet Arrakis, also known as "Dune".'} )
dune.movie.attach(io: open('app/assets/stewart/dune_trailer.mp4'), filename: 'dune_trailer.mp4')
dune.thumbnail.attach(io: open('app/assets/stewart/dune_poster.jpg'), filename: 'dune_poster.jpg')

future_past = Video.create({title: "X-Men: Days of Future Past", year: 2014, runtime: "2m 17s", description: "The story focuses on two time periods, with Wolverine traveling back in time to 1973 to change history and prevent an event that results in doom for both humans and mutants."} )
future_past.movie.attach(io: open('app/assets/stewart/days_of_future_past_trailer.mp4'), filename: 'days_of_future_past_trailer.mp4')
future_past.thumbnail.attach(io: open('app/assets/stewart/days_of_future_past_poster.jpg'), filename: 'days_of_future_past_poster.jpg')

iclaudius = Video.create({title: "I, Claudius", year: 1976, runtime: "1m 12s", description: "The series covers the history of the early Roman Empire, told from the perspective of the elderly Emperor Claudius who narrates the series."} )
iclaudius.movie.attach(io: open('app/assets/stewart/iclaudius_trailer.mp4'), filename: 'iclaudius_trailer.mp4')
iclaudius.thumbnail.attach(io: open('app/assets/stewart/iclaudius_poster.jpg'), filename: 'iclaudius_poster.jpg')


dirtydancing = Video.create({title: "Dirty Dancing", year: 1986, runtime: "2m 25s", description: "It stars Jennifer Grey as Frances 'Baby' Houseman, a young woman who falls in love with dance instructor Johnny Castle (Patrick Swayze) at a holiday resort."} )
dirtydancing.movie.attach(io: open('app/assets/swayze/dirty_dancing_trailer.mp4'), filename: 'dirty_dancing_trailer.mp4')
dirtydancing.thumbnail.attach(io: open('app/assets/swayze/dirty_dancing_thumbnail.jpg'), filename: 'dirty_dancing_thumbnail.jpg')

ghost = Video.create({title: "Ghost", year: 1990, runtime: "2m 34s", description: "The plot centers on a young woman in jeopardy (Moore), the ghost of her murdered lover (Swayze), and a reluctant psychic (Goldberg) who assists him in saving her."} )
ghost.movie.attach(io: open('app/assets/swayze/ghost_trailer.mp4'), filename: 'ghost_trailer.mp4')
ghost.thumbnail.attach(io: open('app/assets/swayze/ghost_thumbnail.jpg'), filename: 'ghost_thumbnail.jpg')

pointbreak = Video.create({title: "Point Break", year: 1991, runtime: "1m 21s", description: "The film features Reeves as an undercover FBI agent tasked with investigating the identities of a group of bank robbers, who then develops a complex relationship with the group's leader."} )
pointbreak.movie.attach(io: open('app/assets/swayze/point_break_trailer.mp4'), filename: 'point_break_trailer.mp4')
pointbreak.thumbnail.attach(io: open('app/assets/swayze/point_break_thumbnail.jpg'), filename: 'point_break_thumbnail.jpg')

roadhouse = Video.create({title: "Road House", year: 1989, runtime: "1m 55s", description: "Patrick Swayze as a cooler at a newly refurbished roadside bar who protects a small town in Missouri from a corrupt businessman."} )
roadhouse.movie.attach(io: open('app/assets/swayze/road_house_trailer.mp4'), filename: 'road_house_trailer.mp4')
roadhouse.thumbnail.attach(io: open('app/assets/swayze/road_house_thumbnail.jpg'), filename: 'road_house_thumbnail.jpg')

outsiders = Video.create({title: "The Outsiders", year: 1983, runtime: "1m 13s", description: "In the mid-1960s in Tulsa, Oklahoma, greasers are a gang of tough, low-income working-class teens."} )
outsiders.movie.attach(io: open('app/assets/swayze/outsiders_trailer.mp4'), filename: 'outsiders_trailer.mp4')
outsiders.thumbnail.attach(io: open('app/assets/swayze/outsiders_poster.jpg'), filename: 'outsiders_poster.jpg')

reddawn = Video.create({title: "Red Dawn", year: 1984, runtime: "2m 18s", description: "The film depicts the United States invaded by the Soviet Union and its Cuban and Nicaraguan allies."} )
reddawn.movie.attach(io: open('app/assets/swayze/red_dawn_trailer.mp4'), filename: 'red_dawn_trailer.mp4')
reddawn.thumbnail.attach(io: open('app/assets/swayze/red_dawn_poster.jpg'), filename: 'red_dawn_poster.jpg')

gonegirl = Video.create({title: "Gone Girl", year: 2014, runtime: "2m 42s", description: "Set in Missouri, the story begins as a mystery that follows the events surrounding Nick Dunne (Affleck), who becomes the prime suspect in the sudden disappearance of his wife Amy (Pike)."} )
gonegirl.movie.attach(io: open('app/assets/harris/Gone_Girl_Trailer.mp4'), filename: 'Gone_Girl_Trailer.mp4')
gonegirl.thumbnail.attach(io: open('app/assets/harris/Gone_Girl_Thumbnail.jpeg'), filename: 'Gone_Girl_Thumbnail.jpeg')

doogiehowser = Video.create({title: "Doogie Howser", year: 1989, runtime: "1m 01s", description: "The show stars Neil Patrick Harris in the title role as a teenage physician who balances the challenge of practicing medicine with the everyday problems of teenage life."} )
doogiehowser.movie.attach(io: open('app/assets/harris/Doogie_Howser_Trailer.mp4'), filename: 'Doogie_Howser_Trailer.mp4')
doogiehowser.thumbnail.attach(io: open('app/assets/harris/doogie_howser_thumbnail.jpeg'), filename: 'doogie_howser_thumbnail.jpeg')

himym = Video.create({title: "How I Met Your Mother", year: 2005, runtime: "0m 46s", description: "Ted, in the year 2030, recounts to his son and daughter the events that led him to meet their mother."} )
himym.movie.attach(io: open('app/assets/harris/HIMYM_Trailer.mp4'), filename: 'HIMYM_Trailer.mp4')
himym.thumbnail.attach(io: open('app/assets/harris/himym_thumbnail.png'), filename: 'himym_thumbnail.png')

dr_horrible = Video.create({title: "Dr. Horrible's Sing-Along Blog", year: 2008, runtime: "0m 55s", description: "the show tells the story of Dr. Horrible (played by Neil Patrick Harris), an aspiring supervillain; Captain Hammer (Nathan Fillion), his superheroic nemesis; and Penny (Felicia Day), a charity worker and their shared love interest."} )
dr_horrible.movie.attach(io: open('app/assets/harris/dr_horrible_trailer.mp4'), filename: 'dr_horrible_trailer.mp4')
dr_horrible.thumbnail.attach(io: open('app/assets/harris/dr_horrible_poster.jpg'), filename: 'dr_horrible_poster.jpg')

harold_kumar = Video.create({title: "Harold & Kumar Go to White Castle", year: 2004, runtime: "2m 22s", description: "The story follows Harold Lee (John Cho) and Kumar Patel (Kal Penn) as they decide to go to the fast food chain White Castle after smoking marijuana, but end up on a series of comical misadventures along the way."} )
harold_kumar.movie.attach(io: open('app/assets/harris/harold_and_kumar_trailer.mp4'), filename: 'harold_and_kumar_trailer.mp4')
harold_kumar.thumbnail.attach(io: open('app/assets/harris/harold_and_kumar_poster.jpg'), filename: 'harold_and_kumar_poster.jpg')

smurfs = Video.create({title: "The Smurfs", year: 2011, runtime: "1m 48s", description: "The film tells the story of the Smurfs as they get lost in New York, and try to find a way to get back home before Gargamel catches them."} )
smurfs.movie.attach(io: open('app/assets/harris/smurfs_trailer.mp4'), filename: 'smurfs_trailer.mp4')
smurfs.thumbnail.attach(io: open('app/assets/harris/smurfs_poster.jpg'), filename: 'smurfs_poster.jpg')

aquaman = Video.create({title: "Aquaman", year: 2018, runtime: "2m 24s", description: "In the film, Aquaman sets out to lead the underwater kingdom of Atlantis, replacing his half-brother, King Orm, who seeks to unite the seven underwater kingdoms against the surface world."} )
aquaman.movie.attach(io: open('app/assets/wilson/aquaman_trailer.mp4'), filename: 'aquaman_trailer.mp4')
aquaman.thumbnail.attach(io: open('app/assets/wilson/aquaman_poster.jpg'), filename: 'aquaman_poster.jpg')

youngadult = Video.create({title: "Young Adult", year: 2011, runtime: "1m 58s", description: "Mavis Gary (Charlize Theron) is a successful writer of teen literature who returns to her hometown with a dual mission: to relive her glory days and steal away her now-married high-school sweetheart (Patrick Wilson)."} )
youngadult.movie.attach(io: open('app/assets/wilson/young_adult_trailer.mp4'), filename: 'young_adult_trailer.mp4')
youngadult.thumbnail.attach(io: open('app/assets/wilson/young_adult_poster.jpg'), filename: 'young_adult_poster.jpg')

watchmen = Video.create({title: "Watchmen", year: 2009, runtime: "2m 22s", description: "A dark and dystopian deconstruction of the superhero genre, the film is set in an alternate history in the year 1985 at the height of the Cold War between the United States and the Soviet Union, as a group of mostly retired American superheroes investigates the murder of one of their own before uncovering an elaborate and deadly conspiracy, while their moral limitations are challenged by the complex nature of the circumstances."} )
watchmen.movie.attach(io: open('app/assets/wilson/watchmen_trailer.mp4'), filename: 'watchmen_trailer.mp4')
watchmen.thumbnail.attach(io: open('app/assets/wilson/watchmen_poster.jpg'), filename: 'watchmen_poster.jpg')

commuter = Video.create({title: "The Commuter", year: 2018, runtime: "2m 03s", description: " It follows a man who is unwittingly recruited into a murder conspiracy after meeting a mysterious woman while on his daily train commute."} )
commuter.movie.attach(io: open('app/assets/wilson/commuter_trailer.mp4'), filename: 'commuter_trailer.mp4')
commuter.thumbnail.attach(io: open('app/assets/wilson/commuter_poster.jpg'), filename: 'commuter_poster.jpg')

little_children = Video.create({title: "Little Children", year: 2006, runtime: "1m 42s", description: "Sarah (Kate Winslet) is a well-educated woman who cannot come to terms with her life as a housewife and mother. Brad (Patrick Wilson), a stay-at-home dad, is married to a beautiful filmmaker (Jennifer Connelly)"} )
little_children.movie.attach(io: open('app/assets/wilson/little_children_trailer.mp4'), filename: 'little_children_trailer.mp4')
little_children.thumbnail.attach(io: open('app/assets/wilson/little_children_poster.jpg'), filename: 'little_children_poster.jpg')

conjuring = Video.create({title: "The Conjuring", year: 2013, runtime: "2m 28s", description: "Patrick Wilson and Vera Farmiga star as Ed and Lorraine Warren, paranormal investigators and authors associated with prominent cases of haunting."} )
conjuring.movie.attach(io: open('app/assets/wilson/conjuring_trailer.mp4'), filename: 'conjuring_trailer.mp4')
conjuring.thumbnail.attach(io: open('app/assets/wilson/the_conjuring_poster.jpg'), filename: 'the_conjuring_poster.jpg')

greyanatomy = Video.create({title: "Grey's Anatomy", year: 2005, runtime: "3m 26s", description: "The fictional series focuses on the lives of surgical interns, residents, and attending doctors as they develop into seasoned doctors while balancing personal and professional relationships."} )
greyanatomy.movie.attach(io: open('app/assets/dempsey/greys_anatomy_trailer.mp4'), filename: 'greys_anatomy_trailer.mp4')
greyanatomy.thumbnail.attach(io: open('app/assets/dempsey/grey_anatomy_poster.jpg'), filename: 'grey_anatomy_poster.jpg')

enchanted = Video.create({title: "Enchanted", year: 2007, runtime: "2m 30s", description: "The plot focuses on an archetypal Disney Princess, who is forced from her traditional animated world into the live-action world of New York City."} )
enchanted.movie.attach(io: open('app/assets/dempsey/enchanted_trailer.mp4'), filename: 'enchanted_trailer.mp4')
enchanted.thumbnail.attach(io: open('app/assets/dempsey/enchanted_poster.jpg'), filename: 'enchanted_poster.jpg')

madeofhonor = Video.create({title: "Made of Honor", year: 2008, runtime: "1m 22s", description: "The plot follows a lifelong playboy who falls in love with his best friend, only to have her get engaged and ask him to be her maid of honor."} )
madeofhonor.movie.attach(io: open('app/assets/dempsey/made_of_honor_trailer.mp4'), filename: 'made_of_honor_trailer.mp4')
madeofhonor.thumbnail.attach(io: open('app/assets/dempsey/made_of_honor_poster.jpg'), filename: 'made_of_honor_poster.jpg')

cantbuymelove = Video.create({title: "Can't Buy Me Love", year: 1987, runtime: "1m 34s", description: "Patrick Dempsey and Amanda Peterson in a story about a nerd at a high school in Tucson, Arizona who gives a cheerleader $1,000 to pretend to be his girlfriend for a month."} )
cantbuymelove.movie.attach(io: open('app/assets/dempsey/cantbuymelove_trailer.mp4'), filename: 'cantbuymelove_trailer.mp4')
cantbuymelove.thumbnail.attach(io: open('app/assets/dempsey/cant_buy_me_love_poster.jpg'), filename: 'cant_buy_me_love_poster.jpg')

alabama = Video.create({title: "Sweet Home Alabama", year: 2002, runtime: "2m 30s", description: "New York fashion designer Melanie (Reese Witherspoon) suddenly finds herself engaged to the city's most eligible bachelor. But Melanie's past holds many secrets, including Jake (Josh Lucas), the redneck husband she married in high school, who refuses to divorce her."} )
alabama.movie.attach(io: open('app/assets/dempsey/alabama_trailer.mp4'), filename: 'alabama_trailer.mp4')
alabama.thumbnail.attach(io: open('app/assets/dempsey/alabama_poster.jpg'), filename: 'alabama_poster.jpg')

bridget_jones = Video.create({title: "Made of Honor", year: 2016, runtime: "2m 23s", description: "The film stars Renée Zellweger as Bridget Jones, who after becoming pregnant is unsure if Mark Darcy (Colin Firth, also reprising his role) or Jack Qwant (Patrick Dempsey) is the father."} )
bridget_jones.movie.attach(io: open('app/assets/dempsey/bridget_jones_trailer.mp4'), filename: 'bridget_jones_trailer.mp4')
bridget_jones.thumbnail.attach(io: open('app/assets/dempsey/bridget_jones_poster.jpg'), filename: 'bridget_jones_poster.jpg')

freedom_writers = Video.create({title: "Freedom Writers", year: 2007, runtime: "2m 21s", description: "A dedicated teacher (Hilary Swank) in a racially divided Los Angeles school has a class of at-risk teenagers deemed incapable of learning."} )
freedom_writers.movie.attach(io: open('app/assets/dempsey/freedom_writers_trailer.mp4'), filename: 'freedom_writers_trailer.mp4')
freedom_writers.thumbnail.attach(io: open('app/assets/dempsey/freedom_writers_poster.jpg'), filename: 'freedom_writers_poster.jpg')
