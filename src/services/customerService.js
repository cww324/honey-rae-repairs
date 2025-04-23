export const getCustomerByUserId = (userId) => {
    return fetch(`http://127.0.0.1:8088/customers?userId=${userId}&_expand=user`).then((res) => res.json())

}


