import { $http } from './http';

export async function login(data) {
    const body = {
        username: data.username,
        password: data.password,
    };
    const result = await $http('POST', '/login', { body });
    return result;
}

export async function logout() {
    try {
        await $http('GET', '/logout');
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}