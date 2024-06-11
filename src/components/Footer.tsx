const Footer = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <p>Don&apos;t miss out!</p>
        <p>
          Be the first to know about new products, sales, and exclusive offers.
        </p>
      </div>
      <div>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
        </div>

    </div>
  );
};

export default Footer;
