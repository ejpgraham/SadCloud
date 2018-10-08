Sad Cloud - a readme.

By Edward Graham

  Sad Cloud is an amusing, light weight React.js weather app with a clean UI. It allows users to search for five day forecasts for any zip code in the United States. It features custom-made, mopey icons for different weather conditions. All but one icon are terribly sad - see if you can find the one that isn't!

  This app was constructed as part of a take home test for a frontend developer position.

  To view this app online, visit: https://sad-cloud.herokuapp.com/ It may take a moment to load.

**GETTING STARTED:**

  This app uses npm: '6.2.0' and Node: '6.10.0' to run locally. It uses the React library as well. Visit https://www.npmjs.com/get-npm to download and install these. The repository for this code can be reached at https://github.com/ejpgraham/SadCloud.git. Once you've downloaded the code, you can run the app locally by using the 'npm start' command once you've navigated to the app's root folder.


**ABOUT THIS APP:**

  I purposefully pursued a clean, minimalist interface for this test. People visiting a weather app want quick information about the next few days' weather, not an overly complex interface. So, I focused on displaying plenty of weather information while taking care to retain an orderly UI.

  Even though the UI is minimalist, I still put in a lot of effort and care to ensure it's visually appealing, and that elements are sized correctly. I added a 'sad cloud' motif for a bit of cheeky fun and because I was so enchanted by that sad cloud icon when I saw it. I also added some media queries to ensure the application properly displays on a smaller browser size.

  The css and html structure is also built with further customization in mind. I gave html elements an orderly className structure, and stored modules, stylesheets, and components in separate folders.

  As I suspected, one of the most challenging aspects of the app was working with the Open Weather API. Even though Open Weather has a well developed API and a robust set of documents, it was still a challenge to ensure I was navigating the JSON response correctly. In my experience, working with APIs requires extra diligence as they may return unexpected responses, as I found out.

**TRADEOFFS:**

  I originally chose the zip code instead of city name as the parameter for the weather search. I live in New York City, and zip codes represent a much more specific area of weather than simply querying New York. I thought this would simplify the coding as well, because I wouldn't be worrying about capitalization, spacing, and misspellings.

  I ran into some trouble here because after some googling, it appears Open Weather Map has some issues providing weather reports based on zip codes in countries other than the United States. I tried querying London based on its postal code and country code, and after ensuring my code was working properly, I realized I had accidentally limited my app to searching US weather.

  Unfortunately, by the time I realized the mistake I was out of time. The app still works for US zip codes, however.

**IF I HAD ADDITIONAL TIME:**

  I am about to travel and will have limited access to the internet, so I had to produce a finished version of the app without including everything I wanted. Of course, I would have fixed the above issue by allowing users to enter city names had time allowed.

  I would have also included vigorous testing, as I am acutely aware of how vital testing is to maintain the longterm health of software as it changes. Given that it was a bonus assignment and I had limited time, I chose to focus on the core features instead.

  I was hoping to include the ability for users to switch between fahrenheit and celsius, and to choose forecasts longer than 5 days. Given that this would only require altering the request to Open Weather based on the user's input, I figured it would be fairly straightforward to implement if time allowed. Since I used React to power the app, I could have allowed users to switch back and forth between C and F without a new query.

  I am also not completely happy with the way I imported my custom weather icons into the Icon.js component. I imported each icon separately, which was workable because there were not that many icons. This solution would quickly become untenable if there were dozens or hundreds of icons. I hit upon some solutions that allowed Webpack to bundle and import any number of files, but I figured since my current solution, while unwieldy, does function and does not slow down the app, it would do fine for now.

**FINAL THOUGHTS**

  This was a cool project! I found myself wishing I had more time to devote to it as I had a lot of cool features in mind, both functional and visual. I'm interested in having the Sad Cloud mascot actually reply to the question of what the weather is like, and grumbling about why it hates sunshine as much as rain.

  It made think about how much I would enjoy the chance to tackle a client's project for longer periods of time, with all day to devote to the work instead of whenever I can find time.
