// Transit Systems Quiz Data
// Covering 20+ North American transit agencies

export const quizData = {
  'vehicle-models-text': {
    easy: [
      // NJ Transit
      { question: "What manufacturer makes the NJ Transit multi-level EMU cars?", answers: ["bombardier", "bombardier multilevel"], category: "vehicle-models-text", agency: "nj-transit" },
      { question: "What is the most common bus model in NJ Transit's fleet?", answers: ["nova lfs", "nova bus lfs"], category: "vehicle-models-text", agency: "nj-transit" },

      // MTA NYC
      { question: "What bus model is most common in NYC's MTA fleet?", answers: ["nova lfs", "nova bus lfs"], category: "vehicle-models-text", agency: "mta-nyc" },
      { question: "What model are the newest NYC Subway cars delivered in the 2020s?", answers: ["r211"], category: "vehicle-models-text", agency: "mta-nyc" },
      { question: "What articulated bus model does NYC MTA use?", answers: ["new flyer xd60", "xd60"], category: "vehicle-models-text", agency: "mta-nyc" },

      // TTC
      { question: "What streetcar model operates on TTC routes?", answers: ["flexity outlook", "bombardier flexity"], category: "vehicle-models-text", agency: "ttc" },
      { question: "What is TTC's standard subway car model built since 2011?", answers: ["toronto rocket", "tr"], category: "vehicle-models-text", agency: "ttc" },

      // BART
      { question: "What is BART's newest train car series delivered in 2018?", answers: ["fleet of the future", "fotf"], category: "vehicle-models-text", agency: "bart" },

      // CTA
      { question: "What is the CTA's standard 'L' train model used on most lines?", answers: ["5000 series"], category: "vehicle-models-text", agency: "cta" },

      // WMATA
      { question: "What are WMATA's newest Metro cars called?", answers: ["7000 series"], category: "vehicle-models-text", agency: "wmata" },

      // LA Metro
      { question: "What light rail vehicle model does LA Metro use?", answers: ["siemens p2000", "p2000", "siemens p3010"], category: "vehicle-models-text", agency: "la-metro" },

      // Translink
      { question: "What train model operates on Vancouver's SkyTrain Expo Line?", answers: ["mark i", "mk i"], category: "vehicle-models-text", agency: "translink" },
    ],

    medium: [
      // NJ Transit
      { question: "What locomotive model does NJ Transit use for diesel operations?", answers: ["alp45dp", "bombardier alp45dp"], category: "vehicle-models-text", agency: "nj-transit" },
      { question: "What electric locomotive pulls NJ Transit's Northeast Corridor trains?", answers: ["alp46", "bombardier alp46"], category: "vehicle-models-text", agency: "nj-transit" },

      // MTA NYC
      { question: "What subway car model primarily runs on the A, C, and J lines?", answers: ["r32"], category: "vehicle-models-text", agency: "mta-nyc" },
      { question: "What subway car model serves the 7 line?", answers: ["r188"], category: "vehicle-models-text", agency: "mta-nyc" },

      // SEPTA
      { question: "What electric multiple unit model serves SEPTA Regional Rail?", answers: ["silverliner v", "silverliner 5"], category: "vehicle-models-text", agency: "septa" },
      { question: "What trolley model operates on SEPTA's subway-surface lines?", answers: ["kawasaki lrv ii"], category: "vehicle-models-text", agency: "septa" },

      // Metro-North
      { question: "What is Metro-North's newest electric multiple unit model?", answers: ["m8", "kawasaki m8"], category: "vehicle-models-text", agency: "metro-north" },

      // LIRR
      { question: "What is the LIRR's newest electric multiple unit?", answers: ["m9", "kawasaki m9"], category: "vehicle-models-text", agency: "lirr" },

      // Metra
      { question: "What bi-level coach model does Metra use?", answers: ["highliner"], category: "vehicle-models-text", agency: "metra" },

      // TTC
      { question: "What vintage subway car model did TTC retire in 2023?", answers: ["t1"], category: "vehicle-models-text", agency: "ttc" },

      // MUNI
      { question: "What light rail vehicle model runs on MUNI Metro?", answers: ["breda lrv"], category: "vehicle-models-text", agency: "muni" },

      // Edmonton
      { question: "What light rail vehicle model operates Edmonton's Valley Line?", answers: ["bombardier flexity freedom"], category: "vehicle-models-text", agency: "edmonton" },
    ],

    hard: [
      // Amtrak
      { question: "What is Amtrak's high-speed trainset model on the Northeast Corridor?", answers: ["acela express", "acela"], category: "vehicle-models-text", agency: "amtrak" },
      { question: "What is Amtrak's newest Acela replacement trainset called?", answers: ["avelia liberty", "acela 21"], category: "vehicle-models-text", agency: "amtrak" },

      // NJ Transit
      { question: "What double-decker coach model did NJ Transit use before the Bombardier MultiLevel?", answers: ["comet v"], category: "vehicle-models-text", agency: "nj-transit" },

      // MTA NYC
      { question: "What was the first stainless steel subway car model?", answers: ["r32"], category: "vehicle-models-text", agency: "mta-nyc" },
      { question: "What vintage subway car model was known as the 'Redbird'?", answers: ["r33", "r36"], category: "vehicle-models-text", agency: "mta-nyc" },

      // BART
      { question: "What was BART's original train car model from 1972?", answers: ["legacy fleet", "rohr legacy"], category: "vehicle-models-text", agency: "bart" },

      // CTA
      { question: "What vintage 'L' car was nicknamed the '2400 series'?", answers: ["2400 series"], category: "vehicle-models-text", agency: "cta" },

      // WMATA
      { question: "What was WMATA's troubled train car series that had brake issues?", answers: ["7000 series"], category: "vehicle-models-text", agency: "wmata" },

      // Tri-Rail
      { question: "What bi-level coach model does Tri-Rail operate?", answers: ["bombardier bilevel"], category: "vehicle-models-text", agency: "tri-rail" },

      // MTA Maryland
      { question: "What diesel multiple unit model does MARC use on the Brunswick Line?", answers: ["bombardier multilevel"], category: "vehicle-models-text", agency: "mta-maryland" },
    ]
  },

  'vehicle-models-images': {
    easy: [
      { question: "What NYC Subway car model is this?", image: "/images/vehicles/mta-nyc/r160.jpg", answers: ["r160"], category: "vehicle-models-images", agency: "mta-nyc" },
      { question: "What streetcar model is this?", image: "/images/vehicles/ttc/flexity-outlook.jpg", answers: ["flexity outlook", "bombardier flexity"], category: "vehicle-models-images", agency: "ttc" },
      { question: "What BART train car is this?", image: "/images/vehicles/bart/fleet-of-the-future.jpg", answers: ["fleet of the future", "fotf"], category: "vehicle-models-images", agency: "bart" },
      { question: "What CTA 'L' car model is this?", image: "/images/vehicles/cta/5000-series.png", answers: ["5000 series"], category: "vehicle-models-images", agency: "cta" },
      { question: "What WMATA Metro car is this?", image: "/images/vehicles/wmata/7000-series.jpg", answers: ["7000 series"], category: "vehicle-models-images", agency: "wmata" },
    ],

    medium: [
      { question: "What TTC subway car is this?", image: "/images/vehicles/ttc/toronto-rocket.jpg", answers: ["toronto rocket", "tr"], category: "vehicle-models-images", agency: "ttc" },
      { question: "What NJ Transit commuter rail coach is this?", image: "/images/vehicles/nj-transit/bombardier-multilevel.jpg", answers: ["bombardier multilevel", "multilevel"], category: "vehicle-models-images", agency: "nj-transit" },
      { question: "What NYC Subway car model is this?", image: "/images/vehicles/mta-nyc/r211.jpg", answers: ["r211"], category: "vehicle-models-images", agency: "mta-nyc" },
      { question: "What NJ Transit electric locomotive is this?", image: "/images/vehicles/nj-transit/alp46.jpg", answers: ["alp46", "bombardier alp46"], category: "vehicle-models-images", agency: "nj-transit" },
      { question: "What vintage CTA 'L' car is this?", image: "/images/vehicles/cta/2400-series.jpg", answers: ["2400 series"], category: "vehicle-models-images", agency: "cta" },
    ],

    hard: [
      { question: "What NJ Transit dual-mode locomotive is this?", image: "/images/vehicles/nj-transit/alp45dp.jpg", answers: ["alp45dp", "bombardier alp45dp"], category: "vehicle-models-images", agency: "nj-transit" },
      { question: "What NYC Subway car model serves the 7 line?", image: "/images/vehicles/mta-nyc/r188.jpg", answers: ["r188"], category: "vehicle-models-images", agency: "mta-nyc" },
      { question: "What BART car is this?", image: "/images/vehicles/bart/legacy-fleet.jpg", answers: ["legacy fleet", "rohr legacy"], category: "vehicle-models-images", agency: "bart" },
      { question: "What retired TTC subway car model is this?", image: "/images/vehicles/ttc/t1.jpg", answers: ["t1"], category: "vehicle-models-images", agency: "ttc" },
    ]
  },

  'routes': {
    easy: [
      // NYC Subway - numbered lines
      { question: "Where does the NYC A train terminate in Manhattan?", answers: ["inwood 207th street", "207th street", "207 street"], category: "routes", agency: "mta-nyc" },
      { question: "What NYC subway line is known as the 'Broadway Local'?", answers: ["n", "n train"], category: "routes", agency: "mta-nyc" },
      { question: "What color is the NYC 1 train?", answers: ["red"], category: "routes", agency: "mta-nyc" },
      { question: "Which NYC subway line serves both JFK and Rockaway Beach?", answers: ["a", "a train"], category: "routes", agency: "mta-nyc" },

      // BART
      { question: "What color is the BART line to SFO?", answers: ["yellow"], category: "routes", agency: "bart" },
      { question: "What BART line runs from Richmond to Berryessa?", answers: ["orange line"], category: "routes", agency: "bart" },
      { question: "Which BART line serves both Oakland and San Francisco airports?", answers: ["yellow line"], category: "routes", agency: "bart" },

      // WMATA
      { question: "What color is WMATA's line to Dulles Airport?", answers: ["silver"], category: "routes", agency: "wmata" },
      { question: "What is the oldest WMATA Metro line?", answers: ["red line"], category: "routes", agency: "wmata" },
      { question: "Which WMATA line runs through Virginia, DC, and Maryland?", answers: ["red line"], category: "routes", agency: "wmata" },

      // CTA
      { question: "Which CTA line runs to both airports?", answers: ["blue line"], category: "routes", agency: "cta" },
      { question: "What is the CTA's north-south elevated line called?", answers: ["red line"], category: "routes", agency: "cta" },
      { question: "What CTA line serves Wrigley Field?", answers: ["red line"], category: "routes", agency: "cta" },

      // TTC
      { question: "What is Toronto's east-west subway line called?", answers: ["line 2", "bloor-danforth", "bloor danforth"], category: "routes", agency: "ttc" },
      { question: "What TTC subway line goes to the airport?", answers: ["line 1", "yonge-university"], category: "routes", agency: "ttc" },

      // LA Metro
      { question: "Which LA Metro line runs from East LA to Santa Monica?", answers: ["e line", "expo line"], category: "routes", agency: "la-metro" },
      { question: "What is LA Metro's newest rail line to the airport?", answers: ["k line", "crenshaw line"], category: "routes", agency: "la-metro" },

      // SEPTA
      { question: "What is SEPTA's elevated line called?", answers: ["market-frankford line", "el"], category: "routes", agency: "septa" },
      { question: "What SEPTA line runs underground along Broad Street?", answers: ["broad street line"], category: "routes", agency: "septa" },
    ],

    medium: [
      // NJ Transit
      { question: "Which NJ Transit rail line serves Hoboken and Bay Head?", answers: ["north jersey coast line"], category: "routes", agency: "nj-transit" },
      { question: "What NJ Transit line runs from New York Penn to Trenton?", answers: ["northeast corridor"], category: "routes", agency: "nj-transit" },
      { question: "Which NJ Transit bus route connects Newark and New York with express service?", answers: ["62", "route 62"], category: "routes", agency: "nj-transit" },

      // NYC MTA
      { question: "What is the northern terminal of the 1 train?", answers: ["van cortlandt park 242nd street", "242nd street", "van cortlandt"], category: "routes", agency: "mta-nyc" },
      { question: "Which subway line has a shuttle branch to the Rockaways?", answers: ["s", "rockaway park shuttle"], category: "routes", agency: "mta-nyc" },
      { question: "What is the longest NYC subway route by distance?", answers: ["a", "a train"], category: "routes", agency: "mta-nyc" },

      // Metro-North
      { question: "Which Metro-North line runs to New Haven?", answers: ["new haven line"], category: "routes", agency: "metro-north" },
      { question: "What is Metro-North's westernmost branch?", answers: ["port jervis line"], category: "routes", agency: "metro-north" },

      // LIRR
      { question: "Which LIRR branch serves the Hamptons?", answers: ["montauk branch"], category: "routes", agency: "lirr" },
      { question: "What LIRR branch runs to Long Beach?", answers: ["long beach branch"], category: "routes", agency: "lirr" },

      // Metra
      { question: "Which Metra line serves O'Hare Airport?", answers: ["north central service"], category: "routes", agency: "metra" },
      { question: "What is Metra's busiest line by ridership?", answers: ["bnsf railway", "bnsf"], category: "routes", agency: "metra" },

      // TTC
      { question: "What TTC streetcar route runs along Queen Street?", answers: ["501", "501 queen"], category: "routes", agency: "ttc" },
      { question: "Which TTC line uses the Sheppard Subway?", answers: ["line 4"], category: "routes", agency: "ttc" },

      // BART
      { question: "Which BART station serves as a transfer between all lines?", answers: ["macarthur"], category: "routes", agency: "bart" },

      // Translink
      { question: "Which SkyTrain line serves Vancouver Airport?", answers: ["canada line"], category: "routes", agency: "translink" },
      { question: "What is Vancouver's original SkyTrain line called?", answers: ["expo line"], category: "routes", agency: "translink" },
    ],

    hard: [
      // Amtrak
      { question: "What Amtrak route runs from Chicago to San Francisco?", answers: ["california zephyr"], category: "routes", agency: "amtrak" },
      { question: "What overnight Amtrak train connects New York and Florida?", answers: ["silver meteor", "silver star"], category: "routes", agency: "amtrak" },
      { question: "Which Amtrak route is the longest in the US?", answers: ["texas eagle"], category: "routes", agency: "amtrak" },

      // NJ Transit
      { question: "Which NJ Transit line has a spur to Gladstone?", answers: ["morris and essex line", "morris essex"], category: "routes", agency: "nj-transit" },
      { question: "What is the westernmost terminus of NJ Transit rail service?", answers: ["phillipsburg"], category: "routes", agency: "nj-transit" },

      // MTA NYC
      { question: "Which subway line has the most stations?", answers: ["a", "a train"], category: "routes", agency: "mta-nyc" },
      { question: "What was the original name of the B Division lines?", answers: ["bmt", "brooklyn-manhattan transit"], category: "routes", agency: "mta-nyc" },

      // SEPTA
      { question: "Which SEPTA Regional Rail line runs to Newark?", answers: ["wilmington/newark line"], category: "routes", agency: "septa" },
      { question: "What is SEPTA's trolley route that runs to Media?", answers: ["101", "media line"], category: "routes", agency: "septa" },

      // WMATA
      { question: "Which WMATA line opened most recently?", answers: ["silver line"], category: "routes", agency: "wmata" },
      { question: "What is the only WMATA line that doesn't share tracks with another line?", answers: ["red line"], category: "routes", agency: "wmata" },

      // Metra
      { question: "Which Metra line has the longest route distance?", answers: ["union pacific northwest", "up-nw"], category: "routes", agency: "metra" },

      // MUNI
      { question: "What is MUNI's historic streetcar route that runs along the waterfront?", answers: ["f market", "f line"], category: "routes", agency: "muni" },
    ]
  },

  'rush-hour-routing': {
    easy: [
      { question: "Do most commuter rail systems run more frequent service during rush hour?", answers: ["yes"], category: "rush-hour-routing", agency: "general" },
      { question: "What time of day is considered 'AM rush hour' for most transit systems?", answers: ["7 to 9 am", "7-9", "morning"], category: "rush-hour-routing", agency: "general" },
    ],

    medium: [
      // NJ Transit
      { question: "During peak hours, where do most Northeast Corridor trains terminate in New York?", answers: ["new york penn station", "penn station"], category: "rush-hour-routing", agency: "nj-transit" },
      { question: "What type of NJ Transit bus service runs express during rush hour?", answers: ["express", "express bus"], category: "rush-hour-routing", agency: "nj-transit" },

      // Metra
      { question: "What direction do most Metra trains run during AM rush hour?", answers: ["inbound", "into chicago"], category: "rush-hour-routing", agency: "metra" },
      { question: "What type of Metra service skips certain stations during rush hour?", answers: ["express"], category: "rush-hour-routing", agency: "metra" },

      // Metro-North
      { question: "During rush hour, do Metro-North trains run more frequently?", answers: ["yes"], category: "rush-hour-routing", agency: "metro-north" },

      // LIRR
      { question: "What LIRR terminal do most rush hour trains use in Manhattan?", answers: ["penn station", "new york penn station"], category: "rush-hour-routing", agency: "lirr" },

      // CTA
      { question: "Which CTA lines run express during rush hour?", answers: ["red line", "purple line"], category: "rush-hour-routing", agency: "cta" },
    ],

    hard: [
      // NJ Transit
      { question: "What routing do some NJ Transit Morris & Essex trains use during rush hour to avoid Hoboken?", answers: ["direct to new york penn", "midtown direct"], category: "rush-hour-routing", agency: "nj-transit" },
      { question: "During rush hour, which NJ Transit bus routes run express to Port Authority?", answers: ["166", "route 166"], category: "rush-hour-routing", agency: "nj-transit" },

      // MTA NYC
      { question: "During rush hour, which tracks does the 6 express use?", answers: ["express tracks"], category: "rush-hour-routing", agency: "mta-nyc" },
      { question: "What service pattern does the 7 train use during rush hour?", answers: ["express"], category: "rush-hour-routing", agency: "mta-nyc" },

      // Metra
      { question: "What is the fastest Metra express service on the BNSF line called?", answers: ["race track"], category: "rush-hour-routing", agency: "metra" },
      { question: "During rush hour, which Metra line offers the most express trains?", answers: ["bnsf", "bnsf railway"], category: "rush-hour-routing", agency: "metra" },

      // CTA
      { question: "During rush hour, where does the Purple Line express terminate?", answers: ["loop", "the loop"], category: "rush-hour-routing", agency: "cta" },
      { question: "What stations does the Red Line skip during rush hour express service?", answers: ["local stations"], category: "rush-hour-routing", agency: "cta" },

      // Metro-North
      { question: "What is Metro-North's express service that skips many stations called?", answers: ["super express"], category: "rush-hour-routing", agency: "metro-north" },

      // SEPTA
      { question: "During rush hour, which SEPTA Regional Rail lines offer the most frequent service?", answers: ["paoli thorndale"], category: "rush-hour-routing", agency: "septa" },
    ]
  },

  'stations-stops': {
    easy: [
      // NYC
      { question: "What is the busiest station in the NYC Subway system?", answers: ["times square 42nd street", "times square"], category: "stations-stops", agency: "mta-nyc" },
      { question: "What major NYC transportation hub is shared by Amtrak, NJ Transit, and LIRR?", answers: ["penn station", "new york penn station", "pennsylvania station"], category: "stations-stops", agency: "mta-nyc" },
      { question: "What is the main commuter rail terminal in Midtown Manhattan for Metro-North?", answers: ["grand central terminal", "grand central"], category: "stations-stops", agency: "metro-north" },

      // NJ Transit
      { question: "What is NJ Transit's main terminal in Newark?", answers: ["newark penn station", "newark penn"], category: "stations-stops", agency: "nj-transit" },
      { question: "What is the main NJ Transit terminal in Hoboken called?", answers: ["hoboken terminal"], category: "stations-stops", agency: "nj-transit" },

      // BART
      { question: "What BART station serves San Francisco International Airport?", answers: ["sfo", "san francisco international airport"], category: "stations-stops", agency: "bart" },
      { question: "What is BART's downtown San Francisco transfer station?", answers: ["embarcadero"], category: "stations-stops", agency: "bart" },

      // WMATA
      { question: "What Metro station serves Washington Dulles Airport?", answers: ["dulles airport", "washington dulles"], category: "stations-stops", agency: "wmata" },
      { question: "What is WMATA's busiest station?", answers: ["metro center"], category: "stations-stops", agency: "wmata" },

      // CTA
      { question: "What is the CTA's main Loop transfer station?", answers: ["state/lake"], category: "stations-stops", agency: "cta" },
      { question: "What CTA station serves O'Hare Airport?", answers: ["o'hare", "ohare"], category: "stations-stops", agency: "cta" },

      // TTC
      { question: "What is TTC's busiest subway station?", answers: ["bloor-yonge"], category: "stations-stops", agency: "ttc" },
      { question: "What TTC station serves Billy Bishop Airport?", answers: ["union station"], category: "stations-stops", agency: "ttc" },

      // SEPTA
      { question: "What is SEPTA's main downtown Philadelphia transfer station?", answers: ["city hall"], category: "stations-stops", agency: "septa" },
      { question: "What station is the main hub for SEPTA Regional Rail?", answers: ["30th street station"], category: "stations-stops", agency: "septa" },
    ],

    medium: [
      // NJ Transit
      { question: "What is the primary transfer station for NJ Transit in New Brunswick?", answers: ["new brunswick"], category: "stations-stops", agency: "nj-transit" },
      { question: "What major NJ Transit hub serves transfers between multiple lines?", answers: ["secaucus junction"], category: "stations-stops", agency: "nj-transit" },

      // MTA NYC
      { question: "What station is the transfer point between the 4, 5, 6 and 7 trains?", answers: ["grand central 42nd street"], category: "stations-stops", agency: "mta-nyc" },
      { question: "What is the southern terminal of the 1 train?", answers: ["south ferry"], category: "stations-stops", agency: "mta-nyc" },
      { question: "Which station serves as a transfer between LIRR and the subway at Jamaica?", answers: ["jamaica center"], category: "stations-stops", agency: "mta-nyc" },

      // BART
      { question: "What station is the main transfer point between BART and Caltrain?", answers: ["millbrae"], category: "stations-stops", agency: "bart" },
      { question: "What is BART's easternmost station?", answers: ["antioch", "berryessa"], category: "stations-stops", agency: "bart" },

      // WMATA
      { question: "What station connects all WMATA lines except Red?", answers: ["lenfant plaza"], category: "stations-stops", agency: "wmata" },
      { question: "What is the northern terminus of the Red Line?", answers: ["shady grove"], category: "stations-stops", agency: "wmata" },

      // LA Metro
      { question: "What station is the main downtown LA Metro transfer hub?", answers: ["7th street metro center"], category: "stations-stops", agency: "la-metro" },
      { question: "What is the western terminus of the E Line?", answers: ["downtown santa monica"], category: "stations-stops", agency: "la-metro" },

      // TTC
      { question: "What is the northern terminus of Line 1?", answers: ["vaughan metropolitan centre"], category: "stations-stops", agency: "ttc" },
      { question: "What station connects Line 1 and Line 2?", answers: ["bloor-yonge", "st george"], category: "stations-stops", agency: "ttc" },

      // Translink
      { question: "What is the main SkyTrain transfer station in downtown Vancouver?", answers: ["waterfront"], category: "stations-stops", agency: "translink" },

      // Metra
      { question: "What is the main Metra terminal in downtown Chicago?", answers: ["union station"], category: "stations-stops", agency: "metra" },
    ],

    hard: [
      // Amtrak
      { question: "What is Amtrak's busiest station by ridership?", answers: ["new york penn station", "penn station"], category: "stations-stops", agency: "amtrak" },
      { question: "What major Amtrak hub is located in Washington DC?", answers: ["union station"], category: "stations-stops", agency: "amtrak" },

      // NJ Transit
      { question: "What is the westernmost station on the Raritan Valley Line?", answers: ["high bridge"], category: "stations-stops", agency: "nj-transit" },

      // MTA NYC
      { question: "What is the deepest subway station in NYC?", answers: ["191st street"], category: "stations-stops", agency: "mta-nyc" },
      { question: "Which station was renamed from 'Sixth Avenue' to honor a civil rights leader?", answers: ["martin luther king jr boulevard"], category: "stations-stops", agency: "mta-nyc" },

      // SEPTA
      { question: "What is the northern terminus of the Broad Street Line?", answers: ["fern rock"], category: "stations-stops", agency: "septa" },
      { question: "What station serves as the connection between SEPTA and PATCO?", answers: ["8th and market"], category: "stations-stops", agency: "septa" },

      // WMATA
      { question: "What is the deepest Metro station in the WMATA system?", answers: ["forest glen"], category: "stations-stops", agency: "wmata" },

      // CTA
      { question: "What is the oldest surviving 'L' station in Chicago?", answers: ["quincy"], category: "stations-stops", agency: "cta" },

      // Metra
      { question: "What is the southernmost station on the Metra Electric Line?", answers: ["university park"], category: "stations-stops", agency: "metra" },

      // MUNI
      { question: "What is the main MUNI Metro transfer station?", answers: ["embarcadero"], category: "stations-stops", agency: "muni" },
    ]
  },

  'line-identification': {
    easy: [
      // BART
      { question: "What color is the BART line to SFO?", answers: ["yellow"], category: "line-identification", agency: "bart" },
      { question: "What color is the BART line from Richmond to Berryessa?", answers: ["orange"], category: "line-identification", agency: "bart" },

      // WMATA
      { question: "What color is WMATA's line to Dulles Airport?", answers: ["silver"], category: "line-identification", agency: "wmata" },
      { question: "What is the oldest WMATA Metro line color?", answers: ["red"], category: "line-identification", agency: "wmata" },

      // CTA
      { question: "What CTA line runs to O'Hare Airport?", answers: ["blue line"], category: "line-identification", agency: "cta" },
      { question: "What color is the CTA's north-south elevated line?", answers: ["red"], category: "line-identification", agency: "cta" },
      { question: "What CTA line serves Midway Airport?", answers: ["orange line"], category: "line-identification", agency: "cta" },

      // TTC
      { question: "What is Toronto's east-west subway line number?", answers: ["line 2", "2"], category: "line-identification", agency: "ttc" },
      { question: "What color is TTC Line 1?", answers: ["yellow"], category: "line-identification", agency: "ttc" },
      { question: "What color is TTC Line 2?", answers: ["green"], category: "line-identification", agency: "ttc" },

      // LA Metro
      { question: "What color is the LA Metro line to Santa Monica?", answers: ["expo line", "e line"], category: "line-identification", agency: "la-metro" },
      { question: "What is LA Metro's newest line to the airport called?", answers: ["k line", "crenshaw line"], category: "line-identification", agency: "la-metro" },

      // MUNI
      { question: "What is MUNI's historic waterfront streetcar line called?", answers: ["f line", "f market"], category: "line-identification", agency: "muni" },
    ],

    medium: [
      // BART
      { question: "What BART line runs from Daly City to Dublin?", answers: ["blue line"], category: "line-identification", agency: "bart" },
      { question: "What color is the BART line to Antioch?", answers: ["yellow"], category: "line-identification", agency: "bart" },

      // WMATA
      { question: "What color is the WMATA line that only runs in Maryland?", answers: ["green line"], category: "line-identification", agency: "wmata" },
      { question: "Which WMATA line shares the most track with another line?", answers: ["blue line", "orange line", "silver line"], category: "line-identification", agency: "wmata" },

      // CTA
      { question: "What CTA line runs to Skokie?", answers: ["yellow line"], category: "line-identification", agency: "cta" },
      { question: "What is the CTA's circular downtown line called?", answers: ["loop"], category: "line-identification", agency: "cta" },

      // TTC
      { question: "What is TTC's Sheppard Subway line number?", answers: ["line 4", "4"], category: "line-identification", agency: "ttc" },
      { question: "What number is the TTC Scarborough RT?", answers: ["line 3", "3"], category: "line-identification", agency: "ttc" },

      // LA Metro
      { question: "What letter designation is the LA Metro Red Line?", answers: ["b line"], category: "line-identification", agency: "la-metro" },
      { question: "What is the LA Metro Purple Line's letter designation?", answers: ["d line"], category: "line-identification", agency: "la-metro" },

      // Translink
      { question: "What color is Vancouver's Canada Line?", answers: ["blue"], category: "line-identification", agency: "translink" },
      { question: "What is Vancouver's original SkyTrain line called?", answers: ["expo line"], category: "line-identification", agency: "translink" },
    ],

    hard: [
      // BART
      { question: "What was the original name for BART's yellow line?", answers: ["pittsburgh/bay point line"], category: "line-identification", agency: "bart" },
      { question: "How many total BART lines are there?", answers: ["6", "six"], category: "line-identification", agency: "bart" },

      // WMATA
      { question: "What WMATA line was extended to Dulles in 2022?", answers: ["silver line"], category: "line-identification", agency: "wmata" },
      { question: "Which two WMATA lines run parallel for most of their route?", answers: ["blue and orange", "orange and blue"], category: "line-identification", agency: "wmata" },

      // CTA
      { question: "What was the CTA Pink Line called before 2006?", answers: ["blue line douglas branch"], category: "line-identification", agency: "cta" },
      { question: "What CTA line has the fewest stations?", answers: ["yellow line"], category: "line-identification", agency: "cta" },

      // TTC
      { question: "What was TTC Line 1 called before renumbering?", answers: ["yonge-university-spadina"], category: "line-identification", agency: "ttc" },
      { question: "What is the planned Line 5 in Toronto called?", answers: ["eglinton crosstown"], category: "line-identification", agency: "ttc" },

      // LA Metro
      { question: "What was the LA Metro Gold Line renamed to?", answers: ["l line"], category: "line-identification", agency: "la-metro" },
      { question: "How many rail lines does LA Metro operate?", answers: ["6", "six"], category: "line-identification", agency: "la-metro" },

      // MUNI
      { question: "What MUNI Metro line runs to the San Francisco Zoo?", answers: ["l taraval"], category: "line-identification", agency: "muni" },
    ]
  }
};
