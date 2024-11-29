import React from 'react'

function Page({params}: {params: {id: string}}) {
  return (
    <div>page: {params.id}</div>
  )
}

export default Page;