import React from 'react'
import { useRouter } from 'next/router';

const Edit = () => {
const router = useRouter();
const {query:{id}} = router;
return (

    <p>{id}</p>
)
}
export default Edit