
import { Link } from "react-router-dom";
import logoIcon from "./Assets/logo.png";

const Footer = () => {
  return (
    <footer className="md:p-20 p-5 flex md:flex-row flex-col justify-between md:items-end ">
      <div className="flex flex-col justify-between">
        <div className="flex justify-center items-center">
          <div>
            <img className="w-16" src={logoIcon} alt="logo" />
          </div>
          <div className="mx-2">
            <h2 className="font-bold text-4xl text-brand  cursor-pointer underline decoration-brand decoration-4">
              IronPulse
            </h2>
            <p>Fit and Health</p>
          </div>
        </div>
        <div className="my-5">
          <h5 className="font-bold text-2xl  cursor-pointer mb-2">
            Quick links
          </h5>
          <ul className=" flex flex-col text-sm child:my-0.5">
            <li>
              <Link to="/workoutvideo" className=" hover:underline" href="#">
                Workout Resource
              </Link>
            </li>
            <li>
              <Link to="/showbmi" className="hover:underline" href="#">
                BMI Calculator
              </Link>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-2xl  cursor-pointer ">
            Connect with us
          </h2>
          <ul className="my-5 flex flex-col text-sm child:my-0.5">
            <li>
              <i className="bi bi-twitter-x"></i>
              <a className="m-2 hover:underline" href="#">
                Twitter
              </a>
            </li>
            <li>
              <i className="bi bi-linkedin"></i>
              <a className="m-2 hover:underline" href="#">
                LilnkedIn
              </a>
            </li>
            <li>
              <i className="bi bi-discord"></i>
              <a className="m-2 hover:underline" href="#">
                Discord
              </a>
            </li>
            <li>
              <i className="bi bi-instagram"></i>
              <a className="m-2 hover:underline" href="#">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        {/* <div>
          <h5 className="font-bold text-xl">Contact Us</h5>
          <ul className="my-5 flex flex-col text-sm child:my-2">
            <li className=" hover:underline">+919999999999</li>
            <li className=" hover:underline">ironpulse.contact@gmail.com</li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
