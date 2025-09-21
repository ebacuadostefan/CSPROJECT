export interface Folder {
  id: number;
  folderName: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface FileItem {
  id: number;
  folder_id: number;
  fileName: string;
  filePath: string;
  fileType?: string;
  fileSize?: number;
  created_at?: string;
  updated_at?: string;
}
