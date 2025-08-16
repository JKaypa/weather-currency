interface Country {
  id: number;
  name: string;
  code: string;
  currency: Currency,
  cities: City[]
}

interface City {
  id: number;
  name: string;
}

interface Currency {
  id: number;
  code: string;
  symbol: string;
  name: string;
}

interface DestinationData {
  temperature: number,
  weather: string,
  conversionRate: number,
  conversionResult: number
}

export type { Country, City, Currency, DestinationData }
