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

export async function getBreweries(): Promise<GetBrewerieResponse | void> {
  try {
    const { data } = await api.get('breweries', {
      params: {
        per_page: 6
      }
    });
    
    const breweries = data.map((brewerie: IBrewerie) => {
      return {
        id: brewerie.id,
        name: brewerie.name,
        brewery_type: brewerie.brewery_type,
        street:  brewerie.street,  
        address: `${brewerie.city}, ${brewerie.state} - ${brewerie.country}`,
        postal_code: brewerie.postal_code,
        phone: brewerie.phone
      };
    });
  
    return {
      breweries
    }; 
  } catch (error) {
    throw new Error('Error loading breweries.');
  }
}

