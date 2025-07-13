import { useParams } from 'react-router-dom';
import Allproducts from './Allproducts';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import Men from './Men';
import Women from './Women';

function Shop() {
  const { name } = useParams();

  return (
    <>
      {name ==='electronics' ? (
        <Electronics />
        ): name ==='men' ?(
        <Men />
        ): name ==='women' ?(
        <Women />
        ): name ==='jewelery' ?(
        <Jewelery />
        ): (<Allproducts />)
      }
    </>
  );
}

export default Shop;