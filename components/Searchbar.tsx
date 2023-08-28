"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdSearch } from 'react-icons/md';

import { Button, Input } from "@components";

import { SearchBarProps } from "@types";

const SearchBar = ({text = ''}: SearchBarProps) => {
  const router = useRouter();

  const [term, setTerm] = useState<string>(text);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (term === '') {
      return alert('O campo não pode ser vazio.')
    }

    router.push(`/search?term=${term}&page=1`);
  };

  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4' onSubmit={handleSearch}>
      <div className='flex-1 max-sm:w-full flex gap-2 justify-start items-center relative'>
        <Input
          onChange={setTerm}
          placeholder='Buscar...'
          type='text'
          value={term}
        />
        <Button
          icon={<MdSearch size={24} />}
          type="submit"
        />
      </div>
    </form>
  );
};

export default SearchBar;
