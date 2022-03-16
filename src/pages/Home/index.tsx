import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Tag } from '../../components/Tag';
import Trash from '../../assets/icons/trash.svg';
import { Container, Content, CardContent, ContainerTag } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>

        <Card>
          <CardContent>
            <button>
              <img src={Trash} alt="trash" />
            </button>

            <h4>10-56 Brewing Company</h4>

            <div>
              <p>400 Brown Cir</p>
              <p>Knox, Indiana - United States</p>
            </div>

            <ContainerTag>
              <Tag type="chart" name="micro" />
              <Tag type="location" name="4653" />
              <Tag type="phone" name="6308165790" />
              <Tag type="plus" name="addmore" />
            </ContainerTag>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent>
            <button>
              <img src={Trash} alt="trash" />
            </button>

            <h4>10-56 Brewing Company</h4>

            <div>
              <p>400 Brown Cir</p>
              <p>Knox, Indiana - United States</p>
            </div>

            <ContainerTag>
              <Tag type="chart" name="micro" />
              <Tag type="location" name="4653" />
              <Tag type="phone" name="6308165790" />
              <Tag type="plus" name="addmore" />
            </ContainerTag>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <button>
              <img src={Trash} alt="trash" />
            </button>

            <h4>10-56 Brewing Company</h4>

            <div>
              <p>400 Brown Cir</p>
              <p>Knox, Indiana - United States</p>
            </div>

            <ContainerTag>
              <Tag type="chart" name="micro" />
              <Tag type="location" name="4653" />
              <Tag type="phone" name="6308165790" />
              <Tag type="plus" name="addmore" />
            </ContainerTag>
          </CardContent>
        </Card>

      </Content>

    </Container>
  );
}