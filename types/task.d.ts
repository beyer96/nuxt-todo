export interface Task {
  id: number;
  name: string;
  description: string | null;
  completed: boolean;
  createdAt: string;
}

export interface DeleteTaskResponse {
  ok: boolean;
  status: string;
  statusCode: number;
  message: string;
  data?: any;
  error?: any;
}
