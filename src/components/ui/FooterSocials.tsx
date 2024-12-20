import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import SocialIcon from "./SocialIcon";

function FooterSocials() {
  return (
    <>
      <SocialIcon size="sm" href="">
        <InstagramIcon />
      </SocialIcon>
      <SocialIcon size="sm" href="">
        <LinkedinIcon />
      </SocialIcon>
      <SocialIcon size="sm" href="">
        <div className=" size-full flex justify-center items-center [&>svg]:hover:stroke-sky-50 [&>svg]:stroke-[#737373] transition-all duration-200">
          <PhoneIcon />
        </div>
      </SocialIcon>
      <SocialIcon size="sm" href="">
        <MailIcon />
      </SocialIcon>
    </>
  );
}

export default FooterSocials;
