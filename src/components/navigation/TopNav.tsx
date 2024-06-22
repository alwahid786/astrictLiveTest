import AddressIcon from "@/svg/AddressIcon";
import ClockIcon from "@/svg/ClockIcon";
import FacebookIcon from "@/svg/FacebookIcon";
import TwitterIcon from "@/svg/TwitterIcon";
import YoutubeIcon from "@/svg/YoutubeIcon";
import InstagramIcon from "@/svg/InstagramIcon";
import MailIcon from "@/svg/MailIcon";

const data = {
  address: "539 West Commerce Street #3433 Dallas Texas 75208",
  email: "consulting@astric.com",
  socialLinks: {
    facebook: "https://www.facebook.com/astric.co/",
    instagram: "https://www.instagram.com/astric.co/",
    Youtube: "https://www.youtube.com/@goastric",
  },
  timings: "Mon - Fri: 8:00 am - 5:00 pm",
};

function TopNav() {
  return (
    <nav className="bg-orange w-full">
      <div className="mx-auto py-2 px-12 lg:px-12 hidden sm:px-8 lg:flex justify-center items-center max-w-[100vw] ">
        <div className="container  flex  justify-between items-center w-[80%]">
          <div className="flex items-center gap-x-8">
            <div className="text-white max-w-[50%] text-[9px] flex items-center gap-x-2">
              <AddressIcon />
              {data.address}
            </div>
            <div className="text-white text-[10px] flex items-center gap-x-2">
              <MailIcon />
              {data.email}
            </div>
          </div>

          <div className="flex items-center gap-x-8">
            <div className="text-white text-[10px] flex items-center gap-x-2">
              <ClockIcon />
              {data.timings}
            </div>
            <div className="text-white text-xs">
              {" "}
              <div className="flex">
                <a
                  href={data.socialLinks.facebook}
                  className="text-white hover:text-blue-500"
                >
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon />
                </a>
                <a
                  href={data.socialLinks.instagram}
                  className="ml-4 text-white hover:text-blue-500"
                >
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon />
                </a>
                <a
                  href={data.socialLinks.Youtube}
                  className="ml-4 text-white hover:text-blue-500"
                >
                  <span className="sr-only">Youtube</span>
                  <YoutubeIcon nav-sections />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
