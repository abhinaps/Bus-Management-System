import axios from "axios"

const OPERATOR_API_BASE_URL = "http://localhost:8080/operator/"
class OperatorService {

    getBookingListByOperator(operator) {
        return axios.get(OPERATOR_API_BASE_URL + `getBookingByOperator?operator=${operator}`)
    }

}

export default new OperatorService()