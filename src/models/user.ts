export default interface User {
  id: string;
  name: string;
  avatarURL: string;
  answers: { [key: string]: string };
  questions: string[];
}
