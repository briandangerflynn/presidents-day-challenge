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

President.create!(name: "George Washington", presidency: "1st", years_active: "1789–1797", drink_type: "beer", specific_drink: "Philadelphia Porter Beer", alt_one: "Rye Whiskey", alt_two: "Champagne", image_url: "https://bit.ly/2BSjAY5")
President.create!(name: "John Adams", presidency: "2nd", years_active: "1797–1801", drink_type: "hard cider", specific_drink: "New England Hard Cider", alt_one: "Philadelphia Porter Beer", alt_two: "Caribbean Rum", image_url: "https://bit.ly/2VoevzM")
President.create!(name: "Thomas Jefferson", presidency: "3rd", years_active: "1801-1809", drink_type: "wine", specific_drink: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_one: "Italian Red Wine (especially Northern regions like Piedmonte)", alt_two: "Madiera Wine", image_url: "https://bit.ly/2EXLaqN")
President.create!(name: "James Madison", presidency: "4th", years_active: "1809-1817", drink_type: "champagne", specific_drink: "Champagne", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: nil, image_url: "https://bit.ly/2GLSWFX")
President.create!(name: "James Monroe", presidency: "5th", years_active: "1817-1825", drink_type: "champagne", specific_drink: "Champagne", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: nil, image_url: "https://bit.ly/2BUxDML")
President.create!(name: "John Quincy Adams", presidency: "6th", years_active: "1825-1829", drink_type: "madeira", specific_drink: "Madiera Wine", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: "", image_url: "https://bit.ly/2GNEf57")
President.create!(name: "Andrew Jackson", presidency: "7th", years_active: "1829-1837", drink_type: "whiskey", specific_drink: "Tenessee Rye Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2VnfMXu")
President.create!(name: "Martin Van Buren", presidency: "8th", years_active: "1837-1841", drink_type: "wine", specific_drink: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_one: "Madeira Wine", alt_two: "Whiskey", image_url: "https://bit.ly/2Qdd6rW")
President.create!(name: "William Henry Harrison", presidency: "9th", years_active: "1841-1841", drink_type: "hard cider", specific_drink: "Hard Cider", alt_one: "Rye Whiskey", alt_two: nil, image_url: "https://bit.ly/2CICRwz")
President.create!(name: "John Tyler", presidency: "10th", years_active: "1841-1845", drink_type: "champagne", specific_drink: "Champagne", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2EVuBel")
President.create!(name: "James K. Polk", presidency: "11th", years_active: "1845-1849", drink_type: "wine", specific_drink: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_one: "Champagne", alt_two: "Brandy", image_url: "https://bit.ly/2RmJwVz")
President.create!(name: "Zachary Taylor", presidency: "12th", years_active: "1849-1850", drink_type: "whiskey", specific_drink: "Kentucky Whiskey", alt_one: "Champagne", alt_two: "French Red Wine (Bordeaux, Burgundy, etc.)", image_url: "https://bit.ly/2Ap2zVx")
President.create!(name: "Millard Filmore", presidency: "13th", years_active: "1850-1853", drink_type: "sober", specific_drink: "Water", alt_one: "Madiera wine", alt_two: "", image_url: "https://bit.ly/2QdhCGM")
President.create!(name: "Franklin Pierce", presidency: "14th", years_active: "1853-1857", drink_type: "wildcard", specific_drink: "Any Alcoholic Beverage", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2RoxdIe")
President.create!(name: "James Buchanan", presidency: "15th", years_active: "1857-1861", drink_type: "wildcard", specific_drink: "Any Alcoholic Beverage", alt_one: "port", alt_two: "red wine", image_url: "https://bit.ly/2R42C38")
President.create!(name: "Abraham Lincoln", presidency: "16th", years_active: "1861-1865", drink_type: "sober", specific_drink: "Apple Juice or Water", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2BSzZvu")
President.create!(name: "Andrew Johnson", presidency: "17th", years_active: "1865-1869", drink_type: "whiskey", specific_drink: "Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2VjB48J")
President.create!(name: "Ulysses S. Grant", presidency: "18th", years_active: "1869-1877", drink_type: "whiskey", specific_drink: "Whiskey", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: "Champagne", image_url: "https://bit.ly/2LGVJyS")
President.create!(name: "Rutherford B. Hayes", presidency: "19th", years_active: "1877-1881", drink_type: "sober", specific_drink: "Lemonade or Water", alt_one: "German Beer", alt_two: nil, image_url: "https://bit.ly/2LIeEJI")
President.create!(name: "James Garfield", presidency: "20th", years_active: "1881-1881", drink_type: "beer", specific_drink: "German Lager", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2QfTZxg")
President.create!(name: "Chester A. Arthur", presidency: "21st", years_active: "1881-1885", drink_type: "wildcard", specific_drink: "Any Top Shelf Alcoholic Beverage", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2QZdTlk")
President.create!(name: "Grover Cleveland", presidency: "22nd and 24th", years_active: "1885-1889 & 1893-1897", drink_type: "beer", specific_drink: "German Lager", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2EZ2ydW")
President.create!(name: "Benjamin Harrison", presidency: "23rd", years_active: "1889-1893", drink_type: "sober", specific_drink: "Water", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2VpkDb0")
President.create!(name: "William McKinley", presidency: "25th", years_active: "1897-1901", drink_type: "cocktail", specific_drink: "McKinley’s Delight;
3 oz. rye whiskey (shoot for at least 100 proof);
1 oz. sweet vermouth;
2 dashes of cherry brandy;
1 dash absinthe;
Shake it up, pour over ice, and serve in a Manhattan bar glass.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2F0EsPR")
President.create!(name: "Theodore Roosevelt", presidency: "26th", years_active: "1901-1909", drink_type: "cocktail", specific_drink: "Teddy Roosevelt's Mint Julep,
10 to 12 fresh mint leaves “muddled” with a splash of water and a sugar cube;
2 or 3 oz. of rye whiskey;
¼ oz. of brandy;
Sprig or two of fresh mint as a garnish;
First fill a bar glass with the muddled mint, then fill the glass with crushed ice. Top off with whiskey, brandy, and garnish.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2F2Rm02")
President.create!(name: "William Howard Taft", presidency: "27th", years_active: "1909-1913", drink_type: "champagne", specific_drink: "Champagne", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2SqFzwa")
President.create!(name: "Woodrow Wilson", presidency: "28th", years_active: "1913-1921", drink_type: "whiskey", specific_drink: "Blended Scotch Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2s1mRjb")
President.create!(name: "Warren G. Harding", presidency: "29th", years_active: "1921-1923", drink_type: "whiskey", specific_drink: "Bourbon or Scotch", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2F3HxiU")
President.create!(name: "Calvin Coolidge", presidency: "30th", years_active: "1923-1929", drink_type: "wine", specific_drink: "Tokay Wine", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2LGVjIQ")
President.create!(name: "Herbert Hoover", presidency: "31st", years_active: "1929-1933", drink_type: "cocktail", specific_drink: "Herbert Hoover's Good Dry Martini;
2 oz  gin;
1/2 oz dry vermouth;
Lemon Peel; 
Olives;
Combine gin and dry vermouth in a shaker with ice, shake well, and strain into a martini glass. Garnish with lemon peel and olives.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2CJAMAA")
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
Shake with ice, strain into a highball filled with ice, and garnish with a slice of orange and a cherry.", image_url: "https://bit.ly/2VkNcWN")
President.create!(name: "Harry Truman", presidency: "33rd", years_active: "1945-1953", drink_type: "whiskey", specific_drink: "Bourbon on the rocks", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2GQlHRX")
President.create!(name: "Dwight D. Eisenhower", presidency: "34th", years_active: "1953-1961", drink_type: "whiskey", specific_drink: "Scotch Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2R1mPGY")
President.create!(name: "John F. Kennedy", presidency: "35th", years_active: "1961-1963", drink_type: "cocktail", specific_drink: "JFK's Daiquiri;
3 ounces light rum;
2 ounces fresh lime juice;
1/2 ounce fine sugar of simple syrup;
Combine all together in shaker, shake vigorously with ice. Serve without ice, garnish with lime wheel.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2CJEA4E")
President.create!(name: "Lyndon B. Johnson", presidency: "36th", years_active: "1963-1969", drink_type: "whiskey", specific_drink: "Scotch Whiskey", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2CKloEh")
President.create!(name: "Richard Nixon", presidency: "37th", years_active: "1969-1974", drink_type: "wine", specific_drink: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2CI36DB")
President.create!(name: "Gerald Ford", presidency: "38th", years_active: "1974-1977", drink_type: "cocktail", specific_drink: "Gerald Ford's Classic Martini;
2 oz  gin;
1/2 oz dry vermouth;
Lemon Peel; 
Olives;
Combine gin and dry vermouth in a shaker with ice, shake well, and strain into a martini glass. Garnish with lemon peel and olives.", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2MHiUe5")
President.create!(name: "Jimmy Carter", presidency: "39th", years_active: "1977-1981", drink_type: "wine", specific_drink: "White Wine", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2LPhm0h")
President.create!(name: "Ronald Reagan", presidency: "40th", years_active: "1981-1989", drink_type: "cocktail", specific_drink: "Reagan's Orange Blossom;
1 oz vodka;
.5 oz grenadine;
.5 oz sweet vermouth;
2 oz fresh orange juice;
All brought together in a barroom glass filled with ice.", alt_one: "French Red Wine (Bordeaux, Burgundy, etc.)", alt_two: "California Red Wine", image_url: "https://bit.ly/2H2oDer")
President.create!(name: "George H.W. Bush", presidency: "41st", years_active: "1989-1993", drink_type: "cocktail", specific_drink: "George H. W. Bush's Vodka Martini;
3 oz vodka;
1 oz dry vermouth;
3 olives;
Combine vodka and dry vermouth in a cocktail mixing glass. Fill with ice and stir until chilled. Strain into a chilled martini glass. Garnish with 3 olives on a toothpick.", alt_one: "Miller Beer", alt_two: nil, image_url: "https://bit.ly/36dVFAm")
President.create!(name: "Bill Clinton", presidency: "42nd", years_active: "1993-2001", drink_type: "cocktail", specific_drink: "Bill Clinton's Snake Bite;
8 oz. hard cider;
8 oz. lager beer;
Pour cider into a chilled glass. Float chilled lager beer on top of the hard cider. (Pour over the back of a spoon to do this delicately.)", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2F1qKxa")
President.create!(name: "George W. Bush", presidency: "43rd", years_active: "2001-2009", drink_type: "sober", specific_drink: "Water", alt_one: "Cheap College Beer", alt_two: "Bourbon", image_url: "https://bit.ly/2GQwUlh")
President.create!(name: "Barack Obama", presidency: "44th", years_active: "2009-2017", drink_type: "beer", specific_drink: "Honey Ale Beer", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2BRzt0X")
President.create!(name: "Donald Trump", presidency: "45th", years_active: "2017-present", drink_type: "sober", specific_drink: "Diet Coke or water", alt_one: nil, alt_two: nil, image_url: "https://bit.ly/2Aq9wW9")

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