import axios from "axios";

const ADMIN_API_BASE_URL = "http://localhost:8080/admin/"

class AdminService {

    login(username, password) {
        axios.post(ADMIN_API_BASE_URL + "adminLogin", { username, password }).then((res) => { console.log(res.data); })
    }

    addCustomer(customer) {
        axios.post(ADMIN_API_BASE_URL + "addCustomer", { id: customer.id, name: customer.name, phone: customer.phone }).then((res) => { console.log(res.data); })
    }

    addOperator(operator) {
        axios.post(ADMIN_API_BASE_URL + "addOperator", { id: operator.id, name: operator.name, phone: operator.phone }).then((res) => { console.log(res.data); })
    }

    deleteCustomer(id) {
        axios.delete(ADMIN_API_BASE_URL + `deleteCustomer?id=${id}`).then((res) => { console.log(res.status) })

    }

    deleteOperator(id) {
        axios.delete(ADMIN_API_BASE_URL + `deleteOperator?id=${id}`).then((res) => { console.log(res.status) })
    }

}

export default new AdminService()