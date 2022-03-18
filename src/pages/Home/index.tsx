import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getBreweries, IBrewerie } from '../../services/breweries';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Tag } from '../../components/Tag'; 
import { useUser } from '../../hooks/user'
import { useToast } from '../../hooks/toast';
import { Loading } from '../../components/Loading';
import Trash from '../../assets/icons/trash.svg';

import { Container, Content, CardContent, ContainerTag } from './styles';

export function Home() {
  const history = useHistory();

  const { addToast } = useToast();
  const { user, removeUser } = useUser();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [breweries, setBreweries] = useState<IBrewerie[]>([]);

  const getAllBreweries = async () => {
    try {
      setIsLoading(true);

      const response = await getBreweries();
  
      if (response) {
        setBreweries(response.breweries);
        setIsLoading(false);

        addToast({
          type: "info",
          title: `Welcome, ${user}!`,
          description: "Bellow are some breweries"        
        });
      }
    } catch (error) {
      addToast({
        type: "error",
        title: "Error",
        description: (error as Error).message
      });

      removeUser();
      history.push('/');
    }
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

    addToast({
      type: "success",
      title: "Successfully",
      description: "Brewery removed"
    });
  }

  useEffect(() => {
    getAllBreweries();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
      { isLoading ? (
         <Loading />
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
                    <p>{brewerie.street}</p>
                    <p>{brewerie.address}</p>
                  </div>
      
                  <ContainerTag>
                    <Tag icon="chart" name={brewerie.brewery_type} />
                    <Tag icon="location" name={brewerie.postal_code} />
                    <Tag icon="phone" name={brewerie.phone} />
                    <Tag 
                      icon="plus" 
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

