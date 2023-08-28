import { SearchBar, Banner } from "@components";

import { banner } from "@constants";

export default async function Home() {
  return (
    <main className='overflow-hidden'>
      <Banner 
        content={banner}
      />

      <div className='mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Catálogo de conteúdo</h1>
          <p>Explore conteúdo que você pode gostar</p>
          <SearchBar />
        </div>
      </div>
    </main>
  );
}
