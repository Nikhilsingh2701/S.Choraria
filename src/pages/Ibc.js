import React from 'react';

const Ibc = () => {
  return (
    <>
      <main>
        <div className="divTitle">
          <h1 className="title">Insolvency and Bankruptcy Code</h1>
        </div>

        {/* ✅ Fixed image path */}
        <img src={`${process.env.PUBLIC_URL}/images/bankruptcy.webp`} alt="Bankruptcy" className="ibcImg" />

        <hr />

        <p className="desc">
          Our firm offers expert advisory and compliance services...
        </p>

        <h3 className="heading">Our Services</h3>

        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit...
        </p>
      </main>
    </>
  );
};

export default Ibc;
