import { getFeaturedProducts } from "@/lib/products/product-select";

export const generateStaticParams = async () => {
  const products = await getFeaturedProducts();

  const staticParams = products.map((product) => ({
    id: product.id.toString(),
  }));

  // staticParams = [
  //   { id: '1' },
  //   { id: '2' },
  //   ............,
  // ]

  return staticParams;
};

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
