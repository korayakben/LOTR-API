export function createData(name, type, description) {
    return {
      name,
      type,
      description
    };
  }


export const allRows = [
    createData('gender', 'String', "Used to filter characters by gender. Accepts only male or female values."),
    createData('ring_bearer', 'Boolean', "Used to filter characters who have borne the One Ring. Accepts only true or false values.")
]
export const genderRows = [
    createData('gender', 'String', 'Represents the gender of the character.')
  ];
  
export const ringBearerRows = [
    createData('ring_bearer', 'Boolean', 'Indicates whether the character is a ring bearer or not.')
  ];

export const randomRows = [
    createData('random', 'Path', "Returns random data containing a character, location, tool, race, quote, etc. from the Lord of the Rings universe. This endpoint provides a random selection from the available data without specific filtering or criteria.")
]

export const quoteRows = [
    createData('quotes', 'Path', "Retrieves all quotes from the Lord of the Rings universe. Returns a list of all available famous quotes.")
]

export const toolRows = [
    createData('tools', 'Path', 'Retrieves tools from the Lord of the Rings universe. You can request a specific tool by its name or retrieve a list of all tools if no name is provided.')
]

export const toolNameRows = [
    createData('name', 'String', 'Retrieves a specific tool from the Lord of the Rings universe based on its name. If the `name` parameter is provided, the endpoint will return the tool with that name.')
]

export const raceRows = [
    createData('race', 'Path Variable', "Retrieves details about a specific race from the Lord of the Rings universe. The race name should be specified in the URL path.")
]

export const raceNameRows = [
    createData('name', 'String', "Retrieves details about a specific race from the Lord of the Rings universe. If the `name` query parameter is provided, the endpoint will return details of the race to which the specified character belongs.")
]

export const homeNameRows = [
    createData('home', 'String', "Retrieves details about a specific race from the Lord of the Rings universe. If the `home` query parameter is provided, the endpoint will return details of the race associated with that home location.")
]

