import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
/**
 * Fetches cabin data from the API.
 */

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, error, cabins };
}
