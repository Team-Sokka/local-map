var allCategories = [
  {
      "alias": "3dprinting",
      "title": "3D Printing",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "abruzzese",
      "title": "Abruzzese",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "absinthebars",
      "title": "Absinthe Bars",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "CZ"
      ]
  },
  {
      "alias": "acaibowls",
      "title": "Acai Bowls",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "PL",
          "MX",
          "TR",
          "AR"
      ]
  },
  {
      "alias": "accessories",
      "title": "Accessories",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "accountants",
      "title": "Accountants",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "acnetreatment",
      "title": "Acne Treatment",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "active",
      "title": "Active Life",
      "parents": []
  },
  {
      "alias": "acupuncture",
      "title": "Acupuncture",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "addictionmedicine",
      "title": "Addiction Medicine",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "adoptionservices",
      "title": "Adoption Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "adult",
      "title": "Adult",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "adultedu",
      "title": "Adult Education",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "adultentertainment",
      "title": "Adult Entertainment",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "advertising",
      "title": "Advertising",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "aerialfitness",
      "title": "Aerial Fitness",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "aerialtours",
      "title": "Aerial Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "aestheticians",
      "title": "Aestheticians",
      "parents": [
          "medicalspa"
      ],
      "country_blacklist": [
          "CL",
          "BE",
          "MX",
          "FR",
          "CH",
          "AR"
      ]
  },
  {
      "alias": "afghani",
      "title": "Afghan",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "MX",
          "TR"
      ]
  },
  {
      "alias": "african",
      "title": "African",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "afrobrazilian",
      "title": "Afro-Brazilian",
      "parents": [
          "religiousorgs"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "agriturismi",
      "title": "Agriturismi",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "DE",
          "IT",
          "AT",
          "TW",
          "CZ",
          "MX",
          "FR",
          "CH",
          "CL",
          "PL",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "aircraftdealers",
      "title": "Aircraft Dealers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "PT",
          "CZ"
      ]
  },
  {
      "alias": "aircraftrepairs",
      "title": "Aircraft Repairs",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "airductcleaning",
      "title": "Air Duct Cleaning",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "IT",
          "NZ",
          "AU",
          "PH",
          "CA",
          "IE",
          "SG",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "airlines",
      "title": "Airlines",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "airport_shuttles",
      "title": "Airport Shuttles",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "airportlounges",
      "title": "Airport Lounges",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "airports",
      "title": "Airports",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "airportterminals",
      "title": "Airport Terminals",
      "parents": [
          "airports"
      ]
  },
  {
      "alias": "airsoft",
      "title": "Airsoft",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "alentejo",
      "title": "Alentejo",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "algarve",
      "title": "Algarve",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "allergist",
      "title": "Allergists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "alsatian",
      "title": "Alsatian",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "DE",
          "FR"
      ]
  },
  {
      "alias": "alternativemedicine",
      "title": "Alternative Medicine",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "MX",
          "CH",
          "CL",
          "FI",
          "AR",
          "PH",
          "DE",
          "AT",
          "TW",
          "HK",
          "PL",
          "TR",
          "JP",
          "MY",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "altoatesine",
      "title": "Altoatesine",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "amateursportsteams",
      "title": "Amateur Sports Teams",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "amusementparks",
      "title": "Amusement Parks",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "andalusian",
      "title": "Andalusian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "IT",
          "ES"
      ]
  },
  {
      "alias": "anesthesiologists",
      "title": "Anesthesiologists",
      "parents": [
          "physicians"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "IT",
          "AU",
          "SE",
          "FR",
          "PT"
      ]
  },
  {
      "alias": "animalassistedtherapy",
      "title": "Animal Assisted Therapy",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "animalholistic",
      "title": "Holistic Animal Care",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "animalphysicaltherapy",
      "title": "Animal Physical Therapy",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "animalshelters",
      "title": "Animal Shelters",
      "parents": [
          "pets"
      ]
  },
  {
      "alias": "antiques",
      "title": "Antiques",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "apartmentagents",
      "title": "Apartment Agents",
      "parents": [
          "realestateagents"
      ]
  },
  {
      "alias": "apartments",
      "title": "Apartments",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "appliances",
      "title": "Appliances",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "appraisalservices",
      "title": "Appraisal Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "apulian",
      "title": "Apulian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "aquariums",
      "title": "Aquariums",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "aquariumservices",
      "title": "Aquarium Services",
      "parents": [
          "petservices"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "arabian",
      "title": "Arabian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "DK"
      ]
  },
  {
      "alias": "arabpizza",
      "title": "Arab Pizza",
      "parents": [
          "arabian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "arcades",
      "title": "Arcades",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "archery",
      "title": "Archery",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "architects",
      "title": "Architects",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "architecturaltours",
      "title": "Architectural Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "argentine",
      "title": "Argentine",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "armenian",
      "title": "Armenian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "IT",
          "CZ",
          "FR",
          "PL",
          "TR",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "arroceria_paella",
      "title": "Arroceria / Paella",
      "parents": [
          "spanish"
      ],
      "country_whitelist": [
          "ES"
      ]
  },
  {
      "alias": "artclasses",
      "title": "Art Classes",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "artconsultants",
      "title": "Art Consultants",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "artificialturf",
      "title": "Artificial Turf",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "artinstallation",
      "title": "Art Installation",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "PL",
          "CH",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "artmuseums",
      "title": "Art Museums",
      "parents": [
          "museums"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "artrestoration",
      "title": "Art Restoration",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "arts",
      "title": "Arts & Entertainment",
      "parents": []
  },
  {
      "alias": "artsandcrafts",
      "title": "Arts & Crafts",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "artschools",
      "title": "Art Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "artspacerentals",
      "title": "Art Space Rentals",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "IT",
          "SE",
          "HK",
          "IE",
          "SG",
          "JP"
      ]
  },
  {
      "alias": "artsupplies",
      "title": "Art Supplies",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "arttours",
      "title": "Art Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "asianfusion",
      "title": "Asian Fusion",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "assistedliving",
      "title": "Assisted Living Facilities",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "astrologers",
      "title": "Astrologers",
      "parents": [
          "psychic_astrology"
      ]
  },
  {
      "alias": "asturian",
      "title": "Asturian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "ES"
      ]
  },
  {
      "alias": "ateliers",
      "title": "Ateliers",
      "parents": [
          "artsandcrafts"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "IT",
          "AT",
          "DK",
          "CH",
          "NL",
          "NO",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "attractionfarms",
      "title": "Attraction Farms",
      "parents": [
          "farms"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "AT",
          "SE",
          "DK",
          "CH",
          "NO",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "atvrentals",
      "title": "ATV Rentals/Tours",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "BE",
          "SE",
          "AT",
          "MX",
          "CH",
          "CL",
          "NL",
          "NO",
          "PL",
          "FI",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "auctionhouses",
      "title": "Auction Houses",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "TW",
          "CL",
          "HK",
          "TR",
          "AR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "audiologist",
      "title": "Audiologist",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT",
          "CZ"
      ]
  },
  {
      "alias": "audiovisualequipmentrental",
      "title": "Audio/Visual Equipment Rental",
      "parents": [
          "partyequipmentrentals"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "BR",
          "PH",
          "DE",
          "AT",
          "SE",
          "CA",
          "NL",
          "PL",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "australian",
      "title": "Australian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "austrian",
      "title": "Austrian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "ES",
          "DK"
      ]
  },
  {
      "alias": "authorized_postal_representative",
      "title": "Authorized Postal Representative",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "SE",
          "NO"
      ]
  },
  {
      "alias": "auto",
      "title": "Automotive",
      "parents": []
  },
  {
      "alias": "auto_detailing",
      "title": "Auto Detailing",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "BR",
          "AU",
          "ES"
      ]
  },
  {
      "alias": "autocustomization",
      "title": "Auto Customization",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "AT",
          "CA",
          "CZ",
          "MX",
          "CH",
          "CL",
          "SG",
          "PL",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "autodamageassessment",
      "title": "Car Inspectors",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "SE",
          "DK",
          "NL",
          "NO",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "autoelectric",
      "title": "Auto Electric Services",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "IT",
          "CZ",
          "MX",
          "AR",
          "CL",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "autoglass",
      "title": "Auto Glass Services",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "ES"
      ]
  },
  {
      "alias": "autoinsurance",
      "title": "Auto Insurance",
      "parents": [
          "insurance"
      ],
      "country_blacklist": [
          "DE",
          "GB",
          "NZ",
          "AT",
          "TW",
          "CA",
          "FR",
          "CH",
          "HK",
          "IE",
          "SG",
          "FI",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "autoloanproviders",
      "title": "Auto Loan Providers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "IE",
          "SG",
          "PH",
          "IT",
          "NZ",
          "CA",
          "CZ",
          "NL",
          "PL",
          "TR",
          "MY",
          "PT"
      ]
  },
  {
      "alias": "autopartssupplies",
      "title": "Auto Parts & Supplies",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "autorepair",
      "title": "Auto Repair",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "autosecurity",
      "title": "Auto Security",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "autoupholstery",
      "title": "Auto Upholstery",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "auvergnat",
      "title": "Auvergnat",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "aviationservices",
      "title": "Aviation Services",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "awnings",
      "title": "Awnings",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "axethrowing",
      "title": "Axe Throwing",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "CA"
      ]
  },
  {
      "alias": "ayurveda",
      "title": "Ayurveda",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "azores",
      "title": "Azores",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "baby_gear",
      "title": "Baby Gear & Furniture",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "backflowservices",
      "title": "Backflow Services",
      "parents": [
          "plumbing"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "backshop",
      "title": "Backshop",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "baden",
      "title": "Baden",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "badminton",
      "title": "Badminton",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "NZ",
          "BR",
          "SG",
          "PL"
      ]
  },
  {
      "alias": "bagels",
      "title": "Bagels",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "AU",
          "ES"
      ]
  },
  {
      "alias": "baguettes",
      "title": "Baguettes",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "IT",
          "SE",
          "CZ",
          "MX",
          "NO",
          "TR",
          "PT"
      ]
  },
  {
      "alias": "bailbondsmen",
      "title": "Bail Bondsmen",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "PT"
      ]
  },
  {
      "alias": "bakeries",
      "title": "Bakeries",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "balloonservices",
      "title": "Balloon Services",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "AT",
          "CA",
          "CH",
          "NL",
          "IE",
          "SG",
          "PL",
          "BR"
      ]
  },
  {
      "alias": "bangladeshi",
      "title": "Bangladeshi",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "MX",
          "TR",
          "DK",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "bankruptcy",
      "title": "Bankruptcy Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "banks",
      "title": "Banks & Credit Unions",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "barbers",
      "title": "Barbers",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "barcrawl",
      "title": "Bar Crawl",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AU",
          "AT",
          "CZ",
          "MX",
          "CH",
          "PL",
          "AR"
      ]
  },
  {
      "alias": "barreclasses",
      "title": "Barre Classes",
      "parents": [
          "fitness"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "CA",
          "CZ",
          "DK",
          "NL",
          "NO",
          "IE",
          "FI",
          "PT"
      ]
  },
  {
      "alias": "bars",
      "title": "Bars",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "bartenders",
      "title": "Bartenders",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "AT",
          "TW",
          "CH",
          "HK",
          "NO",
          "IE",
          "PL",
          "SG",
          "FI",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "bartendingschools",
      "title": "Bartending Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "baseballfields",
      "title": "Baseball Fields",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "basketballcourts",
      "title": "Basketball Courts",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "GB",
          "NL",
          "IE",
          "SE",
          "PL",
          "CA",
          "BR"
      ]
  },
  {
      "alias": "basque",
      "title": "Basque",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AU",
          "SG",
          "CZ",
          "TR",
          "DK",
          "PT"
      ]
  },
  {
      "alias": "bathing_area",
      "title": "Bathing Area",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "SE",
          "CZ",
          "DK",
          "CH",
          "NO",
          "FI",
          "JP",
          "PT"
      ]
  },
  {
      "alias": "batterystores",
      "title": "Battery Stores",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "battingcages",
      "title": "Batting Cages",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "JP",
          "TW",
          "SG"
      ]
  },
  {
      "alias": "bavarian",
      "title": "Bavarian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "bbq",
      "title": "Barbeque",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "BR",
          "AU"
      ]
  },
  {
      "alias": "beachbars",
      "title": "Beach Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "TW",
          "CA",
          "CZ",
          "HK",
          "IE",
          "PL",
          "FI",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "beachequipmentrental",
      "title": "Beach Equipment Rentals",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "beaches",
      "title": "Beaches",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "beachvolleyball",
      "title": "Beach Volleyball",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "BE",
          "FR",
          "CH",
          "IE",
          "PH",
          "IT",
          "NZ",
          "TW",
          "CA",
          "HK",
          "NL",
          "PL",
          "TR",
          "MY"
      ]
  },
  {
      "alias": "beautysvc",
      "title": "Beauty & Spas",
      "parents": []
  },
  {
      "alias": "bedbreakfast",
      "title": "Bed & Breakfast",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "beer_and_wine",
      "title": "Beer, Wine & Spirits",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "beerbar",
      "title": "Beer Bar",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "beergarden",
      "title": "Beer Garden",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT",
          "CZ"
      ]
  },
  {
      "alias": "beergardens",
      "title": "Beer Gardens",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "IT",
          "AU",
          "SE",
          "CA",
          "CZ",
          "MX",
          "FR",
          "DK",
          "NO",
          "IE",
          "PL",
          "JP"
      ]
  },
  {
      "alias": "beerhall",
      "title": "Beer Hall",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "beertours",
      "title": "Beer Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "behavioranalysts",
      "title": "Behavior Analysts",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "beira",
      "title": "Beira",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "beisl",
      "title": "Beisl",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AT"
      ]
  },
  {
      "alias": "belgian",
      "title": "Belgian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "bento",
      "title": "Bento",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "berrichon",
      "title": "Berrichon",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "bespoke",
      "title": "Bespoke Clothing",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "SE",
          "MX",
          "AR",
          "CL",
          "FI",
          "TR",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "bettingcenters",
      "title": "Betting Centers",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "US",
          "NO",
          "NZ",
          "SG",
          "CA",
          "FI",
          "FR"
      ]
  },
  {
      "alias": "beverage_stores",
      "title": "Beverage Store",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "AU",
          "AT",
          "CH",
          "CL",
          "NL",
          "TR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "bicyclepaths",
      "title": "Bicycle Paths",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "DE",
          "US",
          "IT",
          "AT",
          "TW",
          "CA",
          "FR",
          "CH",
          "HK",
          "TR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "bicycles",
      "title": "Bicycles",
      "parents": [],
      "country_whitelist": [
          "PT",
          "DK",
          "PL",
          "CZ"
      ]
  },
  {
      "alias": "bike_repair_maintenance",
      "title": "Bike Repair/Maintenance",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "bikeassociations",
      "title": "Bike Associations",
      "parents": [
          "bicycles"
      ],
      "country_whitelist": [
          "PT",
          "DK"
      ]
  },
  {
      "alias": "bikeparking",
      "title": "Bike Parking",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "bikerentals",
      "title": "Bike Rentals",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "bikerepair",
      "title": "Bike Repair",
      "parents": [
          "bicycles"
      ],
      "country_whitelist": [
          "PT",
          "DK"
      ]
  },
  {
      "alias": "bikes",
      "title": "Bikes",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "bikesharing",
      "title": "Bike Sharing",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "bikeshop",
      "title": "Bike Shop",
      "parents": [
          "bicycles"
      ],
      "country_whitelist": [
          "PT",
          "DK"
      ]
  },
  {
      "alias": "biketours",
      "title": "Bike tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "billingservices",
      "title": "Billing Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "SE"
      ]
  },
  {
      "alias": "bingo",
      "title": "Bingo Halls",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "IT",
          "NZ",
          "AU",
          "SE",
          "MX",
          "DK",
          "AR",
          "CL",
          "NO",
          "IE",
          "FI",
          "BR",
          "ES"
      ]
  },
  {
      "alias": "biohazardcleanup",
      "title": "Biohazard Cleanup",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "birdshops",
      "title": "Bird Shops",
      "parents": [
          "petstore"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "SE",
          "DK",
          "NL",
          "NO",
          "SG",
          "ES"
      ]
  },
  {
      "alias": "bistros",
      "title": "Bistros",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "US"
      ]
  },
  {
      "alias": "blacksea",
      "title": "Black Sea",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "blinds",
      "title": "Shades & Blinds",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "blooddonation",
      "title": "Blood & Plasma Donation Centers",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "GB",
          "BE",
          "TW",
          "CA",
          "HK",
          "NL",
          "IE",
          "SG",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "blowfish",
      "title": "Blowfish",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "blowoutservices",
      "title": "Blow Dry/Out Services",
      "parents": [
          "hair"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "AU",
          "CA",
          "CZ",
          "FR",
          "DK",
          "NO",
          "IE",
          "TR",
          "PT"
      ]
  },
  {
      "alias": "boatcharters",
      "title": "Boat Charters",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "boatdealers",
      "title": "Boat Dealers",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "IT",
          "TW",
          "FR",
          "CL",
          "HK",
          "FI",
          "TR",
          "BR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "boating",
      "title": "Boating",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "boatpartsandsupplies",
      "title": "Boat Parts & Supplies",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "boatrepair",
      "title": "Boat Repair",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "boattours",
      "title": "Boat Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "bobsledding",
      "title": "Bobsledding",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "bocceball",
      "title": "Bocce Ball",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "bodycontouring",
      "title": "Body Contouring",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "bodyshops",
      "title": "Body Shops",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "bookbinding",
      "title": "Bookbinding",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "bookkeepers",
      "title": "Bookkeepers",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "TW",
          "CA",
          "CZ",
          "NL",
          "HK",
          "IE",
          "SG",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "bookstores",
      "title": "Bookstores",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "bootcamps",
      "title": "Boot Camps",
      "parents": [
          "fitness"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "NZ",
          "AU",
          "SE",
          "CZ",
          "DK",
          "NO",
          "PL",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "boudoirphotography",
      "title": "Boudoir Photography",
      "parents": [
          "photographers"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "SE",
          "CA"
      ]
  },
  {
      "alias": "bouncehouserentals",
      "title": "Bounce House Rentals",
      "parents": [
          "partyequipmentrentals"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "AT",
          "SE",
          "CA",
          "DK",
          "CH",
          "NL",
          "NO",
          "IE",
          "PL"
      ]
  },
  {
      "alias": "bourguignon",
      "title": "Bourguignon",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "bowling",
      "title": "Bowling",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "boxing",
      "title": "Boxing",
      "parents": [
          "fitness"
      ],
      "country_blacklist": [
          "AU",
          "SE",
          "PL",
          "SG",
          "FI",
          "TR",
          "ES"
      ]
  },
  {
      "alias": "brasseries",
      "title": "Brasseries",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "MX",
          "AR"
      ]
  },
  {
      "alias": "brazilian",
      "title": "Brazilian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "brazilianempanadas",
      "title": "Brazilian Empanadas",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "brazilianjiujitsu",
      "title": "Brazilian Jiu-jitsu",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "breakfast_brunch",
      "title": "Breakfast & Brunch",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "breweries",
      "title": "Breweries",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "brewingsupplies",
      "title": "Brewing Supplies",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "AR",
          "JP",
          "CL",
          "HK"
      ]
  },
  {
      "alias": "brewpubs",
      "title": "Brewpubs",
      "parents": [
          "breweries"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "MX",
          "FR",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "bridal",
      "title": "Bridal",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "british",
      "title": "British",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "bubblesoccer",
      "title": "Bubble Soccer",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "bubbletea",
      "title": "Bubble Tea",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "AT",
          "MX",
          "TR",
          "CH",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "buddhist_temples",
      "title": "Buddhist Temples",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "buffets",
      "title": "Buffets",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "buildingsupplies",
      "title": "Building Supplies",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "bulgarian",
      "title": "Bulgarian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "NZ",
          "CA",
          "DK",
          "NL",
          "NO",
          "SG",
          "TR",
          "BR"
      ]
  },
  {
      "alias": "bulkbilling",
      "title": "Bulk Billing",
      "parents": [
          "medcenters"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "bungeejumping",
      "title": "Bungee Jumping",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "burgers",
      "title": "Burgers",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "burmese",
      "title": "Burmese",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ",
          "FI",
          "TR",
          "DK",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "buses",
      "title": "Buses",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "businessconsulting",
      "title": "Business Consulting",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "HK",
          "TW",
          "CZ",
          "FI",
          "TR"
      ]
  },
  {
      "alias": "businessfinancing",
      "title": "Business Financing",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "businesslawyers",
      "title": "Business Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "CA",
          "CZ",
          "DK",
          "NO",
          "IE",
          "PL",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "busrental",
      "title": "Bus Rental",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "busstations",
      "title": "Bus Stations",
      "parents": [
          "transport"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "bustours",
      "title": "Bus Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "butcher",
      "title": "Butcher",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "c_and_mh",
      "title": "Counseling & Mental Health",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "cabaret",
      "title": "Cabaret",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "cabinetry",
      "title": "Cabinetry",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "cablecars",
      "title": "Cable Cars",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "NZ",
          "AT",
          "CZ",
          "FR",
          "CH",
          "TR",
          "BR",
          "JP",
          "PT"
      ]
  },
  {
      "alias": "cafes",
      "title": "Cafes",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "MX",
          "AR",
          "ES",
          "FI"
      ]
  },
  {
      "alias": "cafeteria",
      "title": "Cafeteria",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "IE",
          "NZ",
          "SE",
          "SG",
          "CA",
          "FR",
          "BR"
      ]
  },
  {
      "alias": "cajun",
      "title": "Cajun/Creole",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "SG",
          "AU",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "cakeshop",
      "title": "Patisserie/Cake Shop",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "calabrian",
      "title": "Calabrian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "FR"
      ]
  },
  {
      "alias": "calligraphy",
      "title": "Calligraphy",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "NL",
          "IT",
          "TR",
          "BR",
          "ES"
      ]
  },
  {
      "alias": "cambodian",
      "title": "Cambodian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ",
          "FI",
          "TR",
          "DK",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "campgrounds",
      "title": "Campgrounds",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "candlestores",
      "title": "Candle Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "candy",
      "title": "Candy Stores",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "cannabis_clinics",
      "title": "Cannabis Clinics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "IT",
          "CA",
          "NL",
          "IE",
          "PL",
          "TR"
      ]
  },
  {
      "alias": "cannabiscollective",
      "title": "Cannabis Collective",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "cannabisdispensaries",
      "title": "Cannabis Dispensaries",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "cannabisreferrals",
      "title": "Medical Cannabis Referrals",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "cannabistours",
      "title": "Cannabis Tours",
      "parents": [
          "cannabis_clinics"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "canteen",
      "title": "Canteen",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "IT",
          "AT",
          "CZ",
          "DK",
          "CH",
          "NL",
          "NO",
          "PL",
          "FI",
          "JP"
      ]
  },
  {
      "alias": "cantonese",
      "title": "Cantonese",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "SG",
          "AR",
          "IT",
          "NZ",
          "SE",
          "TW",
          "CA",
          "NL",
          "HK",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "canyoneering",
      "title": "Canyoneering",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "car_dealers",
      "title": "Car Dealers",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "carauctions",
      "title": "Car Auctions",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "HK",
          "TW",
          "SG",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "carbrokers",
      "title": "Car Brokers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "NZ",
          "AR",
          "AU",
          "US"
      ]
  },
  {
      "alias": "carbuyers",
      "title": "Car Buyers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "BR",
          "PH",
          "DE",
          "NZ",
          "AT",
          "CA",
          "CZ",
          "NL",
          "PL",
          "MY"
      ]
  },
  {
      "alias": "cardioclasses",
      "title": "Cardio Classes",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "cardiology",
      "title": "Cardiologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "careercounseling",
      "title": "Career Counseling",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "caribbean",
      "title": "Caribbean",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI",
          "TR",
          "PT"
      ]
  },
  {
      "alias": "caricatures",
      "title": "Caricatures",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "SE",
          "DK",
          "NO",
          "PL",
          "SG",
          "BR",
          "ES"
      ]
  },
  {
      "alias": "carousels",
      "title": "Carousels",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "carpenters",
      "title": "Carpenters",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "carpet_cleaning",
      "title": "Carpet Cleaning",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "carpetdyeing",
      "title": "Carpet Dyeing",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "NZ",
          "AU",
          "CA",
          "IE",
          "SG",
          "PL",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "carpeting",
      "title": "Carpeting",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "carpetinstallation",
      "title": "Carpet Installation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "carrental",
      "title": "Car Rental",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "carshares",
      "title": "Car Share Services",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "BE",
          "TW",
          "HK",
          "NL",
          "SG",
          "FI",
          "TR",
          "BR",
          "JP",
          "PT"
      ]
  },
  {
      "alias": "carwash",
      "title": "Car Wash",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "carwindowtinting",
      "title": "Car Window Tinting",
      "parents": [
          "autoglass"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "IT",
          "NZ",
          "AU",
          "CA",
          "NL",
          "IE",
          "SG",
          "ES"
      ]
  },
  {
      "alias": "casinos",
      "title": "Casinos",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "JP",
          "HK"
      ]
  },
  {
      "alias": "castles",
      "title": "Castles",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "DE",
          "GB",
          "BE",
          "IT",
          "AT",
          "SE",
          "CZ",
          "FR",
          "DK",
          "CH",
          "NO",
          "FI",
          "JP",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "catalan",
      "title": "Catalan",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "MX",
          "FR",
          "CL",
          "TR",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "catering",
      "title": "Caterers",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "cellphoneaccessories",
      "title": "Mobile Phone Accessories",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "PL",
          "FI",
          "TR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "centralbrazilian",
      "title": "Central Brazilian",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "ceremonialclothing",
      "title": "Ceremonial Clothing",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "FR",
          "CH",
          "JP"
      ]
  },
  {
      "alias": "challengecourses",
      "title": "Challenge Courses",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "NZ",
          "AT",
          "SE",
          "CA",
          "CZ",
          "FR",
          "DK",
          "CH",
          "HK",
          "NO",
          "PL",
          "SG"
      ]
  },
  {
      "alias": "champagne_bars",
      "title": "Champagne Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "AU"
      ]
  },
  {
      "alias": "cheekufta",
      "title": "Chee Kufta",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "DE",
          "TR"
      ]
  },
  {
      "alias": "cheerleading",
      "title": "Cheerleading",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "SE",
          "CA",
          "CH"
      ]
  },
  {
      "alias": "cheese",
      "title": "Cheese Shops",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "cheesesteaks",
      "title": "Cheesesteaks",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "NL",
          "IE",
          "AU",
          "PL",
          "CA"
      ]
  },
  {
      "alias": "cheesetastingclasses",
      "title": "Cheese Tasting Classes",
      "parents": [
          "tastingclasses"
      ]
  },
  {
      "alias": "chicken_wings",
      "title": "Chicken Wings",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "BE",
          "IT",
          "FR",
          "DK",
          "CH",
          "CL",
          "NL",
          "NO",
          "FI",
          "JP",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "chickenshop",
      "title": "Chicken Shop",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "childbirthedu",
      "title": "Childbirth Education",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "BR",
          "PH",
          "DE",
          "IT",
          "NZ",
          "SE",
          "AT",
          "CA",
          "NL",
          "PL",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "childcare",
      "title": "Child Care & Day Care",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "childcloth",
      "title": "Children's Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "childproofing",
      "title": "Childproofing",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "childrensmuseums",
      "title": "Children's Museums",
      "parents": [
          "museums"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "chilean",
      "title": "Chilean",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BR",
          "FR",
          "CL",
          "FI"
      ]
  },
  {
      "alias": "chimneycakes",
      "title": "Chimney Cakes",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "FR",
          "PL",
          "CZ"
      ]
  },
  {
      "alias": "chimneysweeps",
      "title": "Chimney Sweeps",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "MX"
      ]
  },
  {
      "alias": "chinese",
      "title": "Chinese",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "chinesebazaar",
      "title": "Chinese Bazaar",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "ES",
          "PT"
      ]
  },
  {
      "alias": "chinesemartialarts",
      "title": "Chinese Martial Arts",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "chiropractors",
      "title": "Chiropractors",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "chocolate",
      "title": "Chocolatiers & Shops",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "choirs",
      "title": "Choirs",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "US",
          "BE",
          "NZ",
          "CA",
          "CZ",
          "NL",
          "PL",
          "SG",
          "BR"
      ]
  },
  {
      "alias": "christmastrees",
      "title": "Christmas Trees",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "churches",
      "title": "Churches",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "churros",
      "title": "Churros",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CL",
          "BR",
          "MX",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "cideries",
      "title": "Cideries",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "BE",
          "IT",
          "FR",
          "DK",
          "NL",
          "NO",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "cigarbars",
      "title": "Cigar Bars",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "circuittraininggyms",
      "title": "Circuit Training Gyms",
      "parents": [
          "gyms"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "circusschools",
      "title": "Circus Schools",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "MX",
          "FR",
          "AR",
          "CL",
          "FI",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "civiccenter",
      "title": "Civic Center",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "climbing",
      "title": "Climbing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "clockrepair",
      "title": "Clock Repair",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "clothingrental",
      "title": "Clothing Rental",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "clowns",
      "title": "Clowns",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "SE",
          "SG",
          "PL",
          "CZ",
          "FI",
          "TR"
      ]
  },
  {
      "alias": "clubcrawl",
      "title": "Club Crawl",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "cocktailbars",
      "title": "Cocktail Bars",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "coffee",
      "title": "Coffee & Tea",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "coffeeroasteries",
      "title": "Coffee Roasteries",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "coffeeshops",
      "title": "Coffeeshops",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "NL",
          "PT"
      ]
  },
  {
      "alias": "coffeeteasupplies",
      "title": "Coffee & Tea Supplies",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "US",
          "IT",
          "CZ",
          "MX",
          "ES",
          "AR",
          "CL",
          "FI",
          "BR",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "collegecounseling",
      "title": "College Counseling",
      "parents": [
          "education"
      ],
      "country_whitelist": [
          "US",
          "PT"
      ]
  },
  {
      "alias": "collegeuniv",
      "title": "Colleges & Universities",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "colombian",
      "title": "Colombian",
      "parents": [
          "latin"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "CA",
          "MX",
          "FR",
          "CL",
          "FI",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "colonics",
      "title": "Colonics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "NZ",
          "AU",
          "CA",
          "DK",
          "NO",
          "IE",
          "SG"
      ]
  },
  {
      "alias": "comedyclubs",
      "title": "Comedy Clubs",
      "parents": [
          "nightlife"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "comfortfood",
      "title": "Comfort Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "CL",
          "CA",
          "MX",
          "FI",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "comicbooks",
      "title": "Comic Books",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "commercialrealestate",
      "title": "Commercial Real Estate",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "AU",
          "CA",
          "CZ",
          "DK",
          "NL",
          "NO",
          "PL",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "commissionedartists",
      "title": "Commissioned Artists",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "communitybookbox",
      "title": "Community Book Box",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "IT",
          "MX",
          "ES",
          "FR",
          "CL",
          "AR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "communitycenters",
      "title": "Community Centers",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "SE",
          "CA",
          "CZ",
          "DK",
          "NO",
          "IE",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "communitygardens",
      "title": "Community Gardens",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "AU",
          "FR",
          "DK",
          "NO",
          "IE",
          "SG",
          "BR",
          "DE",
          "IT",
          "NZ",
          "SE",
          "CA",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "computers",
      "title": "Computers",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "concept_shops",
      "title": "Concept Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "US",
          "IT",
          "NZ",
          "SE",
          "CA",
          "AR",
          "CL",
          "HK",
          "PL",
          "SG",
          "TR",
          "BR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "conciergemedicine",
      "title": "Concierge Medicine",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "condominiums",
      "title": "Condominiums",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "NZ",
          "AU"
      ]
  },
  {
      "alias": "congee",
      "title": "Congee",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "TW",
          "SG",
          "MY",
          "HK"
      ]
  },
  {
      "alias": "consumerlaw",
      "title": "Consumer Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "SE",
          "TW",
          "CZ",
          "DK",
          "HK",
          "NO",
          "FI",
          "TR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "contractlaw",
      "title": "Contract Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "contractors",
      "title": "Contractors",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "convenience",
      "title": "Convenience Stores",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "conveyorsushi",
      "title": "Conveyor Belt Sushi",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "AT",
          "SE",
          "TW",
          "CH",
          "HK",
          "NL",
          "PL",
          "SG",
          "JP"
      ]
  },
  {
      "alias": "cookingclasses",
      "title": "Cooking Classes",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "cookingschools",
      "title": "Cooking Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "copyshops",
      "title": "Printing Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "corsican",
      "title": "Corsican",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FR",
          "BE"
      ]
  },
  {
      "alias": "cosmeticdentists",
      "title": "Cosmetic Dentists",
      "parents": [
          "dentists"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "cosmetics",
      "title": "Cosmetics & Beauty Supply",
      "parents": [
          "shopping",
          "beautysvc"
      ]
  },
  {
      "alias": "cosmeticsurgeons",
      "title": "Cosmetic Surgeons",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "cosmetology_schools",
      "title": "Cosmetology Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "costumes",
      "title": "Costumes",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "countertopinstall",
      "title": "Countertop Installation",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "DE",
          "IT",
          "AT",
          "CZ",
          "FR",
          "CH"
      ]
  },
  {
      "alias": "countryclubs",
      "title": "Country Clubs",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "TW",
          "MX",
          "AR",
          "CL",
          "HK",
          "SG",
          "BR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "countrydancehalls",
      "title": "Country Dance Halls",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "US",
          "SE"
      ]
  },
  {
      "alias": "couriers",
      "title": "Couriers & Delivery Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "courthouses",
      "title": "Courthouses",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "GB",
          "MX",
          "CL",
          "IE",
          "SG",
          "FI",
          "AR",
          "PH",
          "NZ",
          "TW",
          "CA",
          "HK",
          "TR",
          "JP",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "courtreporters",
      "title": "Court Reporters",
      "parents": [
          "legalservices"
      ],
      "country_whitelist": [
          "US",
          "NL",
          "BE",
          "CA"
      ]
  },
  {
      "alias": "cprclasses",
      "title": "CPR Classes",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US",
          "AU",
          "SE",
          "PT"
      ]
  },
  {
      "alias": "craneservices",
      "title": "Crane Services",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "TW",
          "FR",
          "HK",
          "FI",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "cremationservices",
      "title": "Cremation Services",
      "parents": [
          "funeralservices"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "creperies",
      "title": "Creperies",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "criminaldefense",
      "title": "Criminal Defense Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "crisispregnancycenters",
      "title": "Crisis Pregnancy Centers",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "cryotherapy",
      "title": "Cryotherapy",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "IT",
          "US"
      ]
  },
  {
      "alias": "csa",
      "title": "CSA",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "AT",
          "FR",
          "CH"
      ]
  },
  {
      "alias": "cuban",
      "title": "Cuban",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "SG",
          "DK"
      ]
  },
  {
      "alias": "cucinacampana",
      "title": "Cucina campana",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "culturalcenter",
      "title": "Cultural Center",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "IE",
          "NZ",
          "TR",
          "CA"
      ]
  },
  {
      "alias": "cupcakes",
      "title": "Cupcakes",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "TR",
          "ES",
          "CA",
          "CZ"
      ]
  },
  {
      "alias": "currencyexchange",
      "title": "Currency Exchange",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "currysausage",
      "title": "Curry Sausage",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "customcakes",
      "title": "Custom Cakes",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "CH",
          "FR",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "custommerchandise",
      "title": "Customized Merchandise",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "customsbrokers",
      "title": "Customs Brokers",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "cyclingclasses",
      "title": "Cycling Classes",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "BR",
          "IE",
          "NZ",
          "CA",
          "MX",
          "AR",
          "PT"
      ]
  },
  {
      "alias": "cypriot",
      "title": "Cypriot",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "czech",
      "title": "Czech",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "BE",
          "IT",
          "AU",
          "SE",
          "CA",
          "CZ",
          "FR",
          "DK",
          "NO",
          "IE",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "czechslovakian",
      "title": "Czech/Slovakian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "MX",
          "AR",
          "PT"
      ]
  },
  {
      "alias": "dagashi",
      "title": "Dagashi",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "damagerestoration",
      "title": "Damage Restoration",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "NZ",
          "AU",
          "SG",
          "CA",
          "TR",
          "PT"
      ]
  },
  {
      "alias": "dance_schools",
      "title": "Dance Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "danceclubs",
      "title": "Dance Clubs",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "dancerestaurants",
      "title": "Dance Restaurants",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "FI"
      ]
  },
  {
      "alias": "dancestudio",
      "title": "Dance Studios",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "dancewear",
      "title": "Dance Wear",
      "parents": [
          "sportswear"
      ]
  },
  {
      "alias": "danish",
      "title": "Danish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FR",
          "SE",
          "NO",
          "DK"
      ]
  },
  {
      "alias": "dartarenas",
      "title": "Dart Arenas",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "AT",
          "PL",
          "CH"
      ]
  },
  {
      "alias": "datarecovery",
      "title": "Data Recovery",
      "parents": [
          "itservices"
      ],
      "country_blacklist": [
          "HK",
          "NL",
          "TW",
          "FI",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "daycamps",
      "title": "Day Camps",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "debtrelief",
      "title": "Debt Relief Services",
      "parents": [
          "financialservices"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "decksrailing",
      "title": "Decks & Railing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "delicatessen",
      "title": "Delicatessen",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "US"
      ]
  },
  {
      "alias": "delis",
      "title": "Delis",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CL",
          "BE",
          "NL",
          "IT",
          "SE",
          "FR",
          "PT"
      ]
  },
  {
      "alias": "demolitionservices",
      "title": "Demolition Services",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "AU",
          "AT",
          "CZ",
          "DK",
          "CH",
          "NL",
          "NO",
          "PL",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "dentalhygeiniststorefront",
      "title": "Storefront Clinics",
      "parents": [
          "dentalhygienists"
      ],
      "country_whitelist": [
          "CA"
      ]
  },
  {
      "alias": "dentalhygienists",
      "title": "Dental Hygienists",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "NL",
          "NO",
          "CA",
          "DK",
          "PT"
      ]
  },
  {
      "alias": "dentalhygienistsmobile",
      "title": "Mobile Clinics",
      "parents": [
          "dentalhygienists"
      ],
      "country_whitelist": [
          "CA"
      ]
  },
  {
      "alias": "dentists",
      "title": "Dentists",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "departmentsofmotorvehicles",
      "title": "Departments of Motor Vehicles",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "FR",
          "BE"
      ]
  },
  {
      "alias": "deptstores",
      "title": "Department Stores",
      "parents": [
          "fashion",
          "shopping"
      ]
  },
  {
      "alias": "dermatology",
      "title": "Dermatologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "desserts",
      "title": "Desserts",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "diagnosticimaging",
      "title": "Diagnostic Imaging",
      "parents": [
          "diagnosticservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "AU",
          "CA",
          "MX",
          "FR",
          "AR",
          "CL",
          "IE",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "diagnosticservices",
      "title": "Diagnostic Services",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "dialysisclinics",
      "title": "Dialysis Clinics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "MX",
          "AR",
          "CL",
          "TR",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "diamondbuyers",
      "title": "Diamond Buyers",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "dietitians",
      "title": "Dietitians",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "digitizingservices",
      "title": "Digitizing Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "BR",
          "NO",
          "DK"
      ]
  },
  {
      "alias": "dimsum",
      "title": "Dim Sum",
      "parents": [
          "chinese"
      ],
      "country_blacklist": [
          "BR",
          "TR",
          "PT"
      ]
  },
  {
      "alias": "diners",
      "title": "Diners",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI",
          "AU",
          "SE",
          "CZ"
      ]
  },
  {
      "alias": "dinnertheater",
      "title": "Dinner Theater",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "BE",
          "NL",
          "IT",
          "FR",
          "JP"
      ]
  },
  {
      "alias": "disabilitylaw",
      "title": "Disability Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "discgolf",
      "title": "Disc Golf",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "AU",
          "SG",
          "DK"
      ]
  },
  {
      "alias": "discountstore",
      "title": "Discount Store",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "distilleries",
      "title": "Distilleries",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "divebars",
      "title": "Dive Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "BE",
          "NL",
          "IT",
          "AU",
          "CZ",
          "FR"
      ]
  },
  {
      "alias": "diveshops",
      "title": "Dive Shops",
      "parents": [
          "sportgoods"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "NZ",
          "AU",
          "AT",
          "MX",
          "CH",
          "AR",
          "CL",
          "BR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "diving",
      "title": "Diving",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "divorce",
      "title": "Divorce & Family Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "diyautoshop",
      "title": "DIY Auto Shop",
      "parents": [
          "autorepair"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AU",
          "AT",
          "CH",
          "PT"
      ]
  },
  {
      "alias": "diyfood",
      "title": "Do-It-Yourself Food",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "DE",
          "IT",
          "NZ",
          "AT",
          "SE",
          "CZ",
          "MX",
          "FR",
          "CH",
          "CL",
          "FI",
          "ES"
      ]
  },
  {
      "alias": "djs",
      "title": "DJs",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "dog_parks",
      "title": "Dog Parks",
      "parents": [
          "parks"
      ]
  },
  {
      "alias": "dogwalkers",
      "title": "Dog Walkers",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "dolmusstation",
      "title": "Dolmus Station",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "dominican",
      "title": "Dominican",
      "parents": [
          "caribbean"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "donairs",
      "title": "Donairs",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "BE",
          "PL",
          "CA",
          "CZ",
          "FR",
          "TR",
          "DK"
      ]
  },
  {
      "alias": "donationcenter",
      "title": "Donation Center",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "AT",
          "DK",
          "CH",
          "NL",
          "NO",
          "BR",
          "ES"
      ]
  },
  {
      "alias": "donburi",
      "title": "Donburi",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW",
          "HK"
      ]
  },
  {
      "alias": "donuts",
      "title": "Donuts",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "ES"
      ]
  },
  {
      "alias": "doorsales",
      "title": "Door Sales/Installation",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "MX",
          "FR",
          "DK",
          "CL",
          "NO",
          "IE",
          "FI",
          "AR",
          "PH",
          "SE",
          "TW",
          "HK",
          "TR",
          "JP",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "doulas",
      "title": "Doulas",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "IT",
          "CA",
          "CZ",
          "FR",
          "PT"
      ]
  },
  {
      "alias": "dramaschools",
      "title": "Drama Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "driedfruit",
      "title": "Dried Fruit",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "SE",
          "TW",
          "CZ",
          "MX",
          "AR",
          "CL",
          "HK",
          "PL",
          "TR",
          "BR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "driveintheater",
      "title": "Drive-In Theater",
      "parents": [
          "movietheaters"
      ],
      "country_blacklist": [
          "CL",
          "PL",
          "MX",
          "FR",
          "AR"
      ]
  },
  {
      "alias": "drivethrubars",
      "title": "Drive-Thru Bars",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "driving_schools",
      "title": "Driving Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "drones",
      "title": "Drones",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "drugstores",
      "title": "Drugstores",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "SE",
          "MX",
          "FR",
          "DK",
          "CL",
          "NO",
          "TR",
          "AR"
      ]
  },
  {
      "alias": "dryclean",
      "title": "Dry Cleaning",
      "parents": [
          "laundryservices"
      ]
  },
  {
      "alias": "drywall",
      "title": "Drywall Installation & Repair",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "JP",
          "HK"
      ]
  },
  {
      "alias": "duilawyers",
      "title": "DUI Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "CA"
      ]
  },
  {
      "alias": "duischools",
      "title": "DUI Schools",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "dumplings",
      "title": "Dumplings",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "GB",
          "BE",
          "NZ",
          "AU",
          "AT",
          "CA",
          "CH",
          "NL",
          "IE",
          "SG",
          "PL",
          "JP"
      ]
  },
  {
      "alias": "dumpsterrental",
      "title": "Dumpster Rental",
      "parents": [
          "junkremovalandhauling"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "PH",
          "DE",
          "NZ",
          "AT",
          "CA",
          "HK",
          "NL",
          "PL",
          "MY"
      ]
  },
  {
      "alias": "duplicationservices",
      "title": "Duplication Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "dutyfreeshops",
      "title": "Duty-Free Shops",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "earnosethroat",
      "title": "Ear Nose & Throat",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "eastern_european",
      "title": "Eastern European",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NO",
          "AU",
          "CZ",
          "FR",
          "DK"
      ]
  },
  {
      "alias": "easterngerman",
      "title": "Eastern German",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "easternmexican",
      "title": "Eastern Mexican",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "eatertainment",
      "title": "Eatertainment",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "NL",
          "AT",
          "CH",
          "BR"
      ]
  },
  {
      "alias": "editorialservices",
      "title": "Editorial Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "MX",
          "FR",
          "DK",
          "CH",
          "CL",
          "NO",
          "IE",
          "SG",
          "BR",
          "AR",
          "PH",
          "DE",
          "IT",
          "NZ",
          "AT",
          "CA",
          "NL",
          "PL",
          "MY",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "education",
      "title": "Education",
      "parents": []
  },
  {
      "alias": "educationservices",
      "title": "Educational Services",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "BR"
      ]
  },
  {
      "alias": "egyptian",
      "title": "Egyptian",
      "parents": [
          "mideastern"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "IT",
          "CA",
          "FR"
      ]
  },
  {
      "alias": "eldercareplanning",
      "title": "Elder Care Planning",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "elderlaw",
      "title": "Elder Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "CH",
          "PL",
          "TR",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "electricians",
      "title": "Electricians",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "electricitysuppliers",
      "title": "Electricity Suppliers",
      "parents": [
          "utilities"
      ]
  },
  {
      "alias": "electronics",
      "title": "Electronics",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "electronicsrepair",
      "title": "Electronics Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "elementaryschools",
      "title": "Elementary Schools",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "elevatorservices",
      "title": "Elevator Services",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "CZ",
          "MX",
          "FR",
          "CL",
          "FI",
          "AR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "eltern_cafes",
      "title": "Parent Cafes",
      "parents": [
          "food",
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "embassy",
      "title": "Embassy",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "embroideryandcrochet",
      "title": "Embroidery & Crochet",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "emergencymedicine",
      "title": "Emergency Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "emergencypethospital",
      "title": "Emergency Pet Hospital",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "emergencyrooms",
      "title": "Emergency Rooms",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "emilian",
      "title": "Emilian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "empanadas",
      "title": "Empanadas",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "AR",
          "CL",
          "ES"
      ]
  },
  {
      "alias": "employmentagencies",
      "title": "Employment Agencies",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "employmentlawyers",
      "title": "Employment Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "emstraining",
      "title": "EMS Training",
      "parents": [
          "fitness"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "SE",
          "CH",
          "ES"
      ]
  },
  {
      "alias": "endocrinologists",
      "title": "Endocrinologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "AU",
          "SE",
          "TW",
          "CA",
          "HK",
          "IE",
          "PL",
          "SG",
          "FI",
          "JP"
      ]
  },
  {
      "alias": "endodontists",
      "title": "Endodontists",
      "parents": [
          "dentists"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "engraving",
      "title": "Engraving",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "entertainmentlaw",
      "title": "Entertainment Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "enviroabatement",
      "title": "Environmental Abatement",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "environmentaltesting",
      "title": "Environmental Testing",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "CA",
          "DK",
          "NL",
          "NO",
          "IE",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "eritrean",
      "title": "Eritrean",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "IT",
          "AT",
          "CH"
      ]
  },
  {
      "alias": "eroticmassage",
      "title": "Erotic Massage",
      "parents": [
          "beautysvc"
      ],
      "country_blacklist": [
          "US",
          "SE",
          "TW",
          "DK",
          "CL",
          "HK",
          "NO",
          "FI",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "escapegames",
      "title": "Escape Games",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "estateliquidation",
      "title": "Estate Liquidation",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "estatephotography",
      "title": "Real Estate Photography",
      "parents": [
          "realestatesvcs"
      ],
      "country_blacklist": [
          "IT",
          "JP"
      ]
  },
  {
      "alias": "estateplanning",
      "title": "Estate Planning Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "SE",
          "NO"
      ]
  },
  {
      "alias": "estheticians",
      "title": "Estheticians",
      "parents": [
          "skincare"
      ]
  },
  {
      "alias": "ethicgrocery",
      "title": "Ethical Grocery",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "DE",
          "US",
          "BE",
          "AT",
          "CZ",
          "FR",
          "CH",
          "NL",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "ethiopian",
      "title": "Ethiopian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "MX",
          "TR",
          "SG",
          "CZ"
      ]
  },
  {
      "alias": "evchargingstations",
      "title": "EV Charging Stations",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "eventphotography",
      "title": "Event Photography",
      "parents": [
          "photographers"
      ]
  },
  {
      "alias": "eventplanning",
      "title": "Party & Event Planning",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "eventservices",
      "title": "Event Planning & Services",
      "parents": []
  },
  {
      "alias": "excavationservices",
      "title": "Excavation Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "experiences",
      "title": "Experiences",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "NO",
          "SE",
          "CZ",
          "DK",
          "PT"
      ]
  },
  {
      "alias": "eyebrowservices",
      "title": "Eyebrow Services",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "eyelashservice",
      "title": "Eyelash Service",
      "parents": [
          "beautysvc"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "fabricstores",
      "title": "Fabric Stores",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "facepainting",
      "title": "Face Painting",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "MX",
          "FR",
          "CL",
          "SG",
          "FI",
          "AR",
          "PH",
          "IT",
          "SE",
          "TW",
          "HK",
          "PL",
          "TR",
          "JP",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "fado_houses",
      "title": "Fado Houses",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "faithbasedcpc",
      "title": "Faith-based Crisis Pregnancy Centers",
      "parents": [
          "crisispregnancycenters"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "falafel",
      "title": "Falafel",
      "parents": [
          "mediterranean"
      ],
      "country_blacklist": [
          "MX",
          "AR",
          "PT"
      ]
  },
  {
      "alias": "familydr",
      "title": "Family Practice",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "BR"
      ]
  },
  {
      "alias": "farmequipmentrepair",
      "title": "Farm Equipment Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "farmersmarket",
      "title": "Farmers Market",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "farmingequipment",
      "title": "Farming Equipment",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "farms",
      "title": "Farms",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "farriers",
      "title": "Farriers",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "fashion",
      "title": "Fashion",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "fasil",
      "title": "Fasil Music",
      "parents": [
          "nightlife"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "fencesgates",
      "title": "Fences & Gates",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "fencing",
      "title": "Fencing Clubs",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "fengshui",
      "title": "Feng Shui",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "ferries",
      "title": "Ferries",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "fertility",
      "title": "Fertility",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "festivals",
      "title": "Festivals",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "filipino",
      "title": "Filipino",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI",
          "DK",
          "TR",
          "CZ"
      ]
  },
  {
      "alias": "financialadvising",
      "title": "Financial Advising",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "financialservices",
      "title": "Financial Services",
      "parents": []
  },
  {
      "alias": "fingerprinting",
      "title": "Fingerprinting",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "firearmtraining",
      "title": "Firearm Training",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "firedepartments",
      "title": "Fire Departments",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "GB",
          "IE",
          "NZ",
          "SG",
          "CA"
      ]
  },
  {
      "alias": "fireplace",
      "title": "Fireplace Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "fireprotection",
      "title": "Fire Protection Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "firewood",
      "title": "Firewood",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "BE",
          "TW",
          "CZ",
          "HK",
          "NL",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "fireworks",
      "title": "Fireworks",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "NZ",
          "AU",
          "CA",
          "CZ",
          "MX",
          "CL",
          "AR",
          "PT"
      ]
  },
  {
      "alias": "firstaidclasses",
      "title": "First Aid Classes",
      "parents": [
          "specialtyschools"
      ],
      "country_blacklist": [
          "BE",
          "NL",
          "IE",
          "NZ",
          "SG",
          "FR",
          "BR"
      ]
  },
  {
      "alias": "fischbroetchen",
      "title": "Fischbroetchen",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "fishing",
      "title": "Fishing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "fishmonger",
      "title": "Fishmonger",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "IT",
          "AU",
          "AT",
          "SE",
          "CZ",
          "DK",
          "CH",
          "NL",
          "NO",
          "PL",
          "FI",
          "PT"
      ]
  },
  {
      "alias": "fishnchips",
      "title": "Fish & Chips",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "BR",
          "PT"
      ]
  },
  {
      "alias": "fitness",
      "title": "Fitness & Instruction",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "fitnessequipment",
      "title": "Fitness/Exercise Equipment",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "flatbread",
      "title": "Flatbread",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "PL",
          "DK",
          "CH"
      ]
  },
  {
      "alias": "fleamarkets",
      "title": "Flea Markets",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "flemish",
      "title": "Flemish",
      "parents": [
          "belgian"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "flightinstruction",
      "title": "Flight Instruction",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "floatspa",
      "title": "Float Spa",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "IT",
          "JP",
          "FR"
      ]
  },
  {
      "alias": "flooring",
      "title": "Flooring",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "floraldesigners",
      "title": "Floral Designers",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "florists",
      "title": "Florists",
      "parents": [
          "flowers"
      ]
  },
  {
      "alias": "flowers",
      "title": "Flowers & Gifts",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "flyboarding",
      "title": "Flyboarding",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "fondue",
      "title": "Fondue",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "DK",
          "ES",
          "CZ"
      ]
  },
  {
      "alias": "food",
      "title": "Food",
      "parents": []
  },
  {
      "alias": "food_court",
      "title": "Food Court",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI",
          "FR",
          "TW",
          "TR"
      ]
  },
  {
      "alias": "foodbanks",
      "title": "Food Banks",
      "parents": [
          "nonprofit"
      ]
  },
  {
      "alias": "fooddeliveryservices",
      "title": "Food Delivery Services",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "foodsafety",
      "title": "Food Safety Training",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US",
          "BR",
          "SG",
          "PT"
      ]
  },
  {
      "alias": "foodstands",
      "title": "Food Stands",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "foodtours",
      "title": "Food Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "foodtrucks",
      "title": "Food Trucks",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "football",
      "title": "Soccer",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "footcare",
      "title": "Foot Care",
      "parents": [
          "beautysvc"
      ],
      "country_whitelist": [
          "DE",
          "GB",
          "BE",
          "IT",
          "NZ",
          "AU",
          "AT",
          "CA",
          "CH",
          "NL",
          "IE",
          "SG",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "forestry",
      "title": "Forestry",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "NO",
          "SE",
          "CA",
          "CZ",
          "FI",
          "DK"
      ]
  },
  {
      "alias": "formalwear",
      "title": "Formal Wear",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "IT",
          "SE",
          "TW",
          "CH",
          "HK",
          "FI",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "foundationrepair",
      "title": "Foundation Repair",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "framing",
      "title": "Framing",
      "parents": [
          "artsandcrafts"
      ]
  },
  {
      "alias": "franconian",
      "title": "Franconian",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "freediving",
      "title": "Free Diving",
      "parents": [
          "diving"
      ]
  },
  {
      "alias": "freiduria",
      "title": "Freiduria",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "MX",
          "AR",
          "CL",
          "ES"
      ]
  },
  {
      "alias": "french",
      "title": "French",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "friterie",
      "title": "Friterie",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "NL",
          "BE",
          "IT",
          "AU",
          "PL",
          "FR"
      ]
  },
  {
      "alias": "friulan",
      "title": "Friulan",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "frozenfood",
      "title": "Frozen Food",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "GB",
          "BE",
          "IT",
          "SG",
          "FR",
          "ES"
      ]
  },
  {
      "alias": "fueldocks",
      "title": "Fuel Docks",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "NO",
          "SE",
          "MX",
          "DK",
          "ES"
      ]
  },
  {
      "alias": "funeralservices",
      "title": "Funeral Services & Cemeteries",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "funfair",
      "title": "Fun Fair",
      "parents": [
          "festivals"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "AT",
          "CZ",
          "DK",
          "CH",
          "NL",
          "NO",
          "PT"
      ]
  },
  {
      "alias": "furclothing",
      "title": "Fur Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "furniture",
      "title": "Furniture Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "furnitureassembly",
      "title": "Furniture Assembly",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "furniturerepair",
      "title": "Furniture Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "fuzhou",
      "title": "Fuzhou",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "TW",
          "SG",
          "MY",
          "HK"
      ]
  },
  {
      "alias": "galician",
      "title": "Galician",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "ES",
          "PT"
      ]
  },
  {
      "alias": "galleries",
      "title": "Art Galleries",
      "parents": [
          "shopping",
          "arts"
      ]
  },
  {
      "alias": "gamemeat",
      "title": "Game Meat",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TW",
          "CA",
          "MX",
          "AR",
          "CL",
          "HK",
          "FI",
          "TR",
          "BR",
          "JP",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "gametruckrental",
      "title": "Game Truck Rental",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US",
          "CL",
          "CA",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "garage_door_services",
      "title": "Garage Door Services",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "SE",
          "TW",
          "CH",
          "CL",
          "HK",
          "PL",
          "AR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "gardeners",
      "title": "Gardeners",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "gardening",
      "title": "Nurseries & Gardening",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "gardens",
      "title": "Botanical Gardens",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "gastroenterologist",
      "title": "Gastroenterologist",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "gastropubs",
      "title": "Gastropubs",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "gaybars",
      "title": "Gay Bars",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "gelato",
      "title": "Gelato",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "AU",
          "SE",
          "CZ",
          "DK",
          "NO",
          "PL",
          "SG",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "gemstonesandminerals",
      "title": "Gemstones & Minerals",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "general_litigation",
      "title": "General Litigation",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "generaldentistry",
      "title": "General Dentistry",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "generalfestivals",
      "title": "General Festivals",
      "parents": [
          "festivals"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CH",
          "JP",
          "PT"
      ]
  },
  {
      "alias": "generatorinstallrepair",
      "title": "Generator Installation/Repair",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "geneticists",
      "title": "Geneticists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "georgian",
      "title": "Georgian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "GB",
          "AT",
          "CZ",
          "CH",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "german",
      "title": "German",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "gerontologist",
      "title": "Gerontologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "gestorias",
      "title": "Gestorias",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "MX",
          "AR",
          "CL",
          "ES"
      ]
  },
  {
      "alias": "giblets",
      "title": "Giblets",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "giftshops",
      "title": "Gift Shops",
      "parents": [
          "flowers"
      ],
      "country_blacklist": [
          "SG",
          "TR",
          "PL"
      ]
  },
  {
      "alias": "glassandmirrors",
      "title": "Glass & Mirrors",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "glassblowing",
      "title": "Glass Blowing",
      "parents": [
          "artclasses"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "gliding",
      "title": "Gliding",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "SE",
          "CZ",
          "FR",
          "CH",
          "NO",
          "PL",
          "PT"
      ]
  },
  {
      "alias": "gluhwein",
      "title": "Mulled Wine",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "SE",
          "AT",
          "CZ",
          "CH"
      ]
  },
  {
      "alias": "gluten_free",
      "title": "Gluten-Free",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "gokarts",
      "title": "Go Karts",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "goldbuyers",
      "title": "Gold Buyers",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "AT",
          "SE",
          "CA",
          "FR",
          "CH",
          "NL",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "golf",
      "title": "Golf",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "golfcartdealers",
      "title": "Golf Cart Dealers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "golfcartrentals",
      "title": "Golf Cart Rentals",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "golfequipment",
      "title": "Golf Equipment",
      "parents": [
          "sportgoods"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "NL",
          "BE",
          "AU",
          "CA"
      ]
  },
  {
      "alias": "golflessons",
      "title": "Golf Lessons",
      "parents": [
          "fitness"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "TW",
          "CA",
          "CH",
          "HK",
          "IE",
          "SG",
          "FI",
          "TR",
          "BR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "gourmet",
      "title": "Specialty Food",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "gozleme",
      "title": "Gozleme",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "graphicdesign",
      "title": "Graphic Design",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "greek",
      "title": "Greek",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "grillingequipment",
      "title": "Grilling Equipment",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "grillservices",
      "title": "Grill Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "MX",
          "CH",
          "AR",
          "CL",
          "PL",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "grocery",
      "title": "Grocery",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "groomer",
      "title": "Pet Groomers",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "groutservices",
      "title": "Grout Services",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "guamanian",
      "title": "Guamanian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CL",
          "PL",
          "MX",
          "FR",
          "TR",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "guesthouses",
      "title": "Guest Houses",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "guitarstores",
      "title": "Guitar Stores",
      "parents": [
          "musicinstrumentservices"
      ]
  },
  {
      "alias": "gun_ranges",
      "title": "Gun/Rifle Ranges",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CH",
          "SG",
          "AT",
          "BE"
      ]
  },
  {
      "alias": "guns_and_ammo",
      "title": "Guns & Ammo",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "CA",
          "MX",
          "ES",
          "CH",
          "CL",
          "PL",
          "AR",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "gunsmith",
      "title": "Gunsmith",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "DE",
          "BE",
          "AT",
          "TW",
          "CH",
          "HK",
          "NL",
          "TR",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "gutterservices",
      "title": "Gutter Services",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "MX",
          "AR"
      ]
  },
  {
      "alias": "gymnastics",
      "title": "Gymnastics",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "NZ",
          "CA",
          "CZ",
          "MX",
          "DK",
          "NO",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "gyms",
      "title": "Gyms",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "gyudon",
      "title": "Gyudon",
      "parents": [
          "donburi"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "habilitativeservices",
      "title": "Habilitative Services",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "hainan",
      "title": "Hainan",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "US",
          "HK",
          "SG",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "hair",
      "title": "Hair Salons",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "hair_extensions",
      "title": "Hair Extensions",
      "parents": [
          "hair",
          "beautysvc"
      ],
      "country_blacklist": [
          "NL",
          "HK",
          "BE",
          "PL",
          "TR"
      ]
  },
  {
      "alias": "hairloss",
      "title": "Hair Loss Centers",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "hairremoval",
      "title": "Hair Removal",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "hairstylists",
      "title": "Hair Stylists",
      "parents": [
          "hair"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "MX",
          "DK",
          "CH",
          "CL",
          "NO",
          "IE",
          "SG",
          "AR",
          "DE",
          "SE",
          "TW",
          "CA",
          "CZ",
          "AT",
          "NL",
          "HK",
          "PL",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "haitian",
      "title": "Haitian",
      "parents": [
          "caribbean"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "hakka",
      "title": "Hakka",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "SG",
          "CA",
          "TW",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "halal",
      "title": "Halal",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "PT"
      ]
  },
  {
      "alias": "halfwayhouses",
      "title": "Halfway Houses",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "halotherapy",
      "title": "Halotherapy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "handball",
      "title": "Handball",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "AU",
          "MX",
          "IE",
          "SG",
          "PH",
          "DE",
          "NZ",
          "TW",
          "CA",
          "CZ",
          "HK",
          "TR",
          "MY",
          "PT"
      ]
  },
  {
      "alias": "handrolls",
      "title": "Hand Rolls",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "BR",
          "TW"
      ]
  },
  {
      "alias": "handyman",
      "title": "Handyman",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "hanggliding",
      "title": "Hang Gliding",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "DE",
          "GB",
          "TW",
          "CA",
          "CZ",
          "DK",
          "HK",
          "NL",
          "IE",
          "PL",
          "SG",
          "FI",
          "TR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "hardware",
      "title": "Hardware Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "hats",
      "title": "Hats",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "GB",
          "AT",
          "SE",
          "CH",
          "HK",
          "IE",
          "PL",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "hauntedhouses",
      "title": "Haunted Houses",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "hawaiian",
      "title": "Hawaiian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AU",
          "CZ",
          "TR",
          "DK",
          "PT"
      ]
  },
  {
      "alias": "hawkercentre",
      "title": "Hawker Centre",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "TW",
          "MX",
          "CL",
          "HK",
          "SG",
          "AR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "hazardouswastedisposal",
      "title": "Hazardous Waste Disposal",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "SE",
          "CZ",
          "FR",
          "CH",
          "HK",
          "TR",
          "BR",
          "JP",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "headshops",
      "title": "Head Shops",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "health",
      "title": "Health & Medical",
      "parents": []
  },
  {
      "alias": "healthcoach",
      "title": "Health Coach",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "healthinsurance",
      "title": "Health Insurance Offices",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "NZ",
          "AU",
          "AT",
          "CZ",
          "MX",
          "FR",
          "CH",
          "SG",
          "PL",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "healthmarkets",
      "title": "Health Markets",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "healthretreats",
      "title": "Health Retreats",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "MX",
          "AR"
      ]
  },
  {
      "alias": "healthtrainers",
      "title": "Trainers",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "hearing_aids",
      "title": "Hearing Aids",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CZ",
          "MX",
          "FR",
          "DK",
          "CH",
          "AR",
          "CL",
          "NO",
          "PL",
          "FI",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "hearingaidproviders",
      "title": "Hearing Aid Providers",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "SE",
          "CZ",
          "MX",
          "CH",
          "CL",
          "HK",
          "TR",
          "AR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "henghwa",
      "title": "Henghwa",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "TW",
          "SG",
          "MY",
          "HK"
      ]
  },
  {
      "alias": "hennaartists",
      "title": "Henna Artists",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "IT",
          "NZ",
          "AU",
          "AT",
          "CA",
          "FR",
          "DK",
          "CH",
          "NO",
          "BR"
      ]
  },
  {
      "alias": "hepatologists",
      "title": "Hepatologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "herbalshops",
      "title": "Herbal Shops",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "herbsandspices",
      "title": "Herbs & Spices",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "hessian",
      "title": "Hessian",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "heuriger",
      "title": "Heuriger",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AT"
      ]
  },
  {
      "alias": "hifi",
      "title": "High Fidelity Audio Equipment",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "highschools",
      "title": "Middle Schools & High Schools",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "hiking",
      "title": "Hiking",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "himalayan",
      "title": "Himalayan/Nepalese",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "hindu_temples",
      "title": "Hindu Temples",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "historicaltours",
      "title": "Historical Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "hkcafe",
      "title": "Hong Kong Style Cafe",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "TW",
          "HK",
          "CA"
      ]
  },
  {
      "alias": "hobbyshops",
      "title": "Hobby Shops",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "hockeyequipment",
      "title": "Hockey Equipment",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "hokkien",
      "title": "Hokkien",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "TW",
          "SG",
          "MY",
          "HK"
      ]
  },
  {
      "alias": "holidaydecorations",
      "title": "Holiday Decorations",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "home_inspectors",
      "title": "Home Inspectors",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "home_organization",
      "title": "Home Organization",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "homeandgarden",
      "title": "Home & Garden",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "homeappliancerepair",
      "title": "Appliances & Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "homeautomation",
      "title": "Home Automation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "homecleaning",
      "title": "Home Cleaning",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "homedecor",
      "title": "Home Decor",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "homedevelopers",
      "title": "Home Developers",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CL",
          "BR",
          "IT",
          "MX",
          "AR"
      ]
  },
  {
      "alias": "homeenergyauditors",
      "title": "Home Energy Auditors",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "FI",
          "PH",
          "DE",
          "NZ",
          "AT",
          "SE",
          "CA",
          "NL",
          "PL",
          "MY",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "homehealthcare",
      "title": "Home Health Care",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "homeinsurance",
      "title": "Home & Rental Insurance",
      "parents": [
          "insurance"
      ]
  },
  {
      "alias": "homelessshelters",
      "title": "Homeless Shelters",
      "parents": [
          "nonprofit"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "homemadefood",
      "title": "Homemade Food",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "homenetworkinstall",
      "title": "Home Network Installation",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "AT",
          "SE",
          "CZ",
          "DK",
          "CH",
          "NL",
          "NO",
          "FI",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "homeopathic",
      "title": "Homeopathic",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "NZ",
          "AU",
          "TW",
          "CA",
          "HK",
          "IE",
          "SG",
          "TR"
      ]
  },
  {
      "alias": "homeownerassociation",
      "title": "Homeowner Association",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "US",
          "PL",
          "CZ"
      ]
  },
  {
      "alias": "homeservices",
      "title": "Home Services",
      "parents": []
  },
  {
      "alias": "homestaging",
      "title": "Home Staging",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CZ",
          "FR",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "hometheatreinstallation",
      "title": "Home Theatre Installation",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "DK",
          "CZ"
      ]
  },
  {
      "alias": "homewindowtinting",
      "title": "Home Window Tinting",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "CA",
          "NL",
          "IE",
          "SG",
          "PT"
      ]
  },
  {
      "alias": "honduran",
      "title": "Honduran",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "JP",
          "TR"
      ]
  },
  {
      "alias": "honey",
      "title": "Honey",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "SE",
          "FR",
          "PL",
          "FI",
          "TR"
      ]
  },
  {
      "alias": "hookah_bars",
      "title": "Hookah Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "AU",
          "SG"
      ]
  },
  {
      "alias": "horse_boarding",
      "title": "Horse Boarding",
      "parents": [
          "pets"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "NZ",
          "AU",
          "SE",
          "CA",
          "CZ",
          "FR",
          "DK",
          "NO",
          "IE"
      ]
  },
  {
      "alias": "horsebackriding",
      "title": "Horseback Riding",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "horsequipment",
      "title": "Horse Equipment Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "NZ",
          "TW",
          "CH",
          "HK",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "horseracing",
      "title": "Horse Racing",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "GB",
          "IT",
          "NZ",
          "CA",
          "FR",
          "IE",
          "SG",
          "BR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "horumon",
      "title": "Horumon",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "hospice",
      "title": "Hospice",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "hospitalists",
      "title": "Hospitalists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "DE",
          "IT",
          "AT",
          "TR",
          "CH",
          "JP"
      ]
  },
  {
      "alias": "hospitals",
      "title": "Hospitals",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "hostels",
      "title": "Hostels",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "hot_air_balloons",
      "title": "Hot Air Balloons",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "NZ",
          "BR",
          "SG",
          "CA"
      ]
  },
  {
      "alias": "hotdog",
      "title": "Hot Dogs",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "hotdogs",
      "title": "Fast Food",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "hotel_bar",
      "title": "Hotel bar",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "NO",
          "SE",
          "FI",
          "DK",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "hotels",
      "title": "Hotels",
      "parents": [
          "eventservices",
          "hotelstravel"
      ]
  },
  {
      "alias": "hotelstravel",
      "title": "Hotels & Travel",
      "parents": []
  },
  {
      "alias": "hotpot",
      "title": "Hot Pot",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "SE",
          "TW",
          "CA",
          "FR",
          "HK",
          "SG",
          "BR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "hotsprings",
      "title": "Hot Springs",
      "parents": [
          "beautysvc"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "NZ",
          "AU",
          "AT",
          "TW",
          "CZ",
          "CH",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "hottubandpool",
      "title": "Hot Tub & Pool",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "housesitters",
      "title": "House Sitters",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "IT",
          "AU",
          "AT",
          "CA",
          "CH",
          "PL"
      ]
  },
  {
      "alias": "housingcooperatives",
      "title": "Housing Cooperatives",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "IT",
          "AR",
          "MX",
          "CL"
      ]
  },
  {
      "alias": "hunan",
      "title": "Hunan",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "TW",
          "SG",
          "FR",
          "MY"
      ]
  },
  {
      "alias": "hungarian",
      "title": "Hungarian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "huntingfishingsupplies",
      "title": "Hunting & Fishing Supplies",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "hvac",
      "title": "Heating & Air Conditioning/HVAC",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "hybridcarrepair",
      "title": "Hybrid Car Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "NZ",
          "AU",
          "SE",
          "CZ",
          "IE",
          "PL",
          "SG"
      ]
  },
  {
      "alias": "hydrojetting",
      "title": "Hydro-jetting",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "CZ"
      ]
  },
  {
      "alias": "hydroponics",
      "title": "Hydroponics",
      "parents": [
          "gardening"
      ]
  },
  {
      "alias": "hydrotherapy",
      "title": "Hydrotherapy",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "hypnosis",
      "title": "Hypnosis/Hypnotherapy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "NL",
          "TR",
          "HK"
      ]
  },
  {
      "alias": "iberian",
      "title": "Iberian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "CA",
          "PT"
      ]
  },
  {
      "alias": "icecream",
      "title": "Ice Cream & Frozen Yogurt",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "icedelivery",
      "title": "Ice Delivery",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "immigrationlawyers",
      "title": "Immigration Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "immunodermatologists",
      "title": "Immunodermatologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "JP",
          "FR"
      ]
  },
  {
      "alias": "importedfood",
      "title": "Imported Food",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "indonesian",
      "title": "Indonesian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "MX",
          "ES"
      ]
  },
  {
      "alias": "indoor_playcenter",
      "title": "Indoor Playcentre",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "AT",
          "TW",
          "MX",
          "CH",
          "AR",
          "CL",
          "HK",
          "IE",
          "PL",
          "SG",
          "FI",
          "TR",
          "BR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "indoorlandscaping",
      "title": "Indoor Landscaping",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "indpak",
      "title": "Indian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "infectiousdisease",
      "title": "Infectious Disease Specialists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "installmentloans",
      "title": "Installment Loans",
      "parents": [
          "financialservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "insulationinstallation",
      "title": "Insulation Installation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "insurance",
      "title": "Insurance",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "interiordesign",
      "title": "Interior Design",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "interlocksystems",
      "title": "Interlock Systems",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "internalmed",
      "title": "Internal Medicine",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "BR"
      ]
  },
  {
      "alias": "international",
      "title": "International",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "US",
          "IT",
          "FI",
          "TR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "internetbooth",
      "title": "Internet Booths & Calling Centers",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "CL",
          "BR",
          "IT",
          "MX",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "internetcafe",
      "title": "Internet Cafes",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "intervaltraininggyms",
      "title": "Interval Training Gyms",
      "parents": [
          "gyms"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "intlgrocery",
      "title": "International Grocery",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "investing",
      "title": "Investing",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "iplaw",
      "title": "IP & Internet Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "US",
          "CZ"
      ]
  },
  {
      "alias": "irish",
      "title": "Irish",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "irish_pubs",
      "title": "Irish Pub",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "irrigation",
      "title": "Irrigation",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "island_pub",
      "title": "Island Pub",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE"
      ]
  },
  {
      "alias": "isps",
      "title": "Internet Service Providers",
      "parents": [
          "professional",
          "homeservices"
      ]
  },
  {
      "alias": "israeli",
      "title": "Israeli",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT",
          "CZ"
      ]
  },
  {
      "alias": "italian",
      "title": "Italian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "itservices",
      "title": "IT Services & Computer Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "ivhydration",
      "title": "IV Hydration",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "izakaya",
      "title": "Izakaya",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "US",
          "NZ",
          "AU",
          "TW",
          "MX",
          "HK",
          "SG",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "jailsandprisons",
      "title": "Jails & Prisons",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "jaliscan",
      "title": "Jaliscan",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "japacurry",
      "title": "Japanese Curry",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "US",
          "HK",
          "SG",
          "TW",
          "JP"
      ]
  },
  {
      "alias": "japanese",
      "title": "Japanese",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "jazzandblues",
      "title": "Jazz & Blues",
      "parents": [
          "nightlife",
          "arts"
      ]
  },
  {
      "alias": "jetskis",
      "title": "Jet Skis",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "jewelry",
      "title": "Jewelry",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "jewelryrepair",
      "title": "Jewelry Repair",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "DE",
          "GB",
          "NZ",
          "AT",
          "SE",
          "TW",
          "CH",
          "HK",
          "IE",
          "SG",
          "FI"
      ]
  },
  {
      "alias": "jewish",
      "title": "Jewish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "IT",
          "PL"
      ]
  },
  {
      "alias": "jpsweets",
      "title": "Japanese Sweets",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "juicebars",
      "title": "Juice Bars & Smoothies",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "junkremovalandhauling",
      "title": "Junk Removal & Hauling",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "junkyards",
      "title": "Junkyards",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "NO",
          "IE",
          "SG",
          "BR",
          "DE",
          "NZ",
          "AT",
          "SE",
          "CA",
          "CZ",
          "NL",
          "PL"
      ]
  },
  {
      "alias": "kaiseki",
      "title": "Kaiseki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "karaoke",
      "title": "Karaoke",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "karaokerental",
      "title": "Karaoke Rental",
      "parents": [
          "partyequipmentrentals"
      ]
  },
  {
      "alias": "karate",
      "title": "Karate",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "kebab",
      "title": "Kebab",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "kickboxing",
      "title": "Kickboxing",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "kids_activities",
      "title": "Kids Activities",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "kidshairsalons",
      "title": "Kids Hair Salons",
      "parents": [
          "hair"
      ]
  },
  {
      "alias": "kimonos",
      "title": "Kimonos",
      "parents": [
          "fashion"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "kiosk",
      "title": "Kiosk",
      "parents": [
          "food",
          "shopping"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "IT",
          "NZ",
          "CA",
          "FR",
          "HK",
          "IE",
          "SG",
          "BR"
      ]
  },
  {
      "alias": "kitchenandbath",
      "title": "Kitchen & Bath",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "kitchenincubators",
      "title": "Kitchen Incubators",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "US",
          "GB"
      ]
  },
  {
      "alias": "kitchensupplies",
      "title": "Kitchen Supplies",
      "parents": [
          "kitchenandbath"
      ]
  },
  {
      "alias": "kiteboarding",
      "title": "Kiteboarding",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IT",
          "HK",
          "CZ"
      ]
  },
  {
      "alias": "knifesharpening",
      "title": "Knife Sharpening",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "knittingsupplies",
      "title": "Knitting Supplies",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "kombucha",
      "title": "Kombucha",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "kopitiam",
      "title": "Kopitiam",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "MY",
          "SG"
      ]
  },
  {
      "alias": "korean",
      "title": "Korean",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "kosher",
      "title": "Kosher",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "PT"
      ]
  },
  {
      "alias": "kurdish",
      "title": "Kurdish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "NO"
      ]
  },
  {
      "alias": "kushikatsu",
      "title": "Kushikatsu",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "laboratorytesting",
      "title": "Laboratory Testing",
      "parents": [
          "diagnosticservices"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "IT",
          "AU",
          "CA",
          "CZ",
          "MX",
          "FR",
          "AR",
          "CL",
          "PL",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "lactationservices",
      "title": "Lactation Services",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "IT",
          "FR",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "lahmacun",
      "title": "Lahmacun",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "lakes",
      "title": "Lakes",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "lancenters",
      "title": "LAN Centers",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "IT",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "landmarks",
      "title": "Landmarks & Historical Buildings",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "landscapearchitects",
      "title": "Landscape Architects",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "landscaping",
      "title": "Landscaping",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "landsurveying",
      "title": "Land Surveying",
      "parents": [
          "realestatesvcs"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "language_schools",
      "title": "Language Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "laos",
      "title": "Laos",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "laotian",
      "title": "Laotian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "laser_hair_removal",
      "title": "Laser Hair Removal",
      "parents": [
          "hairremoval"
      ]
  },
  {
      "alias": "laserlasikeyes",
      "title": "Laser Eye Surgery/Lasik",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "lasertag",
      "title": "Laser Tag",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IE",
          "BR"
      ]
  },
  {
      "alias": "latin",
      "title": "Latin American",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "laundromat",
      "title": "Laundromat",
      "parents": [
          "laundryservices"
      ]
  },
  {
      "alias": "laundryservices",
      "title": "Laundry Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "lawn_bowling",
      "title": "Lawn Bowling",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "NO",
          "NZ",
          "AU",
          "SE",
          "FI",
          "PT"
      ]
  },
  {
      "alias": "lawnservices",
      "title": "Lawn Services",
      "parents": [
          "landscaping"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "NL",
          "CA",
          "BR"
      ]
  },
  {
      "alias": "lawyers",
      "title": "Lawyers",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "leather",
      "title": "Leather Goods",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "lebanese",
      "title": "Lebanese",
      "parents": [
          "mideastern"
      ],
      "country_blacklist": [
          "AR",
          "JP",
          "HK"
      ]
  },
  {
      "alias": "legalservices",
      "title": "Legal Services",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "DE",
          "GB",
          "AT",
          "SE",
          "TW",
          "MX",
          "ES",
          "CH",
          "CL",
          "HK",
          "IE",
          "FI",
          "AR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "libraries",
      "title": "Libraries",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "liceservices",
      "title": "Lice Services",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "DE",
          "CZ",
          "MX",
          "CL",
          "HK",
          "FI",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "lifecoach",
      "title": "Life Coach",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "lifeinsurance",
      "title": "Life Insurance",
      "parents": [
          "insurance"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "TW",
          "CA",
          "FR",
          "CH",
          "HK",
          "FI",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "lighting",
      "title": "Lighting Fixtures & Equipment",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "lightingstores",
      "title": "Lighting Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "ligurian",
      "title": "Ligurian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "limos",
      "title": "Limos",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "linens",
      "title": "Linens",
      "parents": [
          "homeandgarden"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "IT",
          "AT",
          "CZ",
          "FR",
          "DK",
          "CH",
          "NO",
          "PT"
      ]
  },
  {
      "alias": "lingerie",
      "title": "Lingerie",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "livestocksupply",
      "title": "Livestock Feed & Supply",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "localfishstores",
      "title": "Local Fish Stores",
      "parents": [
          "petstore"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "PH",
          "DE",
          "IT",
          "NZ",
          "SE",
          "AT",
          "CA",
          "CZ",
          "NL",
          "PL",
          "JP",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "localflavor",
      "title": "Local Flavor",
      "parents": []
  },
  {
      "alias": "localservices",
      "title": "Local Services",
      "parents": []
  },
  {
      "alias": "locksmiths",
      "title": "Keys & Locksmiths",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "lounges",
      "title": "Lounges",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "luggage",
      "title": "Luggage",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "luggagestorage",
      "title": "Luggage Storage",
      "parents": [
          "travelservices"
      ]
  },
  {
      "alias": "lumbard",
      "title": "Lumbard",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "lyonnais",
      "title": "Lyonnais",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FR",
          "BE"
      ]
  },
  {
      "alias": "macarons",
      "title": "Macarons",
      "parents": [
          "gourmet"
      ],
      "country_blacklist": [
          "IT",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "machinerental",
      "title": "Machine & Tool Rental",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "machineshops",
      "title": "Machine Shops",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "madeira",
      "title": "Madeira",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "magicians",
      "title": "Magicians",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "FI",
          "SE",
          "SG",
          "TR"
      ]
  },
  {
      "alias": "mags",
      "title": "Newspapers & Magazines",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "mahjong",
      "title": "Mah Jong Halls",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "JP",
          "HK"
      ]
  },
  {
      "alias": "mailboxcenters",
      "title": "Mailbox Centers",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "makerspaces",
      "title": "Makerspaces",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "makeupartists",
      "title": "Makeup Artists",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "malaysian",
      "title": "Malaysian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "PT",
          "TR",
          "ES",
          "CZ"
      ]
  },
  {
      "alias": "mamak",
      "title": "Mamak",
      "parents": [
          "malaysian"
      ],
      "country_whitelist": [
          "AU",
          "MY"
      ]
  },
  {
      "alias": "marchingbands",
      "title": "Marching Bands",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "DE",
          "GB",
          "AT",
          "SE",
          "CH",
          "NO",
          "TR",
          "PT"
      ]
  },
  {
      "alias": "marinas",
      "title": "Marinas",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "MX",
          "FR",
          "DK",
          "CH",
          "CL",
          "NO",
          "IE",
          "SG",
          "BR",
          "AR",
          "DE",
          "IT",
          "NZ",
          "SE",
          "AT",
          "CA",
          "NL",
          "TR",
          "ES"
      ]
  },
  {
      "alias": "marketing",
      "title": "Marketing",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "markets",
      "title": "Fruits & Veggies",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "marketstalls",
      "title": "Market Stalls",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "DE",
          "GB",
          "IT",
          "AT",
          "CZ",
          "DK",
          "CH",
          "NO",
          "IE",
          "PL",
          "PT"
      ]
  },
  {
      "alias": "martialarts",
      "title": "Martial Arts",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "masonry_concrete",
      "title": "Masonry/Concrete",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "GB",
          "BE",
          "NL",
          "IE",
          "NZ",
          "SG",
          "BR"
      ]
  },
  {
      "alias": "massage",
      "title": "Massage",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "massage_schools",
      "title": "Massage Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "massage_therapy",
      "title": "Massage Therapy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "FR",
          "CH",
          "IE",
          "SG",
          "FI",
          "PH",
          "DE",
          "NZ",
          "AT",
          "SE",
          "TW",
          "CZ",
          "HK",
          "PL",
          "TR",
          "MY"
      ]
  },
  {
      "alias": "massmedia",
      "title": "Mass Media",
      "parents": []
  },
  {
      "alias": "matchmakers",
      "title": "Matchmakers",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AU",
          "CA",
          "MX",
          "FR",
          "DK",
          "CH",
          "CL",
          "NO",
          "PL",
          "AR",
          "JP",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "materialeelettrico",
      "title": "Materiale elettrico",
      "parents": [
          "homeandgarden"
      ],
      "country_whitelist": [
          "CL",
          "IT",
          "MX",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "maternity",
      "title": "Maternity Wear",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "mattresses",
      "title": "Mattresses",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "mauritius",
      "title": "Mauritius",
      "parents": [
          "french"
      ],
      "country_blacklist": [
          "DE",
          "NZ",
          "AU",
          "AT",
          "MX",
          "DK",
          "CH",
          "AR",
          "CL",
          "NO",
          "PL",
          "TR",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "meaderies",
      "title": "Meaderies",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "MX",
          "CH",
          "CL",
          "PL",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "meatballs",
      "title": "Meatballs",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NL",
          "FR",
          "TR",
          "BE"
      ]
  },
  {
      "alias": "meats",
      "title": "Meat Shops",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "medcenters",
      "title": "Medical Centers",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "media",
      "title": "Books, Mags, Music & Video",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "mediators",
      "title": "Mediators",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "BE",
          "IT",
          "NZ",
          "AU",
          "AT",
          "CA",
          "CH",
          "NL",
          "IE",
          "SG"
      ]
  },
  {
      "alias": "medicalfoot",
      "title": "Medical Foot Care",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "US",
          "MX",
          "CL",
          "FI",
          "BR",
          "AR",
          "PH",
          "IT",
          "AT",
          "CZ",
          "PL",
          "TR",
          "JP",
          "MY",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "medicallaw",
      "title": "Medical Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "medicalspa",
      "title": "Medical Spas",
      "parents": [
          "beautysvc",
          "health"
      ]
  },
  {
      "alias": "medicalsupplies",
      "title": "Medical Supplies",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "medicaltransportation",
      "title": "Medical Transportation",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "AU",
          "AT",
          "FR",
          "DK",
          "CH",
          "NL",
          "NO",
          "SG",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "meditationcenters",
      "title": "Meditation Centers",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "mediterranean",
      "title": "Mediterranean",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "memorycare",
      "title": "Memory Care",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "menscloth",
      "title": "Men's Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "menshair",
      "title": "Men's Hair Salons",
      "parents": [
          "hair"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "AU",
          "CZ",
          "MX",
          "DK",
          "CL",
          "NL",
          "NO",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "metaldetectorservices",
      "title": "Metal Detector Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "metalfabricators",
      "title": "Metal Fabricators",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "MX",
          "AR",
          "SE"
      ]
  },
  {
      "alias": "metrostations",
      "title": "Metro Stations",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "mexican",
      "title": "Mexican",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "mideastern",
      "title": "Middle Eastern",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "BR"
      ]
  },
  {
      "alias": "midwives",
      "title": "Midwives",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "militarysurplus",
      "title": "Military Surplus",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "milkbars",
      "title": "Milk Bars",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU",
          "PL"
      ]
  },
  {
      "alias": "milkshakebars",
      "title": "Milkshake Bars",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "GB"
      ]
  },
  {
      "alias": "minho",
      "title": "Minho",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "mini_golf",
      "title": "Mini Golf",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "mistingsystemservices",
      "title": "Misting System Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "mobile_home_repair",
      "title": "Mobile Home Repair",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "NL",
          "BE",
          "SE",
          "CA"
      ]
  },
  {
      "alias": "mobiledentrepair",
      "title": "Mobile Dent Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "mobilehomes",
      "title": "Mobile Home Dealers",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "mobileparks",
      "title": "Mobile Home Parks",
      "parents": [
          "realestate"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "mobilephonerepair",
      "title": "Mobile Phone Repair",
      "parents": [
          "itservices"
      ]
  },
  {
      "alias": "mobilephones",
      "title": "Mobile Phones",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "mobilityequipment",
      "title": "Mobility Equipment Sales & Services",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "modern_australian",
      "title": "Modern Australian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "modern_european",
      "title": "Modern European",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "mohels",
      "title": "Mohels",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "mongolian",
      "title": "Mongolian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI",
          "TR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "montessori",
      "title": "Montessori Schools",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "moroccan",
      "title": "Moroccan",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "mortgagebrokers",
      "title": "Mortgage Brokers",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "BR",
          "ES",
          "DK"
      ]
  },
  {
      "alias": "mortgagelenders",
      "title": "Mortgage Lenders",
      "parents": [
          "financialservices"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "FR",
          "TR",
          "CH"
      ]
  },
  {
      "alias": "mortuaryservices",
      "title": "Mortuary Services",
      "parents": [
          "funeralservices"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "mosques",
      "title": "Mosques",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "motodealers",
      "title": "Motorsport Vehicle Dealers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "SE",
          "TW",
          "ES"
      ]
  },
  {
      "alias": "motorcycle_rental",
      "title": "Motorcycle Rental",
      "parents": [
          "hotelstravel"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "NZ",
          "AU",
          "CZ",
          "MX",
          "FR",
          "NO",
          "SG",
          "FI",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "motorcycledealers",
      "title": "Motorcycle Dealers",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "motorcyclepartsandsupplies",
      "title": "Motorcycle Parts & Supplies",
      "parents": [
          "autopartssupplies"
      ]
  },
  {
      "alias": "motorcyclerepair",
      "title": "Motorcycle Repair",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "motorcyclinggear",
      "title": "Motorcycle Gear",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "IE",
          "NZ",
          "GB",
          "CA"
      ]
  },
  {
      "alias": "motorepairs",
      "title": "Motorsport Vehicle Repairs",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "SE",
          "TW",
          "ES"
      ]
  },
  {
      "alias": "mountainbiking",
      "title": "Mountain Biking",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "mountainhuts",
      "title": "Mountain Huts",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "NZ",
          "AT",
          "SE",
          "CZ",
          "FR",
          "CH",
          "CL",
          "NO",
          "PL",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "movers",
      "title": "Movers",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "movietheaters",
      "title": "Cinema",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "muaythai",
      "title": "Muay Thai",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "municipality",
      "title": "Municipality",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "museums",
      "title": "Museums",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "musicalinstrumentsandteachers",
      "title": "Musical Instruments & Teachers",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "musicians",
      "title": "Musicians",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "TR"
      ]
  },
  {
      "alias": "musicinstrumentservices",
      "title": "Musical Instrument Services",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "musicproduction",
      "title": "Music Production Services",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "musicvenues",
      "title": "Music Venues",
      "parents": [
          "nightlife",
          "arts"
      ]
  },
  {
      "alias": "musicvideo",
      "title": "Music & DVDs",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "mystics",
      "title": "Mystics",
      "parents": [
          "psychic_astrology"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "nailtechnicians",
      "title": "Nail Technicians",
      "parents": [
          "othersalons"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "FR",
          "TR",
          "CH",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "nannys",
      "title": "Nanny Services",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "FI",
          "SE"
      ]
  },
  {
      "alias": "napoletana",
      "title": "Napoletana",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR",
          "CZ"
      ]
  },
  {
      "alias": "nasilemak",
      "title": "Nasi Lemak",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "MY",
          "SG"
      ]
  },
  {
      "alias": "naturalgassuppliers",
      "title": "Natural Gas Suppliers",
      "parents": [
          "utilities"
      ]
  },
  {
      "alias": "naturopathic",
      "title": "Naturopathic/Holistic",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "nephrologists",
      "title": "Nephrologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "neurologist",
      "title": "Neurologist",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "neuropathologists",
      "title": "Neuropathologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "neurotologists",
      "title": "Neurotologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "newamerican",
      "title": "American (New)",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "NO",
          "IE",
          "SE",
          "DK"
      ]
  },
  {
      "alias": "newcanadian",
      "title": "Canadian (New)",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CA"
      ]
  },
  {
      "alias": "newmexican",
      "title": "New Mexican Cuisine",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "newzealand",
      "title": "New Zealand",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NZ"
      ]
  },
  {
      "alias": "nicaraguan",
      "title": "Nicaraguan",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AR",
          "CL"
      ]
  },
  {
      "alias": "nicois",
      "title": "Nicoise",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "nightfood",
      "title": "Night Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "NO",
          "SE",
          "PL",
          "TR",
          "DK"
      ]
  },
  {
      "alias": "nightlife",
      "title": "Nightlife",
      "parents": []
  },
  {
      "alias": "nikkei",
      "title": "Nikkei",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CL",
          "BR",
          "MX",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "nonprofit",
      "title": "Community Service/Non-Profit",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "noodles",
      "title": "Noodles",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CH",
          "FR",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "norcinerie",
      "title": "Norcinerie",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "northeasternbrazilian",
      "title": "Northeastern Brazilian",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "northernbrazilian",
      "title": "Northern Brazilian",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "northerngerman",
      "title": "Northern German",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "northernmexican",
      "title": "Northern Mexican",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "norwegian",
      "title": "Traditional Norwegian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FR",
          "NO"
      ]
  },
  {
      "alias": "notaries",
      "title": "Notaries",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "NO"
      ]
  },
  {
      "alias": "nudist",
      "title": "Nudist",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "CH",
          "NO",
          "IE",
          "FI",
          "BR",
          "DE",
          "NZ",
          "SE",
          "AT",
          "CA",
          "CZ",
          "NL",
          "PL",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "nursepractitioner",
      "title": "Nurse Practitioner",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "nursingschools",
      "title": "Nursing Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "nutritionists",
      "title": "Nutritionists",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "nyonya",
      "title": "Nyonya",
      "parents": [
          "malaysian"
      ],
      "country_whitelist": [
          "AU",
          "MY"
      ]
  },
  {
      "alias": "oaxacan",
      "title": "Oaxacan",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "obgyn",
      "title": "Obstetricians & Gynecologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "observatories",
      "title": "Observatories",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "occupationaltherapy",
      "title": "Occupational Therapy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "FR",
          "CH",
          "SG",
          "FI",
          "PH",
          "IT",
          "NZ",
          "AT",
          "SE",
          "TW",
          "CZ",
          "HK",
          "PL",
          "TR",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "oden",
      "title": "Oden",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "officecleaning",
      "title": "Office Cleaning",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "officeequipment",
      "title": "Office Equipment",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "officiants",
      "title": "Officiants",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "oilchange",
      "title": "Oil Change Stations",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT",
          "SE"
      ]
  },
  {
      "alias": "okinawan",
      "title": "Okinawan",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "okonomiyaki",
      "title": "Okonomiyaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "oliveoil",
      "title": "Olive Oil",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "AT",
          "FR",
          "ES"
      ]
  },
  {
      "alias": "oncologist",
      "title": "Oncologist",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "onigiri",
      "title": "Onigiri",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "opensandwiches",
      "title": "Open Sandwiches",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "NO",
          "TR",
          "DK"
      ]
  },
  {
      "alias": "opera",
      "title": "Opera & Ballet",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "opthamalogists",
      "title": "Ophthalmologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "opticians",
      "title": "Eyewear & Opticians",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "optometrists",
      "title": "Optometrists",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "oralsurgeons",
      "title": "Oral Surgeons",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "organdonorservices",
      "title": "Organ & Tissue Donor Services",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "organic_stores",
      "title": "Organic Stores",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "oriental",
      "title": "Oriental",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "PL",
          "FR",
          "CH",
          "PT"
      ]
  },
  {
      "alias": "orthodontists",
      "title": "Orthodontists",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "orthopedists",
      "title": "Orthopedists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "orthotics",
      "title": "Orthotics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "IT",
          "NZ",
          "AU",
          "CZ",
          "FR",
          "DK",
          "NO",
          "IE",
          "SG",
          "FI",
          "BR",
          "ES"
      ]
  },
  {
      "alias": "osteopathicphysicians",
      "title": "Osteopathic Physicians",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "osteopaths",
      "title": "Osteopaths",
      "parents": [
          "medcenters"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "othersalons",
      "title": "Nail Salons",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "otologists",
      "title": "Otologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "CH",
          "FR",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "ottomancuisine",
      "title": "Ottoman Cuisine",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "outdoorfurniture",
      "title": "Outdoor Furniture Stores",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "outdoorgear",
      "title": "Outdoor Gear",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "outdoormovies",
      "title": "Outdoor Movies",
      "parents": [
          "movietheaters"
      ],
      "country_blacklist": [
          "PL"
      ]
  },
  {
      "alias": "outdoorpowerequipmentservices",
      "title": "Outdoor Power Equipment Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "CA",
          "DK",
          "CH",
          "NO",
          "PL",
          "BR",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "outlet_stores",
      "title": "Outlet Stores",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "oxygenbars",
      "title": "Oxygen Bars",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "oyakodon",
      "title": "Oyakodon",
      "parents": [
          "donburi"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "pachinko",
      "title": "Pachinko",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "packingservices",
      "title": "Packing Services",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "TW",
          "CA",
          "CZ",
          "FR",
          "HK",
          "PL",
          "SG",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "packingsupplies",
      "title": "Packing Supplies",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "BR",
          "DE",
          "NZ",
          "AT",
          "CA",
          "CZ",
          "NL",
          "JP",
          "PT"
      ]
  },
  {
      "alias": "paddleboarding",
      "title": "Paddleboarding",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IT",
          "SE",
          "TW",
          "HK",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "painmanagement",
      "title": "Pain Management",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "paintandsip",
      "title": "Paint & Sip",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "US",
          "HK"
      ]
  },
  {
      "alias": "paintball",
      "title": "Paintball",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "painters",
      "title": "Painters",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "paintstores",
      "title": "Paint Stores",
      "parents": [
          "homeandgarden"
      ],
      "country_blacklist": [
          "HK",
          "TW",
          "FI",
          "TR",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "paintyourownpottery",
      "title": "Paint-Your-Own Pottery",
      "parents": [
          "artsandcrafts"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "TW",
          "CA",
          "HK",
          "SG",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "pakistani",
      "title": "Pakistani",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "palatine",
      "title": "Palatine",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "panasian",
      "title": "Pan Asian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "pancakes",
      "title": "Pancakes",
      "parents": [
          "breakfast_brunch"
      ]
  },
  {
      "alias": "panzerotti",
      "title": "Panzerotti",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "paragliding",
      "title": "Paragliding",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "parasailing",
      "title": "Parasailing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "parentingclasses",
      "title": "Parenting Classes",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "parking",
      "title": "Parking",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "parklets",
      "title": "Parklets",
      "parents": [
          "localflavor"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "parks",
      "title": "Parks",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "parma",
      "title": "Parma",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "partybikerentals",
      "title": "Party Bike Rentals",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "NL",
          "IE",
          "ES"
      ]
  },
  {
      "alias": "partybusrentals",
      "title": "Party Bus Rentals",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "IT",
          "TW",
          "CA",
          "CZ",
          "MX",
          "ES",
          "FR",
          "HK",
          "IE",
          "PL",
          "JP",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "partycharacters",
      "title": "Party Characters",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "partyequipmentrentals",
      "title": "Party Equipment Rentals",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "FI",
          "TW",
          "HK"
      ]
  },
  {
      "alias": "partysupplies",
      "title": "Party Supplies",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "passportvisaservices",
      "title": "Passport & Visa Services",
      "parents": [
          "travelservices"
      ]
  },
  {
      "alias": "pastashops",
      "title": "Pasta Shops",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "IT",
          "NZ",
          "AU",
          "CZ",
          "DK",
          "CL",
          "NL",
          "NO",
          "IE",
          "SG",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "patentlaw",
      "title": "Patent Law",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "pathologists",
      "title": "Pathologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "patiocoverings",
      "title": "Patio Coverings",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "NL",
          "IT",
          "CA",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "pawn",
      "title": "Pawn Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "BR",
          "TR"
      ]
  },
  {
      "alias": "paydayloans",
      "title": "Check Cashing/Pay-day Loans",
      "parents": [
          "financialservices"
      ],
      "country_blacklist": [
          "DE",
          "IT",
          "NZ",
          "AT",
          "CZ",
          "DK",
          "CH",
          "ES"
      ]
  },
  {
      "alias": "payroll",
      "title": "Payroll Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "CA",
          "CZ",
          "NL",
          "IE",
          "SG",
          "TR"
      ]
  },
  {
      "alias": "pediatric_dentists",
      "title": "Pediatric Dentists",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "pediatricians",
      "title": "Pediatricians",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "pedicabs",
      "title": "Pedicabs",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "SE",
          "DK",
          "CH",
          "NO",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "pekinese",
      "title": "Pekinese",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "HK",
          "IT",
          "SG",
          "TW",
          "FR",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "pensions",
      "title": "Pensions",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "SE",
          "CZ",
          "DK",
          "NO",
          "BR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "perfume",
      "title": "Perfume",
      "parents": [
          "shopping",
          "beautysvc"
      ],
      "country_blacklist": [
          "SG",
          "PL",
          "CA",
          "FI",
          "TR"
      ]
  },
  {
      "alias": "periodontists",
      "title": "Periodontists",
      "parents": [
          "dentists"
      ]
  },
  {
      "alias": "permanentmakeup",
      "title": "Permanent Makeup",
      "parents": [
          "beautysvc"
      ],
      "country_blacklist": [
          "NZ",
          "FI",
          "SG"
      ]
  },
  {
      "alias": "persian",
      "title": "Persian/Iranian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "personal_injury",
      "title": "Personal Injury Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "personal_shopping",
      "title": "Personal Shopping",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CL",
          "BR",
          "CZ",
          "MX",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "personalassistants",
      "title": "Personal Assistants",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "PT",
          "CZ"
      ]
  },
  {
      "alias": "personalcare",
      "title": "Personal Care Services",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "AU",
          "CZ",
          "FR",
          "DK",
          "NL",
          "NO",
          "PL",
          "FI",
          "BR"
      ]
  },
  {
      "alias": "personalchefs",
      "title": "Personal Chefs",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "peruvian",
      "title": "Peruvian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "SG",
          "PT"
      ]
  },
  {
      "alias": "pest_control",
      "title": "Pest Control",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "pet_sitting",
      "title": "Pet Sitting",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "pet_training",
      "title": "Pet Training",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "petadoption",
      "title": "Pet Adoption",
      "parents": [
          "pets"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "petboarding",
      "title": "Pet Boarding",
      "parents": [
          "pet_sitting"
      ]
  },
  {
      "alias": "petbreeders",
      "title": "Pet Breeders",
      "parents": [
          "petservices"
      ],
      "country_blacklist": [
          "NZ",
          "TW",
          "MX",
          "AR",
          "CL",
          "HK",
          "IE",
          "SG",
          "FI",
          "TR",
          "BR",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "petcremation",
      "title": "Pet Cremation Services",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "pethospice",
      "title": "Pet Hospice",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "petinsurance",
      "title": "Pet Insurance",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "petphotography",
      "title": "Pet Photography",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "pets",
      "title": "Pets",
      "parents": []
  },
  {
      "alias": "petservices",
      "title": "Pet Services",
      "parents": [
          "pets"
      ]
  },
  {
      "alias": "petstore",
      "title": "Pet Stores",
      "parents": [
          "pets"
      ]
  },
  {
      "alias": "pettingzoos",
      "title": "Petting Zoos",
      "parents": [
          "zoos"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "BE",
          "IT",
          "AT",
          "DK",
          "CH",
          "NL",
          "NO",
          "ES"
      ]
  },
  {
      "alias": "pettransport",
      "title": "Pet Transportation",
      "parents": [
          "petservices"
      ],
      "country_whitelist": [
          "US",
          "SE"
      ]
  },
  {
      "alias": "petwasteremoval",
      "title": "Pet Waste Removal",
      "parents": [
          "petservices"
      ]
  },
  {
      "alias": "pfcomercial",
      "title": "PF/Comercial",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "pharmacy",
      "title": "Pharmacy",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "phlebologists",
      "title": "Phlebologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "photoboothrentals",
      "title": "Photo Booth Rentals",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "FI",
          "JP",
          "HK"
      ]
  },
  {
      "alias": "photoclasses",
      "title": "Photography Classes",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "photographers",
      "title": "Photographers",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "photographystores",
      "title": "Photography Stores & Services",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "physicaltherapy",
      "title": "Physical Therapy",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "physicians",
      "title": "Doctors",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "piadina",
      "title": "Piadina",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "IT",
          "US"
      ]
  },
  {
      "alias": "pianobars",
      "title": "Piano Bars",
      "parents": [
          "nightlife"
      ],
      "country_blacklist": [
          "NZ",
          "AU",
          "AT",
          "CH",
          "IE",
          "PL",
          "SG",
          "FI",
          "BR",
          "ES"
      ]
  },
  {
      "alias": "pianoservices",
      "title": "Piano Services",
      "parents": [
          "musicinstrumentservices"
      ]
  },
  {
      "alias": "pianostores",
      "title": "Piano Stores",
      "parents": [
          "musicinstrumentservices"
      ]
  },
  {
      "alias": "pickleball",
      "title": "Pickleball",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "DE",
          "AT",
          "PL",
          "CH"
      ]
  },
  {
      "alias": "pickyourown",
      "title": "Pick Your Own Farms",
      "parents": [
          "farms"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "CZ",
          "FR",
          "DK",
          "CH",
          "NO",
          "JP"
      ]
  },
  {
      "alias": "piemonte",
      "title": "Piemonte",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "piercing",
      "title": "Piercing",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "pierogis",
      "title": "Pierogis",
      "parents": [
          "polish"
      ],
      "country_whitelist": [
          "PL"
      ]
  },
  {
      "alias": "pilates",
      "title": "Pilates",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "pita",
      "title": "Pita",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "pizza",
      "title": "Pizza",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "placentaencapsulation",
      "title": "Placenta Encapsulations",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "PL",
          "CZ",
          "FR",
          "TR",
          "CH"
      ]
  },
  {
      "alias": "planetarium",
      "title": "Planetarium",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "plasticsurgeons",
      "title": "Plastic Surgeons",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "MX",
          "AR",
          "CL",
          "ES"
      ]
  },
  {
      "alias": "playgrounds",
      "title": "Playgrounds",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "playsets",
      "title": "Playsets",
      "parents": [
          "homeandgarden"
      ]
  },
  {
      "alias": "plumbing",
      "title": "Plumbing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "plus_size_fashion",
      "title": "Plus Size Fashion",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "GB",
          "CA",
          "MX",
          "CL",
          "HK",
          "IE",
          "PL",
          "SG",
          "TR",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "podiatrists",
      "title": "Podiatrists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "poke",
      "title": "Poke",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          false,
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "CH",
          "IE",
          "SG",
          "BR",
          "PH",
          "DE",
          "NZ",
          "AT",
          "SE",
          "CA",
          "NL",
          "PL",
          "MY",
          "PT"
      ]
  },
  {
      "alias": "poledancingclasses",
      "title": "Pole Dancing Classes",
      "parents": [
          "specialtyschools"
      ],
      "country_blacklist": [
          "GB",
          "BE",
          "AT",
          "CA",
          "MX",
          "CH",
          "CL",
          "IE",
          "PL",
          "TR",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "policedepartments",
      "title": "Police Departments",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "polish",
      "title": "Polish",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI",
          "SG"
      ]
  },
  {
      "alias": "polynesian",
      "title": "Polynesian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "poolbilliards",
      "title": "Pool & Billiards",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "SE",
          "CZ",
          "MX",
          "CH",
          "CL",
          "NO",
          "PL",
          "FI",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "poolcleaners",
      "title": "Pool Cleaners",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "NO",
          "DK"
      ]
  },
  {
      "alias": "poolhalls",
      "title": "Pool Halls",
      "parents": [
          "nightlife"
      ]
  },
  {
      "alias": "poolservice",
      "title": "Pool & Hot Tub Service",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "popcorn",
      "title": "Popcorn Shops",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "US",
          "JP",
          "GB"
      ]
  },
  {
      "alias": "popuprestaurants",
      "title": "Pop-Up Restaurants",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "NO",
          "IE",
          "SG",
          "PH",
          "DE",
          "NZ",
          "SE",
          "TW",
          "CA",
          "NL",
          "HK",
          "MY"
      ]
  },
  {
      "alias": "popupshops",
      "title": "Pop-up Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "PT"
      ]
  },
  {
      "alias": "portabletoiletservices",
      "title": "Portable Toilet Services",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "TW",
          "CZ",
          "MX",
          "FR",
          "CL",
          "HK",
          "FI",
          "AR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "portuguese",
      "title": "Portuguese",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "postoffices",
      "title": "Post Offices",
      "parents": [
          "publicservicesgovt"
      ]
  },
  {
      "alias": "postpartumcare",
      "title": "Postpartum Care",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "HK",
          "PL",
          "TW",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "potatoes",
      "title": "Potatoes",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "AU",
          "AT",
          "DE"
      ]
  },
  {
      "alias": "poutineries",
      "title": "Poutineries",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "powdercoating",
      "title": "Powder Coating",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "prenatal",
      "title": "Prenatal/Perinatal Care",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "DE",
          "GB",
          "AT",
          "TW",
          "CA",
          "CH",
          "HK",
          "IE",
          "PL",
          "SG",
          "TR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "preschools",
      "title": "Preschools",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "DK"
      ]
  },
  {
      "alias": "pressurewashers",
      "title": "Pressure Washers",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "pretzels",
      "title": "Pretzels",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CH",
          "US",
          "DE",
          "PT"
      ]
  },
  {
      "alias": "preventivemedicine",
      "title": "Preventive Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "printmedia",
      "title": "Print Media",
      "parents": [
          "massmedia"
      ]
  },
  {
      "alias": "privateinvestigation",
      "title": "Private Investigation",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "privatejetcharter",
      "title": "Private Jet Charter",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "privateschools",
      "title": "Private Schools",
      "parents": [
          "education"
      ],
      "country_whitelist": [
          "US",
          "NZ",
          "AU",
          "SE",
          "CZ",
          "MX",
          "DK",
          "AR",
          "CL",
          "NO",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "privatetutors",
      "title": "Private Tutors",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "processservers",
      "title": "Process Servers",
      "parents": [
          "legalservices"
      ],
      "country_whitelist": [
          "US",
          "FR",
          "BE"
      ]
  },
  {
      "alias": "proctologist",
      "title": "Proctologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "productdesign",
      "title": "Product Design",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "CA",
          "FR",
          "DK",
          "NL",
          "NO",
          "IE",
          "SG",
          "PH"
      ]
  },
  {
      "alias": "professional",
      "title": "Professional Services",
      "parents": []
  },
  {
      "alias": "propane",
      "title": "Propane",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "MX",
          "AR",
          "NZ",
          "CZ"
      ]
  },
  {
      "alias": "propertymgmt",
      "title": "Property Management",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "props",
      "title": "Props",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "US",
          "BE"
      ]
  },
  {
      "alias": "prosthetics",
      "title": "Prosthetics",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "AU",
          "ES"
      ]
  },
  {
      "alias": "prosthodontists",
      "title": "Prosthodontists",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "ES"
      ]
  },
  {
      "alias": "provencal",
      "title": "Provencal",
      "parents": [
          "french"
      ],
      "country_whitelist": [
          "FR"
      ]
  },
  {
      "alias": "psychiatrists",
      "title": "Psychiatrists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "psychic_astrology",
      "title": "Supernatural Readings",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "psychicmediums",
      "title": "Psychic Mediums",
      "parents": [
          "psychic_astrology"
      ],
      "country_blacklist": [
          "PL"
      ]
  },
  {
      "alias": "psychics",
      "title": "Psychics",
      "parents": [
          "psychic_astrology"
      ]
  },
  {
      "alias": "psychoanalysts",
      "title": "Psychoanalysts",
      "parents": [
          "c_and_mh"
      ],
      "country_whitelist": [
          "BE",
          "CZ",
          "MX",
          "FR",
          "AR",
          "NL",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "psychologists",
      "title": "Psychologists",
      "parents": [
          "c_and_mh"
      ],
      "country_blacklist": [
          "GB",
          "HK",
          "IE",
          "PL",
          "SG",
          "JP"
      ]
  },
  {
      "alias": "psychotechnicaltests",
      "title": "Psychotechnical Tests",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "BR",
          "ES"
      ]
  },
  {
      "alias": "psychotherapists",
      "title": "Psychotherapists",
      "parents": [
          "c_and_mh"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CZ",
          "FR",
          "DK",
          "CH",
          "NO",
          "SG",
          "FI",
          "BR"
      ]
  },
  {
      "alias": "pubfood",
      "title": "Pub Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "AU"
      ]
  },
  {
      "alias": "publicadjusters",
      "title": "Public Adjusters",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "publicart",
      "title": "Public Art",
      "parents": [
          "localflavor"
      ]
  },
  {
      "alias": "publicmarkets",
      "title": "Public Markets",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "publicplazas",
      "title": "Public Plazas",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "CA",
          "NL",
          "IE"
      ]
  },
  {
      "alias": "publicrelations",
      "title": "Public Relations",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "publicservicesgovt",
      "title": "Public Services & Government",
      "parents": []
  },
  {
      "alias": "publictransport",
      "title": "Public Transportation",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "pubs",
      "title": "Pubs",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "pueblan",
      "title": "Pueblan",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "puertorican",
      "title": "Puerto Rican",
      "parents": [
          "caribbean"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "pulmonologist",
      "title": "Pulmonologist",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "pulquerias",
      "title": "Pulquerias",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "pumpkinpatches",
      "title": "Pumpkin Patches",
      "parents": [
          "homeandgarden"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "qigong",
      "title": "Qi Gong",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "races",
      "title": "Races & Competitions",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "IT",
          "TW",
          "CA",
          "MX",
          "ES",
          "CL",
          "HK",
          "IE",
          "FI",
          "TR",
          "AR",
          "JP",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "racetracks",
      "title": "Race Tracks",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "DE",
          "IE",
          "AT",
          "SG",
          "CH",
          "BR"
      ]
  },
  {
      "alias": "racingexperience",
      "title": "Racing Experience",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "FR",
          "SE"
      ]
  },
  {
      "alias": "radiologists",
      "title": "Radiologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "radiostations",
      "title": "Radio Stations",
      "parents": [
          "massmedia"
      ]
  },
  {
      "alias": "rafting",
      "title": "Rafting/Kayaking",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "ramen",
      "title": "Ramen",
      "parents": [
          "japanese"
      ]
  },
  {
      "alias": "ranches",
      "title": "Ranches",
      "parents": [
          "farms"
      ],
      "country_whitelist": [
          "US",
          "CL",
          "CZ",
          "MX",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "raw_food",
      "title": "Live/Raw Food",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "realestate",
      "title": "Real Estate",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "realestateagents",
      "title": "Real Estate Agents",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "realestatelawyers",
      "title": "Real Estate Law",
      "parents": [
          "lawyers"
      ]
  },
  {
      "alias": "realestatesvcs",
      "title": "Real Estate Services",
      "parents": [
          "realestate"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "record_labels",
      "title": "Record Labels",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "DE",
          "AT",
          "CZ",
          "DK",
          "CH",
          "NO",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "recording_studios",
      "title": "Recording & Rehearsal Studios",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "recreation",
      "title": "Recreation Centers",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "recyclingcenter",
      "title": "Recycling Center",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "refinishing",
      "title": "Refinishing Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "reflexology",
      "title": "Reflexology",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "FI",
          "SE",
          "PL",
          "TR"
      ]
  },
  {
      "alias": "registrationservices",
      "title": "Registration Services",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "CL",
          "NO",
          "MX",
          "DK",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "registry_office",
      "title": "Registry Office",
      "parents": [
          "publicservicesgovt"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "IT",
          "AT",
          "CZ",
          "DK",
          "CH",
          "NL",
          "NO",
          "FI",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "rehabilitation_center",
      "title": "Rehabilitation Center",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "AT",
          "TW",
          "FR",
          "CH",
          "HK",
          "SG",
          "TR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "reiki",
      "title": "Reiki",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "CL",
          "HK",
          "MX",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "religiousitems",
      "title": "Religious Items",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "religiousorgs",
      "title": "Religious Organizations",
      "parents": []
  },
  {
      "alias": "religiousschools",
      "title": "Religious Schools",
      "parents": [
          "education"
      ],
      "country_whitelist": [
          "US",
          "NZ",
          "AU",
          "CZ",
          "MX",
          "ES",
          "DK",
          "AR",
          "CL",
          "NO",
          "BR",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "rentfurniture",
      "title": "Furniture Rental",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "AU",
          "CA",
          "MX",
          "CL",
          "NL",
          "AR",
          "JP",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "reproductivehealthservices",
      "title": "Reproductive Health Services",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "reptileshops",
      "title": "Reptile Shops",
      "parents": [
          "petstore"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "SE",
          "DK",
          "NL",
          "NO",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "residences",
      "title": "Residences",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "AT",
          "CZ",
          "ES",
          "CH",
          "SG",
          "PL",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "resorts",
      "title": "Resorts",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "restaurants",
      "title": "Restaurants",
      "parents": []
  },
  {
      "alias": "reststops",
      "title": "Rest Stops",
      "parents": [
          "hotels"
      ]
  },
  {
      "alias": "retinaspecialists",
      "title": "Retina Specialists",
      "parents": [
          "opthamalogists"
      ],
      "country_blacklist": [
          "CH",
          "FR",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "retirement_homes",
      "title": "Retirement Homes",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "reunion",
      "title": "Reunion",
      "parents": [
          "french"
      ],
      "country_blacklist": [
          "DE",
          "NZ",
          "AU",
          "AT",
          "MX",
          "DK",
          "CH",
          "AR",
          "CL",
          "NO",
          "PL",
          "TR",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "reupholstery",
      "title": "Furniture Reupholstery",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "rhematologists",
      "title": "Rheumatologists",
      "parents": [
          "physicians"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "AU",
          "TW",
          "CA",
          "HK",
          "IE",
          "PL",
          "SG",
          "FI",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "rhinelandian",
      "title": "Rhinelandian",
      "parents": [
          "german"
      ],
      "country_whitelist": [
          "DE"
      ]
  },
  {
      "alias": "ribatejo",
      "title": "Ribatejo",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "riceshop",
      "title": "Rice",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "JP",
          "TR"
      ]
  },
  {
      "alias": "roadsideassist",
      "title": "Roadside Assistance",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "SE",
          "TW",
          "FR",
          "HK",
          "IE",
          "SG",
          "FI",
          "TR",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "robatayaki",
      "title": "Robatayaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW",
          "HK"
      ]
  },
  {
      "alias": "rock_climbing",
      "title": "Rock Climbing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "rodeo",
      "title": "Rodeo",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "rodizios",
      "title": "Rodizios",
      "parents": [
          "brazilian"
      ],
      "country_whitelist": [
          "AR",
          "PT",
          "BR"
      ]
  },
  {
      "alias": "roman",
      "title": "Roman",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "JP",
          "FR"
      ]
  },
  {
      "alias": "romanian",
      "title": "Romanian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "AT",
          "CZ",
          "FR",
          "CH",
          "PL",
          "ES"
      ]
  },
  {
      "alias": "roofing",
      "title": "Roofing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "roofinspectors",
      "title": "Roof Inspectors",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "rotisserie_chicken",
      "title": "Rotisserie Chicken",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BE",
          "IT",
          "NZ",
          "AU",
          "MX",
          "FR",
          "AR",
          "CL",
          "NL",
          "PL",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "rugs",
      "title": "Rugs",
      "parents": [
          "homeandgarden"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "CZ",
          "CH",
          "HK",
          "IE",
          "PL",
          "JP"
      ]
  },
  {
      "alias": "russian",
      "title": "Russian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "rv_dealers",
      "title": "RV Dealers",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "AU",
          "TW",
          "MX",
          "CL",
          "HK",
          "IE",
          "SG",
          "TR",
          "AR",
          "JP",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "rvparks",
      "title": "RV Parks",
      "parents": [
          "hotelstravel"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "MX",
          "FR",
          "DK",
          "CH",
          "CL",
          "NO",
          "IE",
          "SG",
          "FI",
          "AR",
          "DE",
          "IT",
          "NZ",
          "AT",
          "SE",
          "CA",
          "CZ",
          "NL",
          "PL",
          "TR",
          "ES"
      ]
  },
  {
      "alias": "rvrental",
      "title": "RV Rental",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "rvrepair",
      "title": "RV Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "BR",
          "PH",
          "DE",
          "NZ",
          "AT",
          "CA",
          "NL",
          "PL",
          "MY",
          "PT"
      ]
  },
  {
      "alias": "ryokan",
      "title": "Ryokan",
      "parents": [
          "hotels"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "safestores",
      "title": "Safe Stores",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "safetyequipment",
      "title": "Safety Equipment",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "sailing",
      "title": "Sailing",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "sakebars",
      "title": "Sake Bars",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "salad",
      "title": "Salad",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "salumerie",
      "title": "Salumerie",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CL",
          "IT",
          "MX",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "salvadoran",
      "title": "Salvadoran",
      "parents": [
          "latin"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "sambaschools",
      "title": "Samba Schools",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "IT",
          "BR",
          "SE",
          "FI"
      ]
  },
  {
      "alias": "sandblasting",
      "title": "Sandblasting",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "AT",
          "CH",
          "NL",
          "BR",
          "ES"
      ]
  },
  {
      "alias": "sandwiches",
      "title": "Sandwiches",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "sardinian",
      "title": "Sardinian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "FR"
      ]
  },
  {
      "alias": "saunainstallation",
      "title": "Sauna Installation & Repair",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "AU",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "FI",
          "DE",
          "IT",
          "NZ",
          "AT",
          "SE",
          "CA",
          "CZ",
          "PL"
      ]
  },
  {
      "alias": "saunas",
      "title": "Saunas",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "NZ",
          "AU",
          "CA",
          "ES",
          "PL",
          "SG",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "scandinavian",
      "title": "Scandinavian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "PT"
      ]
  },
  {
      "alias": "scandinaviandesign",
      "title": "Scandinavian Design",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "FI",
          "SE",
          "NO",
          "DK"
      ]
  },
  {
      "alias": "scavengerhunts",
      "title": "Scavenger Hunts",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "schnitzel",
      "title": "Schnitzel",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT",
          "PL"
      ]
  },
  {
      "alias": "scooterrentals",
      "title": "Scooter Rentals",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "scootertours",
      "title": "Scooter Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "scottish",
      "title": "Scottish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "IE",
          "AT",
          "CA",
          "CH"
      ]
  },
  {
      "alias": "screen_printing_tshirt_printing",
      "title": "Screen Printing/T-Shirt Printing",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "GB",
          "IT",
          "NZ",
          "TW",
          "CA",
          "CZ",
          "HK",
          "IE",
          "PL",
          "SG",
          "FI",
          "TR"
      ]
  },
  {
      "alias": "screenprinting",
      "title": "Screen Printing",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "scuba",
      "title": "Scuba Diving",
      "parents": [
          "diving"
      ]
  },
  {
      "alias": "seafood",
      "title": "Seafood",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "seafoodmarkets",
      "title": "Seafood Markets",
      "parents": [
          "gourmet"
      ]
  },
  {
      "alias": "seasonaldecorservices",
      "title": "Holiday Decorating Services",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "DE",
          "BE",
          "IT",
          "AT",
          "FR",
          "DK",
          "CH",
          "NL",
          "NO",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "security",
      "title": "Security Services",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "NZ"
      ]
  },
  {
      "alias": "securitysystems",
      "title": "Security Systems",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "selfdefenseclasses",
      "title": "Self-defense Classes",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "selfstorage",
      "title": "Self Storage",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "senegalese",
      "title": "Senegalese",
      "parents": [
          "african"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "IT",
          "CA",
          "FR"
      ]
  },
  {
      "alias": "seniorcenters",
      "title": "Senior Centers",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "septicservices",
      "title": "Septic Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "CA",
          "DK",
          "NL",
          "NO",
          "PL",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "serbocroatian",
      "title": "Serbo Croatian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "IT",
          "AT",
          "SE",
          "CZ",
          "FR",
          "CH",
          "CL",
          "PL",
          "AR"
      ]
  },
  {
      "alias": "service_stations",
      "title": "Service Stations",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "SE",
          "TW",
          "CZ",
          "FR",
          "DK",
          "HK",
          "NO",
          "FI",
          "TR",
          "BR",
          "JP",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "servicestations",
      "title": "Gas Stations",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "sessionphotography",
      "title": "Session Photography",
      "parents": [
          "photographers"
      ]
  },
  {
      "alias": "sewingalterations",
      "title": "Sewing & Alterations",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "sextherapists",
      "title": "Sex Therapists",
      "parents": [
          "c_and_mh"
      ]
  },
  {
      "alias": "shanghainese",
      "title": "Shanghainese",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "IT",
          "AU",
          "SE",
          "TW",
          "FR",
          "HK",
          "SG",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "sharedofficespaces",
      "title": "Shared Office Spaces",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "sharedtaxis",
      "title": "Shared Taxis",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "NO",
          "SE",
          "TR",
          "DK",
          "BR",
          "PH"
      ]
  },
  {
      "alias": "shavedice",
      "title": "Shaved Ice",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "TW",
          "CZ",
          "MX",
          "CL",
          "SG",
          "AR",
          "JP"
      ]
  },
  {
      "alias": "shavedsnow",
      "title": "Shaved Snow",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "HK",
          "TW",
          "SG",
          "CA",
          "MY"
      ]
  },
  {
      "alias": "shedsandoutdoorstorage",
      "title": "Sheds & Outdoor Storage",
      "parents": [
          "homeandgarden"
      ],
      "country_blacklist": [
          "SE",
          "TW",
          "CZ",
          "FR",
          "DK",
          "HK",
          "NO",
          "FI",
          "TR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "shipping_centers",
      "title": "Shipping Centers",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "SE",
          "NO"
      ]
  },
  {
      "alias": "shoerepair",
      "title": "Shoe Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "shoes",
      "title": "Shoe Stores",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "shoeshine",
      "title": "Shoe Shine",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "NL",
          "BE"
      ]
  },
  {
      "alias": "shopping",
      "title": "Shopping",
      "parents": []
  },
  {
      "alias": "shoppingcenters",
      "title": "Shopping Centers",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "shoppingpassages",
      "title": "Shopping Passages",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "US"
      ]
  },
  {
      "alias": "shredding",
      "title": "Shredding Services",
      "parents": [
          "professional"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "AT",
          "CA",
          "CZ",
          "CH",
          "NL",
          "IE",
          "SG"
      ]
  },
  {
      "alias": "shrines",
      "title": "Shrines",
      "parents": [
          "religiousorgs"
      ],
      "country_whitelist": [
          "CL",
          "MX",
          "AR",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "shutters",
      "title": "Shutters",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "sicilian",
      "title": "Sicilian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "US",
          "IT",
          "PL",
          "CZ",
          "FR"
      ]
  },
  {
      "alias": "signature_cuisine",
      "title": "Signature Cuisine",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE",
          "MX",
          "DK",
          "CL",
          "NO",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "signmaking",
      "title": "Signmaking",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "sikhtemples",
      "title": "Sikh Temples",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "silentdisco",
      "title": "Silent Disco",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "singaporean",
      "title": "Singaporean",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ",
          "FI",
          "TR",
          "DK",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "skate_parks",
      "title": "Skate Parks",
      "parents": [
          "parks"
      ]
  },
  {
      "alias": "skateshops",
      "title": "Skate Shops",
      "parents": [
          "sportgoods"
      ]
  },
  {
      "alias": "skatingrinks",
      "title": "Skating Rinks",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "skiing",
      "title": "Skiing",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "IT",
          "AU",
          "TW",
          "MX",
          "FR",
          "HK",
          "IE",
          "PL",
          "SG",
          "TR",
          "BR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "skillednursing",
      "title": "Skilled Nursing",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "skincare",
      "title": "Skin Care",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "skiresorts",
      "title": "Ski Resorts",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "MX",
          "BR",
          "SG",
          "DK"
      ]
  },
  {
      "alias": "skischools",
      "title": "Ski Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "skishops",
      "title": "Ski & Snowboard Shops",
      "parents": [
          "sportgoods"
      ],
      "country_blacklist": [
          "TW",
          "MX",
          "DK",
          "HK",
          "SG",
          "TR",
          "BR",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "skydiving",
      "title": "Skydiving",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "sledding",
      "title": "Sledding",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "NZ",
          "AT",
          "CA",
          "CZ",
          "CH",
          "NO",
          "FI",
          "TR",
          "PT"
      ]
  },
  {
      "alias": "sleepspecialists",
      "title": "Sleep Specialists",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "sleepwear",
      "title": "Sleepwear",
      "parents": [
          "fashion"
      ],
      "country_whitelist": [
          "AU",
          "PT"
      ]
  },
  {
      "alias": "slovakian",
      "title": "Slovakian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "IT",
          "AU",
          "CA",
          "CZ",
          "FR",
          "IE",
          "PL"
      ]
  },
  {
      "alias": "smog_check_stations",
      "title": "Smog Check Stations",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "FI",
          "SE",
          "NO",
          "DK"
      ]
  },
  {
      "alias": "smokehouse",
      "title": "Smokehouse",
      "parents": [
          "food"
      ],
      "country_blacklist": [
          "CL",
          "IT",
          "PL",
          "MX",
          "FR",
          "TR",
          "AR"
      ]
  },
  {
      "alias": "smokingareas",
      "title": "Smoking Areas",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "snorkeling",
      "title": "Snorkeling",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "snowremoval",
      "title": "Snow Removal",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "MX",
          "BR",
          "NZ",
          "HK"
      ]
  },
  {
      "alias": "snuggleservices",
      "title": "Snuggle Services",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "JP"
      ]
  },
  {
      "alias": "soba",
      "title": "Soba",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "social_clubs",
      "title": "Social Clubs",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "socialsecuritylaw",
      "title": "Social Security Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "PL",
          "CZ"
      ]
  },
  {
      "alias": "softwaredevelopment",
      "title": "Software Development",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "solarinstallation",
      "title": "Solar Installation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "solarpanelcleaning",
      "title": "Solar Panel Cleaning",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "somali",
      "title": "Somali",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "AT",
          "PL",
          "CH"
      ]
  },
  {
      "alias": "sommelierservices",
      "title": "Sommelier Services",
      "parents": [
          "eventservices"
      ],
      "country_blacklist": [
          "FR"
      ]
  },
  {
      "alias": "sophrologists",
      "title": "Sophrologists",
      "parents": [
          "c_and_mh"
      ],
      "country_whitelist": [
          "PL",
          "FR",
          "BE",
          "CZ"
      ]
  },
  {
      "alias": "soulfood",
      "title": "Soul Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "SE",
          "CA",
          "NL",
          "NO",
          "IE",
          "PL",
          "ES"
      ]
  },
  {
      "alias": "soup",
      "title": "Soup",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "southafrican",
      "title": "South African",
      "parents": [
          "african"
      ],
      "country_whitelist": [
          "US",
          "BE",
          "IT",
          "AU",
          "CA",
          "FR"
      ]
  },
  {
      "alias": "southern",
      "title": "Southern",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "NZ",
          "SE",
          "CA",
          "NL",
          "IE",
          "PL",
          "TR"
      ]
  },
  {
      "alias": "souvenirs",
      "title": "Souvenir Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "SG",
          "CA"
      ]
  },
  {
      "alias": "spanish",
      "title": "Spanish",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "spas",
      "title": "Day Spas",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "speakeasies",
      "title": "Speakeasies",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "IT",
          "TR",
          "NO",
          "DK"
      ]
  },
  {
      "alias": "specialbikes",
      "title": "Special Bikes",
      "parents": [
          "bicycles"
      ],
      "country_whitelist": [
          "PT",
          "DK"
      ]
  },
  {
      "alias": "specialed",
      "title": "Special Education",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "specialtyschools",
      "title": "Specialty Schools",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "speech_therapists",
      "title": "Speech Therapists",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "speechtraining",
      "title": "Speech Training",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "spermclinic",
      "title": "Sperm Clinic",
      "parents": [
          "health"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "IT",
          "MX",
          "FR",
          "DK",
          "CL",
          "NL",
          "NO",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "spinesurgeons",
      "title": "Spine Surgeons",
      "parents": [
          "physicians"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "spiritism",
      "title": "Spiritism",
      "parents": [
          "religiousorgs"
      ],
      "country_whitelist": [
          "BR"
      ]
  },
  {
      "alias": "spiritual_shop",
      "title": "Spiritual Shop",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "sport_equipment_hire",
      "title": "Sport Equipment Hire",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "AU",
          "CZ",
          "MX",
          "DK",
          "CL",
          "NO",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "sportgoods",
      "title": "Sporting Goods",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "sports_clubs",
      "title": "Sports Clubs",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "sportsbars",
      "title": "Sports Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "CH",
          "AT"
      ]
  },
  {
      "alias": "sportsbetting",
      "title": "Sports Betting",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "IT",
          "US"
      ]
  },
  {
      "alias": "sportsmed",
      "title": "Sports Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "sportspsychologists",
      "title": "Sports Psychologists",
      "parents": [
          "c_and_mh"
      ],
      "country_whitelist": [
          "IT",
          "NZ",
          "SG",
          "US"
      ]
  },
  {
      "alias": "sportsteams",
      "title": "Professional Sports Teams",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "sportswear",
      "title": "Sports Wear",
      "parents": [
          "sportgoods",
          "fashion"
      ]
  },
  {
      "alias": "spraytanning",
      "title": "Spray Tanning",
      "parents": [
          "tanning"
      ],
      "country_blacklist": [
          "IE",
          "SE",
          "PL",
          "CA",
          "BR"
      ]
  },
  {
      "alias": "squash",
      "title": "Squash",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "NZ",
          "BR",
          "SG",
          "PT"
      ]
  },
  {
      "alias": "srilankan",
      "title": "Sri Lankan",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "stadiumsarenas",
      "title": "Stadiums & Arenas",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "stationery",
      "title": "Cards & Stationery",
      "parents": [
          "eventservices",
          "artsandcrafts",
          "flowers"
      ]
  },
  {
      "alias": "steak",
      "title": "Steakhouses",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "stereo_installation",
      "title": "Car Stereo Installation",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "CH",
          "AT",
          "DK"
      ]
  },
  {
      "alias": "stockings",
      "title": "Stockings",
      "parents": [
          "fashion"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "NL",
          "AT",
          "CZ",
          "CH",
          "PT"
      ]
  },
  {
      "alias": "stonemasons",
      "title": "Stonemasons",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "streetart",
      "title": "Street Art",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "AT",
          "CA",
          "CH",
          "IE",
          "SG",
          "FI",
          "TR",
          "MY"
      ]
  },
  {
      "alias": "streetvendors",
      "title": "Street Vendors",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "stripclubs",
      "title": "Strip Clubs",
      "parents": [
          "adultentertainment"
      ]
  },
  {
      "alias": "stripteasedancers",
      "title": "Striptease Dancers",
      "parents": [
          "adultentertainment"
      ]
  },
  {
      "alias": "structuralengineers",
      "title": "Structural Engineers",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "stucco",
      "title": "Stucco Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "studiotaping",
      "title": "Studio Taping",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "US",
          "NL",
          "BE"
      ]
  },
  {
      "alias": "sud_ouest",
      "title": "French Southwest",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FR",
          "BE"
      ]
  },
  {
      "alias": "sugaring",
      "title": "Sugaring",
      "parents": [
          "hairremoval"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "AT",
          "CZ",
          "DK",
          "CH",
          "NO",
          "FI"
      ]
  },
  {
      "alias": "sugarshacks",
      "title": "Sugar Shacks",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "CA"
      ]
  },
  {
      "alias": "sukiyaki",
      "title": "Sukiyaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "summer_camps",
      "title": "Summer Camps",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "sunglasses",
      "title": "Sunglasses",
      "parents": [
          "opticians"
      ]
  },
  {
      "alias": "supperclubs",
      "title": "Supper Clubs",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "ES",
          "CA"
      ]
  },
  {
      "alias": "suppliesrestaurant",
      "title": "Restaurant Supplies",
      "parents": [
          "wholesalers"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "MX",
          "DK",
          "CH",
          "CL",
          "NO",
          "IE",
          "SG",
          "AR",
          "DE",
          "IT",
          "NZ",
          "AT",
          "CA",
          "NL",
          "PL",
          "JP",
          "ES"
      ]
  },
  {
      "alias": "surfing",
      "title": "Surfing",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "IT",
          "NZ",
          "SE",
          "MX",
          "FR",
          "DK",
          "AR",
          "CL",
          "NL",
          "BR",
          "JP",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "surflifesaving",
      "title": "Surf Lifesaving",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "NZ",
          "AU",
          "MX",
          "AR",
          "CL",
          "BR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "surfschools",
      "title": "Surf Schools",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "surfshop",
      "title": "Surf Shop",
      "parents": [
          "fashion"
      ],
      "country_blacklist": [
          "BE",
          "SE",
          "CA",
          "CZ",
          "FR",
          "NL",
          "NO",
          "IE",
          "SG",
          "FI",
          "BR"
      ]
  },
  {
      "alias": "surgeons",
      "title": "Surgeons",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "sushi",
      "title": "Sushi Bars",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "swabian",
      "title": "Swabian",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "swedish",
      "title": "Swedish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "SE"
      ]
  },
  {
      "alias": "swimminglessons",
      "title": "Swimming Lessons/Schools",
      "parents": [
          "specialtyschools",
          "fitness"
      ]
  },
  {
      "alias": "swimmingpools",
      "title": "Swimming Pools",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "swimwear",
      "title": "Swimwear",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "swissfood",
      "title": "Swiss Food",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "DE",
          "CL",
          "CZ",
          "MX",
          "CH",
          "AR",
          "ES"
      ]
  },
  {
      "alias": "synagogues",
      "title": "Synagogues",
      "parents": [
          "religiousorgs"
      ]
  },
  {
      "alias": "syrian",
      "title": "Syrian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "szechuan",
      "title": "Szechuan",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "NZ",
          "AU",
          "TW",
          "FR",
          "HK",
          "IE",
          "SG",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "tabac",
      "title": "Tabac",
      "parents": [
          "bars"
      ],
      "country_whitelist": [
          "BE",
          "IT",
          "CZ",
          "FR",
          "ES"
      ]
  },
  {
      "alias": "tabernas",
      "title": "Tabernas",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "TR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "tablaoflamenco",
      "title": "Tablao Flamenco",
      "parents": [
          "arts"
      ],
      "country_whitelist": [
          "CL",
          "MX",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "tabletopgames",
      "title": "Tabletop Games",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "tableware",
      "title": "Tableware",
      "parents": [
          "homeandgarden"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "AT",
          "CZ",
          "MX",
          "FR",
          "DK",
          "CH",
          "AR",
          "CL",
          "NL",
          "NO",
          "BR",
          "PT"
      ]
  },
  {
      "alias": "tacos",
      "title": "Tacos",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX",
          "US"
      ]
  },
  {
      "alias": "taekwondo",
      "title": "Taekwondo",
      "parents": [
          "martialarts"
      ]
  },
  {
      "alias": "taichi",
      "title": "Tai Chi",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "taiwanese",
      "title": "Taiwanese",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "CZ",
          "FI",
          "TR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "taiyaki",
      "title": "Taiyaki",
      "parents": [
          "jpsweets"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "takoyaki",
      "title": "Takoyaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "talentagencies",
      "title": "Talent Agencies",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "AU",
          "AT",
          "CA",
          "CZ",
          "CH",
          "HK",
          "IE",
          "SG",
          "TR"
      ]
  },
  {
      "alias": "tamales",
      "title": "Tamales",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "tanning",
      "title": "Tanning",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "tanningbeds",
      "title": "Tanning Beds",
      "parents": [
          "tanning"
      ],
      "country_blacklist": [
          "BR",
          "SE",
          "PL",
          "FI"
      ]
  },
  {
      "alias": "taoisttemples",
      "title": "Taoist Temples",
      "parents": [
          "religiousorgs"
      ],
      "country_whitelist": [
          "TW",
          "HK"
      ]
  },
  {
      "alias": "tapas",
      "title": "Tapas Bars",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "FI",
          "AU",
          "SG"
      ]
  },
  {
      "alias": "tapasmallplates",
      "title": "Tapas/Small Plates",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "tastingclasses",
      "title": "Tasting Classes",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "tattoo",
      "title": "Tattoo",
      "parents": [
          "beautysvc"
      ]
  },
  {
      "alias": "tattooremoval",
      "title": "Tattoo Removal",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "tavolacalda",
      "title": "Tavola Calda",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "IT"
      ]
  },
  {
      "alias": "taxidermy",
      "title": "Taxidermy",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "NZ",
          "SE",
          "CA",
          "CZ",
          "DK",
          "NL",
          "NO",
          "IE",
          "SG",
          "FI",
          "BR"
      ]
  },
  {
      "alias": "taxis",
      "title": "Taxis",
      "parents": [
          "transport"
      ]
  },
  {
      "alias": "taxlaw",
      "title": "Tax Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "BE",
          "AU",
          "AT",
          "CZ",
          "FR",
          "CH",
          "SG",
          "PL",
          "BR"
      ]
  },
  {
      "alias": "taxoffice",
      "title": "Tax Office",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "US",
          "PL",
          "SG",
          "CA",
          "ES"
      ]
  },
  {
      "alias": "taxservices",
      "title": "Tax Services",
      "parents": [
          "financialservices"
      ]
  },
  {
      "alias": "tcm",
      "title": "Traditional Chinese Medicine",
      "parents": [
          "health"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "tea",
      "title": "Tea Rooms",
      "parents": [
          "food"
      ]
  },
  {
      "alias": "teachersupplies",
      "title": "Teacher Supplies",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "teambuilding",
      "title": "Team Building Activities",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "teethwhitening",
      "title": "Teeth Whitening",
      "parents": [
          "beautysvc"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "telecommunications",
      "title": "Telecommunications",
      "parents": [
          "itservices"
      ],
      "country_blacklist": [
          "MX",
          "AR",
          "JP",
          "CL"
      ]
  },
  {
      "alias": "televisionserviceproviders",
      "title": "Television Service Providers",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "televisionstations",
      "title": "Television Stations",
      "parents": [
          "massmedia"
      ]
  },
  {
      "alias": "tempura",
      "title": "Tempura",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW",
          "SG"
      ]
  },
  {
      "alias": "tenantlaw",
      "title": "Tenant and Eviction Law",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "CZ"
      ]
  },
  {
      "alias": "tennis",
      "title": "Tennis",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "teochew",
      "title": "Teochew",
      "parents": [
          "chinese"
      ],
      "country_whitelist": [
          "TW",
          "SG",
          "MY",
          "HK"
      ]
  },
  {
      "alias": "teppanyaki",
      "title": "Teppanyaki",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "US",
          "NZ",
          "AU",
          "TW",
          "MX",
          "HK",
          "SG",
          "JP"
      ]
  },
  {
      "alias": "testprep",
      "title": "Test Preparation",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "tex-mex",
      "title": "Tex-Mex",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "AU",
          "ES",
          "PT",
          "DK"
      ]
  },
  {
      "alias": "thai",
      "title": "Thai",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "theater",
      "title": "Performing Arts",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "themedcafes",
      "title": "Themed Cafes",
      "parents": [
          "cafes"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "MX",
          "FR",
          "DK",
          "CH",
          "CL",
          "NO",
          "IE",
          "SG",
          "FI",
          "AR",
          "PH",
          "DE",
          "NZ",
          "SE",
          "TW",
          "CA",
          "AT",
          "HK",
          "NL",
          "PL",
          "JP",
          "MY"
      ]
  },
  {
      "alias": "threadingservices",
      "title": "Threading Services",
      "parents": [
          "hairremoval"
      ]
  },
  {
      "alias": "thrift_stores",
      "title": "Thrift Stores",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "tickets",
      "title": "Tickets",
      "parents": [
          "shopping"
      ],
      "country_whitelist": [
          "SE",
          "CZ",
          "DK",
          "CL",
          "NO",
          "PL",
          "FI",
          "PT"
      ]
  },
  {
      "alias": "ticketsales",
      "title": "Ticket Sales",
      "parents": [
          "arts"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "SE",
          "NL",
          "IE",
          "PL",
          "SG",
          "FI",
          "TR",
          "ES"
      ]
  },
  {
      "alias": "tikibars",
      "title": "Tiki Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "DE",
          "AT",
          "PL",
          "FR",
          "TR",
          "CH",
          "JP"
      ]
  },
  {
      "alias": "tiling",
      "title": "Tiling",
      "parents": [
          "homeservices"
      ],
      "country_blacklist": [
          "GB",
          "BE",
          "TW",
          "CA",
          "HK",
          "NL",
          "IE",
          "PL",
          "FI",
          "TR",
          "BR",
          "JP",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "tires",
      "title": "Tires",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "titleloans",
      "title": "Title Loans",
      "parents": [
          "financialservices"
      ],
      "country_whitelist": [
          "US",
          "CA"
      ]
  },
  {
      "alias": "tobaccoshops",
      "title": "Tobacco Shops",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "tofu",
      "title": "Tofu Shops",
      "parents": [
          "gourmet"
      ],
      "country_whitelist": [
          "JP"
      ]
  },
  {
      "alias": "tonkatsu",
      "title": "Tonkatsu",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW",
          "SG"
      ]
  },
  {
      "alias": "torshi",
      "title": "Torshi",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "tortillas",
      "title": "Tortillas",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "tours",
      "title": "Tours",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "towing",
      "title": "Towing",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "towncarservice",
      "title": "Town Car Service",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "TW",
          "CA",
          "NL",
          "HK",
          "IE",
          "SG",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "townhall",
      "title": "Town Hall",
      "parents": [
          "publicservicesgovt"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "AU",
          "TW",
          "CA",
          "HK",
          "IE",
          "PL",
          "SG",
          "FI",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "toxicologists",
      "title": "Toxicologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "toys",
      "title": "Toy Stores",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "tradamerican",
      "title": "American (Traditional)",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "tradclothing",
      "title": "Traditional Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "tradefairs",
      "title": "Trade Fairs",
      "parents": [
          "festivals"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "IT",
          "NZ",
          "AT",
          "CZ",
          "MX",
          "DK",
          "CH",
          "NL",
          "NO",
          "FI",
          "TR",
          "JP",
          "PT"
      ]
  },
  {
      "alias": "traditional_swedish",
      "title": "Traditional Swedish",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "FI",
          "SE"
      ]
  },
  {
      "alias": "trafficschools",
      "title": "Traffic Schools",
      "parents": [
          "specialtyschools"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "trafficticketinglaw",
      "title": "Traffic Ticketing Law",
      "parents": [
          "lawyers"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "trailerdealers",
      "title": "Trailer Dealers",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "DE",
          "US",
          "GB",
          "NZ",
          "AU",
          "CA",
          "DK",
          "NO",
          "IE",
          "SG"
      ]
  },
  {
      "alias": "trailerrental",
      "title": "Trailer Rental",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "trailerrepair",
      "title": "Trailer Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "BR",
          "PH",
          "DE",
          "NZ",
          "SE",
          "AT",
          "CA",
          "NL",
          "PL",
          "MY",
          "PT"
      ]
  },
  {
      "alias": "trains",
      "title": "Trains",
      "parents": [
          "transport"
      ],
      "country_blacklist": [
          "IT",
          "NZ",
          "TW",
          "MX",
          "ES",
          "CL",
          "HK",
          "SG",
          "FI",
          "TR",
          "AR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "trainstations",
      "title": "Train Stations",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "trampoline",
      "title": "Trampoline Parks",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "NZ",
          "TW",
          "MX",
          "ES",
          "AR",
          "CL",
          "HK",
          "SG",
          "BR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "translationservices",
      "title": "Translation Services",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "SE"
      ]
  },
  {
      "alias": "transmissionrepair",
      "title": "Transmission Repair",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "DE",
          "IT",
          "AT",
          "CH",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "transport",
      "title": "Transportation",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "tras_os_montes",
      "title": "Tras-os-Montes",
      "parents": [
          "portuguese"
      ],
      "country_whitelist": [
          "PT"
      ]
  },
  {
      "alias": "trattorie",
      "title": "Trattorie",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "CL",
          "IT",
          "PL",
          "FR",
          "CH",
          "AR"
      ]
  },
  {
      "alias": "travelagents",
      "title": "Travel Agents",
      "parents": [
          "travelservices"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "travelservices",
      "title": "Travel Services",
      "parents": [
          "hotelstravel"
      ]
  },
  {
      "alias": "treeservices",
      "title": "Tree Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "trinidadian",
      "title": "Trinidadian",
      "parents": [
          "caribbean"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "triviahosts",
      "title": "Trivia Hosts",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "trophyshops",
      "title": "Trophy Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "NZ",
          "SE",
          "SG",
          "FI",
          "TR",
          "BR"
      ]
  },
  {
      "alias": "tropicalmedicine",
      "title": "Tropical Medicine",
      "parents": [
          "physicians"
      ],
      "country_whitelist": [
          "DE",
          "BE",
          "NL",
          "IT",
          "AT",
          "CH",
          "BR"
      ]
  },
  {
      "alias": "truck_rental",
      "title": "Truck Rental",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "NL",
          "SE",
          "CZ",
          "FI",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "truckdealers",
      "title": "Commercial Truck Dealers",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "HK",
          "SE",
          "TW",
          "CZ",
          "FI",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "truckrepair",
      "title": "Commercial Truck Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "AU",
          "MX",
          "FR",
          "DK",
          "CH",
          "CL",
          "NO",
          "IE",
          "SG",
          "BR",
          "AR",
          "PH",
          "DE",
          "IT",
          "NZ",
          "AT",
          "CA",
          "NL",
          "PL",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "tubing",
      "title": "Tubing",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "tuina",
      "title": "Tui Na",
      "parents": [
          "tcm"
      ]
  },
  {
      "alias": "turkish",
      "title": "Turkish",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "turkishravioli",
      "title": "Turkish Ravioli",
      "parents": [
          "turkish"
      ],
      "country_whitelist": [
          "TR"
      ]
  },
  {
      "alias": "tuscan",
      "title": "Tuscan",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "FR"
      ]
  },
  {
      "alias": "tutoring",
      "title": "Tutoring Centers",
      "parents": [
          "education"
      ]
  },
  {
      "alias": "tvmounting",
      "title": "TV Mounting",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "BE",
          "NL",
          "IT",
          "FR",
          "JP"
      ]
  },
  {
      "alias": "udon",
      "title": "Udon",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "HK",
          "NO",
          "SE",
          "TW",
          "FI",
          "DK",
          "JP"
      ]
  },
  {
      "alias": "ukrainian",
      "title": "Ukrainian",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "TR",
          "ES",
          "DK"
      ]
  },
  {
      "alias": "ultrasoundimagingcenters",
      "title": "Ultrasound Imaging Centers",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "unagi",
      "title": "Unagi",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW"
      ]
  },
  {
      "alias": "underseamedicine",
      "title": "Undersea/Hyperbaric Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "uniforms",
      "title": "Uniforms",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "AT",
          "SE",
          "CZ",
          "CH",
          "NL",
          "IE",
          "TR",
          "JP"
      ]
  },
  {
      "alias": "university_housing",
      "title": "University Housing",
      "parents": [
          "realestate"
      ]
  },
  {
      "alias": "unofficialyelpevents",
      "title": "Unofficial Yelp Events",
      "parents": [
          "localflavor"
      ]
  },
  {
      "alias": "urgent_care",
      "title": "Urgent Care",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "urologists",
      "title": "Urologists",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "usedbooks",
      "title": "Used Bookstore",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "AR",
          "AU",
          "TR",
          "CL"
      ]
  },
  {
      "alias": "usedcardealers",
      "title": "Used Car Dealers",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "utilities",
      "title": "Utilities",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "IT",
          "AU",
          "CZ",
          "NL",
          "PL",
          "SG",
          "PT"
      ]
  },
  {
      "alias": "uzbek",
      "title": "Uzbek",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "CZ"
      ]
  },
  {
      "alias": "vacation_rentals",
      "title": "Vacation Rentals",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "SG"
      ]
  },
  {
      "alias": "vacationrentalagents",
      "title": "Vacation Rental Agents",
      "parents": [
          "hotelstravel"
      ],
      "country_blacklist": [
          "SG",
          "ES"
      ]
  },
  {
      "alias": "valetservices",
      "title": "Valet Services",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US",
          "BR",
          "TR"
      ]
  },
  {
      "alias": "vapeshops",
      "title": "Vape Shops",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "BR",
          "SG"
      ]
  },
  {
      "alias": "vascularmedicine",
      "title": "Vascular Medicine",
      "parents": [
          "physicians"
      ]
  },
  {
      "alias": "vegan",
      "title": "Vegan",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "vegetarian",
      "title": "Vegetarian",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "vehicleshipping",
      "title": "Vehicle Shipping",
      "parents": [
          "auto"
      ]
  },
  {
      "alias": "vehiclewraps",
      "title": "Vehicle Wraps",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "FR",
          "TR",
          "BE"
      ]
  },
  {
      "alias": "venetian",
      "title": "Venetian",
      "parents": [
          "italian"
      ],
      "country_whitelist": [
          "IT",
          "FR"
      ]
  },
  {
      "alias": "venezuelan",
      "title": "Venezuelan",
      "parents": [
          "latin"
      ],
      "country_whitelist": [
          "US",
          "CL",
          "CA",
          "FR",
          "AR",
          "ES",
          "PT"
      ]
  },
  {
      "alias": "venison",
      "title": "Venison",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "GB",
          "IT",
          "NZ",
          "AU",
          "CA",
          "CZ",
          "DK",
          "NO",
          "IE",
          "PL",
          "SG"
      ]
  },
  {
      "alias": "venues",
      "title": "Venues & Event Spaces",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "vermouthbars",
      "title": "Vermouth Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "IT",
          "FR",
          "DK",
          "NO",
          "PL",
          "TR",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "vet",
      "title": "Veterinarians",
      "parents": [
          "pets"
      ]
  },
  {
      "alias": "veteransorganizations",
      "title": "Veterans Organizations",
      "parents": [
          "social_clubs"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "videoandgames",
      "title": "Videos & Video Game Rental",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "videofilmproductions",
      "title": "Video/Film Production",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "videogamestores",
      "title": "Video Game Stores",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "videographers",
      "title": "Videographers",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "vietnamese",
      "title": "Vietnamese",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "vintage",
      "title": "Used, Vintage & Consignment",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "vinyl_records",
      "title": "Vinyl Records",
      "parents": [
          "media"
      ]
  },
  {
      "alias": "vinylsiding",
      "title": "Siding",
      "parents": [
          "homeservices"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "NZ",
          "AU",
          "SE",
          "CA",
          "DK",
          "NL",
          "NO",
          "IE",
          "SG"
      ]
  },
  {
      "alias": "virtualrealitycenters",
      "title": "Virtual Reality Centers",
      "parents": [
          "arts"
      ]
  },
  {
      "alias": "visitorcenters",
      "title": "Visitor Centers",
      "parents": [
          "travelservices"
      ]
  },
  {
      "alias": "vitaminssupplements",
      "title": "Vitamins & Supplements",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "MY",
          "PH"
      ]
  },
  {
      "alias": "vocalcoach",
      "title": "Vocal Coach",
      "parents": [
          "musicinstrumentservices"
      ]
  },
  {
      "alias": "vocation",
      "title": "Vocational & Technical School",
      "parents": [
          "specialtyschools"
      ]
  },
  {
      "alias": "volleyball",
      "title": "Volleyball",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "DE",
          "NZ",
          "AU",
          "AT",
          "SE",
          "CZ",
          "FR",
          "DK",
          "NO",
          "SG",
          "FI",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "waffles",
      "title": "Waffles",
      "parents": [
          "restaurants"
      ]
  },
  {
      "alias": "waldorfschools",
      "title": "Waldorf Schools",
      "parents": [
          "education"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "walkinclinics",
      "title": "Walk-in Clinics",
      "parents": [
          "medcenters"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT",
          "IT"
      ]
  },
  {
      "alias": "walkingtours",
      "title": "Walking Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "wallpapering",
      "title": "Wallpapering",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "watch_repair",
      "title": "Watch Repair",
      "parents": [
          "localservices"
      ]
  },
  {
      "alias": "watches",
      "title": "Watches",
      "parents": [
          "shopping"
      ]
  },
  {
      "alias": "waterdelivery",
      "title": "Water Delivery",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "HK",
          "CA",
          "BR",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "waterheaterinstallrepair",
      "title": "Water Heater Installation/Repair",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "waterparks",
      "title": "Water Parks",
      "parents": [
          "active"
      ],
      "country_blacklist": [
          "DE",
          "GB",
          "NZ",
          "AU",
          "AT",
          "CH",
          "CL",
          "HK",
          "IE",
          "FI",
          "AR",
          "MY"
      ]
  },
  {
      "alias": "waterproofing",
      "title": "Waterproofing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "waterpurification",
      "title": "Water Purification Services",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "waterstores",
      "title": "Water Stores",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "US",
          "MX",
          "CA",
          "BR"
      ]
  },
  {
      "alias": "watersuppliers",
      "title": "Water Suppliers",
      "parents": [
          "utilities"
      ]
  },
  {
      "alias": "watertaxis",
      "title": "Water Taxis",
      "parents": [
          "transport"
      ],
      "country_whitelist": [
          "GB",
          "IE",
          "IT",
          "NZ",
          "AU",
          "MX"
      ]
  },
  {
      "alias": "waxing",
      "title": "Waxing",
      "parents": [
          "hairremoval"
      ]
  },
  {
      "alias": "web_design",
      "title": "Web Design",
      "parents": [
          "professional"
      ]
  },
  {
      "alias": "wedding_planning",
      "title": "Wedding Planning",
      "parents": [
          "eventservices"
      ]
  },
  {
      "alias": "weddingchappels",
      "title": "Wedding Chapels",
      "parents": [
          "eventservices"
      ],
      "country_whitelist": [
          "US",
          "JP",
          "AU"
      ]
  },
  {
      "alias": "weightlosscenters",
      "title": "Weight Loss Centers",
      "parents": [
          "health"
      ]
  },
  {
      "alias": "welldrilling",
      "title": "Well Drilling",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "US",
          "MX",
          "DK",
          "CH",
          "CL",
          "NO",
          "BR",
          "AR",
          "PH",
          "DE",
          "IT",
          "AT",
          "CZ",
          "PL",
          "MY",
          "ES"
      ]
  },
  {
      "alias": "westernjapanese",
      "title": "Western Style Japanese Food",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW",
          "SG"
      ]
  },
  {
      "alias": "whalewatchingtours",
      "title": "Whale Watching Tours",
      "parents": [
          "tours"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "wheelrimrepair",
      "title": "Wheel & Rim Repair",
      "parents": [
          "auto"
      ],
      "country_whitelist": [
          "IT",
          "US",
          "PT"
      ]
  },
  {
      "alias": "whiskeybars",
      "title": "Whiskey Bars",
      "parents": [
          "bars"
      ],
      "country_blacklist": [
          "IT"
      ]
  },
  {
      "alias": "wholesale_stores",
      "title": "Wholesale Stores",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "wholesalers",
      "title": "Wholesalers",
      "parents": [
          "professional"
      ],
      "country_blacklist": [
          "SE",
          "TW",
          "CZ",
          "FR",
          "HK",
          "FI",
          "TR",
          "BR",
          "MY",
          "PH",
          "PT"
      ]
  },
  {
      "alias": "wigs",
      "title": "Wigs",
      "parents": [
          "shopping"
      ],
      "country_blacklist": [
          "GB",
          "NZ",
          "AT",
          "SE",
          "TW",
          "CH",
          "HK",
          "IE",
          "SG",
          "TR",
          "BR",
          "JP",
          "MY",
          "PH"
      ]
  },
  {
      "alias": "wildlifecontrol",
      "title": "Wildlife Control",
      "parents": [
          "localservices"
      ],
      "country_blacklist": [
          "JP"
      ]
  },
  {
      "alias": "wildlifehunting",
      "title": "Wildlife Hunting Ranges",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US"
      ]
  },
  {
      "alias": "willstrustsprobates",
      "title": "Wills, Trusts, & Probates",
      "parents": [
          "estateplanning"
      ],
      "country_whitelist": [
          "US",
          "GB",
          "BE",
          "IT",
          "NZ",
          "AU",
          "CA",
          "NL",
          "IE",
          "SG"
      ]
  },
  {
      "alias": "windowsinstallation",
      "title": "Windows Installation",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "windowwashing",
      "title": "Window Washing",
      "parents": [
          "homeservices"
      ]
  },
  {
      "alias": "windshieldinstallrepair",
      "title": "Windshield Installation & Repair",
      "parents": [
          "auto"
      ],
      "country_blacklist": [
          "CH",
          "DE",
          "AT",
          "CZ"
      ]
  },
  {
      "alias": "wine_bars",
      "title": "Wine Bars",
      "parents": [
          "bars"
      ]
  },
  {
      "alias": "wineries",
      "title": "Wineries",
      "parents": [
          "food",
          "arts"
      ],
      "country_blacklist": [
          "FI"
      ]
  },
  {
      "alias": "winetasteclasses",
      "title": "Wine Tasting Classes",
      "parents": [
          "tastingclasses"
      ]
  },
  {
      "alias": "winetastingroom",
      "title": "Wine Tasting Room",
      "parents": [
          "wineries"
      ]
  },
  {
      "alias": "winetours",
      "title": "Wine Tours",
      "parents": [
          "tours"
      ]
  },
  {
      "alias": "wok",
      "title": "Wok",
      "parents": [
          "restaurants"
      ],
      "country_blacklist": [
          "US",
          "GB",
          "IT",
          "NZ",
          "AU",
          "TW",
          "CA",
          "AR",
          "HK",
          "IE",
          "PL",
          "SG",
          "TR",
          "BR",
          "JP"
      ]
  },
  {
      "alias": "womenscloth",
      "title": "Women's Clothing",
      "parents": [
          "fashion"
      ]
  },
  {
      "alias": "workerscomplaw",
      "title": "Workers Compensation Law",
      "parents": [
          "lawyers"
      ],
      "country_blacklist": [
          "CH",
          "FR",
          "DE",
          "AT"
      ]
  },
  {
      "alias": "wraps",
      "title": "Wraps",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "US",
          "NO",
          "SE",
          "CZ",
          "TR",
          "DK",
          "PT"
      ]
  },
  {
      "alias": "xmasmarkets",
      "title": "Christmas Markets",
      "parents": [
          "festivals"
      ],
      "country_blacklist": [
          "US",
          "IE",
          "NZ",
          "SG",
          "CA",
          "TR",
          "BR"
      ]
  },
  {
      "alias": "yakiniku",
      "title": "Yakiniku",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW",
          "SG"
      ]
  },
  {
      "alias": "yakitori",
      "title": "Yakitori",
      "parents": [
          "japanese"
      ],
      "country_whitelist": [
          "JP",
          "TW",
          "SG"
      ]
  },
  {
      "alias": "yelpevents",
      "title": "Yelp Events",
      "parents": [
          "localflavor"
      ]
  },
  {
      "alias": "yoga",
      "title": "Yoga",
      "parents": [
          "fitness"
      ]
  },
  {
      "alias": "youth_club",
      "title": "Youth Club",
      "parents": [
          "localservices"
      ],
      "country_whitelist": [
          "GB",
          "BE",
          "AU",
          "FR",
          "DK",
          "CH",
          "NO",
          "IE",
          "SG",
          "FI",
          "DE",
          "IT",
          "NZ",
          "SE",
          "CA",
          "CZ",
          "NL",
          "PT"
      ]
  },
  {
      "alias": "yucatan",
      "title": "Yucatan",
      "parents": [
          "mexican"
      ],
      "country_whitelist": [
          "MX"
      ]
  },
  {
      "alias": "yugoslav",
      "title": "Yugoslav",
      "parents": [
          "restaurants"
      ],
      "country_whitelist": [
          "BE",
          "IT",
          "AU",
          "SE",
          "FR",
          "PT"
      ]
  },
  {
      "alias": "zapiekanka",
      "title": "Zapiekanka",
      "parents": [
          "food"
      ],
      "country_whitelist": [
          "PL"
      ]
  },
  {
      "alias": "zipline",
      "title": "Ziplining",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "zoos",
      "title": "Zoos",
      "parents": [
          "active"
      ]
  },
  {
      "alias": "zorbing",
      "title": "Zorbing",
      "parents": [
          "active"
      ],
      "country_whitelist": [
          "US",
          "NZ",
          "CZ",
          "MX",
          "ES",
          "PT"
      ]
  }
]

var getCategories = (parentCategory) => {
  var categories = {};
  allCategories.forEach((obj)=>{
    if (obj.alias === parentCategory) {
      categories[obj.alias] = obj.alias;
    } else {
      obj.parents.forEach((category)=> {
        if (category === parentCategory) categories[obj.alias] = obj.alias;
      });
    }
  })
  return categories;
}
//Restaurants, Shopping, ArtsAndEntertainment, Fitness
module.exports = {
  all: allCategories,
  restaurants: Object.assign(getCategories('restaurants'),getCategories('food'),getCategories('gourmet'), getCategories('chinese')),
  fitness: Object.assign(getCategories('fitness'),getCategories('active')),
  shopping: getCategories('shopping'),
  entertainment: getCategories('arts'),
  nightlife: Object.assign(getCategories('nightlife'), getCategories('bars'))
}