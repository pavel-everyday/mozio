import { IOption } from './Option';

export interface ISuggest {
  suggest(substring: string): Promise<IOption[] | null>;
}
