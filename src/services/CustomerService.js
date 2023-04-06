import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8080/customer/"
const ADMIN_API_BASE_URL = "http://localhost:8080/admin/"

class CustomerService {

    getAllBus() {
        return axios.get(CUSTOMER_API_BASE_URL + "getAllBus")
    }

    getBusBySrcAndDst(src, dst) {
        return axios.get(CUSTOMER_API_BASE_URL + `getBusBetweenSrcAndDst?src=${src}&dst=${dst}`)
    }

    async bookTicket(customer, booking) {
        const id = await axios.get(CUSTOMER_API_BASE_URL + "getNextId").then((res) => res.data)
        await axios.post(ADMIN_API_BASE_URL + "addCustomer", { id, name: customer.name, phone: customer.phone }).then((res) => { console.log(res.data); })
        await axios.post(CUSTOMER_API_BASE_URL + "bookTicket", { bid: booking.bid, cId: id, seat: booking.seat, dob: booking.dob }).then((res) => { console.log(res.data); })
    }

    viewMyBooking(name, phone) {
        return axios.get(CUSTOMER_API_BASE_URL + `viewMyBooking?name=${name}&phone=${phone}`)
    }

    async cancelTicket(bid, cid) {
        await axios.delete(CUSTOMER_API_BASE_URL + "cancelBooking", { data: { bid: bid, cid: cid } }).then((res) => { console.log(res.data) })
    }

}

export default new CustomerService();