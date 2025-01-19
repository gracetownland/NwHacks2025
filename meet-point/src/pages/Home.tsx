import { CommunityEvents } from "@/CommunityEvents";
import Divider from "@/components/Divider";
import { Header } from "@/Header";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Header />
      <Divider />
      <CommunityEvents />
    </div>
  );
}

export default Home;
