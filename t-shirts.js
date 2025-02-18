const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]

// This most of the code is adapted from the T-shirts practice instructions in Week 7 of MTM6404
// I tried to take the concept learned from that practice and apply it to this project while using what was taught so far in Week 6
// Original source: https://github.com/platard/mtm6404-t-shirts-final (Date accessed: 2025-02-18)


// Render the app
const App = () => {
  // Handle the buy button
  const handleBuy = (index, quantity) => {
    // Check if the quantity is available
    if (tshirts[index].stock >= quantity) {
      tshirts[index].stock -= quantity;
      renderApp();
    }
  };


  /*
  The return statement renders JSX to the DOM. The map method iterates over the tshirts array, rendering a card for each item. 
  Each card displays an image, title, price, stock, a quantity dropdown, and a "Buy" button. 
  The dropdown lets users select a quantity, and the button triggers the handleBuy function when clicked.
  */
 
  return (
    <div className="container mt-5">

      <h1 className="mb-4 title">T-Shirts</h1>

      <div className="row">
        
        {tshirts.map((tshirt, index) => (
          <div key={index} className="col col-12 col-md-6 col-lg-4 my-3">
            <div className="card tshirt-card">
              <img className="img-fluid" src={`images/${tshirt.image}`} alt={tshirt.title} />
              
              <div className="card-body">
                <h2 className="tshirt-title">{tshirt.title}</h2>
                <p className="tshirt-price"><strong>${tshirt.price.toFixed(2)}</strong></p>
                
                {tshirt.stock > 0 ? (
                  <>
                    <p className="tshirt-stock">{tshirt.stock} left</p>
                    
                    <select id={`quantity-${index}`} className="form-select quantity-select">
                      {[...Array(tshirt.stock)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>

                    <button 
                      type="button" 
                      className="btn btn-primary buy-button mt-1" 
                      onClick={() => handleBuy(index, parseInt(document.getElementById(`quantity-${index}`).value))}
                    >
                      Buy
                    </button>
                  </>
                ) : (
                  <p className="text-danger out-of-stock">Out of stock</p>
                ) }

              </div>
            </div>
          
          </div>
        )) }
      </div>
    
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
