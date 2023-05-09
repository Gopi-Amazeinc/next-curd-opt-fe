// import { apiUrl } from 'config';
import getConfig from "next/config";
import { fetchWrapper } from "../helpers/fetch-wrapper";

const { publicRuntimeConfig } = getConfig();
// const apiUrl = `${publicRuntimeConfig.apiUrl}`;

export const usercurdService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetchWrapper.post(baseUrl, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}