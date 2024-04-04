import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "../src/styles/About.css";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/Privacy";
import Termsandcond from "./components/Terms";
import Cancellation from "./components/Cancellation";
import Home from "./components/Home";
import ContactForm from "./components/Contactus";
import Servicesdetails from "./components/Servicesdetails";
import LoginForm from "./components/LoginForm";
import SignForm from "./components/SignupForm";
import About from "./components/About";
import "./styles/MediaQuery.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [Data, setData] = useState([]);
  const [navitems, setnavitems] = useState([]);
  const [ThemeData, setThemeData] = useState()

  // console.log("this is page",Date.now())
  const [cate, setCate] = useState("");
  const [val, setVal] = useState("");
  const [mainindex, setMainindex] = useState(-1);
  const [compdata, setcompdata] = useState();  

  const updatecate = (value) => setCate(value);
  const updateval = (newval) => setVal(newval);
  const updateindex = (idx) => setMainindex(idx);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/web/${subdomain}/all/category`;

          const response = await axios.get(apiUrl);
          setData(response?.data);
          // console.log(response.data)
          setnavitems(response?.data?.categories);
          // console.log(Data)
        } else {
          console.error("Domain not found in the URL.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/setup/info/${subdomain}`;

          const response = await axios.get(apiUrl);
          // console.log(response);
          setcompdata(response);
        } else {
          console.error("Domain not found in the URL.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/setup/info/${subdomain}`;

          const response = await axios.get(apiUrl);
          setThemeData(response?.data?.company_data?.theme);
          // console.log("this is service page",response.data.company_data.theme);
          // console.log(Data)
        } else {
          console.error("Domain not found in the URL.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        {ThemeData && <Navbar
          navitems={navitems}
          updatecate={updatecate}
          updateval={updateval}
          updateindex={updateindex}
          compdata={compdata}
          ThemeData={ThemeData}
        />}

        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={navitems}
                category={cate}
                updatecate={updatecate}
                updateval={updateval}
                mainindex={mainindex}
                updateindex={updateindex}
                compdata={compdata}
                ThemeData={ThemeData}
              />
            }
          />
          <Route path="/termscond" element={<Termsandcond ThemeData={ThemeData} />} />
          <Route path="/Aboutus" element={<About ThemeData={ThemeData}/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy ThemeData={ThemeData}/>} />
          <Route path="/cancellation" element={<Cancellation ThemeData={ThemeData}/>} />
          <Route path="/contact" element={<ContactForm ThemeData={ThemeData}/>} />
          <Route path="/serv-details/:slug" element={<Servicesdetails ThemeData={ThemeData}/>} />
          <Route path="/signup" element={<SignForm ThemeData={ThemeData}/>} />
          <Route path="/login" element={<LoginForm ThemeData={ThemeData}/>} />
        </Routes>
        <Footer compdata={compdata} ThemeData={ThemeData}/>
      </Router>
    </>
  );
}

export default App;
