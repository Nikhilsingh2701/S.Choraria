const Industries = () => {
  return (
    <>
      <main>
        <div className="divTitle">
          <h1 className="title">Industries</h1>
        </div>

        <img src={`${process.env.PUBLIC_URL}/images/industries.webp`} alt="Industries" className="nbfcImg" />
        <hr />
        
        <div className="card-container">

          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/banking.webp`} alt="Banking Sector" />
            <p>Banking & Finance Sector</p>
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/nonprofit.webp`} alt="Non-Profit Organisation" />
            <p>Non-Profit Organisation</p> 
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/printing.webp`} alt="Printing Sector" />
            <p>Printing Sector</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/textile.webp`} alt="Textile Industries" />
            <p>Textile Industries</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/realestate.webp`} alt="Real estate" />
            <p>Real estate</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/money.webp`} alt="NBFC sector" />
            <p>NBFC sector</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/food.webp`} alt="Restaurant and Food Sector" />
            <p>Restaurant and Food Sector</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/fibre.webp`} alt="Fiber reinforced plastic" />
            <p>Fiber reinforced plastic</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/retail.webp`} alt="Retail" />
            <p>Retail</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/entertainment.webp`} alt="Entertainment" />
            <p>Entertainment</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/steel.webp`} alt="Steel Industry" />
            <p>Steel Industry</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/leather.webp`} alt="Leather Industry" />
            <p>Leather Industry</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/media.webp`} alt="Media" />
            <p>Media</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/stocks.webp`} alt="Stock Broking" />
            <p>Stock Broking</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/footwear.webp`} alt="Footwear" />
            <p>Footwear</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/petro.webp`} alt="Petro Chemical" />
            <p>Petro Chemical</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/goods.webp`} alt="Engineering Goods" />
            <p>Engineering Goods</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/rubber.webp`} alt="Rubber" />
            <p>Rubber</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/plastic.webp`} alt="Plastic" />
            <p>Plastic</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/insurance.webp`} alt="Insurance broking" />
            <p>Insurance broking</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/mining.webp`} alt="Mining" />
            <p>Mining</p>   
          </div>
          <div className="card">
            <img src={`${process.env.PUBLIC_URL}/images/sugar.webp`} alt="Sugar Mills" />
            <p>Sugar Mills</p>   
          </div>

        </div>
      </main>
    </>
  );
};

export default Industries;
