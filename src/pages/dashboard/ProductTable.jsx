import React, { useEffect, useState } from "react";
import ActionIcon from "../../components/ActionIcon";
import SpinnerLoad from "../../components/SpinnerLoad";
import { getFewerProductsService, toggleNotificationService } from "../../services/products";
import { Alert } from "../../utils/alerts";

const ProductTable = () => {
  
  const [fewerProducts, setFewerProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const handleGetFewerProducts = async ()=>{
    setLoading(true)
    const res = await getFewerProductsService();
    setLoading(false)
    if (res.status == 200) {
      const products = res.data.data
      products.length > 0 ? setFewerProducts(products) : setFewerProducts([])
    }
  }

  const handleTurnoffNotification = async (productId)=>{
    const res = await toggleNotificationService(productId);
    if (res.status == 200) {
      Alert('انجام شد', res.data.message, 'success');
      setFewerProducts(old=>old.filter(p=>p.id != productId));
    }
  }

  useEffect(()=>{
    handleGetFewerProducts()
  },[])
  return (
    <div className="col-12 col-lg-6">
      <p className="text-center mt-3 text-dark">محصولات رو به اتمام</p>
      {loading ? (<SpinnerLoad colorClass={"text-primary"}/>) 
      : fewerProducts.length === 0 
      ? (
        <strong className="text-primary">فعلا محصول رو به اتمامی وجود ندارد</strong>
      ) 
      : (
        <table className="table table-responsive text-center table-hover table-bordered no_shadow_back_table font_08">
          <thead className="table-secondary">
            <tr>
              <th>#</th>
              <th>دسته</th>
              <th>عنوان</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {
              fewerProducts.map(p=>(
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.categories[0]?.title}</td>
                <td>{p.title}</td>
                <td>{p.stock === 0 ? (
                  <span className="text-danger">پایان یافته</span>
                ) : `رو به اتمام : (${p.stock})` }</td>
                <td>
                  <ActionIcon icon="fas fa-eye-slash text-danger" pTitle="update_product_notification" title="نادیده گرفتن"
                  onClick={()=>handleTurnoffNotification(p.id)}
                  />
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductTable;
