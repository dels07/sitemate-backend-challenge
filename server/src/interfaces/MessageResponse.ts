import { type Issue } from "../api/issues/model";

export default interface MessageResponse {
  message: string;
  data?: Issue[] | Issue | null;
}
