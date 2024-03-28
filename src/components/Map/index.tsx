import React, { ReactNode } from 'react';


type props = {
  url:string
}
export const Map = ({url}:props) => {
  
  return <iframe
  src={url}
  width="250"
  height="200"
  style={{ border: 0 }}
  loading="lazy"
></iframe>
};