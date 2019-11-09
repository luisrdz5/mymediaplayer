import gravatar from '../gravatar';

describe('Gravatar function', () => {
  it('Should return gravatar default url', () => {
    const email = 'luis@bueno.com';
    const gravatarDefaultImage = 'https://gravatar.com/avatar/71c395100a4865088634385dd3be07c3';
    expect(gravatar(email)).toEqual(gravatarDefaultImage);
  });
});
