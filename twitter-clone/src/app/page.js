import SideBar from "../../components/SideBar";
import Feed from "../../components/Feed";
import SearchWidget from "../../components/SearchWidget";

async function getNews() {
  const res = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json');
  const data = await res.json();
  return data;
}

async function getRandomFollowers() {
  const res = await fetch('https://randomuser.me/api/?results=50&inc=name,login,picture');
  const data = await res.json();
  return data;
}

export default async function Home() {
  const news = await getNews();
  const randomFollowers = await getRandomFollowers();
  
  return (
    <main className="flex min-h-screen mx-auto">
      <SideBar />
      <Feed />
      <SearchWidget newsResult={news.articles} followers={randomFollowers.results} />
    </main>
  );
}
