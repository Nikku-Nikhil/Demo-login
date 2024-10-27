import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="flex overflow-hidden flex-col bg-white rounded">
        <div className="flex flex-col pb-4 w-full bg-white max-md:max-w-full">
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
        <div className="flex flex-col justify-center items-center px-16 py-2.5 w-full text-sm font-medium text-black bg-zinc-100 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-6 items-start max-w-full w-[290px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d0e43c6157dac81b4659d4a258ab52a17e6f73251e43b1bd0dd27e644dbdd6e?placeholderIfAbsent=true&apiKey=686ff5188c7041aab3e5ffcf40773996"
              className="object-contain shrink-0 w-4 aspect-square"
            />
            <div className="grow shrink self-stretch w-[211px]">
              Get 10% off on business sign up
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff3effd7635170030964f3361bea79472b59f0f6634371170e446c93b7552c9e?placeholderIfAbsent=true&apiKey=686ff5188c7041aab3e5ffcf40773996"
              className="object-contain shrink-0 w-4 aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col self-center px-16 pt-10 pb-32 mt-10 max-w-full text-base bg-white rounded-3xl border border-solid border-stone-300 w-[576px] max-md:px-5 max-md:pb-24">
          <div className="self-center text-3xl font-semibold text-black">
            Create your account
          </div>
          <div className="self-start mt-8 text-black">Name</div>
          <div className="flex flex-col mt-2 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:max-w-full">
            <div className="px-4 py-4 bg-white rounded-md border border-solid border-stone-300 max-md:pr-5 max-md:max-w-full">
              Enter
            </div>
          </div>
          <div className="self-start mt-8 text-black">Email</div>
          <div className="px-4 py-4 mt-2 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:pr-5 max-md:max-w-full">
            Enter
          </div>
          <div className="self-start mt-8 text-black">Password</div>
          <div className="px-4 py-4 mt-2 whitespace-nowrap bg-white rounded-md border border-solid border-stone-300 text-zinc-500 max-md:pr-5 max-md:max-w-full">
            Enter
          </div>
          <div className="overflow-hidden gap-2.5 self-stretch px-36 py-5 mt-10 font-medium tracking-wider text-center text-white uppercase bg-black rounded-md border border-black border-solid min-h-[56px] max-md:px-5">
            Create account
          </div>
          <div className="flex gap-3 self-center mt-12 mb-0 max-w-full w-[202px] max-md:mt-10 max-md:mb-2.5">
            <div className="grow text-zinc-800">Have an Account? </div>
            <div className="self-start font-medium tracking-wider text-black uppercase whitespace-nowrap">
              Login
            </div>
          </div>
        </div>
        <div className="flex mt-8 w-full min-h-0 border border-red-500 border-dashed max-md:max-w-full" />
      </div>
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </>
  );
}
