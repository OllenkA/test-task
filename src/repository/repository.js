export const repository = {
    _usernameKey: 'articles/username',
    _tokenKey: 'articles/token',

    async saveToken(token) {
        localStorage.setItem(this._tokenKey, token);
    },
    async loadToken() {
        return localStorage.getItem(this._tokenKey);
    },
    async saveUserName(username) {
        return localStorage.setItem(this._usernameKey, username)
    },
    async loadUserName() {
        return localStorage.getItem(this._usernameKey)
    },
    async clearAll() {
        localStorage.setItem(this._tokenKey, null);
        localStorage.setItem(this._usernameKey, null);
    }
};
