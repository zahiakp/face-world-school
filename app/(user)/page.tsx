import Hero from "@/components/Home/hero";
import UserLayout from "@/components/layout/UserLayout";
import Overview from "./impact/Overview";
import Overview2 from "./impact/Overview2";

export default function Home() {
  return (
    <UserLayout>
      <Hero/>
      <Overview/>
      <Overview2/>
    </UserLayout>
  );
}
