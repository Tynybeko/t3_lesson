import React from 'react'
import { useParams } from 'react-router'

export default function SingleProduct() {
    const params = useParams()

    console.log('PARMAS', params);
  return (
    <div>SingleProduct


        <hr />
        <h1>{params.params}</h1>
    </div>
  )
}
