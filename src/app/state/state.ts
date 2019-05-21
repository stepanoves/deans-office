import {
  Subject,
  Teacher,
  Department,
  Misses,
  Filters,
  Group,
  Student,
  Notes,
  Plan,
  PlanSubject,
  Journal
} from './models';

export interface State {
  readonly misses: Misses[];
  readonly notes: Notes[];
  readonly groupPlans: Plan[];
  readonly selectedMisses: Misses[];
  readonly selectedNotes: Notes[];
  readonly planSubjects: PlanSubject[];
  readonly selectedPlanSubjects: PlanSubject[];
  readonly filters: Filters;
  readonly journal: Journal;
  readonly groups: Group[];
  readonly departments: Department[];
  readonly students: Student[];
  readonly teachers: Teacher[];
  readonly subjects: Subject[];
  readonly headerMenuVisible: boolean;
  readonly authError: Error;
}

export const initialState: State = {
  notes: [],
  selectedNotes: [],
  misses: [],
  selectedMisses: [],
  groupPlans: [],
  planSubjects: [],
  selectedPlanSubjects: [],
  filters: null,
  groups: [],
  departments: [],
  students: [],
  teachers: [],
  subjects: [],
  journal: null,
  headerMenuVisible: true,
  authError: null,
};
