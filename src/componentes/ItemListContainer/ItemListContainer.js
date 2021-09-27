import React, { useContext, useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { UIContext } from "../../context/UIContext";
import { getFirestore } from "../../firebase/config";

export const ItemListContainer = () => {
  const { loading, setLoading } = useContext(UIContext);
  const { catId } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const items = db.collection("items");

    if (catId) {
      const filter = items.where("category", "==", catId);
      filter
        .get()
        .then((response) => {
          const data = response.docs.map((doc) => ({
            ...doc.data(), id: doc.id,
          }));
          console.log(data);
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      items
        .get()
        .then((response) => {
          const data = response.docs.map((doc) => ({
            ...doc.data(), id: doc.id,
          }));
          console.log(data);
          setData(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [catId, setLoading]);

  return <>{loading ? <h2>Cargando...</h2> : <ItemList productos={data} />}</>;
};
