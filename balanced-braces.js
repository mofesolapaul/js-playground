"use strict";

// Problem statement: Implement the isBalanced() function to take a string 
// containing only curly {}, square [], and round () parentheses. 
// The function should tell us if all the parentheses in the string are balanced. 
// This means that every opening parenthesis will have a closing one. 
// For example, {[]} is balanced, but {[}] is not.

const app = (() => {  
  return {
    isBalanced: input => {
      const isInputValid = input.match(/^[\[\]\{\}\(\)]+$/g);
      if (!isInputValid) throw new Error('Only braces allowed as input');
      if (input.length % 2) return false;
      
      const map = new Map();
      map.set('}', '{');
      map.set(']', '[');
      map.set(')', '(');
      
      const stack = [];
      for (const character of input) {
        map.has(character) ? stack.pop(): stack.push(character);
      }
      
      return !stack.length;
    },
  };
})();

const tests = (() => {
  const { expect } = require('chai');
  
  const testsToRun = {
    isBalancedShouldAcceptOnlyBraces() {
      expect(app.isBalanced.bind(app, '{[(a)]}')).to.throw();
    },
    unevenInputLengthShouldFail() {
      expect(app.isBalanced('{([)}')).to.be.false;
    },
    isBalancedWorks() {
      const braces = '{([](()){}{})}{}[]()';
      expect(app.isBalanced(braces)).to.be.true;
      const weirdBraces = '{([](()){}{})}{}[[()';
      expect(app.isBalanced(weirdBraces)).to.be.false;
    },
  };
  
  return {
    run: () => {
      Object.entries(testsToRun).forEach(([, test]) => test());
    }
  };
})();

tests.run();

