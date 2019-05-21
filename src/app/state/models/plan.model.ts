import { Group } from './group.model';

export interface Plan {
  id: number;
  semester: string;
  year: number;
  group: Group;
}
