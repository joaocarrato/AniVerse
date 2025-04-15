function filterListByUniqueId<T extends {id: string | number}>(listToFilter: {
  data: T[];
}): T[] {
  return listToFilter.data.filter(
    (item, index, self) =>
      index === self.findIndex(other => other.id === item.id),
  );
}

export const filterList = {filterListByUniqueId};
