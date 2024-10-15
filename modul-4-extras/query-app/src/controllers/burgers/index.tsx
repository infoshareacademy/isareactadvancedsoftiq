import { useSuspenseQuery } from "@tanstack/react-query";
import { getBurgers } from "../../services/burgers";
import { Burger } from "../../common/types";

export const useQueryBurger = () => {
  const data = useSuspenseQuery<Burger[], Error>({
    queryKey: ["burgers"],
    queryFn: getBurgers,
    staleTime: 5000,
  });

  return data;
};
