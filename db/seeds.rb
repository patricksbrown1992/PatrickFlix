# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
Video.destroy_all


ted = Video.create!({title: "Ted", year: 2012, runtime: "2m 30s", description: "The film tells the story of John Bennett, a Boston native whose childhood wish brings his teddy bear friend Ted to life."} )
ted.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ted-trailer.mp4'), filename: 'ted-trailer.mp4')
ted.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ted.png'), filename: 'ted.png')

xmen = Video.create({title: "X-Men", year: 2000, runtime: "2m 05s", description: "The film depicts a world where a small proportion of people are mutants, whose possession of superhuman powers makes them distrusted by normal humans."} )
xmen.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/x-men-trailer.mp4'), filename: 'x-men-trailer.mp4')
xmen.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/x-men.png'), filename: 'x-men.png')

startrek = Video.create({title: "Star Trek: First Contact", year: 1996, runtime: "2m 19s", description: "The crew of the USS Enterprise-E travel back in time from the 24th century to the mid-21st century in order to stop the cybernetic Borg from conquering Earth by changing their past."} )
startrek.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/first-contact-trailer.mp4'), filename: 'first-contact-trailer.mp4')
startrek.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/first-contact.png'), filename: 'first-contact.png')

logan = Video.create({title: "Logan", year: 2017, runtime: "1m 48s", description: "It follows an aged Wolverine and an extremely ill Charles Xavier who defend a young mutant named Laura from the villainous Reavers led by Donald Pierce and Zander Rice."} )
logan.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/logan-trailer.mp4'), filename: 'logan-trailer.mp4')
logan.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/logan.png'), filename: 'logan.png')

dune = Video.create({title: "Dune", year: 1984, runtime: "3m 40s", description: 'Set in the distant future, the film chronicles the conflict between rival noble families as they battle for control of the extremely harsh desert planet Arrakis, also known as "Dune".'} )
dune.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dune-trailer.mp4'), filename: 'dune-trailer.mp4')
dune.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dune.png'), filename: 'dune.png')

future_past = Video.create({title: "X-Men: Days of Future Past", year: 2014, runtime: "2m 17s", description: "The story focuses on two time periods, with Wolverine traveling back in time to 1973 to change history and prevent an event that results in doom for both humans and mutants."} )
future_past.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/days-of-future-past-trailer.mp4'), filename: 'days-of-future-past-trailer.mp4')
future_past.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/days-of-future-past.png'), filename: 'days-of-future-past.png')

iclaudius = Video.create({title: "I, Claudius", year: 1976, runtime: "1m 12s", description: "The series covers the history of the early Roman Empire, told from the perspective of the elderly Emperor Claudius who narrates the series."} )
iclaudius.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/iclaudius_trailer.mp4'), filename: 'iclaudius_trailer.mp4')
iclaudius.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/iclaudius_poster.jpg'), filename: 'iclaudius_poster.jpg')


dirtydancing = Video.create({title: "Dirty Dancing", year: 1986, runtime: "2m 25s", description: "It stars Jennifer Grey as Frances 'Baby' Houseman, a young woman who falls in love with dance instructor Johnny Castle (Patrick Swayze) at a holiday resort."} )
dirtydancing.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dirty-dancing-trailer.mp4'), filename: 'dirty-dancing-trailer.mp4')
dirtydancing.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dirty-dancing.png'), filename: 'dirty-dancing.png')

ghost = Video.create({title: "Ghost", year: 1990, runtime: "2m 34s", description: "The plot centers on a young woman in jeopardy (Moore), the ghost of her murdered lover (Swayze), and a reluctant psychic (Goldberg) who assists him in saving her."} )
ghost.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ghost-trailer.mp4'), filename: 'ghost-trailer.mp4')
ghost.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/ghost.png'), filename: 'ghost.png')

pointbreak = Video.create({title: "Point Break", year: 1991, runtime: "1m 21s", description: "The film features Reeves as an undercover FBI agent tasked with investigating the identities of a group of bank robbers, who then develops a complex relationship with the group's leader."} )
pointbreak.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/point-break-trailer.mp4'), filename: 'point-break-trailer.mp4')
pointbreak.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/point-break.jpg'), filename: 'point-break.jpg')

roadhouse = Video.create({title: "Road House", year: 1989, runtime: "1m 55s", description: "Patrick Swayze as a cooler at a newly refurbished roadside bar who protects a small town in Missouri from a corrupt businessman."} )
roadhouse.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/road-house-trailer.mp4'), filename: 'road-house-trailer.mp4')
roadhouse.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/roadhouse.png'), filename: 'roadhouse.png')

outsiders = Video.create({title: "The Outsiders", year: 1983, runtime: "1m 13s", description: "In the mid-1960s in Tulsa, Oklahoma, greasers are a gang of tough, low-income working-class teens."} )
outsiders.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/outsiders-trailer.mp4'), filename: 'outsiders-trailer.mp4')
outsiders.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/outsiders.jpg'), filename: 'outsiders.jpg')

reddawn = Video.create({title: "Red Dawn", year: 1984, runtime: "2m 18s", description: "The film depicts the United States invaded by the Soviet Union and its Cuban and Nicaraguan allies."} )
reddawn.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/red-dawn-trailer.mp4'), filename: 'red-dawn-trailer.mp4')
reddawn.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/red-dawn.png'), filename: 'red-dawn.png')

gonegirl = Video.create({title: "Gone Girl", year: 2014, runtime: "2m 42s", description: "Set in Missouri, the story begins as a mystery that follows the events surrounding Nick Dunne (Affleck), who becomes the prime suspect in the sudden disappearance of his wife Amy (Pike)."} )
gonegirl.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/gone-girl-trailer.mp4'), filename: 'gone-girl-trailer.mp4')
gonegirl.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/gone-girl.png'), filename: 'gone-girl.png')

doogiehowser = Video.create({title: "Doogie Howser", year: 1989, runtime: "1m 01s", description: "The show stars Neil Patrick Harris in the title role as a teenage physician who balances the challenge of practicing medicine with the everyday problems of teenage life."} )
doogiehowser.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/Doogie_Howser_Trailer.mp4'), filename: 'Doogie_Howser_Trailer.mp4')
doogiehowser.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/doogie_howser.jpg'), filename: 'doogie_howser.jpg')

himym = Video.create({title: "How I Met Your Mother", year: 2005, runtime: "0m 46s", description: "Ted, in the year 2030, recounts to his son and daughter the events that led him to meet their mother."} )
himym.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/HIMYM_Trailer.mp4'), filename: 'HIMYM_Trailer.mp4')
himym.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/himym_thumbnail.png'), filename: 'himym_thumbnail.png')

dr_horrible = Video.create({title: "Dr. Horrible's Sing-Along Blog", year: 2008, runtime: "0m 55s", description: "the show tells the story of Dr. Horrible (played by Neil Patrick Harris), an aspiring supervillain; Captain Hammer (Nathan Fillion), his superheroic nemesis; and Penny (Felicia Day), a charity worker and their shared love interest."} )
dr_horrible.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dr_horrible_trailer.mp4'), filename: 'dr_horrible_trailer.mp4')
dr_horrible.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/dr-horrible.png'), filename: 'dr-horrible.png')

harold_kumar = Video.create({title: "Harold & Kumar Go to White Castle", year: 2004, runtime: "2m 22s", description: "The story follows Harold Lee (John Cho) and Kumar Patel (Kal Penn) as they decide to go to the fast food chain White Castle after smoking marijuana, but end up on a series of comical misadventures along the way."} )
harold_kumar.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/harold_and_kumar_trailer.mp4'), filename: 'harold_and_kumar_trailer.mp4')
harold_kumar.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/white-castle.png'), filename: 'white-castle.png')

smurfs = Video.create({title: "The Smurfs", year: 2011, runtime: "1m 48s", description: "The film tells the story of the Smurfs as they get lost in New York, and try to find a way to get back home before Gargamel catches them."} )
smurfs.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/smurfs-trailer.mp4'), filename: 'smurfs-trailer.mp4')
smurfs.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/smurfs.png'), filename: 'smurfs.png')

aquaman = Video.create({title: "Aquaman", year: 2018, runtime: "2m 24s", description: "In the film, Aquaman sets out to lead the underwater kingdom of Atlantis, replacing his half-brother, King Orm, who seeks to unite the seven underwater kingdoms against the surface world."} )
aquaman.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/aquaman_trailer.mp4'), filename: 'aquaman_trailer.mp4')
aquaman.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/aquaman.png'), filename: 'aquaman.png')

youngadult = Video.create({title: "Young Adult", year: 2011, runtime: "1m 58s", description: "Mavis Gary (Charlize Theron) is a successful writer of teen literature who returns to her hometown with a dual mission: to relive her glory days and steal away her now-married high-school sweetheart (Patrick Wilson)."} )
youngadult.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/young-adult-trailer.mp4'), filename: 'young-adult-trailer.mp4')
youngadult.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/young-adult.png'), filename: 'young-adult.png')

watchmen = Video.create({title: "Watchmen", year: 2009, runtime: "2m 22s", description: "A dark and dystopian deconstruction of the superhero genre, the film is set in an alternate history in the year 1985 at the height of the Cold War between the United States and the Soviet Union, as a group of mostly retired American superheroes investigates the murder of one of their own before uncovering an elaborate and deadly conspiracy, while their moral limitations are challenged by the complex nature of the circumstances."} )
watchmen.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/watchmen-trailer.mp4'), filename: 'watchmen-trailer.mp4')
watchmen.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/watchmen_poster.jpg'), filename: 'watchmen_poster.jpg')

commuter = Video.create({title: "The Commuter", year: 2018, runtime: "2m 03s", description: " It follows a man who is unwittingly recruited into a murder conspiracy after meeting a mysterious woman while on his daily train commute."} )
commuter.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/commuter-trailer.mp4'), filename: 'commuter-trailer.mp4')
commuter.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/commuter.png'), filename: 'commuter.png')

little_children = Video.create({title: "Little Children", year: 2006, runtime: "1m 42s", description: "Sarah (Kate Winslet) is a well-educated woman who cannot come to terms with her life as a housewife and mother. Brad (Patrick Wilson), a stay-at-home dad, is married to a beautiful filmmaker (Jennifer Connelly)"} )
little_children.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/little_children_trailer.mp4'), filename: 'little_children_trailer.mp4')
little_children.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/little-children.png'), filename: 'little-children.png')

conjuring = Video.create({title: "The Conjuring", year: 2013, runtime: "2m 28s", description: "Patrick Wilson and Vera Farmiga star as Ed and Lorraine Warren, paranormal investigators and authors associated with prominent cases of haunting."} )
conjuring.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/conjuring-trailer.mp4'), filename: 'conjuring-trailer.mp4')
conjuring.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/conjuring.png'), filename: 'conjuring.png')

greyanatomy = Video.create({title: "Grey's Anatomy", year: 2005, runtime: "3m 26s", description: "The fictional series focuses on the lives of surgical interns, residents, and attending doctors as they develop into seasoned doctors while balancing personal and professional relationships."} )
greyanatomy.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/greys_anatomy_trailer.mp4'), filename: 'greys_anatomy_trailer.mp4')
greyanatomy.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/greys-anatomy.png'), filename: 'greys-anatomy.png')

enchanted = Video.create({title: "Enchanted", year: 2007, runtime: "2m 30s", description: "The plot focuses on an archetypal Disney Princess, who is forced from her traditional animated world into the live-action world of New York City."} )
enchanted.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/enchanted-trailer.mp4'), filename: 'enchanted-trailer.mp4')
enchanted.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/enchanted.png'), filename: 'enchanted.png')

madeofhonor = Video.create({title: "Made of Honor", year: 2008, runtime: "1m 22s", description: "The plot follows a lifelong playboy who falls in love with his best friend, only to have her get engaged and ask him to be her maid of honor."} )
madeofhonor.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/made_of_honor_trailer.mp4'), filename: 'made_of_honor_trailer.mp4')
madeofhonor.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/made-of-honor.png'), filename: 'made_of_honor_poster.jpg')

cantbuymelove = Video.create({title: "Can't Buy Me Love", year: 1987, runtime: "1m 34s", description: "Patrick Dempsey and Amanda Peterson in a story about a nerd at a high school in Tucson, Arizona who gives a cheerleader $1,000 to pretend to be his girlfriend for a month."} )
cantbuymelove.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/cantbuymelove_trailer.mp4'), filename: 'cantbuymelove_trailer.mp4')
cantbuymelove.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/cant_buy_me_love.png'), filename: 'cant_buy_me_love.png')

alabama = Video.create({title: "Sweet Home Alabama", year: 2002, runtime: "2m 30s", description: "New York fashion designer Melanie (Reese Witherspoon) suddenly finds herself engaged to the city's most eligible bachelor. But Melanie's past holds many secrets, including Jake (Josh Lucas), the redneck husband she married in high school, who refuses to divorce her."} )
alabama.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/alabama-trailer.mp4'), filename: 'alabama-trailer.mp4')
alabama.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/alabama.png'), filename: 'alabama.png')

bridget_jones = Video.create({title: "Bridget Jones's Baby", year: 2016, runtime: "2m 23s", description: "The film stars Renée Zellweger as Bridget Jones, who after becoming pregnant is unsure if Mark Darcy (Colin Firth, also reprising his role) or Jack Qwant (Patrick Dempsey) is the father."} )
bridget_jones.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/bridget-jones-trailer.mp4'), filename: 'bridget-jones-trailer.mp4')
bridget_jones.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/bridget-jones.png'), filename: 'bridget-jones.png')

freedom_writers = Video.create({title: "Freedom Writers", year: 2007, runtime: "2m 21s", description: "A dedicated teacher (Hilary Swank) in a racially divided Los Angeles school has a class of at-risk teenagers deemed incapable of learning."} )
freedom_writers.movie.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/freedom_writers_trailer.mp4'), filename: 'freedom_writers_trailer.mp4')
freedom_writers.thumbnail.attach(io: open('https://patrickflix-seeds.s3.amazonaws.com/freedom-writers.png'), filename: 'freedom-writers.png')



# ----------------



# ted = Video.create!({title: "Ted", year: 2012, runtime: "2m 30s", description: "The film tells the story of John Bennett, a Boston native whose childhood wish brings his teddy bear friend Ted to life."} )
# ted.movie.attach(io: open('app/assets/stewart/ted-trailer.mp4'), filename: 'ted-trailer.mp4')
# ted.thumbnail.attach(io: open('app/assets/stewart/ted.png'), filename: 'ted.png')

# xmen = Video.create({title: "X-Men", year: 2000, runtime: "2m 05s", description: "The film depicts a world where a small proportion of people are mutants, whose possession of superhuman powers makes them distrusted by normal humans."} )
# xmen.movie.attach(io: open('app/assets/stewart/x-men-trailer.mp4'), filename: 'x-men-trailer.mp4')
# xmen.thumbnail.attach(io: open('app/assets/stewart/x-men.png'), filename: 'x-men.png')

# startrek = Video.create({title: "Star Trek: First Contact", year: 1996, runtime: "2m 19s", description: "The crew of the USS Enterprise-E travel back in time from the 24th century to the mid-21st century in order to stop the cybernetic Borg from conquering Earth by changing their past."} )
# startrek.movie.attach(io: open('app/assets/stewart/first-contact-trailer.mp4'), filename: 'first-contact-trailer.mp4')
# startrek.thumbnail.attach(io: open('app/assets/stewart/star-trek.png'), filename: 'star-trek.png')

# logan = Video.create({title: "Logan", year: 2017, runtime: "1m 48s", description: "It follows an aged Wolverine and an extremely ill Charles Xavier who defend a young mutant named Laura from the villainous Reavers led by Donald Pierce and Zander Rice."} )
# logan.movie.attach(io: open('app/assets/stewart/logan-trailer.mp4'), filename: 'logan-trailer.mp4')
# logan.thumbnail.attach(io: open('app/assets/stewart/logan.png'), filename: 'logan.png')

# dune = Video.create({title: "Dune", year: 1984, runtime: "3m 40s", description: 'Set in the distant future, the film chronicles the conflict between rival noble families as they battle for control of the extremely harsh desert planet Arrakis, also known as "Dune".'} )
# dune.movie.attach(io: open('app/assets/stewart/dune-trailer.mp4'), filename: 'dune-trailer.mp4')
# dune.thumbnail.attach(io: open('app/assets/stewart/dune.png'), filename: 'dune.png')

# future_past = Video.create({title: "X-Men: Days of Future Past", year: 2014, runtime: "2m 17s", description: "The story focuses on two time periods, with Wolverine traveling back in time to 1973 to change history and prevent an event that results in doom for both humans and mutants."} )
# future_past.movie.attach(io: open('app/assets/stewart/days-of-future-past-trailer.mp4'), filename: 'days-of-future-past-trailer.mp4')
# future_past.thumbnail.attach(io: open('app/assets/stewart/days-of-future-past.png'), filename: 'days-of-future-past.png')

# iclaudius = Video.create({title: "I, Claudius", year: 1976, runtime: "1m 12s", description: "The series covers the history of the early Roman Empire, told from the perspective of the elderly Emperor Claudius who narrates the series."} )
# iclaudius.movie.attach(io: open('app/assets/stewart/iclaudius_trailer.mp4'), filename: 'iclaudius_trailer.mp4')
# iclaudius.thumbnail.attach(io: open('app/assets/stewart/iclaudius_poster.jpg'), filename: 'iclaudius_poster.jpg')


# dirtydancing = Video.create({title: "Dirty Dancing", year: 1986, runtime: "2m 25s", description: "It stars Jennifer Grey as Frances 'Baby' Houseman, a young woman who falls in love with dance instructor Johnny Castle (Patrick Swayze) at a holiday resort."} )
# dirtydancing.movie.attach(io: open('app/assets/swayze/dirty-dancing-trailer.mp4'), filename: 'dirty-dancing-trailer.mp4')
# dirtydancing.thumbnail.attach(io: open('app/assets/swayze/dirty-dancing.png'), filename: 'dirty-dancing.png')

# ghost = Video.create({title: "Ghost", year: 1990, runtime: "2m 34s", description: "The plot centers on a young woman in jeopardy (Moore), the ghost of her murdered lover (Swayze), and a reluctant psychic (Goldberg) who assists him in saving her."} )
# ghost.movie.attach(io: open('app/assets/swayze/ghost-trailer.mp4'), filename: 'ghost-trailer.mp4')
# ghost.thumbnail.attach(io: open('app/assets/swayze/ghost.png'), filename: 'ghost.png')

# pointbreak = Video.create({title: "Point Break", year: 1991, runtime: "1m 21s", description: "The film features Reeves as an undercover FBI agent tasked with investigating the identities of a group of bank robbers, who then develops a complex relationship with the group's leader."} )
# pointbreak.movie.attach(io: open('app/assets/swayze/point-break-trailer.mp4'), filename: 'point-break-trailer.mp4')
# pointbreak.thumbnail.attach(io: open('app/assets/swayze/point-break.jpg'), filename: 'point-break.jpg')

# roadhouse = Video.create({title: "Road House", year: 1989, runtime: "1m 55s", description: "Patrick Swayze as a cooler at a newly refurbished roadside bar who protects a small town in Missouri from a corrupt businessman."} )
# roadhouse.movie.attach(io: open('app/assets/swayze/road-house-trailer.mp4'), filename: 'road-house-trailer.mp4')
# roadhouse.thumbnail.attach(io: open('app/assets/swayze/roadhouse.png'), filename: 'roadhouse.png')

# outsiders = Video.create({title: "The Outsiders", year: 1983, runtime: "1m 13s", description: "In the mid-1960s in Tulsa, Oklahoma, greasers are a gang of tough, low-income working-class teens."} )
# outsiders.movie.attach(io: open('app/assets/swayze/outsiders-trailer.mp4'), filename: 'outsiders-trailer.mp4')
# outsiders.thumbnail.attach(io: open('app/assets/swayze/outsiders.jpg'), filename: 'outsiders.jpg')

# reddawn = Video.create({title: "Red Dawn", year: 1984, runtime: "2m 18s", description: "The film depicts the United States invaded by the Soviet Union and its Cuban and Nicaraguan allies."} )
# reddawn.movie.attach(io: open('app/assets/swayze/red-dawn-trailer.mp4'), filename: 'red-dawn-trailer.mp4')
# reddawn.thumbnail.attach(io: open('app/assets/swayze/red-dawn.png'), filename: 'red-dawn.png')

# gonegirl = Video.create({title: "Gone Girl", year: 2014, runtime: "2m 42s", description: "Set in Missouri, the story begins as a mystery that follows the events surrounding Nick Dunne (Affleck), who becomes the prime suspect in the sudden disappearance of his wife Amy (Pike)."} )
# gonegirl.movie.attach(io: open('app/assets/harris/gone-girl-trailer.mp4'), filename: 'gone-girl-trailer.mp4')
# gonegirl.thumbnail.attach(io: open('app/assets/harris/gone-girl.png'), filename: 'Gone_Girl_Thumbnail.jpeg')

# doogiehowser = Video.create({title: "Doogie Howser", year: 1989, runtime: "1m 01s", description: "The show stars Neil Patrick Harris in the title role as a teenage physician who balances the challenge of practicing medicine with the everyday problems of teenage life."} )
# doogiehowser.movie.attach(io: open('app/assets/harris/Doogie_Howser_Trailer.mp4'), filename: 'Doogie_Howser_Trailer.mp4')
# doogiehowser.thumbnail.attach(io: open('app/assets/harris/doogie_howser.jpg'), filename: 'doogie_howser.jpg')

# himym = Video.create({title: "How I Met Your Mother", year: 2005, runtime: "0m 46s", description: "Ted, in the year 2030, recounts to his son and daughter the events that led him to meet their mother."} )
# himym.movie.attach(io: open('app/assets/harris/HIMYM_Trailer.mp4'), filename: 'HIMYM_Trailer.mp4')
# himym.thumbnail.attach(io: open('app/assets/harris/himym_thumbnail.png'), filename: 'himym_thumbnail.png')

# dr_horrible = Video.create({title: "Dr. Horrible's Sing-Along Blog", year: 2008, runtime: "0m 55s", description: "the show tells the story of Dr. Horrible (played by Neil Patrick Harris), an aspiring supervillain; Captain Hammer (Nathan Fillion), his superheroic nemesis; and Penny (Felicia Day), a charity worker and their shared love interest."} )
# dr_horrible.movie.attach(io: open('app/assets/harris/dr_horrible_trailer.mp4'), filename: 'dr_horrible_trailer.mp4')
# dr_horrible.thumbnail.attach(io: open('app/assets/harris/dr-horrible.png'), filename: 'dr-horrible.png')

# harold_kumar = Video.create({title: "Harold & Kumar Go to White Castle", year: 2004, runtime: "2m 22s", description: "The story follows Harold Lee (John Cho) and Kumar Patel (Kal Penn) as they decide to go to the fast food chain White Castle after smoking marijuana, but end up on a series of comical misadventures along the way."} )
# harold_kumar.movie.attach(io: open('app/assets/harris/harold_and_kumar_trailer.mp4'), filename: 'harold_and_kumar_trailer.mp4')
# harold_kumar.thumbnail.attach(io: open('app/assets/harris/white-castle.png'), filename: 'white-castle.png')

# smurfs = Video.create({title: "The Smurfs", year: 2011, runtime: "1m 48s", description: "The film tells the story of the Smurfs as they get lost in New York, and try to find a way to get back home before Gargamel catches them."} )
# smurfs.movie.attach(io: open('app/assets/harris/smurfs-trailer.mp4'), filename: 'smurfs-trailer.mp4')
# smurfs.thumbnail.attach(io: open('app/assets/harris/smurfs.png'), filename: 'smurfs.png')

# aquaman = Video.create({title: "Aquaman", year: 2018, runtime: "2m 24s", description: "In the film, Aquaman sets out to lead the underwater kingdom of Atlantis, replacing his half-brother, King Orm, who seeks to unite the seven underwater kingdoms against the surface world."} )
# aquaman.movie.attach(io: open('app/assets/wilson/aquaman-trailer.mp4'), filename: 'aquaman-trailer.mp4')
# aquaman.thumbnail.attach(io: open('app/assets/wilson/aquaman.png'), filename: 'aquaman.png')

# youngadult = Video.create({title: "Young Adult", year: 2011, runtime: "1m 58s", description: "Mavis Gary (Charlize Theron) is a successful writer of teen literature who returns to her hometown with a dual mission: to relive her glory days and steal away her now-married high-school sweetheart (Patrick Wilson)."} )
# youngadult.movie.attach(io: open('app/assets/wilson/young-adult-trailer.mp4'), filename: 'young-adult-trailer.mp4')
# youngadult.thumbnail.attach(io: open('app/assets/wilson/young-adult.png'), filename: 'young-adult.png')

# watchmen = Video.create({title: "Watchmen", year: 2009, runtime: "2m 22s", description: "Set in an alternate history in the year 1985 at the height of the Cold War, a group of mostly retired American superheroes investigates the murder of one of their own before uncovering an elaborate and deadly conspiracy."} )
# watchmen.movie.attach(io: open('app/assets/wilson/watchmen-trailer.mp4'), filename: 'watchmen-trailer.mp4')
# watchmen.thumbnail.attach(io: open('app/assets/wilson/watchmen_poster.jpg'), filename: 'watchmen_poster.jpg')

# commuter = Video.create({title: "The Commuter", year: 2018, runtime: "2m 03s", description: " It follows a man who is unwittingly recruited into a murder conspiracy after meeting a mysterious woman while on his daily train commute."} )
# commuter.movie.attach(io: open('app/assets/wilson/commuter-trailer.mp4'), filename: 'commuter-trailer.mp4')
# commuter.thumbnail.attach(io: open('app/assets/wilson/commuter.png'), filename: 'commuter.png')

# little_children = Video.create({title: "Little Children", year: 2006, runtime: "1m 42s", description: "Sarah (Kate Winslet) is a well-educated woman who cannot come to terms with her life as a housewife and mother. Brad (Patrick Wilson), a stay-at-home dad, is married to a beautiful filmmaker (Jennifer Connelly)"} )
# little_children.movie.attach(io: open('app/assets/wilson/little_children_trailer.mp4'), filename: 'little_children_trailer.mp4')
# little_children.thumbnail.attach(io: open('app/assets/wilson/little-children.png'), filename: 'little-children.png')

# conjuring = Video.create({title: "The Conjuring", year: 2013, runtime: "2m 28s", description: "Patrick Wilson and Vera Farmiga star as Ed and Lorraine Warren, paranormal investigators and authors associated with prominent cases of haunting."} )
# conjuring.movie.attach(io: open('app/assets/wilson/conjuring-trailer.mp4'), filename: 'conjuring-trailer.mp4')
# conjuring.thumbnail.attach(io: open('app/assets/wilson/conjuring.png'), filename: 'conjuring.png')

# greyanatomy = Video.create({title: "Grey's Anatomy", year: 2005, runtime: "3m 26s", description: "The fictional series focuses on the lives of surgical interns, residents, and attending doctors as they develop into seasoned doctors while balancing personal and professional relationships."} )
# greyanatomy.movie.attach(io: open('app/assets/dempsey/greys_anatomy_trailer.mp4'), filename: 'greys_anatomy_trailer.mp4')
# greyanatomy.thumbnail.attach(io: open('app/assets/dempsey/greys-anatomy.png'), filename: 'greys-anatomy.png')

# enchanted = Video.create({title: "Enchanted", year: 2007, runtime: "2m 30s", description: "The plot focuses on an archetypal Disney Princess, who is forced from her traditional animated world into the live-action world of New York City."} )
# enchanted.movie.attach(io: open('app/assets/dempsey/enchanted-trailer.mp4'), filename: 'enchanted-trailer.mp4')
# enchanted.thumbnail.attach(io: open('app/assets/dempsey/enchanted.png'), filename: 'enchanted.png')

# madeofhonor = Video.create({title: "Made of Honor", year: 2008, runtime: "1m 22s", description: "The plot follows a lifelong playboy who falls in love with his best friend, only to have her get engaged and ask him to be her maid of honor."} )
# madeofhonor.movie.attach(io: open('app/assets/dempsey/made_of_honor_trailer.mp4'), filename: 'made_of_honor_trailer.mp4')
# madeofhonor.thumbnail.attach(io: open('app/assets/dempsey/made-of-honor.png'), filename: 'made-of-honor.png')

# cantbuymelove = Video.create({title: "Can't Buy Me Love", year: 1987, runtime: "1m 34s", description: "Patrick Dempsey and Amanda Peterson in a story about a nerd at a high school in Tucson, Arizona who gives a cheerleader $1,000 to pretend to be his girlfriend for a month."} )
# cantbuymelove.movie.attach(io: open('app/assets/dempsey/cantbuymelove_trailer.mp4'), filename: 'cantbuymelove_trailer.mp4')
# cantbuymelove.thumbnail.attach(io: open('app/assets/dempsey/cant-buy-me-love.png'), filename: 'cant-buy-me-love.png')

# alabama = Video.create({title: "Sweet Home Alabama", year: 2002, runtime: "2m 30s", description: "New York fashion designer Melanie (Reese Witherspoon) suddenly finds herself engaged to the city's most eligible bachelor. But Melanie's past holds many secrets, including Jake (Josh Lucas), the redneck husband she married in high school, who refuses to divorce her."} )
# alabama.movie.attach(io: open('app/assets/dempsey/alabama-trailer.mp4'), filename: 'alabama-trailer.mp4')
# alabama.thumbnail.attach(io: open('app/assets/dempsey/sweet-home-alabama.png'), filename: 'sweet-home-alabama.png')

# bridget_jones = Video.create({title: "Bridget Jones's Baby", year: 2016, runtime: "2m 23s", description: "The film stars Renée Zellweger as Bridget Jones, who after becoming pregnant is unsure if Mark Darcy (Colin Firth, also reprising his role) or Jack Qwant (Patrick Dempsey) is the father."} )
# bridget_jones.movie.attach(io: open('app/assets/dempsey/bridget-jones-baby-trailer.mp4'), filename: 'bridget-jones-baby-trailer.mp4')
# bridget_jones.thumbnail.attach(io: open('app/assets/dempsey/bridget-jones.png'), filename: 'bridget-jones.png')

# freedom_writers = Video.create({title: "Freedom Writers", year: 2007, runtime: "2m 21s", description: "A dedicated teacher (Hilary Swank) in a racially divided Los Angeles school has a class of at-risk teenagers deemed incapable of learning."} )
# freedom_writers.movie.attach(io: open('app/assets/dempsey/freedom_writers_trailer.mp4'), filename: 'freedom_writers_trailer.mp4')
# freedom_writers.thumbnail.attach(io: open('app/assets/dempsey/freedom-writers.png'), filename: 'freedom-writers.png')
