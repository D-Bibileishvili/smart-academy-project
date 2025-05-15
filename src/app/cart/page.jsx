const fetchCartProduts = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
  
    return result;
  };
  
  const page = async () => {
    const response = await fetch(`https://fakestoreapi.com/carts/2`);
    const cart = await response.json();
    const data = [];
  
    for (let product of cart.products) {
      data.push(await fetchCartProduts(product.productId));
    }
  
    return (
      <div>
        {data.map((item) => (
          <h1 key={item.id}>{item.title}</h1>
        ))}
      </div>
    );
  };
  
  export default page;