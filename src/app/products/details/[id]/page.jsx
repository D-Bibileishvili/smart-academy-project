const page = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return <h1>{product.title}</h1>;
};

export default page;
