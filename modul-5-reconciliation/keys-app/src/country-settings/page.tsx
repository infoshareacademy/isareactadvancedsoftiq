import { Country } from "./types";
import { CountriesList } from "./list";

export const Page = ({ countries }: { countries: Country[] }) => {
  return (
    <>
      <div className="content">
        <CountriesList countries={countries} />
      </div>
    </>
  );
};
