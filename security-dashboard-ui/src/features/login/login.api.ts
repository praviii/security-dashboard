import api from "@/common/axios";

export async function login(data : { email : string,password : string }) : Promise<{ token: string; }>{
    const res = await api.post<{token : string}>('/login',data);
    return res.data;
}