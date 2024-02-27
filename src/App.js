import logo from './asserts/logo.png'
import img1 from './asserts/1.png'
import img2 from './asserts/2.png'
import img3 from './asserts/3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-image" />
        </div>
        <div className="main">
          <div className="first">
            <img className="firstimg" src={img1} alt="img1" />
          </div>
          <div className="second">
            <h4>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{' '}
              </li>
            </ul>
            <img className="award" src={img2} alt="img2" />
            <p>
              Government of India has awarded the
              <span id="national">
                "National Energy Conservation Award 2018".
              </span>{' '}
              Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
              the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
              Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <div>
          <p className="para">
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </p>
          <img className="img3" src={img3} alt="img3" />
          <p className="items">
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </p>
        </div>
        <div>
          <h3 className="title">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </h3>
          <h5 className="list">
            <span className="full-line">
              CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS |
              PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE &
              DEFENCEMETAL & MINING | FOOD & BEVERAGE |
            </span>
            <span className="center">
              PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE
              FIGHTING | AGRICULTURE & RESIDENTIAL
            </span>
          </h5>
        </div>
        <div className="footer">
          <p>
            <FontAwesomeIcon
              icon={faPhone}
              style={{
                color: 'red',
                borderRadius: '50%',
                background: '#fff',
                padding: '5px',
              }}
            />
            Toll free 1800 200 1234
          </p>

          <p>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                color: 'red',
                borderRadius: '50%',
                background: '#fff',
                padding: '5px',
              }}
            />
            www.facebook.com/cripumps
          </p>
          <p>
            <FontAwesomeIcon
              icon={faGlobe}
              style={{
                color: 'red',
                borderRadius: '50%',
                background: '#fff',
                padding: '5px',
              }}
            />
            www.crigroups.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
