import ChartSquareBar from '../../assets/icons/chart-square-bar.svg';
import LocationMarker from '../../assets/icons/location-marker.svg';
import Phone from '../../assets/icons/phone.svg';
import PlusCircle from '../../assets/icons/plus-circle.svg';

import { Container } from './styles';

interface TagProps {
  type: 'chart' | 'location' | 'phone' | 'plus';
  name: string;
}

const icons = {
  chart: ChartSquareBar,
  location: LocationMarker,
  phone: Phone,
  plus: PlusCircle,
};

export function Tag({ type, name }: TagProps) {
  return (
    <Container>
      <img src={icons[type]} alt={type} />
      <span>{name}</span>
    </Container>
  );
}