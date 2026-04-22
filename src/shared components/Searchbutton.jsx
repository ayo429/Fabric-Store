import React from "react";
function Searchbutton({ searchProducts,setSearchProducts}) {
  return (
    <>
      <div
        className="search-container flex justify-between items-center"
        style={{ boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.35)" }}
      >
         <div className="inpt">
           <input
            className="search-input px-2 rounded-lg flex-1"
            type="text"
            placeholder="Search..."
            value={searchProducts}
            onChange={(e)=>setSearchProducts(e.target.value)}
            onKeyDown={(e)=>e.key === "Enter" && setSearchProducts(e.target.value)}
          />
         </div>
          {/* <div className="btn border-2">
            <button className="bg-black flex items-center justify-center" onClick={handleSearch}>
            <img src="/searchlogo.png" alt="Search" className="h-full w-full object-contain" />
          </button>
          </div> */}
      </div>
    </>
  );
}

export default Searchbutton;
