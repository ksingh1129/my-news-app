import { DefaultImageDirective } from './default-image.directive';

describe('DefaultImageDirective', () => {
  it('should create an instance', () => {
    const directive = new DefaultImageDirective();
    expect(directive).toBeTruthy();
  });

  it('should return default image url when the url is null', () => {
    const directive = new DefaultImageDirective();

    const expectedUrl = 'http://lamp.oja.go.th/medianewsIMG/default-image.png';

    expect(directive.checkPath(null)).toEqual(expectedUrl);
  });

  it('should return image url', () => {
    const directive = new DefaultImageDirective();
    const imageUrl = 'https://media.geeksforgeeks.org/wp-content/uploads/20190719161411/cat1-225x300.jpg';
    expect(directive.checkPath(imageUrl)).toEqual(imageUrl);
  })

  it('should return default image url when error', () => {
    const directive = new DefaultImageDirective();
    const errorImageUrl = 'xxx';
    const expectedUrl = 'http://lamp.oja.go.th/medianewsIMG/default-image.png';

    directive.src = errorImageUrl;
    directive.onError();

    expect(directive.src).toEqual(expectedUrl)
  });

});
