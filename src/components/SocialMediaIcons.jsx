const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/MShackford"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="https://i.ibb.co/syTHxsw/pngegg-8.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/mb_shack"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="https://i.ibb.co/XZ4ywhQ/pngegg-9.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/MalloryShackford"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="https://i.ibb.co/6NNRz9W/pngegg-6.png" />
      </a>
     
    </div>
  );
};

export default SocialMediaIcons;