import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";

export default function SocialMedia() {
  return (
    <div className="flex justify-center items-center">
      <Link href="https://www.linkedin.com/in/rbarbosam/">
        <FaLinkedin color="#9FF9CC" size={24} />
      </Link>
      <Link href="https://github.com/renatokhael">
        <FaGithub color="#9FF9CC" size={24} />
      </Link>
      <Link href="https://x.com/renatokhael_dev">
        <FaTwitter color="#9FF9CC" size={24} />
      </Link>
      <Link href="https://www.instagram.com/khael.code/">
        <FaInstagram color="#9FF9CC" size={24} />
      </Link>
    </div>
  );
}
