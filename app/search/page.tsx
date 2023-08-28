'use client';
 
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Pagination from '@components/Pagination';
import { searchContent } from '@constants';
import Card from '@components/Card';

import { SearchContentType } from '@types';
import { SearchBar } from '@components';

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const term = searchParams.get('term') ?? '';
  
  const [loading, setLoading] = useState<boolean>(true);
  const [contents, setContents] = useState<SearchContentType[]>([]);

  const nextPage = () => {
    router.push(`/search?term=${term}&page=${+page + 1}`);
  }

  const previousPage = () => {
    router.push(`/search?term=${term}&page=${+page - 1}`);
  };

  const goToContent = (id: string) => {
    router.push(`/content/${id}`);
  }

  useEffect(() => {
    setContents(searchContent);
    setLoading(false);
  }, []);

  return (
    <div className='min-h-screen flex-1 flex-row flex justify-center items-center'>
      <div className='flex-1 flex-col flex justify-center items-center pt-36 sm:px-16 px-6 max-w-[1440px]'>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <>
            <SearchBar
              text={term}
            />
            {contents.map((item) => {
              return (
                <Card key={item.id}
                  description={item.description}
                  handleClick={goToContent}
                  id={item.id}
                  title={item.title}
                  type={item.type}
                />
              )
            })}
            <Pagination
              nextPage={nextPage}
              page={page}
              previousPage={previousPage}
              showNextPage={contents?.length > 0}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default SearchPage;