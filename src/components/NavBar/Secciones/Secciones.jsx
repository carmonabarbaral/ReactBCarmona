import { Link } from "react-router-dom";
export const Secciones = () => {
    return (
      <>
          <li className="nav-item">
           <Link className="nav-lin" to={`/`}> <button className="btn btn-dark">Home</button></Link>
          </li>
        
      </>
    )
  }