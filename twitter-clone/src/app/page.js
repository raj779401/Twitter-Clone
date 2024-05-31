import Image from "next/image";
import SideBar from "../../components/SideBar";
import Feed from "../../components/Feed";
import SearchWidget from "../../components/SearchWidget";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-7xl mx-auto " >
        
        <SideBar/>
        <Feed/>
        <SearchWidget/>
        
    </main>
  );
}
