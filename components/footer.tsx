import styles from "../styles/style";
import icontest from "../public/img/instagram.svg";
import { footerLinks, socialMedia } from "../constants/constants";
import Image from 'next/image'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col pl-8 pr-8`}>
    <div className="text-black w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-black">
        Copyright Ⓒ 2023 by Jerry Zhu
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            width={21}
            height={21}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
