import React, {  useState } from "react";
import {  HiMail, HiMenu, HiPhone} from "react-icons/hi";
import img from "../assets/rizrv.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";



function Navbar(props) {
  const items =(Object.values(props))[0];
  const updatecate = props.updatecate;
  const updateval = props.updateval;
  const updateindex = props.updateindex;
  // console.log(updateval)
  // console.log(mainitems);
  // console.log(items);
  // items.map((item,idx)=>{console.log(item)})
  

  // items.map((item,index)=>console.log(1))
  const [isOpen, setIsOpen] = useState(false);
  const [isdropped, setDrop] = useState("");



  return (
    <>
      <section className="sticky top-0 z-10 bg-white w-full">
        {/* First line that conatin information and some links  */}
        <div className="nav-first-line flex justify-between  items-center ">
          <div className="nav-details flex px-6 flex-grow pt-1 bg-current  text-white h-8 relative">
            <div className="flex px-3 pl-0 ">
              <div className="my-1 px-1 pl-0">
                <i className="">
                  {" "}
                  <HiMail />{" "}
                </i>
              </div>
              <p>Manal@gmail.com</p>
            </div>
            <div className="flex">
              <div className="my-1 px-1">
                <i>
                  {" "}
                  <HiPhone />
                </i>
              </div>
              <p>+9100000000</p>
            </div>
            <div className=" trianglesh absolute h-8 w-5 bg-white right-0 -mt-1 "></div>
          </div>
          <div className=" text-red-800 font-bold">
            <div className="flex px-10 pr-0 h-fit items-center nav-first-details">
              <Link to={"/"}>
                <p className="px-2 border-r-black border-r">Home</p>
              </Link>
              <Link to="/aboutus">
                <p className="px-2 border-r-black border-r">About</p>
              </Link>
              <Link to="/contact">
                <p className="px-2 border-r-black border-r">Contact</p>
              </Link>
              <p className="px-2 pt-2 ">
                <Link
                  to={"/login"}
                  type="button"
                  class=" bg-current text-white  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
                >
                  SignIn
                </Link>
              </p>
              <p className="pr-4 pt-2">
                <Link
                  to={"/signup"}
                  type="button"
                  class="text-white bg-current hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/* Second line that contain only logo  */}
        <div className="second-line ">
          <div className="second-img">
            <img src={img} className=" mx-auto h-8" alt="" srcset="" />
          </div>
        </div>
        {/* third line and the main line of the navbar  */}
        {/* for small devices */}

        <div className="small-nav hidden border-b-2 border-b-black">
          <nav className="small-third flex h-fit justify-between p-4 items-end relative">
            <div>
              <img src={img} alt="" className="h-8" />
            </div>
            <div className="text-2xl " onClick={() => setIsOpen(!isOpen)}>
              <HiMenu />{" "}
            </div>
          </nav>
          {isOpen && (
            <div className="absolute  h-fit bg-white z-20 w-full -mt-1 border-b-2 border-b-black overflow-scroll">
              {
                items.map((item,index)=>(

                <ul className="p-4">
                  <li className=" text-xl font-semibold py-1">
                    <div
                      className="flex items-end "
                      onClick={() =>
                        isdropped === item.name ? setDrop("") : setDrop(item.name)
                      }
                    >
                      {" "}
                      {item.name} <IoIosArrowDown className="mx-1 pb-1  text-lg" />
                    </div>
                    {isdropped === item.name && (
                      <div className="h-[440px] bg-[#e4f6ff]  overflow-scroll text-[#00354d] m-auto">
                        {item.company_service.map((items, idx) => (
                          <Link
                            to={`/serv-details/${items.slug}`}
                            onClick={()=>{setIsOpen(false);updatecate(index);updateval(idx)}} 
                          >
                            <div className="p-2">{items.name}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>



                  {/* <li className=" text-xl font-semibold py-1 ">
                    <div
                      className="flex items-end "
                      onClick={() =>
                        isdropped === "trademark"
                          ? setDrop("")
                          : setDrop("trademark")
                      }
                    >
                      {" "}
                      Startup <IoIosArrowDown className="mx-1 pb-1  text-lg" />
                    </div>
                    {isdropped === "trademark" && (
                      <div className="h-[440px] bg-[#e4f6ff]  overflow-scroll text-[#00354d] m-auto">
                        {data.map((item, index) => (
                          <Link
                            to="/serv-details"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="p-2">{item.name}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                  <li className=" text-xl font-semibold py-1">
                    <div
                      className="flex items-end "
                      onClick={() =>
                        isdropped === "ISO" ? setDrop("") : setDrop("ISO")
                      }
                    >
                      {" "}
                      ISO <IoIosArrowDown className="mx-1 pb-1  text-lg" />
                    </div>
                    {isdropped === "ISO" && (
                      <div className="h-[440px] bg-[#e4f6ff]  overflow-scroll text-[#00354d] m-auto">
                        {data.map((item, index) => (
                          <Link
                            to="/serv-details"
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="p-2">{item.name}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </li> */}



                </ul>
                ))
              }
            </div>
          )}
        </div>

        {/* for device */}

        <nav className="third-line w-full h-9 border-black border-b-4 mt-6 ">
          <div className="third-line-item flex justify-center">
            {
              
              
              items.map((item,idx)=>(
              <div className="third-line-items flex relative startup px-4 cursor-pointer" onClick={()=>{console.log(item);updatecate(item.slug);;;window.scroll({top:1200,behavior:'smooth'})}}>
              <Link to='/'><div className=" text-current font-bold pr-2">{item.name}</div></Link>
              <i className="absolute p-2 pl-16 right-0 text-xs ">
                {" "}
                <IoIosArrowDown />{" "}
              </i>

              {/* To display all the items of the startup */}

              

             { item.name !== "ISO" && item.name !== "Banking" &&
              <div className=" z-10 nav-items-startup  bg-slate-400   w-full fixed left-0 top-[7.5rem] border-t-2 mt-1.5 h-fit ">
                <div className="  pl-20 bg-white pb-3 border-gray-700 border-b-2 nav-checks">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-3">
                    {item.company_service.map((items, index) => (
                      <div key={index} className=" pt-1 ">
                        <div className="text-sm font-heading mb-1 ">
                          <Link to={`/serv-details/${items.slug}`} onClick={()=>{updatecate(idx);updateval(index)}} >{items.name}</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              }
            </div>

              ))

              
          }
              
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
