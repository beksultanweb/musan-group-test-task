export const addRequestAction = (uploadObj: Object) => {

    return {
        type: 'request/add',
        payload: uploadObj
    }
}