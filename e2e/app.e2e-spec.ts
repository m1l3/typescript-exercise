import { ExercisePage } from './app.po';

describe('exercise App', () => {
  let page: ExercisePage;

  beforeEach(() => {
    page = new ExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
