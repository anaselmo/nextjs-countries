import React from 'react';
import Table from '@ui/countries/countries-table';
import { Metadata } from 'next';
import Search from '@/app/ui/search';

export const metadata: Metadata = {
  title: "Countries"
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col border border-red-500">
      <div className="flex py-10 justify-center items-center border border-red-500">
        <Search placeholder="Search countries..."/>
      </div>
      <div className="flex flex-1 justify-center items-center border border-red-500">
        <Table query='query' currentPage={1}/>
      </div>
      <div className="justify-center items-center border border-red-500">Country Pages</div>
    </main>
  );
}
