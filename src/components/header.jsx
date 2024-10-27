import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="flex flex-col pb-4 bg-white">
        <div className="flex flex-col justify-center items-end px-16 py-3 w-full text-xs bg-white text-zinc-800 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 items-center">
            <div className="z-10 self-stretch my-auto whitespace-nowrap w-[27px]">
              Help
            </div>
            <div className="z-10 self-stretch my-auto w-[97px]">
              Orders & Returns
            </div>
            <div className="z-10 self-stretch text-right w-[46px]">
              Hi, John
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start self-center mt-2 w-full max-w-[1360px] max-md:max-w-full">
          <div className="self-stretch text-3xl font-bold text-black">
            ECOMMERCE
          </div>
          <div className="flex gap-8 mt-4 text-base font-semibold text-black">
            <div className="grow">Categories</div>
            <div>Sale</div>
            <div>Clearance</div>
            <div>New stock</div>
            <div>Trending</div>
          </div>
          <div className="flex gap-8 mt-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9f44306bbd0e51cef956764fb35d9e4b335c6ceedf4ac4305b4a39d615e8c5b?placeholderIfAbsent=true&apiKey=686ff5188c7041aab3e5ffcf40773996"
              className="object-contain shrink-0 w-8 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b5a1d1ea050cd8214a3c6b75f35155739321540846412f1523e93187ba89f96?placeholderIfAbsent=true&apiKey=686ff5188c7041aab3e5ffcf40773996"
              className="object-contain shrink-0 w-8 aspect-square"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </>
  );
}
