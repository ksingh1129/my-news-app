import { CustomDatePipe } from './custom-date.pipe';
import * as moment from 'moment';

describe('CustomDatePipe', () => {

  it('create an instance', () => {
    const pipe = new CustomDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return string value', () => {
    const pipe = new CustomDatePipe();
    const currentDate = new Date();
    expect(pipe.transform(currentDate)).toEqual(jasmine.any(String));
  });

  it('return collect time', () => {
    const pipe = new CustomDatePipe();
    const currentDate = new Date();
    const expectedDateString = moment(currentDate).fromNow();
    expect(pipe.transform(currentDate)).toEqual(expectedDateString);
  });
  
});
