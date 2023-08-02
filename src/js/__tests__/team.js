import { Character, Team } from '../..';

describe('Team class', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test('Add a character to the team', () => {
    const character1 = new Character('A');
    team.add(character1);
    expect(team.members.size).toBe(1);
    expect(Array.from(team.members)).toContain(character1);
  });

  test('Add the same character twice should throw an error', () => {
    const character1 = new Character('A');
    team.add(character1);
    expect(() => team.add(character1)).toThrow(Error);
    expect(team.members.size).toBe(1);
  });

  test('Add multiple characters to the team', () => {
    const character1 = new Character('A');
    const character2 = new Character('B');
    const character3 = new Character('C');

    team.addAll(character1, character2, character3);

    expect(team.members.size).toBe(3);
    expect(Array.from(team.members)).toEqual(expect.arrayContaining([character1, character2, character3]));
  });

  test('Adding duplicate characters using addAll should not add duplicates', () => {
    const character1 = new Character('A');
    const character2 = new Character('B');
    team.addAll(character1, character2, character1); // Adding character1 twice

    expect(team.members.size).toBe(2);
    expect(Array.from(team.members)).toEqual(expect.arrayContaining([character1, character2]));
  });

  test('Converting team members to an array', () => {
    const character1 = new Character('A');
    const character2 = new Character('B');
    team.addAll(character1, character2);

    const teamArray = team.toArray();
    expect(Array.isArray(teamArray)).toBe(true);
    expect(teamArray.length).toBe(2);
    expect(teamArray).toEqual(expect.arrayContaining([character1, character2]));
  });
});
