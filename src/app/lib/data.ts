const countries = [
  { id: 1, name: 'Afghanistan', abbreviation: 'AF', capital: 'Kabul' },
  { id: 2, name: 'Åland Islands', abbreviation: 'AX', capital: 'Mariehamn' },
  { id: 3, name: 'Albania', abbreviation: 'AL', capital: 'Tirana' },
  { id: 4, name: 'Algeria', abbreviation: 'DZ', capital: 'Algiers' },
  { id: 5, name: 'American Samoa', abbreviation: 'AS', capital: 'Pago Pago' },
  { id: 6, name: 'Andorra', abbreviation: 'AD', capital: 'Andorra la Vella' },
  { id: 7, name: 'Angola', abbreviation: 'AO', capital: 'Luanda' },
  { id: 8, name: 'Anguilla', abbreviation: 'AI', capital: 'The Valley' },
  { id: 9, name: 'Antarctica', abbreviation: 'AQ', capital: 'N/A' },
  { id: 10, name: 'Antigua and Barbuda', abbreviation: 'AG', capital: 'St. John\'s' },
  { id: 11, name: 'Argentina', abbreviation: 'AR', capital: 'Buenos Aires' },
  { id: 12, name: 'Armenia', abbreviation: 'AM', capital: 'Yerevan' },
  { id: 13, name: 'Aruba', abbreviation: 'AW', capital: 'Oranjestad' },
  { id: 14, name: 'Australia', abbreviation: 'AU', capital: 'Canberra' },
  { id: 15, name: 'Austria', abbreviation: 'AT', capital: 'Vienna' },
  { id: 16, name: 'Azerbaijan', abbreviation: 'AZ', capital: 'Baku' },
  { id: 17, name: 'Bahamas', abbreviation: 'BS', capital: 'Nassau' },
  { id: 18, name: 'Bahrain', abbreviation: 'BH', capital: 'Manama' },
  { id: 19, name: 'Bangladesh', abbreviation: 'BD', capital: 'Dhaka' },
  { id: 20, name: 'Barbados', abbreviation: 'BB', capital: 'Bridgetown' },
  { id: 21, name: 'Belarus', abbreviation: 'BY', capital: 'Minsk' },
  { id: 22, name: 'Belgium', abbreviation: 'BE', capital: 'Brussels' },
  { id: 23, name: 'Belize', abbreviation: 'BZ', capital: 'Belmopan' },
  { id: 24, name: 'Benin', abbreviation: 'BJ', capital: 'Porto-Novo' },
  { id: 25, name: 'Bermuda', abbreviation: 'BM', capital: 'Hamilton' },
  { id: 26, name: 'Bhutan', abbreviation: 'BT', capital: 'Thimphu' },
  { id: 27, name: 'Bolivia', abbreviation: 'BO', capital: 'Sucre' },
  { id: 28, name: 'Bonaire, Sint Eustatius and Saba', abbreviation: 'BQ', capital: 'Kralendijk' },
  { id: 29, name: 'Bosnia and Herzegovina', abbreviation: 'BA', capital: 'Sarajevo' },
  { id: 30, name: 'Botswana', abbreviation: 'BW', capital: 'Gaborone' },
  { id: 31, name: 'Brazil', abbreviation: 'BR', capital: 'Brasília' },
  { id: 32, name: 'British Indian Ocean Territory', abbreviation: 'IO', capital: 'Diego Garcia' },
  { id: 33, name: 'British Virgin Islands', abbreviation: 'VG', capital: 'Road Town' },
  { id: 34, name: 'Brunei Darussalam', abbreviation: 'BN', capital: 'Bandar Seri Begawan' },
  { id: 35, name: 'Bulgaria', abbreviation: 'BG', capital: 'Sofia' },
  { id: 36, name: 'Burkina Faso', abbreviation: 'BF', capital: 'Ouagadougou' },
  { id: 37, name: 'Burundi', abbreviation: 'BI', capital: 'Bujumbura' },
  { id: 38, name: 'Cabo Verde', abbreviation: 'CV', capital: 'Praia' },
  { id: 39, name: 'Cambodia', abbreviation: 'KH', capital: 'Phnom Penh' },
  { id: 40, name: 'Cameroon', abbreviation: 'CM', capital: 'Yaoundé' },
  { id: 41, name: 'Canada', abbreviation: 'CA', capital: 'Ottawa' },
  { id: 42, name: 'Cayman Islands', abbreviation: 'KY', capital: 'George Town' },
  { id: 43, name: 'Central African Republic', abbreviation: 'CF', capital: 'Bangui' },
  { id: 44, name: 'Chad', abbreviation: 'TD', capital: 'N\'Djamena' },
  { id: 45, name: 'Chile', abbreviation: 'CL', capital: 'Santiago' },
  { id: 46, name: 'China', abbreviation: 'CN', capital: 'Beijing' },
  { id: 47, name: 'Christmas Island', abbreviation: 'CX', capital: 'Flying Fish Cove' },
  { id: 48, name: 'Cocos (Keeling) Islands', abbreviation: 'CC', capital: 'West Island' },
  { id: 49, name: 'Colombia', abbreviation: 'CO', capital: 'Bogotá' },
  { id: 50, name: 'Comoros', abbreviation: 'KM', capital: 'Moroni' },
];

let visits: {
  id: number,
  countryId: number,
  touristId: number,
  date: string
}[] = [
  { id: 1, countryId: 1, touristId: 1, date: "2024-03-04T11:44:24.069Z" },
  { id: 2, countryId: 2, touristId: 1, date: "2024-02-20T19:44:24.069Z" },
  { id: 3, countryId: 3, touristId: 1, date: "2020-03-29T17:44:24.069Z" },
  { id: 4, countryId: 4, touristId: 1, date: "2019-11-06T09:41:00.069Z" },
  { id: 5, countryId: 5, touristId: 1, date: "2017-10-04T21:44:24.069Z" },
]

const ITEMS_PER_PAGE = 6;

export const fetchCountries = async () => {
  return countries
}

export const fetchFilteredCountries = async (
  query: string,
  currentPage: number,
) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase()),
  );
  return filteredCountries.slice(offset, offset + ITEMS_PER_PAGE);
}

export const fetchCountryPages = async (query: string) => {
  const { length } = countries.filter((country) =>
    country.name.toLowerCase().includes(query.toLowerCase()),
  );
  return Math.ceil(length / ITEMS_PER_PAGE)
}

export const fetchVisitPages = async (query: string) => {
  // TODO: Filtering
  const { length } = visits.filter((visit) => visit);
  return Math.ceil(length / ITEMS_PER_PAGE)
}

export const fetchFilteredVisits = async (
  query: string,
  currentPage: number,
) => {
  // TODO: Filtering
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const filteredVisits = visits.filter((visit) => visit);
  return filteredVisits.slice(offset, offset + ITEMS_PER_PAGE);
}