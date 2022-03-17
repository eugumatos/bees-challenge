import { useState, useEffect } from 'react';
import { DotLoader } from 'react-spinners';
import { getBreweries, IBrewerie } from '../../services/breweries';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Tag } from '../../components/Tag'; 
import Trash from '../../assets/icons/trash.svg';

import { Container, Content, CardContent, ContainerTag, ContainerLoading } from './styles';

export function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [breweries, setBreweries] = useState<IBrewerie[]>([]);

  const getAllBreweries = async () => {
    setIsLoading(true);

    const response = await getBreweries();

    setBreweries(response.breweries);
    setIsLoading(false);
  }

  const addTag = (id: string, tag: string) => {
    const previusBreweries = [...breweries];
    const findBrewerie = previusBreweries.find((brewerie: IBrewerie) => brewerie.id === id);

    if (findBrewerie) {
      findBrewerie.tag = tag; 
    }

    setBreweries(previusBreweries);
  }

  const removeBrewerie = (id: string) => {
    const previusBreweries = [...breweries];
    const filterBreweries = previusBreweries.filter((brewerie: IBrewerie) => brewerie.id !== id);

    setBreweries(filterBreweries);
  }

  useEffect(() => {
    getAllBreweries();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
      { isLoading ? (
          <ContainerLoading>
            <DotLoader size={70} color="#5D5FEF" />
          </ContainerLoading>
        ) : (
          <>
            { breweries.map((brewerie) => (
              <Card key={brewerie.id}>
                <CardContent>
                  <button onClick={() => removeBrewerie(brewerie.id)}>
                    <img src={Trash} alt="trash" />
                  </button>
      
                  <h4>{brewerie.name}</h4>
      
                  <div>
                    <p>{brewerie.address}</p>
                  </div>
      
                  <ContainerTag>
                    <Tag type="chart" name={brewerie.brewery_type} />
                    <Tag type="location" name={brewerie.postal_code} />
                    <Tag type="phone" name={brewerie.phone} />
                    <Tag 
                      type="plus" 
                      name={brewerie.tag ? brewerie.tag : "add more"} 
                      getTag={(tag) => addTag(brewerie.id, tag)} 
                    />
                  </ContainerTag>
                </CardContent>
              </Card>  
            )) }
          </>
        )}
      </Content>
    </Container>
  );
}

