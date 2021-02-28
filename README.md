# EZ WALLET

EZ (Easy) Wallet is an application that provides a transfer feature between users. This is the frontend service for this app. You can see the backend service [here](https://github.com/RZID/EZWallet-Backend/tree/dev).

### Modules
- [vuex](https://www.npmjs.com/package/vuex)
- [axios](https://www.npmjs.com/package/axios)
- [moment](https://www.npmjs.com/package/moment)
- [sweetalert2](https://www.npmjs.com/package/sweetalert2)
- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [bootstrap-vue](https://www.npmjs.com/package/bootstrap-vue)

---

### How To Use
1. Clone this repository with git clone https://github.com/RZID/EZWallet-Frontend.
2. Run ```npm install``` to install modules required.
3. Set .env file in root:
4. PORT = fill to set the API running port.
```
VUE_APP_BACKEND= http://localhost:PORT

example PORT use 3000, 4000, or 4001 (this is just example)
```
5. Compiles and hot-reloads for development
```
npm run serve
```

6. Compiles and minifies for production
```
npm run build
```

7. Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
