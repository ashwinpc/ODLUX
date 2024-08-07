class ApiService {
    static async fetchMessage(): Promise<{ message: string }> {
      const response = await fetch('http://localhost:3000/api/message');
      if (!response.ok) {
        throw new Error('Failed to fetch message');
      }
      return response.json();
    }
  
    static async fetchNumber(): Promise<{ number: number }> {
      const response = await fetch('http://localhost:3000/api/number');
      if (!response.ok) {
        throw new Error('Failed to fetch number');
      }
      return response.json();
    }
  }
  
  export default ApiService;
  