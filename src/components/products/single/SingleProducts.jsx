import { useParams } from "react-router-dom"
import { allProdEnd, baseUrl } from "../../../api/api_url";

const SingleProducts = () => {
    let {prodId}=useParams();
    let api=baseUrl+allProdEnd+'/'+prodId;

  return (
    <div>
        <h2>Id of the product: {prodId}</h2>
    </div>
  )
}

export default SingleProducts