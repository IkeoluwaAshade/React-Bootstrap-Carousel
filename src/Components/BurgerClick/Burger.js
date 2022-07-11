import React from 'react'
import './Burger.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillBookFill} from 'react-icons/bs'
import {AiFillContacts} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GiCancel} from 'react-icons/gi'


const Burger = () => {
  return (
    <div className='mainBurger'>
      
      <div className='Navigation'>
        <div>
           <AiTwotoneHome />
            <span>Home</span>
        </div>

        <div className='Navigation'>
          <BsFillBookFill />
          <span>About</span>
        </div>

        <div className='Navigation'>  
          <AiFillContacts />
          <span>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default Burger