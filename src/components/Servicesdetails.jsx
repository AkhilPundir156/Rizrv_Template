import React, { useEffect, useState } from "react";
import { HiCheck } from "react-icons/hi";
import axios from "axios";

const Servicesdetails = (props) => {
  const data = props.data[props.cate].company_service[props.val];
  // console.log(data)
  const [toggle, settoggle] = useState(false);
  const [slugdata, setslugdata] = useState("");
  let domain, slugurl;
  useEffect(() => {
    window.scroll({ top: 0, behavior: "smooth" });

    const fetchData = async () => {
      try {
        domain = window.location.hostname.split(".")[0];
        // console.log(domain);
        slugurl = window.location.href.split("?")[1];

        if (domain && slugurl) {
          const apiUrl = `https://apis.rizrv.in/api/company/web/service/show/${domain}/${slugurl}`;
          const response = await axios.get(apiUrl);
          console.log("this is the response ", response.data.ca_services.ratings);
          setslugdata(response.data);
          console.log("this is slug", slugdata);
        } else {
          console.error("Domain not found in the URL.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
    console.log("this is slug data",slugdata?.ca_services?.rating);
  }, [window.location.href]);

  return (
    <>
      <section className="serv-page-top flex w-full justify-center p-5 flex-wrap">
        {/* {slugdata?.ca_services?.category?.name || " "}  */}
        <div className="serv-first border rounded-sm border-black w-1/2 m-3">
          <h3 className="text-xl font-semibold p-4">{data.name.toUpperCase()}</h3>
          <p className="p-4 py-0 text-blue-600">
            <span className="text-black bg-green-600 p-1  mr-1">{`${slugdata?.ca_services?.ratings?.[1] || 0} `}</span> {` ${slugdata?.ca_services?.featured} `}
            Customers
          </p>
          <p className="text-gray-500 p-4">{data.slug}</p>
          <div className="productwrapper flex w-full justify-around">
            <div className="w-2/5">
              {(data.image && (
                <img
                  className=" rounded-md"
                  src={data.image}
                  alt=""
                  srcset=""
                />
              )) ||
                (data.video && (
                  <video controls>
                    <source src={data.video} type="video/mp4" />
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
                  Load more
                </span>
              </p>
            </div>
            <div className="w-1/2 ">
              <div className="importer h-fit border mb-4 bg-gray-200 border-gray-400 rounded-sm sticky top-40">
                <h3 className="text-lg p-6 pb-2">IMPOETER EXPORTER CODE</h3>
                <div className="p-6 pt-0 text-gray-500">
                  <div className="flex items-center ">
                    <i className="pr-2 text-blue-600">
                      <HiCheck />
                    </i>
                    IEC Certificate
                  </div>
                  <div className="flex items-center ">
                    <i className="pr-2 text-blue-600">
                      <HiCheck />
                    </i>
                    IEC Certificate
                  </div>
                  <div className="flex items-center ">
                    <i className="pr-2 text-blue-600">
                      <HiCheck />
                    </i>
                    IEC Certificate
                  </div>
                  <div className="flex items-center ">
                    <i className="pr-2 text-blue-600">
                      <HiCheck />
                    </i>
                    IEC Certificate
                  </div>
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
                      <strike>{data.market_price}</strike>
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
                      {data.market_price - data.price}
                    </span>{" "}
                    (
                    <span id="lblsaveper">
                      {Math.ceil(
                        ((data.market_price - data.price) * 100) /
                          data.market_price
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
                  <td className="px-5 you_save text-[16px] text-[#2AA644]">
                    ₹<span id="lbllegaldevprice">{data.purchase_price}</span>
                  </td>
                </tr>
                {/* <tr className="py-2">
                  <th className="px-5"></th>
                  <td className="px-5 excl_gst text-[13px]">
                    ₹<span id="lblbaseamount">1230</span> + ₹
                    <span id="lblgst">270</span> GST
                  </td>
                </tr> */}
                <tr className="gov_fee_tr leading-6">
                  <th className="px-5 flex text-[13px] justify-between">TAX</th>
                  <td className="px-5 gov_fee text-[13px]">{data.tax_type}</td>
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
      {toggle && (
        <section className="bg-blue-200 p-4 ">
          <div className="bg-white p-8 shadow-md w-4/5 m-auto ">
            <h2 className="text-2xl font-bold mb-4 w-full text-center bg-current text-white p-1">
              {data.slug}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
            {/* <p className="text-gray-700 mb-4">
        A One Person Private Limited Company (OPC) is a type of company structure in India where a single individual can start and operate a business as a separate legal entity. This means that the individual will have limited liability protection and the company will have a perpetual existence, separate from the owner.
      </p>
      <h3 className="text-xl font-semibold mb-2">Advantages of a One Person Company</h3>
      <p className="text-gray-700 mb-4">
        The main advantage of a One-man private limited company is that it allows a single person to start and operate a business with limited liability protection, similar to a traditional private limited company. This means that the personal assets of the owner are protected in case the business incurs any debt or legal issues.
      </p>
      <p className="text-gray-700 mb-4">
        Another important advantage is that a One Person company private limited has a separate legal identity, which means that it can enter into contracts, sue or be sued in its self-name, and hold assets in its own name. This provides greater credibility and ease of doing business, as compared to a sole proprietorship.
      </p>
      <h3 className="text-xl font-semibold mb-2">Governance and Tax Benefits</h3>
      <p className="text-gray-700 mb-4">
        In India, OPCs are governed by the Companies Act, of 2013, and are a popular choice for small businesses and entrepreneurs who want to start a business with limited liability protection. Additionally, single person private limited companies also enjoy certain tax benefits and exemptions, making them an attractive option for business owners.
      </p> */}
          </div>
        </section>
      )}
    </>
  );
};

export default Servicesdetails;
