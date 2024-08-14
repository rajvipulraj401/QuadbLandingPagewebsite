import React from "react";

function NewPersonal() {
  const styleCol1 = {
    borderTop: "2px solid transparent",
    borderLeft: "2px solid transparent",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0) 0%, rgba(234, 225, 138, 0) 30.99%, rgba(198, 188, 99, 0) 64.16%, rgba(224, 211, 94, 0.1) 100%)",
    borderImageSlice: 1,
  };

  const styleCol2 = {
    border: "2px solid",
    borderBottom: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.1) 0%, rgba(234, 225, 138, 0.2) 30.99%, rgba(198, 188, 99, 0) 64.16%, rgba(224, 211, 94, 0) 100%)",
    borderImageSlice: 1,
  };

  const styleCol3 = {
    border: "2px solid",
    borderBottom: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.05) 0%, rgba(234, 225, 138, 0.1) 30.99%, rgba(198, 188, 99, 0.1) 64.16%, rgba(224, 211, 94, 0.3) 100%)",
    borderImageSlice: 1,
  };

  const styleCol4 = {
    border: "2px solid",
    borderLeft: "none",
    borderBottom: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.1) 0%, rgba(234, 225, 138, 0.2) 30.99%, rgba(198, 188, 99, 0.2) 64.16%, rgba(224, 211, 94, 0.2) 100%)",
    borderImageSlice: 1,
  };

  const styleCol5 = {
    border: "2px solid",
    borderLeft: "none",
    borderBottom: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.2) 0%, rgba(234, 225, 138, 0) 30.99%, rgba(198, 188, 99, 0.05) 64.16%, rgba(224, 211, 94, 0) 100%)",
    borderImageSlice: 1,
  };

  const styleCol6 = {
    border: "2px solid",
    borderBottom: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.2) 0%, rgba(234, 225, 138, 0.2) 30.99%, #C6BC63 64.16%, rgba(224, 211, 94, 0.2) 100%)",
    borderImageSlice: 1,
  };

  const styleCol7 = {
    border: "2px solid",
    borderBottom: "none",
    borderLeft: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.4) 0%, rgba(234, 225, 138, 0.5) 30.99%, rgba(198, 188, 99, 0.5) 64.16%, #E0D35E 100%)",
    borderImageSlice: 1,
  };

  const styleCol8 = {
    border: "2px solid",
    borderLeft: "none",
    borderBottom: "none",
    borderRight: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.7) 0%, rgba(234, 225, 138, 0.2) 30.99%, #C6BC63 64.16%, rgba(224, 211, 94, 0.2) 100%)",
    borderImageSlice: 1,
  };

  const styleCol9 = {
    border: "2px solid",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.2) 0%, rgba(234, 225, 138, 0.5) 30.99%, rgba(198, 188, 99, 0.3) 64.16%, rgba(224, 211, 94, 0.4) 100%)",
    borderImageSlice: 1,
  };

  const styleCol10 = {
    border: "2px solid",
    borderLeft: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.2) 0%, rgba(234, 225, 138, 0.5) 30.99%, rgba(198, 188, 99, 0.5) 64.16%, #E0D35E 100%)",
    borderImageSlice: 1,
  };

  const styleCol11 = {
    border: "2px solid",
    borderLeft: "none",
    borderRight: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.2) 0%, rgba(234, 225, 138, 0.4) 30.99%, rgba(198, 188, 99, 0.2) 64.16%, rgba(224, 211, 94, 0.2) 100%)",
    borderImageSlice: 1,
  };

  const styleCol12 = {
    border: "2px solid",
    borderRight: "none",
    borderTop: "none",
    borderImageSource:
      "linear-gradient(103.65deg, rgba(232, 227, 187, 0.1) 0%, rgba(234, 225, 138, 0.1) 30.99%, rgba(198, 188, 99, 0) 64.16%, rgba(224, 211, 94, 0.5) 100%)",
    borderImageSlice: 1,
  };

  const styleCol13 = {
    border: "2px solid",
    borderTop: "none",
    borderRight: "none",
    borderImageSource:
      "linear-gradient(103.65deg, #E0D35E 0%, rgba(234, 225, 138, 0.1) 30.99%, rgba(198, 188, 99, 0.1) 64.16%, rgba(224, 211, 94, 0.1) 100%)",
    borderImageSlice: 1,
  };

  const styleText = {
    background: "linear-gradient(90deg, #F0F600 20.65%, #00A8AA 45.96%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <div className="mt-12 text-white max-w-[1700px] mx-auto">
      <div className="w-full  sm:pb-[10px] flex flex-col items-center justify-center text-white mb-24">
        <div className="flex flex-col items-center w-full px-4 md:px-0">
          <h3 className="font-nephilm  sm:pb-5 text-[23px] md:text-5xl font-normal  leading-[67.2px] tracking-[0.02em] text-center">
            driven by <span className="text-yellow-500"> data </span>fueled by
            <span className="text-green-500"> passion.</span>
            <div className="relative border-t border-white w-3/4 mt-4 mx-auto">
              <div className="absolute w-2 h-2 top-[-5px] left-0 bg-white rounded-full" />
              <div className="absolute w-2 h-2 top-[-5px] right-0 bg-white rounded-full" />
            </div>
          </h3>
          <h2 className="font-proxima text-2xl md:text-5xl sm:pb-3 pt-3 font-bold leading-[67.2px] tracking-[0.02em] text-center">
            Personalized Services
          </h2>
          <p
            id="blogs"
            className="font-proxima font-normal leading-6 text-center  sm:text-center text-base md:text-lg w-full md:w-[60%] mt-4"
          >
            As a Digi-Tech services provider, we work with brands all across the
            globe including agencies and traditional companies, serving as their
            digital marketing and solutions vendor.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 font-poppins mb-20">
        <div className="col-span-6" style={styleCol1}></div>

        <div className="col-span-6" style={styleCol2}>
          <div className="p-4">
            <p className="text-[8px] sm0:text-[11px] sm:text-[13px] leading-[12px] sm0:leading-[14px] sm:leading-[17px] font-normal">
              Branding and
            </p>
            <h1
              className="leading-[22.5px] sm0:leading-[27px] sm:leading-[32px] mb-1 text-[15px] sm0:text-[18px] sm:text-[20px] font-semibold"
              style={styleText}
            >
              Creative
            </h1>
            <p className="leading-[10.5px] sm0:leading-[12px] sm:leading-[14px] text-[7px] sm0:text-[9px] sm:text-[11px] font-normal">
              A brand is so much more than a logo or a color. It’s how people
              feel and perceive your business, its products, and services. We
              aim to create brands that leave impressions that last for a
              lifetime.
            </p>
          </div>
        </div>

        <div className="col-span-3" style={styleCol3}></div>

        <div className="col-span-5" style={styleCol4}>
          <div className="p-4">
            <p className="text-[8px] sm0:text-[11px] sm:text-[13px] leading-[12px] sm0:leading-[14px] sm:leading-[17px] font-normal">
              Wordpress
            </p>
            <h1
              className="leading-[22.5px] sm0:leading-[27px] sm:leading-[32px] mb-1 text-[15px] sm0:text-[18px] sm:text-[20px] font-semibold"
              style={styleText}
            >
              Development
            </h1>
            <p className="leading-[10.5px] sm0:leading-[12px] sm:leading-[14px] text-[7px] sm0:text-[9px] sm:text-[11px] font-normal">
              Beautiful and smooth wordpress websites with support for thousands
              of plugins and themes. Our Wordpress developers build websites
              with easy-to-use UI and navigation. Give your customers the User
              Experience they deserve.
            </p>
          </div>
        </div>
        <div className="col-span-4" style={styleCol5}></div>
        <div className="col-span-5" style={styleCol6}>
          <div className="p-4">
            <p className="text-[8px] sm0:text-[11px] sm:text-[13px] leading-[12px] sm0:leading-[14px] sm:leading-[17px] font-normal">
              Wordpress
            </p>
            <h1
              className="leading-[22.5px] sm0:leading-[27px] sm:leading-[32px] mb-1 text-[15px] sm0:text-[18px] sm:text-[20px] font-semibold"
              style={styleText}
            >
              Designing
            </h1>
            <p className="leading-[10.5px] sm0:leading-[12px] sm:leading-[14px] text-[7px] sm0:text-[9px] sm:text-[11px] font-normal">
              Connect with your visitors with creative & professionally designed
              websites. Make a good first impression with fast and responsive
              design. Consult with our web designers for insights on building
              original and aesthetic websites.
            </p>
          </div>
        </div>
        <div className="col-span-2" style={styleCol7}></div>
        <div className="col-span-5" style={styleCol8}>
          <div className="p-4">
            <p className="text-[8px] sm0:text-[11px] sm:text-[13px] leading-[12px] sm0:leading-[14px] sm:leading-[17px] font-normal">
              Web App
            </p>
            <h1
              className="leading-[22.5px] sm0:leading-[27px] sm:leading-[32px] mb-1 text-[15px] sm0:text-[18px] sm:text-[20px] font-semibold"
              style={styleText}
            >
              Development
            </h1>
            <p className="leading-[10.5px] sm0:leading-[12px] sm:leading-[14px] text-[7px] sm0:text-[9px] sm:text-[11px] font-normal">
              Increase user engagement and amplify your conversion rate. Complex
              CMS websites to intricately deployed web applications, all your
              needs fulfilled under a single umbrella. Fuss-free websites with
              minimum maintenance, and maximum business value.
            </p>
          </div>
        </div>
        <div className="col-span-2" style={styleCol9}></div>
        <div className="col-span-6" style={styleCol10}>
          <div className="p-4">
            <p className="text-[8px] sm0:text-[11px] sm:text-[13px] leading-[12px] sm0:leading-[14px] sm:leading-[17px] font-normal">
              Shopify
            </p>
            <h1
              className="leading-[22.5px] sm0:leading-[27px] sm:leading-[32px] mb-1 text-[15px] sm0:text-[18px] sm:text-[20px] font-semibold"
              style={styleText}
            >
              Development
            </h1>
            <p className="leading-[10.5px] sm0:leading-[12px] sm:leading-[14px] text-[7px] sm0:text-[9px] sm:text-[11px] font-normal">
              Consult Shopify Developers to create, design and run your own
              e-commerce store. Leave the heavy-lifting to the experts, and come
              back to a professional customized store. Because everyone loves a
              well-built shopping store.
            </p>
          </div>
        </div>
        <div className="col-span-4" style={styleCol11}></div>
        <div className="col-span-7" style={styleCol12}>
          <div className="p-4">
            <p className="text-[8px] sm0:text-[11px] sm:text-[13px] leading-[12px] sm0:leading-[14px] sm:leading-[17px] font-normal">
              PHP
            </p>
            <h1
              className="leading-[22.5px] sm0:leading-[27px] sm:leading-[32px] mb-1 text-[15px] sm0:text-[18px] sm:text-[20px] font-semibold"
              style={styleText}
            >
              Development
            </h1>
            <p className="leading-[10.5px] sm0:leading-[12px] sm:leading-[14px] text-[7px] sm0:text-[9px] sm:text-[11px] font-normal">
              Take full control of your website and make use of our PHP
              development expertise. Exclusive solutions built by keeping your
              domain needs in mind. Our diverse portfolio includes projects
              completed using result oriented techniques.
            </p>
          </div>
        </div>
        <div className="col-span-5" style={styleCol13}></div>
      </div>
    </div>
  );
}

export default NewPersonal;
