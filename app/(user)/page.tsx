import Hero from "@/components/Home/hero";
import UserLayout from "@/components/layout/UserLayout";
import Overview from "./impact/Overview";
import Overview2 from "./impact/Overview2";
import Stages from "@/components/Home/Stages";

export default function Home() {
  return (
    <UserLayout
      title="FACE World Leadership School"
      description="FACE World Leadership School, a residential institution in Kerala, is dedicated to nurturing the">
      <Hero/>
      <Stages/>
      <Overview/>
      <Overview2/>
    </UserLayout>
  );
}
