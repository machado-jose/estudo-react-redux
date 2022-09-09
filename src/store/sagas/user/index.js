import * as types from './../../types';
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getUserSuccess, getUserFailure } from './../../actions';

let userApi;

const userRequest = async (name) => {
  try {
    const request = await fetch(`https://api.github.com/users/${name}`);
    const response = await request.json();
    userApi = response
    return true;
  } catch(error) {
    return false;
  }
}

export function* userData(action) {
  try {
    yield call(userRequest, action.payload);
    yield put(getUserSuccess(userApi));
  } catch(error) {
    yield put(getUserFailure('Falha na requisição'));
  }
}

export default all([takeLatest(types.GET_USER_REQUEST, userData)]);

