import React from "react"


export const LinkCard = ({ link }) => {
return (
    <div>
      <h2>Ссылка</h2>
     <p>Ваша ссылка: <a href={link.to} target="blank" rel="noopener noreferrer">{link.to}</a></p>
      <p>Откуда: <a href={link.from} target="blank" rel="noopener noreferrer">{link.from}</a></p>
      <p>Колличество кликов по ссылке: <strong>{link.clicks}</strong></p>
      <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </div>
   )
}
 