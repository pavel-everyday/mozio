import { IOption } from '../models/Option';
import { ISuggest } from '../models/Suggest.interface';

const MOCK_DATA = [
  ['Paris', 48.856614, 2.352222],
  ['Marseille', 43.296482, 5.36978],
  ['Lyon', 45.764043, 4.835659],
  ['Toulouse', 43.604652, 1.444209],
  ['Nice', 43.710173, 7.261953],
  ['Nantes', 47.218371, -1.553621],
  ['Strasbourg', 48.573405, 7.752111],
  ['Montpellier', 43.610769, 3.876716],
  ['Bordeaux', 44.837789, -0.57918],
  ['Lille', 50.62925, 3.057256],
  ['Rennes', 48.117266, -1.677793],
  ['Reims', 49.258329, 4.031696],
  ['Le Havre', 49.49437, 0.107929],
  ['Saint-Étienne', 45.439695, 4.387178],
  ['Toulon', 43.124228, 5.928],
  ['Angers', 47.478419, -0.563166],
  ['Grenoble', 45.188529, 5.724524],
  ['Dijon', 47.322047, 5.04148],
  ['Nîmes', 43.836699, 4.360054],
  ['Aix-en-Provence', 43.529742, 5.447427],
];

// MOCK SERVICE REALIZATION
export class CitySuggest implements ISuggest {
  waitingPromises = 0;
  result: IOption[];
  delay = 0;
  timer: ReturnType<typeof setTimeout>;

  setDelay(ms: number) {
    this.delay = ms;
  }

  suggest(substring: string) {
    const result = MOCK_DATA.reduce<IOption[]>((res, current) => {
      const value = current[0] as string;

      if (value.includes(substring)) {
        res.push({
          id: value,
          label: value,
        });
      }
      return res;
    }, []);

    this.waitingPromises++;

    return new Promise<IOption[]>((resolve, reject) => {
      setTimeout(() => {
        this.waitingPromises--;

        if (this.waitingPromises === 0) {
          resolve(result);
        } else {
          reject(new Error('have a newer request'));
        }
      }, this.delay);
    });
  }
}
