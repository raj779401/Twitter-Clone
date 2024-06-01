import Image from "next/image";
import SideBar from "../../components/SideBar";
import Feed from "../../components/Feed";
import SearchWidget from "../../components/SearchWidget";


async function getNews() {
  const res = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json');
  const data = await res.json();
  return data;
}



export  default async function Home() {
  const news = await getNews();
  return (
    <main className="flex min-h-screen  mx-auto " >
        
        <SideBar/>
        <Feed/>
        <SearchWidget newsResult={news.articles} />
        
    </main>
  );
}

// export async function getServerSideProps() {
//   const newsResult = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json');
//   const news = newsResult.json();
//   return {
//     props: {
//       news,
//     }
//   };
// }
