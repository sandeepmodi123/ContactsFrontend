export interface IContact {
  id?: number,
  firstName: string,
  lastName: string,
  email: string
}

export interface IContactSearch {
  searchItem: string,
  isSortAscending: boolean,
  sortBy: string
}
