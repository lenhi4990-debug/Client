import axios from "axios";
import { getHeaderGlobal } from "@/utils/getHeaderGlobal";

const headers = getHeaderGlobal();
const createApi = (baseURL: string) => axios.create({ baseURL, headers: headers, });


const infrastructureApi = createApi(import.meta.env.VITE_API_URL_infrastructure);
const payrollApi = createApi(import.meta.env.VITEAPIURLPayroll); 
const leaveApi = createApi(import.meta.env.VITEAPIURLLeave);  
const staffingApi = createApi(import.meta.env.VITEAPIURLStaffing); 
 export { infrastructureApi, payrollApi, leaveApi, staffingApi, };