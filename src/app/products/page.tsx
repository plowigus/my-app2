import type { Product } from "../../../types/matterhorn";

async function getProducts(): Promise<Product[]> {
  // Żądanie do twojego lokalnego API Route
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    console.error("Błąd podczas pobierania danych z /api/products");
    return [];
  }

  const { data } = await res.json();
  return data;
}

export default async function ProductsPage() {
  const products = await getProducts();

  // W tym miejscu dane są już pobrane i gotowe do użycia
  // Zaloguj dane do konsoli serwera (terminala)
  console.log("Pobrane dane z Matterhorn API:", products);

  // Zwróć komponent, który wyświetli dane
  return (
    <div>
      <h1>Lista Produktów</h1>
      {/* Tutaj możesz użyć `JSON.stringify` do wyświetlenia danych na stronie */}
      <pre>
        <code>{JSON.stringify(products, null, 2)}</code>
      </pre>
    </div>
  );
}
