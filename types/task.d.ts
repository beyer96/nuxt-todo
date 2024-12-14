export interface Task {
  id: number;
  name: string;
  description: string | null;
  completed: boolean;
  createdAt: string;
}
