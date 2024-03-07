import axios from "axios";
import React, { useEffect, useState } from "react";

const Cancellation = () => {
  const [Data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/front/pages/data/${subdomain}`;

          const response = await axios.get(apiUrl);
          setData(response.data.data.disclaimer);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();

    // console.log(Data)
  }, []);

  useEffect(() => window.scroll({ top: 0, behavior: "smooth" }), []);
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div
          className="prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: Data }}
        ></div>
      </div>
    </div>
  );
};

export default Cancellation;
