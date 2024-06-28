import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
    <div className="flex flex-col w-full  p-4 items-center    bg-slate-100 self-center">
      <div className="flex p-4 mt-6 mb-6">
      <span className="text-2xl font-semibold">Welcome From Facebook 2.0</span>
      </div>
      
      {/* Upper */}
      <div className="lg:flex  items-center gap-10 ">
        {/* Upper-Left */}
        <div className="flex flex-col gap-4 items-center mb-4 p-4 ">
          <span className="text-blue-600 font-bold text-3xl">facebook 2.0</span>
          <span className="text-xl text-wrap">Facebook helps you connect and share with the people in your life.</span>
        </div>
        {/* Upper-Right */}
        <div className="flex flex-col gap-4 p-4 items-center ">
          <SignIn />
          <span><b>Create</b> a page for celebrity, brand or business</span>
        </div>

      </div>
      {/* Lower */}
      <div className="flex flex-col w-full gap-22 p-4 mt-10">
        <div className="flex items-center justify-center gap-4  p-2">
            <span>English (UK)</span>
            <span>हिन्दी</span>
            <span>ਪੰਜਾਬੀ</span>
            <span>नेपाली</span>
            <span>اردو</span>
            <span>ગુજરાતી
            </span>
            <span>বাংলা
            </span>
            <span>தமிழ்
            </span>
            <span>తెలుగు
            </span>
            <span>
            മലയാളം
            </span>
            <span>
            ಕನ್ನಡ
            </span>
            <button className="text-gray-900 rounded-lg p-1 border-2 bg-slate-100">+</button>
        </div>
      </div>
    </div>
    <div className="p-2 mt-4 justify-center flex items-center text-wrap flex-wrap text-gray-500 text-sm gap-2">
      <span>Sign</span>
      <span>UpLog </span>
      <span>inMessengerFacebook</span>
      <span>LiteVideoPlacesGamesMarketplaceMeta</span>
      <span>PayMeta</span>
      <span>StoreMeta</span>
      <span>QuestMeta</span>
      <span>AIInstagramThreadsFundraisersServicesVoting</span>
      <span> Information</span>
      <span>CentrePrivacy</span>
      <span>PolicyPrivacy</span>
      <span>CentreCookie</span>
      <span>settingsGroupsAboutCreate</span>
      <span>adCreate</span>
      <span>PageDevelopersCareersCookiesCookie</span>
      <span>settingsAdChoicesTermsHelpContact</span>
      <span>uploading</span>
      <span>and</span>
      <span>non-usersSettings</span>     
    </div>
    <div className="flex items-center justify-center pt-4 mt-4">
      <p className="cursor-pointer">@ Meta 2024</p>
    </div>
    </>
    
  );
}