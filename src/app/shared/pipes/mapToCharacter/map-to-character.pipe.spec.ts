import { MapToCharacterPipe } from './map-to-character.pipe';

describe('MapToCharacterPipe', () => {
  it('create an instance', () => {
    const pipe = new MapToCharacterPipe({} as any);
    expect(pipe).toBeTruthy();
  });
});
