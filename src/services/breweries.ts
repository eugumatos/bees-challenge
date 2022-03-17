import { filterDesc } from '../utils/filterDesc';
import { api } from './api';

interface BrewerieResponse {
  id: string;
  name: string;
  phone: string;
  brewery_type: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
}

export interface IBrewerie extends BrewerieResponse {
  address: string; 
  tag?: string;
}

type GetBrewerieResponse = {
  breweries: IBrewerie[];
}

export async function getBreweries(): Promise<GetBrewerieResponse> {
  const { data } = await api.get('breweries', {
    params: {
      per_page: 6
    }
  });
  
  const breweries = data.map((brewerie: IBrewerie) => {
    return {
      id: brewerie.id,
      name: filterDesc(brewerie.name),
      brewery_type: brewerie.brewery_type,
      address: `${brewerie.city}, ${brewerie.street} - ${brewerie.country}`,
      postal_code: brewerie.postal_code,
      phone: brewerie.phone
    };
  });

  return {
    breweries
  };
}

