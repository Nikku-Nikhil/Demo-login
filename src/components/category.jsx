import * as React from "react";

function MyComponent() {
  return (
    <>
      <div className="flex flex-col max-w-xl text-base text-black rounded-none">
        <div className="flex flex-col items-start px-10 py-12 w-full bg-white rounded-3xl border border-solid border-stone-300 max-md:px-5 max-md:max-w-full">
          <div className="self-center text-3xl font-semibold text-center text-black max-md:max-w-full">
            Please mark your interests!
          </div>
          <div className="self-center mt-6 leading-loose">
            We will keep you notified.
          </div>
          <div className="flex shrink-0 self-stretch h-px bg-gray-200 max-md:max-w-full" />
          <div className="mt-9 ml-5 text-xl font-medium leading-tight max-md:ml-2.5">
            My saved interests!
          </div>
          <div className="flex gap-3 mt-7 ml-5 leading-loose whitespace-nowrap max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aac4d50fba7eaf91a9797008aa02d50b2b23ab188c8de660cc7e60ada2421250?placeholderIfAbsent=true&apiKey=686ff5188c7041aab3e5ffcf40773996"
              className="object-contain shrink-0 self-start w-6 rounded-none aspect-square"
            />
            <div>Shoes</div>
          </div>
          <div className="flex gap-3 mt-6 ml-5 leading-loose max-md:ml-2.5">
            <div className="flex shrink-0 self-start w-6 h-6 rounded bg-stone-300" />
            <div>Men T-shirts</div>
          </div>
          <div className="flex gap-3 mt-6 ml-5 leading-loose whitespace-nowrap max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aac4d50fba7eaf91a9797008aa02d50b2b23ab188c8de660cc7e60ada2421250?placeholderIfAbsent=true&apiKey=686ff5188c7041aab3e5ffcf40773996"
              className="object-contain shrink-0 self-start w-6 rounded-none aspect-square"
            />
            <div>Makeup</div>
          </div>
          <div className="flex gap-3 mt-7 ml-5 leading-loose whitespace-nowrap max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aac4d50fba7eaf91a9797008aa02d50b2b23ab188c8de660cc7e60ada2421250?placeholderIfAbsent=true&apiKey=686ff5188c7041aab3e5ffcf40773996"
              className="object-contain shrink-0 self-start w-6 rounded-none aspect-square"
            />
            <div>Jewellery</div>
          </div>
          <div className="flex gap-3 mt-6 ml-5 leading-loose max-md:ml-2.5">
            <div className="flex shrink-0 self-start w-6 h-6 rounded bg-stone-300" />
            <div className="basis-auto">Women T-shirts</div>
          </div>
          <div className="flex gap-3 mt-6 ml-5 leading-loose whitespace-nowrap max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/aac4d50fba7eaf91a9797008aa02d50b2b23ab188c8de660cc7e60ada2421250?placeholderIfAbsent=true&apiKey=686ff5188c7041aab3e5ffcf40773996"
              className="object-contain shrink-0 self-start w-6 rounded-none aspect-square"
            />
            <div>Furniture</div>
          </div>
          <div className="self-center mt-20 ml-4 text-xl font-medium leading-tight text-neutral-400 max-md:mt-10">
            &lt;&lt; &lt; 1 2 3 <span className="text-black">4</span> 5 6 7 ...
            &gt; &gt;&gt;
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
