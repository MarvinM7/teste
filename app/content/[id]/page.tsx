'use client';

import { useEffect, useState } from "react";
import Image from "next/image";

import { content } from "@constants";
import { ContentType } from "@types";

const Content = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const [loading, setLoading] = useState<boolean>(true);
  const [content2, setContent2] = useState<ContentType>();

  useEffect(() => {
    setContent2(content.find((item) => item.id === id));
    setLoading(false);
  }, []);

  return (
    <div className='min-h-screen flex-1 flex-row flex justify-center items-center'>
      <div className='flex-1 flex-col flex justify-center items-center pt-36 sm:px-16 px-6 max-w-[1440px] gap-4'>
      {loading ? (
          <div>Carregando...</div>
        ) : (
          <>
            <div className="flex-1 flex-row w-full max-w-[1440px]">
              <h1 className='text-4xl font-extrabold flex'>{content2?.title}</h1>
            </div>
            <Image
              alt='Imagem'
              height={550}
              src={content2?.link ?? ''}
              width={1440}
            />
            <p>{content2?.description}</p>
            <div className="flex-1 flex-row w-full max-w-[1440px]">
              <p>Gênero principal: {content2?.mainGenre}</p>
            </div>
            <div className="flex-1 flex-row w-full max-w-[1440px]">
              <p>Gêneros: {content2?.genre?.join(', ')}</p>
            </div>
            <div className="flex-1 flex-row w-full max-w-[1440px]">
              <p>Status: {content2?.status}</p>
            </div>
            <div className="flex-1 flex-row w-full max-w-[1440px]">
              <p>Ano: {content2?.year}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Content;