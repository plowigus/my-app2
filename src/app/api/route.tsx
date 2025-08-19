// app/api/products/route.ts
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Pobieranie klucza API z zmiennych środowiskowych
  const apiKey = process.env.MATTERHORN_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "API key is not configured" },
      { status: 500 }
    );
  }

  try {
    // Użycie URL z Twojego przykładu, z brand_id=428 i page=1
    const apiUrl =
      "https://matterhorn-wholesale.com/B2BAPI/ITEMS/?brand_id=428&page=1";

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `${apiKey}`, // Użycie Twojego klucza API
      },
    });

    if (!response.ok) {
      // Obsługa błędów, jeśli serwer Matterhorn zwróci błąd
      throw new Error(
        `Failed to fetch data from Matterhorn: ${response.statusText}`
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    // Obsługa błędów, np. problemów z siecią
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
