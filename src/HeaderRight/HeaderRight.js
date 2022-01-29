import "./HeaderRight.css";

function Header() {
  return (
    <div className="Header_right">
      <ul>
        <li>
          <p>Find dentist</p>
        </li>

        <li>
         <p>Procedures</p>
        </li>

        <li>
        <p>Articles</p>
        </li>

       <div className= "ManasviButton">
       <img src="./Manasvi.jpg" alt="" />
       <button>Manasvi</button>
       </div>
         
        
      </ul>
    </div>
  );
}

export default Header;
