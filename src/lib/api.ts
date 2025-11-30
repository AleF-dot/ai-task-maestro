const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('Missing API URL environment variable');
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface TaskFeedback {
  taskId: string;
  completed: boolean;
  timeSpent?: number;
  difficulty?: number;
  satisfaction?: number;
}

export const api = {
  chat: {
    send: async (messages: ChatMessage[]) => {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
      });
      if (!response.ok) throw new Error('Chat request failed');
      return response.json();
    },
  },
  
  tasks: {
    sendFeedback: async (feedback: TaskFeedback) => {
      const response = await fetch(`${API_URL}/tasks/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback),
      });
      if (!response.ok) throw new Error('Feedback request failed');
      return response.json();
    },
    
    reorganize: async (changes: any) => {
      const response = await fetch(`${API_URL}/tasks/reorganize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(changes),
      });
      if (!response.ok) throw new Error('Reorganize request failed');
      return response.json();
    },
  },
};
