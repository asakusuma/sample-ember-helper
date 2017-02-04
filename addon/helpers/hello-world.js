import Ember from 'ember';

export function helloWorld() {
  return 'hello world!';
}

export default Ember.Helper.helper(helloWorld);
