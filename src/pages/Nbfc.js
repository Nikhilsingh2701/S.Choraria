import React from 'react';

const Nbfc = () => {
  return (
    <>
      <main>
        <div className="divTitle">
          <h1 className="title">NBFC Compliance</h1>
        </div>

        {/* ✅ Fixed image path */}
        <img src={`${process.env.PUBLIC_URL}/images/nbfc.webp`} alt="NBFC" className="nbfcImg" />
        
        <hr />

        <p className="desc">
          Our firm offers specialized advisory and compliance services...
        </p>

        <h3 className="heading">Our Services</h3>

        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit...
        </p>
      </main>
    </>
  );
};

export default Nbfc;
