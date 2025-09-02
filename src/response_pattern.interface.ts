export interface ResponsePattern<T> {
  success: boolean;
  message: string;
  content: T | null;
}
