// src/services/NursingServices.ts
import type { Folder } from "../interfaces/ComputerStudies";
import AxiosInstance from "./AxiosInstances";

const NursingServices = {
  // GET all folders
  loadFolders: async (): Promise<Folder[]> => {
    const response = await AxiosInstance.get<Folder[]>("/nursingfolders");
    return response.data;
  },

  // POST new folder
  storeFolder: async (data: { folderName: string; description?: string }): Promise<Folder> => {
    const response = await AxiosInstance.post<Folder>("/nursingfolders", data);
    return response.data;
  },

  // PUT update folder
  updateFolder: async (
    id: number | string,
    data: { folderName: string; description?: string }
  ): Promise<Folder> => {
    const response = await AxiosInstance.put<Folder>(`/nursingfolders/${id}`, data);
    return response.data;
  },

  // DELETE folder
  destroyFolder: async (id: number | string): Promise<{ message: string }> => {
    const response = await AxiosInstance.delete<{ message: string }>(`/nursingfolders/${id}`);
    return response.data;
  },
};

export default NursingServices;


