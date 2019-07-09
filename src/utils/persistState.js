
function persistState(state, appId) {
    try
    {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(appId, serializedState);
    }
    catch (e)
    {
        console.error('ERROR: persist store', e.message)
    }
}

function autoPersistState(store, appId) {
    store.subscribe(() => {
        persistState(store.getState(), appId)
    })
}

function loadState(appId) {
    try
    {
        const loadedState = localStorage.getItem(appId);
        return loadedState && JSON.parse(loadedState);
    }
    catch (e)
    {
        return undefined
    }
}

export {
    loadState,
    autoPersistState,
}