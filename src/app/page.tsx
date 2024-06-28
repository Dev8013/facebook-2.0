import AddPosts from "@/Components/AddPosts";
import Feed from "@/Components/Feed";
import LeftMenu from "@/Components/LeftMenu";
import Navbar from "@/Components/Navbar";
import RightMenu from "@/Components/RightMenu";
import Stories from "@/Components/Stories";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Navbar />
    <div className="p-4 bg-slate-100 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="flex gap-6 p-4">
          {/* LEFT */}
          <div className="hidden xl:block w-[20%]">
            <LeftMenu />
          </div>
          {/* CENTER */}
          <div className="w-full lg:w-[70%] xl:[50%]">
              <div className="flex flex-col gap-6">
                <Stories />
                <AddPosts />
                <Feed />
              </div>
          </div>
          {/* RIGHT */}
          <div className="hidden lg:block w-[30%]">
            <RightMenu />
          </div>
      </div>
    </div>
   </div>
  );
}
