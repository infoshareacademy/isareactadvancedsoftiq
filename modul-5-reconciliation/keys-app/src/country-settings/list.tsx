import React, { useEffect, useState } from "react";
import { Country } from "./types";
import orderBy from "lodash/orderBy";

type CountriesListProps = {
  countries: Country[];
};

const Item = ({
  country,
  logPrefix
}: {
  country: Country;
  logPrefix: string;
}) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    console.log(`MOUNT: ${logPrefix}`);
  }, [logPrefix]);

  console.log(`RENDER: ${logPrefix}`);

  return (
    <button
      className={`country-item ${isActive ? "active" : ""}`}
      onClick={() => setIsActive(!isActive)}
    >
      <img
        src={country.flagUrl}
        width={70}
        style={{ marginRight: "8px" }}
        alt={country.name}
      />
      {country.name}
    </button>
  );
};

const ItemMemo = React.memo(Item);

const ListItemsWithIndex = ({ countries }: CountriesListProps) => {
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  // sort countries base on state value with lodash orderBy function
  const sortedCountries = orderBy(countries, "name", sort);

  // add button that toggles state between 'asc' and 'desc'
  const button = (
    <button onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
      toggle sorting: {sort}
    </button>
  );

  return (
    <>
      <h3>List with index in "key"</h3>
      {button}
      {sortedCountries.map((country, index) => (
        <ItemMemo country={country} key={index} logPrefix="index" />
      ))}
    </>
  );
};

const ListItemsWithId = ({ countries }: CountriesListProps) => {
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  // sort countries base on state value with lodash orderBy function
  const sortedCountries = orderBy(countries, "name", sort);

  // add button that toggles state between 'asc' and 'desc'
  const button = (
    <button onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
      toggle sorting: {sort}
    </button>
  );

  return (
    <>
      <h3>List with id in "key"</h3>
      {button}
      {sortedCountries.map((country, index) => (
        <ItemMemo country={country} key={country.id} logPrefix="id" />
      ))}
    </>
  );
};

export const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <>
      <div className="countries-list">
        <div>
          <ListItemsWithId countries={countries} />
        </div>
        <div>
          <ListItemsWithIndex countries={countries} />
        </div>
      </div>
    </>
  );
};
