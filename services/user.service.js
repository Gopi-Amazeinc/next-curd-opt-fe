import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { fetchWrap } from "../helpers/fetch-wrap";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
// const baseUrl = `${publicRuntimeConfig.apiUrl}`;
const userSubject = new BehaviorSubject(

  process.browser 
  // typeof window === 'undefined'
  && JSON.parse(localStorage.getItem("user"))
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  getAll,
};

function login(username, password) {
  return fetchWrap
  // .get(`${baseUrl}/Master/GetMyDetailsForLogin?EmailID=${username}&Password=${password}&roletype=${roleID}`)
    .post(`${baseUrl}/authenticate`, { username, password })
    // `Master/GetMyDetailsForLogin?EmailID=${data.Username}&Password=${data.Password}&roletype=${data.RoleID}`
    .then((user) => {
      // publish user with basic auth credentials to subscribers and store in
      // local storage to stay logged in between page refreshes
      user.authdata = window.btoa(username + ":" + password);
      userSubject.next(user);
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    });
}

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/login");
}

function getAll() {
  return fetchWrap.get(baseUrl);
}
