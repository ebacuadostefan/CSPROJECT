// src/services/DepartmentServices.ts
import AxiosInstance from "./AxiosInstances";

export interface Department {
  id: number;
  image: string;
  name: string;
  alias?: string;
}

const DepartmentServices = {
  // GET all departments
  loadDepartments: async (): Promise<Department[]> => {
    const response = await AxiosInstance.get("/departments");
    return response.data;
  },

  // POST create new department
  storeDepartment: async (department: FormData): Promise<Department> => {
  const response = await AxiosInstance.post("/departments", department, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
},

  // PUT update department
  updateDepartment: async (id: number, department: Partial<Department>): Promise<Department> => {
    const response = await AxiosInstance.put(`/departments/${id}`, department);
    return response.data;
  },

  // DELETE department
  destroyDepartment: async (id: number): Promise<void> => {
    await AxiosInstance.delete(`/departments/${id}`);
  },
};

export default DepartmentServices;
