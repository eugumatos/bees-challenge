import { useState } from 'react';
import ChartSquareBar from '../../assets/icons/chart-square-bar.svg';
import LocationMarker from '../../assets/icons/location-marker.svg';
import Phone from '../../assets/icons/phone.svg';
import PlusCircle from '../../assets/icons/plus-circle.svg';
import CheckCircle from '../../assets/icons/check-circle.svg';

import { Container } from './styles';

interface TagProps {
  icon: 'chart' | 'location' | 'phone' | 'plus' | 'check';
  name: string;
  onClick?: () => void;
  getTag?: (tag: string) => void;
}

const icons = {
  chart: ChartSquareBar,
  location: LocationMarker,
  phone: Phone,
  plus: PlusCircle,
  check: CheckCircle
};

export function Tag({ icon, name, getTag }: TagProps) {
  const [tag, setTag] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
  const [hiddenIcon, setHiddenIcon] = useState<boolean>(false);

  const addTag = () => {
		if (tag !== "" && getTag) {
      getTag(tag);
      setActive(false);
      setHiddenIcon(true);
		}
	};

  const handleClickTag = () => {
    if (icon === 'plus') {
      setActive(!active);

      if (active) {
        addTag();
      }
    }
  }

  return (
    <Container icon={icon}>
      <img 
        hidden={hiddenIcon}
        src={icons[!active ? icon : 'check']} 
        onClick={handleClickTag}
        alt={icon} 
      />
      { active ? (
        <input 
          type="text" 
          maxLength={14}
          onKeyUp={event => event.key === "Enter" && addTag()} 
          onChange={(event) => setTag(event.target.value)}
        />
      ) : ( 
        <span>{name}</span>
      ) }
    </Container>
  );
}

