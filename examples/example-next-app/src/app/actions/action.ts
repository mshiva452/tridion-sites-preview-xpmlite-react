export declare type PageData = Record<string, any>;

export async function getPageData<T = PageData>(data: Record<string, unknown>): Promise<T> {
  const res = await fetch(process.env.NEXT_PUBLIC_TRIDION_SITES_GRAPHQL_URL as string, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Server error: ${res.statusText}`);
  }

  return res.json();
}
