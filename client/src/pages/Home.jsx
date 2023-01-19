import {NavbarBootstrap} from '../components/Navbarbs'
import { Link } from "react-router-dom";
import LandPage from "../components/LandPage"

const Home = () => {
  return (
    <>
      <div>
        
          <NavbarBootstrap />
          
          
          <LandPage />

          {/* <Link to="/login">
            <button>File a Complaint (REDIRECT TO LOG IN PAGE)</button>
          </Link>
        
          <Link to="/signup">
            <button>Sign up Button (TEMPORARY BUTTON TO TEST SIGN UP PAGE)</button>
          </Link> */}
        
          
      </div>
    </>
  )
}

export default Home;
