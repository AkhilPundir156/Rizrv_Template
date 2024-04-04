import React, { useEffect, useState } from "react";
import axios from "axios";

function htmlToText(html) {
  return html.replace(/<[^>]+>/g, "");
}

const Servicesdetails = (props) => {
  const [toggle, settoggle] = useState(false);
  const [slugdata, setslugdata] = useState("");
  let domain, slugurl, totaldesc;
  const ThemeData = props?.ThemeData;
  const primary_color = ThemeData?.primary_color;
  // console.log(ThemeData);

  const defaultimg = "https://resrv.in/assets/img/placeholder.png";

  useEffect(() => {
    // console.log(window.location.href);
    window.scroll({ top: 0, behavior: "smooth" });

    const fetchData = async () => {
      try {
        domain = window.location.hostname.split(".")[0];
        slugurl = window.location.href.split("/");
        slugurl = slugurl[slugurl.length - 1];

        if (domain && slugurl) {
          const apiUrl = `https://apis.rizrv.in/api/company/web/service/show/${domain}/${slugurl}`;
          const response = await axios.get(apiUrl);
          // console.log("this is the response ", response.data.ca_services.ratings);
          setslugdata(response.data);
        } else {
          console.error("Domain not found in the URL.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
    // console.log("this is slug data",slugdata?.ca_services?.rating);
    totaldesc = slugdata?.ca_services?.description;
  }, [window.location.href]);

  const yellowStars = Math.min(
    Math.max(0, Number(slugdata?.ca_services?.ratings?.[1]) || 0),
    5
  ); // Ensure rating is between 0 and 5
  const grayStars = 5 - yellowStars;

  const yellowStar = <span style={{ color: "orange" }}>★</span>;
  const grayStar = <span style={{ color: "gray" }}>★</span>;

  return (
    <>
      <section className="serv-page-top flex w-full justify-center p-5 flex-wrap">
        {/* {slugdata?.ca_services?.category?.name || " "}  */}
        <div className="serv-first border rounded-sm border-black w-1/2 m-3 p-2 py-7">
          {/* <h3 className="text-xl font-semibold p-4">{slugdata?.ca_services?.name.toUpperCase()}</h3> */}
          {/* <p className="p-4 py-0 text-blue-600">
            <span className="text-black bg-green-600 p-1  mr-1">{`${slugdata?.ca_services?.ratings?.[1] || 0} `}</span> {` ${slugdata?.ca_services?.featured} `}
            Customers
          </p> */}
          {/* <p className="text-gray-500 p-4">{slugdata?.ca_services?.slug}</p> */}
          <div className="productwrapper flex w-full justify-around">
            <div className="w-2/5">
              {(
                <img
                  className=" rounded-md"
                  src={slugdata?.ca_services?.image || defaultimg}
                  alt=""
                  srcset=""
                />
              ) ||
                (slugdata?.ca_services?.video && (
                  <video controls>
                    <source
                      src={slugdata?.ca_services?.video}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ))}

              <h3 className="text-xl font-bold underline py-2"> 
                Document Required{" "}
              </h3>
              <p className="text-gray-500 text-md ">
                {slugdata?.ca_services?.docs.map((item, index) => (
                  <p key={index}>
                    {`>>${item.name}`}
                    <br />
                  </p>
                ))}

                <span
                  onClick={() => settoggle(!toggle)}
                  className="text-blue-600 leading-8 cursor-pointer"
                >
                  Load {!toggle ? "More" : "Less"}
                </span>
              </p>
            </div>
            <div className="w-1/2 ">
              <div className="importer h-fit border mb-4 bg-gray-200 border-gray-400 rounded-sm sticky top-40">
                <h3 className="text-lg p-6 pb-0">
                  {slugdata?.ca_services?.name.toUpperCase()}
                </h3>
                <div className="p-6 pt-0 text-gray-500">
                  <div className="flex items-center ">
                    {slugdata?.ca_services?.slug}
                  </div>
                  <div className="flex items-center text-2xl ">
                    {[...Array(yellowStars)].map((_, index) => (
                      <span key={index}>{yellowStar}</span>
                    ))}
                    {[...Array(grayStars)].map((_, index) => (
                      <span key={index}>{grayStar}</span>
                    ))}
                  </div>
                  <span className=" text-sm">
                    ({slugdata?.ca_services?.featured} reviews)
                  </span>
                  <div className="flex items-center ">
                    {/* <p
                      dangerouslySetInnerHTML={{
                        __html: truncateHTML(
                          slugdata?.ca_services?.description,
                          1
                        ),
                      }}
                    ></p> */}
                    {slugdata?.ca_services?.description &&
                      htmlToText(slugdata?.ca_services?.description).slice(
                        0,
                        100
                      )}
                    ... <br />
                  </div>
                  <button
                    className={`text-[${primary_color}]`}
                    onClick={() => settoggle(!toggle)}
                  >
                    Read {!toggle ? "More" : "Less"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="serv-second w-1/4 border sticky top-36 bg-gray-100 rounded-sm border-black h-fit m-4">
          <div className="first-wrapper pb-4">
            <h3 className="text-md font-semibold underline p-4">
              {" "}
              Pricing Summary
            </h3>
            <table className="table ban_table text-sm">
              <tbody>
                <tr className="leading-6">
                  <th className="px-5 flex justify-between text-[13px] font-semibold">
                    Market Price<span className="font-bold">:</span>
                  </th>
                  <td className="px-5 product-price text-[14px]  ">
                    ₹
                    <span id="lblmarketprice">
                      <strike>{slugdata?.ca_services?.market_price}</strike>
                    </span>
                  </td>
                </tr>
                <tr className="leading-6">
                  <th className="px-5 flex justify-between text-[13px] font-semibold">
                    You Save<span className="font-bold">:</span>
                  </th>
                  <td className="px-5 incl_gst text-[13px] text-[#b12704] font-[600]">
                    ₹
                    <span id="lblyousave">
                      {slugdata?.ca_services?.market_price -
                        slugdata?.ca_services?.price}
                    </span>{" "}
                    (
                    <span id="lblsaveper">
                      {Math.ceil(
                        ((slugdata?.ca_services?.market_price -
                          slugdata?.ca_services?.price) *
                          100) /
                          slugdata?.ca_services?.market_price
                      )}
                    </span>
                    %)
                  </td>
                </tr>
                <tr className="leading-6">
                  <th className="px-5 flex text-[13px] justify-between">
                    <strong>Our Price</strong>
                    <span>:</span>
                  </th>
                  <td className="px-5 you_save text-[16px] text-[#2aa644]">
                    ₹
                    <span id="lbllegaldevprice">
                      {slugdata?.ca_services?.price}
                    </span>
                  </td>
                </tr>

                <tr className="gov_fee_tr leading-6">
                  <th className="px-5 flex text-[13px] justify-between">TAX</th>
                  <td className="px-5 gov_fee text-[13px]">
                    {slugdata?.ca_services?.tax_type}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="second-wrapper p-4 bg-white  ">
            <input
              type="text"
              id="txtName"
              className="form-control w-full my-2 p-3 focus:outline-none border-black border"
              placeholder="Enter Name"
            />
            <input
              type="text"
              id="txtName"
              className="form-control w-full my-2   p-3 focus:outline-none border-black border"
              placeholder="Enter Mobile No."
            />
            <input
              type="text"
              id="txtName"
              className="form-control w-full my-2   p-3 focus:outline-none border-black border"
              placeholder="Enter Email Id"
            />
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
            >
              Sumbit
            </button>
          </div>
        </div>
      </section>
      {/* Toggle for Read More when clicked  */}
      {toggle && (
        <section className="bg-blue-200 p-4 ">
          <div className="bg-white p-8 shadow-md w-4/5 m-auto ">
            <h2 className="text-2xl font-bold mb-4 w-full text-center bg-current text-white p-1">
              {slugdata?.ca_services?.slug}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: slugdata?.ca_services?.description,
              }}
            ></p>
          </div>
        </section>
      )}
    </>
  );
};

export default Servicesdetails;
