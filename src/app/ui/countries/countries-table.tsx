import { fetchCountries } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const countries = await fetchCountries();

  return (
    <div className="mt-6 flow-root w-[80%] border border-red-50 self-center">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-700 p-2 md:pt-0">
          <div className="md:hidden">
            {countries?.map((country) => (
              <div
                key={country.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p className="text-sm text-gray-500">{country.name}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{country.abbreviation}</p>
                  <p className="text-sm text-gray-500">{country.capital}</p>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-50 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Country
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Abbrevation
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Capital
                </th>
                {/* <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th> */}
                {/* <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th> */}
              </tr>
            </thead>
            <tbody className="bg-gray-700">
              {countries?.map((country) => (
                <tr
                  key={country.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={country.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${country.name}'s profile picture`}
                      /> */}
                      <p>{country.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {country.abbreviation}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {country.capital}
                  </td>
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(country.capital)}
                  </td> */}
                  {/* <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(country.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={country.status} />
                  </td> */}
                  {/* <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={country.id} />
                      <DeleteInvoice id={country.id} />
                    </div>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
