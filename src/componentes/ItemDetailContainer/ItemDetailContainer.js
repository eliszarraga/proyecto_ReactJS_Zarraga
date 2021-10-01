import React, { useState, useEffect, useContext } from "react";
import { ItemDetail } from "./ItemDetail.js";
import { useParams } from "react-router-dom";
import { UIContext } from "../../context/UIContext.js";
import { getFirestore } from "../../firebase/config";

export const ItemDetailContainer = () => {

  const {loading, setLoading} = useContext(UIContext);

  const { itemId } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore()
    const items = db.collection('items')
    const item = items.doc(itemId)

    item.get()
        .then((doc) => {
        setItem({...doc.data(), id: doc.id})
        })
        .finally(() => {setLoading(false)});

  }, [itemId, setLoading]);

  return (
    <div>
      {loading ? <h2>Cargando...</h2> : item && <ItemDetail {...item} />}
    </div>
  );
};
