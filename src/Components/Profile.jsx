import { useParams } from 'react-router-dom';
import Popeye from './Popeye';
import Spinash from './Spinash';
import DefaultProfile from './DefaultProfile';

function Profile() {
 const {name} = useParams();
  // Affichage
  return (
    <>
     <h1>Hello World</h1>
     <p>This is a paragraph from profile page</p>
     <hr />
     <h2>The profile visited is here: </h2>
     {/* {name === "popeye" ? (<Popeye />) : name === "spinash" ? (<Spinash />) : (<DefaultProfile />)} */}
    </>
  );
}

export default Profile;