# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

TeamPresident.destroy_all;
President.destroy_all;
Team.destroy_all;
User.destroy_all;

President.create!(name: "George Washington", presidency: "1st", years_active: "1789–1797", drink_type: "beer", specific_drink: "Philadelphia Porter Beer", alt_one: "Rye Whiskey", alt_two: "Champagne", image_url: "https://bit.ly/2BSjAY5", description: "Washington made and sold rye whiskey on his estate and enjoyed madeira and champagne; however, his true love was for dark beers, especially Robert Hare's Philadelphia Porter.")
President.create!(name: "John Adams", presidency: "2nd", years_active: "1797–1801", drink_type: "hard cider", specific_drink: "New England Hard Cider", alt_one: "Philadelphia Porter Beer", alt_two: "Caribbean Rum", image_url: "https://bit.ly/2VoevzM", description: "Second cousin to famous beer brewer Samuel Adams, John Adams enjoyed a number of alcoholic beverages — rum, whiskey, madeira, sherry, wine, beers (like Washington, he loved Mr. Hare's Philadelphia Porter); however, his love of hard rum goes back to his teenage years, and even as an adult, he typically started each day with a shot of hard cider.")
President.create!(name: "Thomas Jefferson", presidency: "3rd", years_active: "1801-1809", drink_type: "wine", specific_drink: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_one: "Italian Red Wine (especially Northern regions like Piedmonte)", alt_two: "Madiera Wine", image_url: "https://bit.ly/2EXLaqN", description: "Thomas Jefferson served as Minister to France from 1784-1789 and developed a taste for fine vintage wines from the region. His love of wine was so great that it nearly drove him to financial ruin.")
President.create!(name: "James Madison", presidency: "4th", years_active: "1809-1817", drink_type: "champagne", specific_drink: "Champagne", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: nil, image_url: "https://bit.ly/2GLSWFX", description: "Madison described champagne as 'the most delightful wine'; however, he only drank in moderation as he found overconsumption gave him headaches.")
President.create!(name: "James Monroe", presidency: "5th", years_active: "1817-1825", drink_type: "champagne", specific_drink: "Champagne", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: nil, image_url: "https://bit.ly/2BUxDML", description: "Like Thomas Jefferson, James Monroe served as a diplomat in France — most notably when he helped negotiate the Louisiana Purchase. Also, like Jefferson, he fell in love with French wine, so much so that he created a slight scandal when he used federal funds to buy 1,200 bottles!")
President.create!(name: "John Quincy Adams", presidency: "6th", years_active: "1825-1829", drink_type: "madeira", specific_drink: "Madiera Wine", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: "", image_url: "https://bit.ly/2GNEf57", description: "John Quincy Adams, the eldest son of John Adams, wasn't nearly as heavy a drinker as his father; however, it's said that he knew madeira wines so well that he could easily identify them in a blind taste test.")
President.create!(name: "Andrew Jackson", presidency: "7th", years_active: "1829-1837", drink_type: "whiskey", specific_drink: "Tenessee Rye Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2VnfMXu", description: "Like George Washington, Andrew Jackson was a Revolutionary war hero, famed for his victory at the battle of New Orleans. Also like Washington, Andrew Jackson brewed and sold whiskey, and was known to thoroughly enjoy it at social occasions.")
President.create!(name: "Martin Van Buren", presidency: "8th", years_active: "1837-1841", drink_type: "wine", specific_drink: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_one: "Madeira Wine", alt_two: "Whiskey", image_url: "https://bit.ly/2Qdd6rW", description: "An early American 'Frank the Tank', Martin Van Buren could handle his whiskey so well that he earned the nickname 'Blue Whiskey Van'; however, despite his reknown as a whiskey drinker, his favorite drinks were wines, ranging from lighter drinks like champagne to dark red Montepulcianos.")
President.create!(name: "William Henry Harrison", presidency: "9th", years_active: "1841-1841", drink_type: "hard cider", specific_drink: "Hard Cider", alt_one: "Rye Whiskey", alt_two: nil, image_url: "https://bit.ly/2CICRwz", description: "WHH rode to a White House win with a man-of-the-people 'Log Cabin and Hard Cider' campaign slogan. Perhaps he should have warmed up with hard cider during his inaugural address, as his long speech in frigid weather gave him pneumonia which ended his life only 31 days into his presidency.")
President.create!(name: "John Tyler", presidency: "10th", years_active: "1841-1845", drink_type: "champagne", specific_drink: "Champagne", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2EVuBel", description: "The first vice president to be unexpectedly thrust into the primary position, John Tyler was not a heavy drinker; however, his letters showed a clear fondness for champagne.")
President.create!(name: "James K. Polk", presidency: "11th", years_active: "1845-1849", drink_type: "wine", specific_drink: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_one: "Champagne", alt_two: "Brandy", image_url: "https://bit.ly/2RmJwVz", description: "Although he was a protege of Andrew Jackson, James K. Polk never shared Jackson's love of whiskey. A moderate drinker, he largely preferred wines.")
President.create!(name: "Zachary Taylor", presidency: "12th", years_active: "1849-1850", drink_type: "whiskey", specific_drink: "Kentucky Whiskey", alt_one: "Champagne", alt_two: "French Red Wine (Bordeaux, Burgundy, etc.)", image_url: "https://bit.ly/2Ap2zVx", description: "Known as 'Old Rough and Ready' likely due to his long military career and victories in the Mexican-American War, Zachary Taylor never drank whiskey as heavily as many soldiers of the time; however, he often drank a small amount medicinally.")
President.create!(name: "Millard Filmore", presidency: "13th", years_active: "1850-1853", drink_type: "sober", specific_drink: "Water", alt_one: "Madiera wine", alt_two: "Millard Fillmore Brandy Manhattan; 2 oz brandy;
1/2 oz sweet vermouth;
1/2 oz dry vermouth;
2 dashes Angostura bitters;
Maraschino cherry for garnish; Place maraschino cherry in a chilled cocktail glass.
Add all ingredients to a mixing glass with ice and stir until chilled.
Strain into cocktail glass and serve.", image_url: "https://bit.ly/2QdhCGM", description: "A true bummer of a man, Millard Filmore took a temperance pledge in his twenties, promising to never drink any alcoholic beverage. He largely held to this pledge throughout his life, barely ever having any alcohol and even refusing to serve it to guests. ")
President.create!(name: "Franklin Pierce", presidency: "14th", years_active: "1853-1857", drink_type: "wildcard", specific_drink: "Any Alcoholic Beverage", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2RoxdIe", description: "Like Millard Fillmore, Franklin Pierce signed a temperance pledge; however, he definitely ignored it. As a young congressman, he was known to drink, gamble, and chase women, and after his presidency, he famously quipped 'What else can an ex-president of the United States do except get drunk?")
President.create!(name: "James Buchanan", presidency: "15th", years_active: "1857-1861", drink_type: "wildcard", specific_drink: "Any Alcoholic Beverage", alt_one: "port", alt_two: "red wine", image_url: "https://bit.ly/2R42C38", description: "It is perhaps no surprise that James Buchanan, the last president before the Civil War, was also one of the drunkest. A drinker since his teenage years, Buchanan was well known for his ability to consume large portions of whiskey and wine, once doing 16 toasts in a row.")
President.create!(name: "Abraham Lincoln", presidency: "16th", years_active: "1861-1865", drink_type: "sober", specific_drink: "Apple Juice or Water", alt_one: nil, alt_two: "Honest Abe Applejack; 2 oz Applejack (apple brandy);
1 oz Rye whiskey; 
1/2 oz simple syrup;
splash of Pernod; shake and pour over ice in a rocks glass.", image_url: "https://bit.ly/2BSzZvu", description: "Abraham Lincoln probably drank a small amount of beer and or cider as a youth; however, his temperance as an adult is well documented - he rarely if ever drank. Despite his own distaste for alcohol, Honest Abe refused to make laws preventing others from drinking. Be like Abe.")
President.create!(name: "Andrew Johnson", presidency: "17th", years_active: "1865-1869", drink_type: "whiskey", specific_drink: "Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2VjB48J", description: "Andrew Johnson is best known as the first president to ever be impeached; however, that embarrassing event was preceded by another incident: he was so drunk during his vice presidential inauguration that he slurred and rambled throughout. Onlookers considered his behavior a complete disgrace.")
President.create!(name: "Ulysses S. Grant", presidency: "18th", years_active: "1869-1877", drink_type: "whiskey", specific_drink: "Whiskey", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: "Champagne", image_url: "https://bit.ly/2LGVJyS", description: "Ulysses S. Grant alledgedly had a pretty low tolerance for alcohol, so while he did not drink often, when he did, he got DRUNK. Like many military men of the time, he enjoyed whiskey; however, he allegedly would show signs of intoxication upon a single drink.")
President.create!(name: "Rutherford B. Hayes", presidency: "19th", years_active: "1877-1881", drink_type: "sober", specific_drink: "Lemonade or Water", alt_one: "German Lager", alt_two: "Hard Lemonade Lucy; 1 oz bourbon whiskey; 3 oz lemonade;
1 oz triple sec;
Put on ice in a rocks glass with a lemon slice and maraschino cherry", image_url: "https://bit.ly/2LIeEJI", description: "Rutherford B. Hayes probably enjoyed German beer in his youth; however, he was largely sober as an adult. His wife was so adamant against alcohol that she had the nickname 'Lemonade Lucy.'")
President.create!(name: "James Garfield", presidency: "20th", years_active: "1881-1881", drink_type: "beer", specific_drink: "German Lager", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2QfTZxg", description: "James Garfield was not a heavy drinker; however, he was known to enjoy going on long walks and drinking beer, most likely German style lagers. He was sadly shot and killed by a crazed man only a year into his presidency.")
President.create!(name: "Chester A. Arthur", presidency: "21st", years_active: "1881-1885", drink_type: "wildcard", specific_drink: "Any Top Shelf Alcoholic Beverage", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2QZdTlk", description: "Chester A. Arthur had a wealthy upbringing and was known to enjoy the fanciest foods and liquors. Arthur's Manhattan townhose was once described as 'a bachelor establishment, free and easy, with lots of tobacco smoke and decanters.'")
President.create!(name: "Grover Cleveland", presidency: "22nd and 24th", years_active: "1885-1889 & 1893-1897", drink_type: "beer", specific_drink: "German Lager", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2EZ2ydW", description: "The only president to have non-consecutive terms, Grover Cleveland was a heavy beer drinker. He once attempted to lessen his drinking by having a hard cap at 4 beers a day; however, when that proved too difficult, he cleverly switched to larger glasses!")
President.create!(name: "Benjamin Harrison", presidency: "23rd", years_active: "1889-1893", drink_type: "sober", specific_drink: "Water", alt_one: nil, alt_two: "Spiked Benjamin Harrison; 1 oz vodka;
4 1/2 ozs cranberry juice;
1 dash Rose's lime;
1 dash orange juice;
splash of soda;
Fill an old-fashioned glass halfway up with ice. Pour all the ingredients in. Serve with a straw for stirring and sipping.", image_url: "https://bit.ly/2VpkDb0", description: "The grandson of William Henry Harrison, Benjamin Harrison did not share his grandfather's love of hard cider or any other alcoholic drink. He once argued that 'drunken demagogues' should be ousted from government and replaced by 'honest temperance men.' The closest thing to a cocktail he'd probably drink would be a cranberry soda.")
President.create!(name: "William McKinley", presidency: "25th", years_active: "1897-1901", drink_type: "cocktail", specific_drink: "McKinley’s Delight;
3 oz. rye whiskey (shoot for at least 100 proof);
1 oz. sweet vermouth;
2 dashes of cherry brandy;
1 dash absinthe;
Shake it up, pour over ice, and serve in a Manhattan bar glass.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2F0EsPR", description: "McKinley's primary vice wasn't alcohol, but tobacco - he often smoked over a dozen each week. A light drinker, he mostly enjoyed wine; however, as far as alcohol goes, he's more well-known for 'McKinley's Delight', a cocktail his fellow Republicans would toast him with during his campaign.")
President.create!(name: "Theodore Roosevelt", presidency: "26th", years_active: "1901-1909", drink_type: "cocktail", specific_drink: "Teddy Roosevelt's Mint Julep,
10 to 12 fresh mint leaves “muddled” with a splash of water and a sugar cube;
2 or 3 oz. of rye whiskey;
¼ oz. of brandy;
Sprig or two of fresh mint as a garnish;
First fill a bar glass with the muddled mint, then fill the glass with crushed ice. Top off with whiskey, brandy, and garnish.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2F2Rm02", description: "Teddy Roosevelt seems like the kind of guy who would down a fifth of whiskey and go fist fight a bear; however, while he almost certainly fist fought bears, he was actually a very light drinker. That said, he loved Mint Julep's so much that he started growing mint at the White House.")
President.create!(name: "William Howard Taft", presidency: "27th", years_active: "1909-1913", drink_type: "champagne", specific_drink: "Champagne", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2SqFzwa", description: "The first and only president to become a supreme court justice, Taft's 300+ lb frame might make you think he's a big drinker; however, he actually barely consumed alcohol. When he did drink, he enjoyed celebrating with champagne.")
President.create!(name: "Woodrow Wilson", presidency: "28th", years_active: "1913-1921", drink_type: "whiskey", specific_drink: "Blended Scotch Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2s1mRjb", description: "President during the first world war, Woodrow Wilson loved a good glass of scotch. He even borrowed his campaign song 'Wilson! That's all!' from Wilson Whiskey, a popular brand at the time that can still be found today.")
President.create!(name: "Warren G. Harding", presidency: "29th", years_active: "1921-1923", drink_type: "whiskey", specific_drink: "Bourbon or Scotch", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2F3HxiU", description: "Warren may have been president during the Prohibition years; however, he was well-known to enjoy the illicit spirits, often hiding a bottle of whiskey in his golf bag.")
President.create!(name: "Calvin Coolidge", presidency: "30th", years_active: "1923-1929", drink_type: "wine", specific_drink: "Tokay Wine", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2LGVjIQ", description: "Calvin Coolidge may have a cocktail named after him ('The Coolidge Cooler') and was president during the 'Roaring Twenties'; however, he was quite the opposite of a party person. In fact, he was so well known as a quiet, boring man that when he died, a famous writer quipped, 'how can you tell?!'. He most likely enjoyed small amounts of beer and wine.")
President.create!(name: "Herbert Hoover", presidency: "31st", years_active: "1929-1933", drink_type: "cocktail", specific_drink: "Herbert Hoover's Good Dry Martini;
2 oz  gin;
1/2 oz dry vermouth;
Lemon Peel; 
Olives;
Combine gin and dry vermouth in a shaker with ice, shake well, and strain into a martini glass. Garnish with lemon peel and olives.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2CJAMAA", description: "Herbert Hoover alledgely had a fantastic wine collection; however, his wife Lou dumped it down the drain after the 18th amendment started the Prohibition era. Likely quite frustrated by this, Hoover allegedly quipped, 'I don't have to live with the American people, but I do have to live with Lou.' Despite his love of wine, on his deathbed he famously asked for a 'good dry martini', and the hospital supervisor, Mother Magdalena, actually made one!")
President.create!(name: "Franklin D. Roosevelt", presidency: "32nd", years_active: "1933-1945", drink_type: "cocktail", specific_drink: "FDR's Martini;
2 parts gin;
1 part vermouth;
1 teaspoon olive brine;
Lemon twist;
2 olives;
Rub the lemon twist around the rim of a chilled cocktail glass and discard the peel, then combine gin vermouth and olive brine in a cocktail shaker with cracked ice and shake well. Strain into chilled glass and garnish with olives.", alt_one: "FDR's Whiskey Manhattan;
1.5 oz rye whiskey;
.5 oz dry vermouth;
2 dashes orange Angostura bitters;
Orange Peel;
Combine rye, vermouth, and bitters in a cocktail mixing glass over ice. Stir vigorously for 15 seconds. Strain into champagne coupe and garnish with orange twist.", alt_two: "Bermuda Rum Swizzle;
2 oz. dark rum;
1 oz. lime juice;
1 oz. orange juice;
1 generous dash of simple syrup;
Shake with ice, strain into a highball filled with ice, and garnish with a slice of orange and a cherry.", image_url: "https://bit.ly/2VkNcWN", description: "FDR took the reigns at about the same time the 21st amendment was ratified, ending the prohibition era. It is perhaps no coincidence then, that FDR was known as a cocktail lover. In his young days he enjoyed Bermuda Rum Swizzles; however, as an adult he's more known for loving whiskey manhattans and gin martinis.")
President.create!(name: "Harry Truman", presidency: "33rd", years_active: "1945-1953", drink_type: "whiskey", specific_drink: "Bourbon on the rocks", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2GQlHRX", description: "Harry Truman liked to jumpstart his mornings with a brisk walk and a shot of bourbon. He loved a good bourbon Old Fashioned; however, close friends often joked that he made them so strong it was basically just a tall bourbon on the rocks.")
President.create!(name: "Dwight D. Eisenhower", presidency: "34th", years_active: "1953-1961", drink_type: "whiskey", specific_drink: "Scotch Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2R1mPGY", description: "Due to heart problems, Eisenhower was never a big drinker. When he did drink, he loved a good scotch, so much that he sometimes ignored doctors' orders and grabbed a second one!")
President.create!(name: "John F. Kennedy", presidency: "35th", years_active: "1961-1963", drink_type: "cocktail", specific_drink: "JFK's Daiquiri;
3 oz light rum;
2 oz fresh lime juice;
1/2 oz fine sugar of simple syrup;
Combine all together in shaker, shake vigorously with ice. Serve without ice, garnish with lime wheel.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2CJEA4E", description: "Starting with his grandfather, Kennedy's family made a substantial portion of their wealth from the alcohol industry. Many of John F. Kennedy's favorite drinks - daiquiris, bloody Mary's, Heinekins - were considered quite fancy at the time, despite being relatively commonplace today.")
President.create!(name: "Lyndon B. Johnson", presidency: "36th", years_active: "1963-1969", drink_type: "whiskey", specific_drink: "Scotch and Soda", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2CKloEh", description: "LBJ was a well-known scotch lover, but he didn't necessarily drink it in a fancy way. He allegedly enjoyed zooming around his Texas ranch, driving at high speeds with a plastic cup full of the stuff.")
President.create!(name: "Richard Nixon", presidency: "37th", years_active: "1969-1974", drink_type: "wine", specific_drink: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2CI36DB", description: "Nixon was a fan of fancy European wines - expensive bottles like Chateau Lafite Rothschild; however, true to his 'Tricky Dick' nickname, when hosting events at the White House, he allegedly would drink the good stuff while his staff secretly served cheap red wine to guests.")
President.create!(name: "Gerald Ford", presidency: "38th", years_active: "1974-1977", drink_type: "cocktail", specific_drink: "Gerald Ford's Classic Martini;
2 oz  gin;
1/2 oz dry vermouth;
Lemon Peel; 
Olives;
Combine gin and dry vermouth in a shaker with ice, shake well, and strain into a martini glass. Garnish with lemon peel and olives.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2MHiUe5", description: "Michigan man Gerald R. Ford famously quipped that 'The three-martini lunch is the epitome of American effeciency.' That said, forced to deal with the blowout of Nixon's Watergate scandal, advisors encouraged him to slow down the drinking as president.")
President.create!(name: "Jimmy Carter", presidency: "39th", years_active: "1977-1981", drink_type: "wine", specific_drink: "White Wine", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2LPhm0h", description: "Jimmy Carter drank very little. This became a problem when he had to sit and drink with Soviet leaders during an arms summit. Worried about getting too drunk, Carter had his glasses switched to light white wines to avoid getting plastered on strong Russian vodka.")
President.create!(name: "Ronald Reagan", presidency: "40th", years_active: "1981-1989", drink_type: "cocktail", specific_drink: "Reagan's Orange Blossom;
1 oz vodka;
.5 oz grenadine;
.5 oz sweet vermouth;
2 oz fresh orange juice;
All brought together in a barroom glass filled with ice.", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: "California Red Wine", image_url: "https://bit.ly/2H2oDer", description: "Reagan was largely a wine lover, enjoying both European wines as well as vintages from his home stage of California. So much so that friends often joked the blush on his cheeks on television came from a tall glass. That said, he had another favorite, a cocktail called the 'Orange Blossom Special'.")
President.create!(name: "George H.W. Bush", presidency: "41st", years_active: "1989-1993", drink_type: "cocktail", specific_drink: "George H. W. Bush's Vodka Martini;
3 oz vodka;
1 oz dry vermouth;
3 olives;
Combine vodka and dry vermouth in a cocktail mixing glass. Fill with ice and stir until chilled. Strain into a chilled martini glass. Garnish with 3 olives on a toothpick.", alt_one: "Miller Beer", alt_two: nil, image_url: "https://bit.ly/36dVFAm", description: "A star baseball player growing up, George H.W. Bush enjoyed drinking pretty much everything. His favorites, however, were a strong vodka martini for formal events, and a classic Miller beer for anything else.")
President.create!(name: "Bill Clinton", presidency: "42nd", years_active: "1993-2001", drink_type: "cocktail", specific_drink: "Bill Clinton's Snake Bite;
8 oz. hard cider;
8 oz. lager beer;
Pour cider into a chilled glass. Float chilled lager beer on top of the hard cider. (Pour over the back of a spoon to do this delicately.)", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2F1qKxa", description: "Clinton's easy-going Southern demeanor certainly seems like he may have been a big drinker; however, he actually drank very little due to his step-father's unfortunately struggles with alcoholism. That said, in his younger days, he allegedly was a big fan of a cocktail called the 'Snakebite'.")
President.create!(name: "George W. Bush", presidency: "43rd", years_active: "2001-2009", drink_type: "sober", specific_drink: "Water or a Diet Pepsi with a slice of Lemon", alt_one: "Cheap College Beer", alt_two: "Liquid Cocaine; 1/2 oz 151-proof rum;
1/2 oz Rumple Minze;
1/2 oz Jägermeister;
1/2 oz Goldschlager; Shake all ingredients with ice; strain into a shot glass.", image_url: "https://bit.ly/2GQwUlh", description: "The only president to get a DUI, Bush once bragged he could drink a beer without even using his hands. He once drunkenly crashed his car into poppa Bush's neighbor's trash cans, then got out and challenged his dad to a fist fight. All that said, he turned his life around and completely quit drinking and smoking, and was 100% sober by his 40th birthday.")
President.create!(name: "Barack Obama", presidency: "44th", years_active: "2009-2017", drink_type: "beer", specific_drink: "Honey Ale Beer", alt_one: "Aged Tequila", alt_two: nil, image_url: "https://bit.ly/2BRzt0X", description: "Inspired by home brewers across the country, Barack Obama and his staff picked up a home brewing kit for the White House kitchen. While, generally speaking, he's not the first president to make his own alcohol, Obama's White House Honey Brown Ale is the first alcohol brewed or distilled on the White House grounds.")
President.create!(name: "Donald Trump", presidency: "45th", years_active: "2017-present", drink_type: "sober", specific_drink: "Diet Coke or water", alt_one: nil, alt_two: "The Bad Hombre; 1 dash chili bitters;
2 dashes chocolate bitters;
1/4 ounce creme de cacao;
3/4 ounce vermouth;
2 ounces Reposado tequila;
Stir well over ice, pour into a cocktail glass, garnish with a chili balanced on the rim and a sprinkling of fresh cinnamon.", image_url: "https://bit.ly/2Aq9wW9", description: "Donald Trump said in 2016 that he's 'never had a drink,' and despite his tendency to stretch the truth a bit, it's true - those late-night Twitter rants are allegedly done dead sober. The reason? Trump's older brother died at 42 and alcoholism is believed to be a primary cause, inspiring Trump to stay away from the stuff.")

p "#{President.count} presidents created"

test_user = User.create!({email: "test@email.com", password: "12345", username: "test"})
brian = User.create!({email: "bdflynny@gmail.com", password: "brian", username: "brian"})

p "#{User.count} users created"

team = Team.new({teamname: "Test Team", creator: test_user, password: "12345"})

if team.save!
  President.all.each do |pres|
    team.team_presidents.create!(president: pres)
  end
end

team.users << test_user
team.users << brian

p "#{Team.count} teams created"