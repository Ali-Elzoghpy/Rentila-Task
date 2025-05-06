export const baseURL = "http://localhost:3001/"

export const Properties_EndPoints = {
  getAllProperties: (pageNumber) =>
    `properties?_page=${pageNumber}&_limit=10`
}
export const Tenants_EndPoints = {
  getAllTenants: (pageNumber) => `tenants?_page=${pageNumber}&_limit=10`,
  getTenantDetails: (id) => `tenants/${id}`,
  EditTenant: (id) => `tenants/${id}`

}
export const pagination_EndPoints = {
  getPagination: "pagination",

}