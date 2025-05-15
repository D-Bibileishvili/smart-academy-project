const page = async ({ params }) => {
  const user = await params;
  const response = await fetch(`https://fakestoreapi.com/users/3${user}`);
  const product = await response.json();
  return <h1>{product.id}</h1>;
};

export default page;
