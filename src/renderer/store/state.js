const state = {
    wallets: [],
    currentWallet: null,
    balances: [],
    assets: [],
    apiServers: [{
        url: 'ws://192.168.1.126:28099',
        location: '',
        latency: 0
    }, {
        url: 'wss://node1.gxb.io',
        location: '华东',
        latency: 0
    }, {
        url: 'wss://node5.gxb.io',
        location: '华北',
        latency: 0
    }],
    currentApiServer: {}
}

state.currentApiServer = state.apiServers[0]

export default state
