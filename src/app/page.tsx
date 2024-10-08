import { Button } from "@/components/ui/button";

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337"
  try{
    const response = await fetch(baseUrl + path)
    const data = await response.json();
    return data;
  } catch(error) {
    console.error(error)
  } 
}

export default async function Home() {

  const strapiData = await getStrapiData("/api/home-page")
  
  const {title, description} = strapiData.data
  return (
      <main className="container mx-auto py-6">
        <h1 className="text-[60px] text-slate-700">{title}</h1>
        <p className="text-slate-500">{description}</p>
      </main>
  );
}
