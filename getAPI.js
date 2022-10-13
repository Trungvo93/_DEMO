
import axios from "axios";
const API = 'https://6336e43665d1e8ef26758c9c.mockapi.io/user';
//Show data theo mảng
// async function getData() {
//     try {
//         const res = await axios.get(API);
//         console.log(res.data);
//     } catch (e) {
//         console.log("Có lỗi: ", e);
//     }
// }
// getData();

const getData = async () => {
    try {
        const request = await axios.get(API);
        console.log(request)
    } catch (e) {
        console.log("Có lỗi: ", e)
    }
}

getData();