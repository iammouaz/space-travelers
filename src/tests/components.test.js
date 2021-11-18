import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import MissionReducer from '../redux/missions';

// Components
import Profile from '../components/Profile';
import Missions from '../components/Missions';
import Nav from '../components/Nav';

describe('Components Matches', () => {
  it('Mission Components Matches', () => {
    const profile = renderer
      .create(<Provider store={store}><Profile /></Provider>)
      .toJSON();
    expect(profile).toMatchSnapshot();
  });
  it('Missions Components Matches', () => {
    const missions = renderer
      .create(<Provider store={store}><Missions /></Provider>)
      .toJSON();
    expect(missions).toMatchSnapshot();
  });
  test('Check the initialState of the reducer', () => {
    expect(MissionReducer(undefined, {})).toEqual([]);
  });
});

describe('Test Nav renderisation', () => {
  test('Nav', () => {
    const nav = renderer
      .create(<BrowserRouter><Nav /></BrowserRouter>)
      .toJSON();
    expect(nav).toMatchSnapshot();
  });
});
