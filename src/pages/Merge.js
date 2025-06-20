import React from 'react';

const Merge = () => {
  return (
    <>
      <main>
        <div className="divTitle">
          <h1 className="title">Merger & Acquisition</h1>
        </div>

        {/* ✅ Fixed image path */}
        <img src={`${process.env.PUBLIC_URL}/images/merge.webp`} alt="Merge & Acquisition" className="mergeImg" />
        
        <hr />

        <p className="desc">
          At our Chartered Accountancy firm, we provide end-to-end advisory...
        </p>

        <h3 className="heading">Our Services</h3>

        <p className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit...
        </p>
      </main>
    </>
  );
};

export default Merge;
