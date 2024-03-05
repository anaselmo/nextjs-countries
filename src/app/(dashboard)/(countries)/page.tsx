import React from 'react';
import Table from '@ui/countries/table-countries';
import { Metadata } from 'next';
import Search from '@/app/ui/search';
import Pagination from '@/app/ui/pagination';
import { fetchCountryPages } from '@/app/lib/data';

export const metadata: Metadata = {
  title: "Countries"
};

export default async function Page ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query ?? '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCountryPages(query);
  
  return (
    <main className="flex flex-1 flex-col ">
      <div className="flex py-5 w-1/2 self-center justify-center items-center">
        <Search placeholder="Search countries..."/>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Table query={query} currentPage={currentPage}/>
      </div>
      <div className="flex py-5 justify-center items-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
