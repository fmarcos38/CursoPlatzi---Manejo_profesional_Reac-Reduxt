//arch q desarrollamos 2 tipos de middleware

/* NO los utilizo  */

//muestra por consola en navegador
export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

//agrega un nuevo elemnt al store
export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'eddie' }, ...actionInfo.action.payload];
    const updatedActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
    };
    next(updatedActionInfo);
};