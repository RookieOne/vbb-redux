import expect from 'expect';
import mockPromises from 'mock-promises';
import configureStore from 'configure-store';
import { Provider } from 'react-redux';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { renderToStaticMarkup } from 'react-dom/server';
import cheerio from 'cheerio';

export function setup() {
  Promise = mockPromises.getMockPromise(Promise); // no-native-reassign
  const promises = [];
  const mocks = {};

  return {
    renderedComponent: null,
    mockApi(ApiObject, methodName, result) {
      const promise = new Promise((resolve) => {
        resolve(result);
      });
      const mock = expect.spyOn(ApiObject, methodName).andReturn(promise);
      mocks[methodName] = mock;
      promises.push(promise);

      return mock;
    },
    executePromises() {
      mockPromises.executeForPromises(promises);
    },
    expectApiCall(ApiObject, methodName) {
      const mock = mocks[methodName];
      expect(mock).toHaveBeenCalled();
    },
    findForm(Form) {
      const form = TestUtils.scryRenderedComponentsWithType(this.renderedComponent, Form);
      if (form.length === 0) {
        throw new Error(`Could not find redux form - ${Form}`);
      }
      return form[0];
    },
    setOnForm(Form, name, value) {
      const form = this.findForm(Form);
      const input = form.refs[name];
      if (input === undefined) {
        throw new Error(`Could not find input '${name}' on form '${Form.name}'`)
      }
      const node = input.refs.input;
      TestUtils.Simulate.change(node, { target: { value } });
    },
    submit(Form) {
      const form = this.findForm(Form);
      form.props.handleSubmit();
    },
    getState() {
      return this.store.getState();
    },
    renderHTML() {
      return cheerio.load(renderToStaticMarkup(this.wrappedComponent));
    },
    render(Component) {
      this.store = configureStore({});
      const wrappedComponent = (<Provider store={this.store}>
        {Component}
      </Provider>);
      this.wrappedComponent = wrappedComponent;
      this.renderedComponent = TestUtils.renderIntoDocument(wrappedComponent);
    },
    findComponent(Component) {
      return TestUtils.scryRenderedComponentsWithType(this.renderedComponent, Component);
    },
    findComponents(Component) {
      return TestUtils.scryRenderedComponentsWithType(this.renderedComponent, Component);
    },
    findDOMWithClass(className) {
      return TestUtils.findRenderedDOMComponentWithClass(this.renderedComponent, className);
    },
  };
}
