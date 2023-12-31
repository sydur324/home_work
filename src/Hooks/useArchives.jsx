import { useQuery } from "@tanstack/react-query";


const useArchives = () => {
    const {data: archives=[],refetch} =useQuery({
        queryKey:['archives'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/archives')
            return res.json()
        }
    })
    return [archives,refetch]
};
export default useArchives;