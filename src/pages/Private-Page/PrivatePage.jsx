import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const PrivatePage = ({currentUser}) => {
  return (
    <div>
      <Navbar user={currentUser}/>
      <div className='flex flex-col justify-center items-center'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit autem culpa ipsa vero ut delectus, possimus ab reprehenderit? Voluptates error saepe nihil eius consequuntur dicta obcaecati laboriosam voluptatem, minima a non, dolorum quae ab ullam deleniti velit eum repellat vel earum ipsam aliquam temporibus expedita!</p>
    </div>
    </div>
  )
}

export default PrivatePage
